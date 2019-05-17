import _memoize from 'lodash/memoize';
import _uniq from 'lodash/uniq';
import _intersection from 'lodash/intersection';


const mainRegexp = {
	notes: '([ABCDEFG][#b]?)',
	accidentals: '[#b]',
	minor: '[m|min]',
	bassSeparator: '[\/]',
	description: '[\(]?([^\/]*)[\)]?',
};


import allModifiersDetails from './allModifiersDetails';
import symbolsToModifiers from './symbolsToModifiers';
import degreesToIntervals from './degreesToIntervals';


const allSymbols = Object
	.keys(symbolsToModifiers)
	.sort((a, b) => b.length - a.length)
	.map(escapeRegex)
	.join('|');
const symbolsRegexp = new RegExp(allSymbols, 'g');

const rootAndBassNoteRegexp = new RegExp(
	'^'
	+ mainRegexp.notes
	+ mainRegexp.description + '?'
	+ mainRegexp.bassSeparator + '?'
	+ mainRegexp.notes + '?'
	+ '$'
);


export default function parseChord(string) {


	const base = string.match(rootAndBassNoteRegexp);
	const chord = { string };

	if (base) {
		chord.rootNote = base[1];
		if (base[3]) {
			chord.bassNote = base[3];
		}
		const includedDegrees = ['1'];
		const excludedDegrees = [];
		const impliedDegrees = [];

		let desc = base[2];

		if (desc) {
			const results = desc.match(symbolsRegexp);
			let modifierId;
			let descriptor;

			if (results) {
				results.forEach(symbol => {
					modifierId = symbolsToModifiers[symbol];
					descriptor = allModifiersDetails[modifierId];

					includedDegrees.push(...descriptor.includes);
					excludedDegrees.push(...(descriptor.excludes || []));
					impliedDegrees.push(...(descriptor.implies || []));
				});
			}
		}

		if (shouldAdd3(includedDegrees, excludedDegrees)) {
			includedDegrees.push('3'); //fixme: I should be a constant
		}
		if (shouldAdd5(includedDegrees, excludedDegrees)) {
			includedDegrees.push('5');
		}
		if (impliedDegrees.length) {
			includedDegrees.push(...getImpliedDegrees(excludedDegrees, impliedDegrees));
		}

		if (_intersection(includedDegrees, excludedDegrees).length > 0) {
			return null;
		}

		chord.intervals = _uniq(includedDegrees)
			.map(degree => degreesToIntervals[degree])
			.sort((a, b) => (a - b));
	}
	return chord;
}



const shouldAdd3 = _memoize(
	(includedDegrees, excludedDegrees) => {
		return !includedDegrees.includes('b3')
			&& !includedDegrees.includes('3')
			&& !excludedDegrees.includes('3');
	},
	(includedDegrees, excludedDegrees) => includedDegrees.join('-') + excludedDegrees.join('-')
);

const shouldAdd5 = _memoize(
	(includedDegrees, excludedDegrees) => {
		return !includedDegrees.includes('b5')
			&& !includedDegrees.includes('5')
			&& !includedDegrees.includes('#5')
			&& !excludedDegrees.includes('5');
	},
	(includedDegrees, excludedDegrees) => includedDegrees.join('-') + excludedDegrees.join('-')
);

// We assume that if the default variation of a degree is excluded, it is because another variation is already present
function getImpliedDegrees(excludedDegrees, impliedDegrees) {
	const degrees = [];
	if (impliedDegrees.includes('7th') && !excludedDegrees.includes('b7')) {
		degrees.push('b7'); // fixme: I should be a constant
	}
	if (impliedDegrees.includes('9th') && !excludedDegrees.includes('9')) {
		degrees.push('9');
	}
	if (impliedDegrees.includes('11th') && !excludedDegrees.includes('11')) {
		degrees.push('11');
	}
	return degrees;
}

// Based on https://stackoverflow.com/a/6969486
function escapeRegex(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
