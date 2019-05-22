import _uniq from 'lodash/uniq';
import _difference from 'lodash/difference';

import allModifiers from './allModifiers';
import allModifiersDetails from './allModifiersDetails';
import allModifiersSymbols, { allVariants as allModifiersVariants } from './allModifiersSymbols';
import { variantsToNotes, allVariants as allNotesVariants } from './allNotes';
import intervalsToSemitones from './intervalsToSemitones';

export default function parseChord(input) {
	const includedIntervals = ['1'];
	const omittedIntervals = [];
	const givenModifiers = [];

	const chord = parseBasic(input);

	if (chord) {
		if (chord.descriptor) {
			chord.parsableDescriptor = getParsableDescriptor(chord.descriptor);

			const descriptorRegex = new RegExp(allModifiersVariants.map(escapeRegex).join('|'), 'g');
			const descriptorMatches = chord.parsableDescriptor.match(descriptorRegex);

			let remainingChars = chord.parsableDescriptor;
			let modifierId;
			let modifierDetail;

			if (descriptorMatches) {
				descriptorMatches.forEach(match => {
					modifierId = allModifiersSymbols[match];
					modifierDetail = allModifiersDetails[modifierId];

					includedIntervals.push(...(modifierDetail.includes || []));
					omittedIntervals.push(...(modifierDetail.omit || []));
					givenModifiers.push(modifierId);

					remainingChars = remainingChars.replace(match, '');
				});
			}

			if (givenModifiers.length === 0 || remainingChars.trim().length > 0) {
				return null;
			}
		}
		// add implied intervals for major chord
		if (shouldAdd3(includedIntervals, givenModifiers)) {
			includedIntervals.push('3'); //fixme: I should be a constant?
		}
		if (shouldAdd5(includedIntervals)) {
			includedIntervals.push('5');
		}
		// apply 11th specific rules
		if (shouldAdd4(givenModifiers)) {
			includedIntervals.push('4');
			omittedIntervals.push('b3', '3');
		}
		if (shouldRemove11(givenModifiers)) {
			omittedIntervals.push('11');
		}

		const finalIntervals = _uniq(_difference(includedIntervals, omittedIntervals))
			.sort((a, b) => (stripAccidentals(a) - stripAccidentals(b)));

		chord.modifiers = givenModifiers;
		chord.intervals = finalIntervals;
		chord.semitones = finalIntervals
			.map(degree => intervalsToSemitones[degree])
			.sort((a, b) => (a - b));
	}
	return chord;
}


function parseBasic(input) {
	const notesRegex = allNotesVariants.join('|');
	const notesAndDescriptorRegex = new RegExp(
		'^'
		+ '(' + notesRegex + ')'
		+ '(.*?)'
		+ '(\/(' + notesRegex + '))?'
		+ '$'
	);
	const result = input.match(notesAndDescriptorRegex);

	let chord = null;
	if (result && result[1]) {
		chord = {
			input,
			rootNote: variantsToNotes[result[1]]
		};
		if (result[2]) {
			chord.descriptor = result[2];
		}
		if (result[4]) {
			chord.bassNote = variantsToNotes[result[4]];
		}
	}
	return chord;
}

function getParsableDescriptor(descriptor) {
	const allFilters = [
		toLowerCaseExceptMajorM,
		removeSpaces,
		addDisambiguators,
		addMissingVerbs,
	];

	return allFilters.reduce((parsableDescriptor, filter) => {
		return filter(parsableDescriptor);
	}, descriptor);
}

function toLowerCaseExceptMajorM(descriptor) {
	return descriptor
		.replace(/[A-LN-Za-z]+/g, match => match.toLowerCase())
		.replace('oMit', 'omit')
		.replace('diM', 'dim')
		.replace('augMented', 'augmented')
	;
}

function removeSpaces(descriptor) {
	return descriptor.replace(/ /g, '');
}

function addDisambiguators(descriptor) {
	return descriptor
		.replace(/(7?dim)add/g, '$1 add')
		.replace(/([m|M])add/g, '$1 add')
		.replace(/i(no[3|5])/g, 'i $1')
		.replace(/([b|♭|#|♯]9)6/g, '$1 6')
		.replace(/(9\/?6)/g, ' $1')
	;
}

function addMissingVerbs(descriptor) {
	let allTokensWithVerbs;
	let currentVerb;
	let hasVerb;

	return descriptor.replace(/\((.*?)\)/g, (match, parenthesis) => {
		allTokensWithVerbs = [];
		currentVerb = '';

		parenthesis
			.split(',')
			.forEach(token => {
				hasVerb = true;
				if (token.startsWith('add')) {
					currentVerb = 'add';
				} else if (token.startsWith('omit')) {
					currentVerb = 'omit';
				} else if (token.startsWith('no')) {
					currentVerb = 'no';
				} else {
					hasVerb = false;
				}
				if (hasVerb) {
					allTokensWithVerbs.push(token);
				} else {
					allTokensWithVerbs.push(currentVerb + token);
				}
			});
		return ' ' + allTokensWithVerbs.join(' ') + ' ';
	});
}

function stripAccidentals(input) {
	return input.replace('b', '').replace('#', '');
}

function shouldAdd3(includedIntervals, givenModifiers) {
	return !includedIntervals.includes('b3')
		&& !includedIntervals.includes('3')
		&& !givenModifiers.includes(allModifiers.sus)
		&& !givenModifiers.includes(allModifiers.sus2);
}

function shouldAdd4(givenModifiers) {
	return hasMajorIntent(givenModifiers)
		&& (
			givenModifiers.includes(allModifiers.dom11)
			|| givenModifiers.includes(allModifiers.ma11)
		);
}

function shouldAdd5(includedIntervals) {
	return !includedIntervals.includes('b5')
		&& !includedIntervals.includes('5')
		&& !includedIntervals.includes('#5');
}

//
function shouldRemove11(givenModifiers) {
	return hasMajorIntent(givenModifiers)
		&& (
			givenModifiers.includes(allModifiers.dom11)
			|| givenModifiers.includes(allModifiers.ma11)
			|| givenModifiers.includes(allModifiers.dom13)
			|| givenModifiers.includes(allModifiers.ma13)
		);
}

function hasMajorIntent(givenModifiers) {
	return !givenModifiers.includes(allModifiers.mi)
		&& !givenModifiers.includes(allModifiers.dim)
		&& !givenModifiers.includes(allModifiers.dim7)
		&& !givenModifiers.includes(allModifiers.halfDim);
}

// Based on https://stackoverflow.com/a/6969486
function escapeRegex(string) {
	return string.replace(/[.\-*+?^${}()|[\]\\]/g, '\\$&');
}
