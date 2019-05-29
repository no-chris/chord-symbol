import _uniq from 'lodash/uniq';

import m from './allModifiers';
import allModifiersSymbols, { allVariants as allModifiersVariants } from './allModifiersSymbols';
import { variantsToNotes, allVariants as allNotesVariants } from './allNotes';
import intervalsToSemitones from './intervalsToSemitones';
import { hasNoneOf, hasOneOf, hasAll } from './renderer/helpers/hasInterval';


/**
 * @typedef {Object} Chord
 * @type {Object}
 * @property {String} rootNote
 * @property {String} [bassNote]
 * @property {String[]} intervals
 * @property {Number[]} semitones
 * @property {String[]} modifiers
 * @property {String} descriptor
 * @property {String} parsableDescriptor
 * @property {String} [normalizedDescriptor]
 * @property {String} [normalizedDescriptor.quality]
 * @property {String[]} [normalizedDescriptor.changes] - alterations, added and omitted notes
 */


/**
 * @param {String} input
 * @returns {Chord|Null}
 */
export default function parseChord(input) {
	const givenModifiers = [];

	const chord = parseBasic(input);

	if (chord) {
		if (chord.descriptor) {
			chord.parsableDescriptor = getParsableDescriptor(chord.descriptor);

			const descriptorRegex = new RegExp(allModifiersVariants.map(escapeRegex).join('|'), 'g');
			const descriptorMatches = chord.parsableDescriptor.match(descriptorRegex);

			let remainingChars = chord.parsableDescriptor;
			let modifierId;

			if (descriptorMatches) {
				descriptorMatches.forEach(match => {
					modifierId = allModifiersSymbols[match];
					givenModifiers.push(modifierId);

					remainingChars = remainingChars.replace(match, '');
				});
			}

			if (givenModifiers.length === 0 || remainingChars.trim().length > 0) {
				return null;
			}
		}


		const intervals = _uniq(getIntervals(givenModifiers))
			.sort((a, b) => (intervalsToSemitones[a] - intervalsToSemitones[b]));

		chord.modifiers = givenModifiers;
		chord.intervals = intervals;
		chord.semitones = intervals
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

function getIntervals(allModifiers) {
	if (allModifiers.includes(m.power)) {
		return ['1', '5'];

	} else if (allModifiers.includes(m.bass)) {
		return ['1'];
	}

	return [
		'1',
		...getThird(allModifiers),
		...getFourth(allModifiers),
		...getFifths(allModifiers),
		...getSixth(allModifiers),
		...getSevenths(allModifiers),
		...getNinths(allModifiers),
		...getElevenths(allModifiers),
		...getThirteenths(allModifiers),
	];
}

function getThird(allModifiers) {
	const third = [];
	if (allModifiers.includes(m.omit3)) {
		return [];
	}
	if (!hasOneOf(allModifiers, [m.sus, m.sus2])) {
		if (!hasMajorIntent(allModifiers)) {
			third.push('b3');
		} else if (!allModifiers.includes(m.eleventh)) {
			third.push('3');
		}
	}
	if (allModifiers.includes(m.add3)) {
		third.push('3');
	}
	return third;
}

function getFourth(allModifiers) {
	const fourth = [];
	if (hasOneOf(allModifiers, [m.sus, m.add4]) || (allModifiers.includes(m.eleventh) && hasMajorIntent(allModifiers))) {
		fourth.push('4');
	}
	return fourth;
}

function getFifths(allModifiers) {
	const fifths = [];
	if (allModifiers.includes(m.omit5)) {
		return [];
	}
	if (hasOneOf(allModifiers, [m.dim, m.halfDim, m.fifthFlat])) {
		fifths.push('b5');
	}
	if (hasOneOf(allModifiers, [m.aug, m.fifthSharp])) {
		fifths.push('#5');
	}
	if (!fifths.length && !allModifiers.includes(m.thirteenthFlat)) {
		fifths.push('5');
	}
	return fifths;
}

function getSixth(allModifiers) {
	const sixth = [];
	if (hasOneOf(allModifiers, [m.add6, m.add69]) && !allModifiers.includes[m.seventh]) {
		sixth.push('6');
	}
	return sixth;
}

function getSevenths(allModifiers) {
	const sevenths = [];
	if (hasOneOf(allModifiers, [m.seventh, m.halfDim])) {
		if (allModifiers.includes(m.dim)) {
			sevenths.push('bb7');

		} else if (allModifiers.includes(m.halfDim)) {
			sevenths.push('b7');

		} else {
			sevenths.push(getMinorOrMajorSeventh(allModifiers));
		}

	} else if (hasOneOf(allModifiers, [m.ninth, m.eleventh, m.thirteenth])) {
		sevenths.push(getMinorOrMajorSeventh(allModifiers));
	}

	if (allModifiers.includes(m.add7)) {
		sevenths.push('7');
	}
	return sevenths;
}

function getMinorOrMajorSeventh(allModifiers) {
	return (allModifiers.includes(m.ma)) ? '7' : 'b7';
}

function getNinths(allModifiers) {
	const ninth = [];
	if (
		hasOneOf(allModifiers, [m.add69, m.ninth, m.eleventh, m.thirteenth])
		&& hasNoneOf(allModifiers, [m.ninthFlat, m.ninthSharp])
	) {
		ninth.push('9');
	}
	if (hasOneOf(allModifiers, [m.sus2, m.add9])) {
		ninth.push('9');
	}
	if (allModifiers.includes(m.ninthFlat)) {
		ninth.push('b9');
	}
	if (allModifiers.includes(m.ninthSharp)) {
		ninth.push('#9');
	}
	return ninth;
}

function getElevenths(allModifiers) {
	const elevenths = [];
	if (hasOneOf(allModifiers, [m.eleventh, m.thirteenth]) && !hasMajorIntent(allModifiers)) {
		elevenths.push('11');
	}
	if (allModifiers.includes(m.add11)) {
		elevenths.push('11');
	}
	if (allModifiers.includes(m.eleventhSharp)) {
		elevenths.push('#11');
	}
	return elevenths;
}

function getThirteenths(allModifiers) {
	const thirteenths = [];
	if (
		hasOneOf(allModifiers, [m.add13, m.thirteenth])
		|| hasAll(allModifiers, [m.add6, m.add69, m.seventh])
	) {
		thirteenths.push('13');
	}
	if (allModifiers.includes(m.thirteenthFlat)) {
		thirteenths.push('b13');
	}
	return thirteenths;
}

function hasMajorIntent(givenModifiers) {
	return hasNoneOf(givenModifiers, [m.mi, m.dim, m.dim7, m.halfDim]);
}

// Based on https://stackoverflow.com/a/6969486
function escapeRegex(string) {
	return string.replace(/[.\-*+?^${}()|[\]\\]/g, '\\$&');
}


