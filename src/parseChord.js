import _memoize from 'lodash/memoize';
import _uniq from 'lodash/uniq';


const mainRegexp = {
	notes: '([ABCDEFG][#b]?)',
	accidentals: '[#b]',
	minor: '[m|min]',
	bassSeparator: '[\/]',
	description: '[\(]?([^\/]*)[\)]?',
};


const allDescriptors = {
	maj: {
		symbols: ['major', 'Major', 'maj', 'Maj', 'M', 'Δ'],
		includes: ['3'],
		excludes: ['b3'],
	},
	min: {
		symbols: ['minor', 'min', 'm'],
		includes: ['b3'],
		excludes: ['3'],
	},
	sus2: {
		symbols: ['suspended2', 'sus2'],
		includes: ['2'],
		excludes: ['b3', '3'],
	},
	sus4: {
		symbols: ['suspended4', 'suspended', 'sus4', 'sus'],
		includes: ['4'],
		excludes: ['b3', '3'],
	},
	fifthFlat: {
		symbols: ['b5', '♭5'],
		includes: ['b5'],
		excludes: ['5', '#5'],
	},
	fifthSharp: {
		symbols: ['#5', '♯5'],
		includes: ['#5'],
		excludes: ['b5', '5'],
	},
	seventhMinor: {
		symbols: ['7'],
		includes: ['b7'],
		excludes: ['7'],
	},
	seventhMajor: {
		symbols: ['Major7', 'Maj7', 'M7', 'major7', 'maj7', 'Δ7'],
		includes: ['7'],
		excludes: ['b7'],
	},
	ninthFlat: {
		symbols: ['b9', '♭9'],
		includes: ['b9'],
		// document implies
		implies: ['7th'],
		excludes: ['9', '#9'],
	},
	ninth: {
		symbols: ['9'],
		includes: ['9'],
		implies: ['7th'],
		excludes: ['b9', '#9'],
	},
	ninthSharp: {
		symbols: ['#9', '♯9'],
		includes: ['#9'],
		implies: ['7th'],
		excludes: ['b9', '9th'],
	},
	eleventh: {
		symbols: ['11'],
		includes: ['11'],
		implies: ['7th', '9th'],
		excludes: ['#11'],
	},
	eleventhSharp: {
		symbols: ['#11', '♯11'],
		includes: ['#11'],
		implies: ['7th', '9th'],
		excludes: ['11'],
	},
	thirteenthFlat: {
		symbols: ['b13', '♭13'],
		includes: ['b7', '9', '11', 'b13'],
		implies: ['7th', '9th', '11th'],
		excludes: ['13'],
	},
	thirteenth: {
		symbols: ['13'],
		includes: ['13'],
		implies: ['7th', '9th', '11th'],
		excludes: ['b13'],
	},
	add2: {
		symbols: ['add2', '2'],
		includes: ['2'],
		excludes: [],
	},
	add4: {
		symbols: ['add4', '4'],
		includes: ['4'],
		excludes: [],
	},
	add6: {
		symbols: ['add6', '6'],
		includes: ['6'],
		excludes: [],
	},
	addb9: {
		symbols: ['addb9', 'add♭9'],
		includes: ['b9'],
		excludes: ['9', '#9'],
	},
	add9: {
		// what to do with A7add9 => A9 (that's normalization)
		symbols: ['add9'],
		includes: ['9'],
		excludes: ['b9', '#9'],
	},
	'add#9': {
		symbols: ['add#9', 'add♯9'],
		includes: ['#9'],
		excludes: ['b9', '9'],
	},
	add11: {
		symbols: ['add11'],
		includes: ['11'],
		excludes: ['#11'],
	},
	'add#11': {
		symbols: ['add#11', 'add♯11'],
		includes: ['#11'],
		excludes: ['11'],
	},
	addb13: {
		symbols: ['addb13', 'add♭13'],
		includes: ['b13'],
		excludes: ['13'],
	},
	add13: {
		symbols: ['add13'],
		includes: ['13'],
		excludes: ['b13'],
	},
	aug: {
		symbols: ['augmented', 'aug', '\\+'], //fixme: should not be escaped?
		includes: ['3', '#5'],
		excludes: ['b3', 'b5', '5'],
	},
	//fixme: how do we distinguish between 7° (with a 6th) and a dim triad (mb5)?
	dim: {
		symbols: ['diminished', 'dim', '0', '°', /* 'o', 'O' */],
		includes: ['b3', 'b5', '6'],
		excludes: ['3', '5', '#5', '7', '7'],
	},
	halfDim: {
		symbols: ['Ø', 'ø'],
		includes: ['b3', 'b5', 'b7'],
		excludes: ['3', '5', '#5', '7'],
	},
	power: {
		symbols: ['5', 'no3'],
		includes: ['5'],
		excludes: ['2', '3', 'b3', '4', 'b5', '#5', '6', 'b7', '7', 'b9', '9', '#9', '11', '#11', 'b13', '13'],
	},
};

const degreesToIntervals = {
	'1': 0,
	'2': 2,
	'b3': 3,
	'3': 4,
	'4': 5,
	'b5': 6,
	'5': 7,
	'#5': 8,
	'6': 9,
	'b7': 10,
	'7': 11,
	'b9': 13,
	'9': 14,
	'#9': 15,
	'11': 17,
	'#11': 18,
	'b13': 20,
	'13': 21,
};

const parseOrder = [
	'sus2', 'sus4',
	'seventhMajor', 'seventhMinor',
	'aug', 'dim', 'halfDim',
	'maj', 'min',
	'fifthFlat', 'fifthSharp', 'power',
	'add2', 'add4', 'add6', 'addb9', 'add#9', 'addb9', 'add9', 'add11', 'add#11', 'addb13', 'add13',
	'ninthFlat', 'ninthSharp', 'ninth', 'eleventhSharp', 'eleventh', 'thirteenthFlat', 'thirteenth',
];

const allDescriptorsRegexp = {};
parseOrder.forEach(descriptorId => {
	const descriptor = allDescriptors[descriptorId];
	allDescriptorsRegexp[descriptorId] = new RegExp(descriptor.symbols.join('|'));
});

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
			let descriptor = allDescriptors[parseOrder[0]];
			let i = 0;
			let regexp;

			while (desc.length && descriptor) {
				regexp = allDescriptorsRegexp[parseOrder[i]];
				if (matchDescriptor(desc, regexp)) {
					desc = removeMatch(desc, regexp);
					includedDegrees.push(...descriptor.includes);
					excludedDegrees.push(...descriptor.excludes);
					if (descriptor.implies) {
						impliedDegrees.push(...descriptor.implies);
					}
				}
				i++;
				descriptor = allDescriptors[parseOrder[i]];
			}
		}

		if (shouldAdd3(includedDegrees, excludedDegrees)) {
			includedDegrees.push('3');
		}
		if (shouldAdd5(includedDegrees, excludedDegrees)) {
			includedDegrees.push('5');
		}
		if (impliedDegrees.length) {
			includedDegrees.push(...getImpliedDegrees(excludedDegrees, impliedDegrees));
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


const matchDescriptor = _memoize(
	(string, regexp) => {
		return string.match(regexp);
	},
	(string, regexp) => {
		return string + regexp.toString();
	}
);

const removeMatch = _memoize(
	(string, regexp) => {
		return string.replace(regexp, '');
	},
	(string, regexp) => {
		return string + regexp.toString();
	}
);

// We assume that if the default variation of a degree is excluded, it is because another variation is already present
function getImpliedDegrees(excludedDegrees, impliedDegrees) {
	const degrees = [];
	if (impliedDegrees.includes('7th') && !excludedDegrees.includes('b7')) {
		degrees.push('b7');
	}
	if (impliedDegrees.includes('9th') && !excludedDegrees.includes('9')) {
		degrees.push('9');
	}
	if (impliedDegrees.includes('11th') && !excludedDegrees.includes('11')) {
		degrees.push('11');
	}
	return degrees;
}
