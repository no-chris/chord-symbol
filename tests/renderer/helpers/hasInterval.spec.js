import { hasExactly, hasNoneOf, hasOneOf, hasAll } from '../../../src/helpers/hasElement';

describe('hasExactly', () => {
	describe.each([

		[ 'true/ array input', 		['1', '3', '5'], 	['1', '3', '5'], 	true ],
		[ 'true/ string input', 	['b7'],		 		'b7',	 			true ],
		[ 'false/ array input', 	['1', '3', '5'], 	['1', '2', '5'], 	false ],
		[ 'false/ string input', 	['b7'],		 		'bb7',	 			false ],

	])('%s', (title, allIntervals, search, expected) => {
		test('returns expected value', () => {
			const result = hasExactly(allIntervals, search);
			expect(result).toBe(expected);
		});
	});
});

describe('hasOneOf', () => {
	describe.each([

		[ 'true/ array input', 		['1', '3', '5'], 	['4', '5', '7'], 	true ],
		[ 'true/ string input', 	['1', '3', '5'], 	'3', 				true ],
		[ 'false/ array input', 	['1', '3', '5'], 	['2', '4', '6'], 	false ],
		[ 'false/ string input', 	['1', '3', '5'], 	'bb7',	 			false ],

	])('%s', (title, allIntervals, search, expected) => {
		test('returns expected value', () => {
			const result = hasOneOf(allIntervals, search);
			expect(result).toBe(expected);
		});
	});
});

describe('hasNoneOf', () => {
	describe.each([

		[ 'true/ array input', 		['1', '3', '5'], 	['4', '6', '7'], 	true ],
		[ 'true/ string input', 	['1', '3', '5'], 	'4', 				true ],
		[ 'false/ array input', 	['1', '3', '5'], 	['3', '4', '6'], 	false ],
		[ 'false/ string input', 	['1', '3', '5'], 	'5',	 			false ],

	])('%s', (title, allIntervals, search, expected) => {
		test('returns expected value', () => {
			const result = hasNoneOf(allIntervals, search);
			expect(result).toBe(expected);
		});
	});
});

describe('hasAll', () => {
	describe.each([

		[ 'true/ array input', 		['1', '3', '5'], 	['3', '5'], 		true ],
		[ 'true/ string input', 	['1', '3', '5'], 	'5', 				true ],
		[ 'false/ array input', 	['1', '3', '5'], 	['1', '4', '5'], 	false ],
		[ 'false/ string input', 	['1', '3', '5'], 	'b7',	 			false ],

	])('%s', (title, allIntervals, search, expected) => {
		test('returns expected value', () => {
			const result = hasAll(allIntervals, search);
			expect(result).toBe(expected);
		});
	});
});
