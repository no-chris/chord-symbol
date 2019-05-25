import normalizeChord from '../src/normalizeChord';
import parseChord from '../src/parseChord';

describe('normalizeChord', () => {

	describe.each([

		// Dominant
		['C7', 					'C7'],
		['C9', 					'C9'],
		['C11', 				'C9sus'],
		['C13', 				'C13'],

		// Major/Major6/Major7
		['CMAJ',				'C'],
		['Cadd6', 				'C6'],
		['C6/9', 				'C69'],
		['CM7', 				'Cma7'],
		['CM9', 				'Cma9'],
		['CM11', 				'Cma9sus'],
		['CM13', 				'Cma13'],

		// Minor/Minor6/Minor6
		['Cm', 					'Cmi'],
		['Cmin6',				'Cmi6'],
		['Cm9/6',				'Cmi69'],
		['C7m', 				'Cmi7'],
		['C9m', 				'Cmi9'],
		['C11m', 				'Cmi11'],
		['C13m', 				'Cmi13'],

		// Minor-Major7
		['CMinΔ7', 				'CmiMa7'],
		['CMinΔ9', 				'CmiMa9'],
		['CMinΔ11',				'CmiMa11'],
		['CMinΔ13',				'CmiMa13'],

		// Suspended
		['Csus4', 				'Csus'],
		['Csus7', 				'C7sus'],
		['Csus9', 				'C9sus'],
		['Csus13', 				'C13sus'],
		['CsusΔ7', 				'Cma7sus'],
		['CsusΔ9', 				'Cma9sus'],
		['CsusΔ13', 			'Cma13sus'],

		// Diminished
		['C°', 					'Cdim'],
		['C7°', 				'Cdim7'],

		//['Cm/Eb', 			'Cmi/Eb'],

	])('%s => %s', (input, expected) => {
		test('is rendered ' + expected, () => {
			const parsed = parseChord(input);
			expect(normalizeChord(parsed)).toBe(expected);
		});
	});

});
