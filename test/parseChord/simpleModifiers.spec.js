import _ from 'lodash';

import parseChord from '../../src/parseChord';
import degreesToIntervals from '../../src/intervalsToSemitones';

describe('Simple modifiers', () => {
	const allCases = [];
	const rootNote = 'A';
	const bassNote = 'C#';
	const allSimpleModifiers = {

		'sus2':			['1', '2', '5'],
		'suspended2':	['1', '2', '5'],
		'2':			['1', '2', '3', '5'],
		'add2':			['1', '2', '3', '5'],

		'm': 		['1', 'b3', '5'],
		'mi': 		['1', 'b3', '5'],
		'MI': 		['1', 'b3', '5'],
		'min': 		['1', 'b3', '5'],
		'minor':	['1', 'b3', '5'],

		'': 		['1', '3', '5'],
		'Δ':		['1', '3', '5'],
		'M': 		['1', '3', '5'],
		'MA': 		['1', '3', '5'],
		'Maj': 		['1', '3', '5'],
		'maj':		['1', '3', '5'],
		'Major':	['1', '3', '5'],
		'major':	['1', '3', '5'],

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


		// Compound modifiers

		'm7':	 	['1', 'b3', '5', 'b7'],
		'm7b5': 	['1', 'b3', 'b5', 'b7'],

		'M7b9':		['1', '3', '5', '7', 'b9'],
	};

	_.forOwn(allSimpleModifiers, (degrees, modifier) => {
		let chordSymbol = rootNote + modifier;
		let expectedResult = {
			intervals: degrees.map(degree => degreesToIntervals[degree])
		};
		allCases.push([chordSymbol, expectedResult]);

		chordSymbol += '/' + bassNote;
		allCases.push([chordSymbol, expectedResult]);
	});

	describe.each(allCases)('%s', (input, expected) => {
		test('should detect correct intervals', () => {
			const parsed = parseChord(input);
			expect(parsed.intervals).toEqual(expected.intervals);
		});
	});

});
