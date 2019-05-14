import _ from 'lodash';

import parseChord from '../src/parseChord';

describe('parseChord', () => {
	test('module', () => {
		expect(parseChord).toBeInstanceOf(Function);
	});
});


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

let allNotes = ['A'];
/* uncomment if you have time * /
allNotes = ['Ab', 'A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#'];
/* */
const allDescriptors = {
	'': 		['1', '3', '5'],
	'Δ':		['1', '3', '5'],
	'M': 		['1', '3', '5'],
	'Maj': 		['1', '3', '5'],
	'maj':		['1', '3', '5'],
	'Major':	['1', '3', '5'],
	'major':	['1', '3', '5'],

	'm': 		['1', 'b3', '5'],
	'min': 		['1', 'b3', '5'],
	'minor':	['1', 'b3', '5'],

	'sus2':			['1', '2', '5'],
	'suspended2':	['1', '2', '5'],
	'2':			['1', '2', '3', '5'],
	'add2':			['1', '2', '3', '5'],

	'sus':			['1', '4', '5'],
	'sus4':			['1', '4', '5'],
	'suspended':	['1', '4', '5'],
	'suspended4':	['1', '4', '5'],
	'4':			['1', '3', '4', '5'],
	'add4':			['1', '3', '4', '5'],

	'(b5)':	 		['1', '3', 'b5'],
	'(♭5)':		['1', '3', 'b5'],
	'Ø':			['1', 'b3', 'b5', 'b7'],
	'ø':			['1', 'b3', 'b5', 'b7'],
	'°':			['1', 'b3', 'b5', '6'],
	'0':			['1', 'b3', 'b5', '6'],
	'dim':		    ['1', 'b3', 'b5', '6'],
	'diminished':	['1', 'b3', 'b5', '6'],

	'5': 			['1', '5'],
	'no3': 			['1', '5'],

	'(#5)':			['1', '3', '#5'],
	'(♯5)':			['1', '3', '#5'],
	'+':		 	['1', '3', '#5'],
	'aug':		 	['1', '3', '#5'],
	'augmented': 	['1', '3', '#5'],

	'6':		['1', '3', '5', '6'],
	'add6':		['1', '3', '5', '6'],

	'7':		['1', '3', '5', 'b7'],

	'Δ7':		['1', '3', '5', '7'],
	'M7':		['1', '3', '5', '7'],
	'Maj7':		['1', '3', '5', '7'],
	'maj7':		['1', '3', '5', '7'],
	'Major7':	['1', '3', '5', '7'],
	'major7':	['1', '3', '5', '7'],

	'(b9)':		['1', '3', '5', 'b7', 'b9'],
	'(♭9)':	['1', '3', '5', 'b7', 'b9'],
	'addb9': 	['1', '3', '5', 'b9'],
	'add♭9': 	['1', '3', '5', 'b9'],

	'9':		['1', '3', '5', 'b7', '9'],
	'add9': 	['1', '3', '5', '9'],

	'(#9)':		['1', '3', '5', 'b7', '#9'],
	'(♯9)':		['1', '3', '5', 'b7', '#9'],
	'add#9': 	['1', '3', '5', '#9'],
	'add♯9': 	['1', '3', '5', '#9'],

	'11':		['1', '3', '5', 'b7', '9', '11'],
	'add11': 	['1', '3', '5', '11'],

	'(#11)':	['1', '3', '5', 'b7', '9', '#11'],
	'(♯11)':	['1', '3', '5', 'b7', '9', '#11'],
	'add#11': 	['1', '3', '5', '#11'],

	'(b13)':	['1', '3', '5', 'b7', '9', '11', 'b13'],
	'(♭13)':	['1', '3', '5', 'b7', '9', '11', 'b13'],
	'addb13': 	['1', '3', '5', 'b13'],
	'add♭13': 	['1', '3', '5', 'b13'],

	'13':		['1', '3', '5', 'b7', '9', '11', '13'],
	'add13': 	['1', '3', '5', '13'],





	'M7b9':		['1', '3', '5', '7', 'b9'],

	'm7':	 	['1', 'b3', '5', 'b7'],
	'm7b5': 	['1', 'b3', 'b5', 'b7'],

};
/* */

const allCases = [];
let chordSymbol;
allNotes.forEach(rootNote => {
	_.forOwn(allDescriptors, (degrees, descriptor) => {
		chordSymbol = rootNote + descriptor;
		allCases.push([chordSymbol, {
			string: chordSymbol,
			rootNote: rootNote,
			intervals: degrees.map(degree => degreesToIntervals[degree])
		}]);

		allNotes.forEach(bassNote => {
			chordSymbol = rootNote + descriptor + '/' + bassNote;
			allCases.push([chordSymbol, {
				string: chordSymbol,
				rootNote,
				bassNote,
				intervals: degrees.map(degree => degreesToIntervals[degree])
			}]);
		});
	});
});


describe('parseChord()', () => {
	describe.each(allCases)('%s', (input, expected) => {
		test('is correctly parsed', () => {
			const parsed = parseChord(input);
			expect(parsed).toEqual(expected);
		});
	});
});
