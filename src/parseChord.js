//import _memoize from 'lodash/memoize';
import _uniq from 'lodash/uniq';
//import _intersection from 'lodash/intersection';
//import _cloneDeep from 'lodash/cloneDeep';
import _difference from 'lodash/difference';



import allModifiersDetails from './allModifiersDetails';
import symbolsToModifiers from './symbolsToModifiers';
import intervalsToSemitones from './intervalsToSemitones';


const allSymbols = Object
	.keys(symbolsToModifiers)
	.sort((a, b) => b.length - a.length)
	.map(escapeRegex)
	.join('|');
const symbolsRegexp = new RegExp(allSymbols, 'g');

//console.log(allSymbols);


export default function parseChord(input) {

	const includedIntervals = ['1'];
	const omittedIntervals = [];

	const chord = parseBasic(input);

	if (chord) {

		if (chord.descriptor) {
			const descriptor = allLettersButMToLowercase(chord.descriptor)
				.replace(/ /g, '');

			const results = descriptor.match(symbolsRegexp);
			let modifierId;
			let modifierDetail;

			if (results) {
				// skip first result?
				results.forEach(symbol => {
					modifierId = symbolsToModifiers[symbol];
					modifierDetail = allModifiersDetails[modifierId];

					includedIntervals.push(...(modifierDetail.includes || []));
					omittedIntervals.push(...(modifierDetail.omit || []));
				});
			}
		}

		if (shouldAdd3(includedIntervals)) {
			includedIntervals.push('3'); //fixme: I should be a constant
		}
		if (shouldAdd5(includedIntervals)) {
			includedIntervals.push('5');
		}
		if (shouldRemove11(includedIntervals)) {
			omittedIntervals.push('11');
		}

		const finalIntervals = _uniq(_difference(includedIntervals, omittedIntervals));

		chord.intervals = finalIntervals
			.sort((a, b) => (stripAccidentals(a) - stripAccidentals(b)));

		chord.semitones = finalIntervals
			.map(degree => intervalsToSemitones[degree])
			.sort((a, b) => (a - b));
	}

	return chord;
}



function parseBasic(input) {
	const notesRegex = '([ABCDEFG][#b]?)';
	const notesAndDescriptorRegex = new RegExp(
		'^'
		+ notesRegex
		+ '(.*?)'
		+ '(\/' + notesRegex + ')?'
		+ '$'
	);
	const result = input.match(notesAndDescriptorRegex);

	let chord = null;
	if (result && result[1]) {
		chord = {
			input,
			rootNote: result[1]
		};
		if (result[2]) {
			chord.descriptor = result[2];
		}
		if (result[4]) {
			chord.bassNote = result[4];
		}
	}
	return chord;
}

function allLettersButMToLowercase(input) {
	return input.replace(/[A-LN-Za-z]+/g, match => match.toLowerCase());
}

function stripAccidentals(input) {
	return input.replace('b', '').replace('#', '');
}

function shouldAdd3(includedIntervals) {
	return !includedIntervals.includes('b3')
		&& !includedIntervals.includes('3')
		&& !includedIntervals.includes('4');
}

function shouldAdd5(includedIntervals) {
	return !includedIntervals.includes('b5')
		&& !includedIntervals.includes('5')
		&& !includedIntervals.includes('#5');
}

function shouldRemove11(includedIntervals) {
	return includedIntervals.includes('3')
		|| includedIntervals.includes('4');
}


// Based on https://stackoverflow.com/a/6969486
function escapeRegex(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
