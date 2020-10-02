import chordParserFactory from '../../../src/parser/chordParserFactory';
import chordRendererFactory from '../../../src/renderer/chordRendererFactory';

import simplify from '../../../src/renderer/filters/simplify';

describe('simplifyFilter()', () => {
	test('should simplifyFilter normalized chord', () => {
		const parseChord = chordParserFactory();
		const inputChord = parseChord('Cmi11(b9,#9)');
		const simplified = simplify('max', inputChord);

		expect(simplified.normalized.intervals).toEqual(['1', 'b3', '5']);
		expect(simplified.normalized.semitones).toEqual([0, 3, 7]);
		expect(simplified.normalized.intents.eleventh).toBe(false);
		expect(simplified.normalized.bassNote).toBeUndefined();
	});

	test('should not apply simplification by default', () => {
		const parseChord = chordParserFactory();
		const inputChord = parseChord('Cmi11(b9,#9)');
		const simplified = simplify(undefined, inputChord);

		expect(simplified).toEqual(inputChord);
	});
});

describe('simplifyFilter examples', () => {

	describe.each([

		['C7', 			'C', 		'C7'],
		['C9', 			'C', 		'C7'],
		['C9sus', 		'C', 		'C7'],
		['C11', 		'C', 		'C7'],
		['C13', 		'C', 		'C7'],

		['Cmajor', 		'C', 		'C'],
		['C6',	 		'C', 		'C6'],
		['C69', 		'C', 		'C6'],
		['CMaj7', 		'C', 		'Cma7'],
		['CMaj9', 		'C', 		'Cma7'],
		['CMaj11', 		'C', 		'Cma7'],
		['CMaj13', 		'C', 		'Cma7'],

		['Cmin', 		'Cmi', 		'Cmi'],
		['Cmin6', 		'Cmi', 		'Cmi6'],
		['Cmin69', 		'Cmi', 		'Cmi6'],
		['Cmin7', 		'Cmi', 		'Cmi7'],
		['Cmin9', 		'Cmi', 		'Cmi7'],
		['Cmin11', 		'Cmi', 		'Cmi7'],
		['Cmin13', 		'Cmi', 		'Cmi7'],

		['CminM7', 		'Cmi', 		'CmiMa7'],
		['CminM9', 		'Cmi', 		'CmiMa7'],
		['CminM11', 	'Cmi', 		'CmiMa7'],
		['CminM13', 	'Cmi', 		'CmiMa7'],

		['Csus', 		'C', 		'C'],
		['Cmisus', 		'Cmi', 		'Cmi'],
		['Cmi7sus', 	'Cmi', 		'Cmi7'],

		['C°', 			'Cmi', 		'Cdim'],
		['C°7', 		'Cmi', 		'Cdim7'],
		['Ch', 			'Cmi', 		'Cmi7(b5)'],
		['C+', 			'C', 		'C+'],
		['C7+', 		'C', 		'C7(#5)'],

		['C7(omit3)', 			'C', 		'C7'],
		['C7(omit3,add13)', 	'C', 		'C7'],
		['C7omit3b5add13', 		'C', 		'C7(b5)'],
		['C7(#11,#9,b9,#5,b5)', 'C', 		'C7(b5,#5)'],
		['Cdim7(add ma7)', 		'Cmi', 		'Cdim7(addMa7)'],
		['C+(add b9,#9)', 		'C', 		'C+'],

		['C5', 					'C', 		'C'],
		['C5(omit3,5)', 		'C', 		'C'],

		['C/E', 				'C', 		'C/E'],
		['CM9/E', 				'C', 		'Cma7/E'],

		['C7alt', 				'C', 		'C7'],
		['C7alt.', 				'C', 		'C7'],
		['C7altered', 			'C', 		'C7'],
		['Calt', 				'C', 		'C7'],
		['Calt.', 				'C', 		'C7'],
		['Caltered', 			'C', 		'C7'],


	])('%s', (input, max, core) => {
		test('=> ' + max + ' (max)', () => {
			const parseChord = chordParserFactory();
			const chord = parseChord(input);
			const renderChord = chordRendererFactory({
				simplify: 'max'
			});

			expect(renderChord(chord)).toBe(max);
		});

		test('=> ' + core + ' (core)', () => {
			const parseChord = chordParserFactory();
			const chord = parseChord(input);
			const renderChord = chordRendererFactory({
				simplify: 'core'
			});

			expect(renderChord(chord)).toBe(core);
		});
	});
});
