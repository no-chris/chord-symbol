import chordParserFactory from '../../src/parser/chordParserFactory';
import chordRendererFactory from '../../src/renderer/chordRendererFactory';

describe('Module', () => {
	test('Should expose a function', () => {
		expect(chordRendererFactory).toBeInstanceOf(Function);
	});
	test('Factory should return a function', () => {
		const renderChord = chordRendererFactory();
		expect(renderChord).toBeInstanceOf(Function);
	});
});

describe('No filter', () => {

	describe.each([

		['Cm7', 	'Cmi7'],
		['C7sus', 	'C7sus'],

	])('%s', (input, expected) => {

		test('is rendered: ' + expected, () => {
			const parseChord = chordParserFactory();
			const renderChord = chordRendererFactory();
			const chord = Object.freeze(parseChord(input));
			expect(renderChord(chord)).toBe(expected);
		});
	});

});

describe('all filters', () => {

	describe.each([

		['Cm11', 'Abm'],

	])('%s', (input, expected) => {

		test('is rendered: ' + expected, () => {
			const parseChord = chordParserFactory();
			const renderChord = chordRendererFactory({
				useShortNamings: true,
				transposeValue: 8,
				harmonizeAccidentals: true,
				useFlats: true,
				simplify: 'max'
			});
			const chord = Object.freeze(parseChord(input));
			expect(renderChord(chord)).toBe(expected);
		});
	});

});

describe('useShortNamings', () => {

	describe.each([

		['C(add9)', 	'C2'],
		['Cdim', 		'C°'],
		['Cma7', 		'CM7'],
		['Cmi', 		'Cm'],
		['Cmi7(omit3)', 'Cm7(no3)'],
		['Cdim7(add ma7)', 'C°7(addM7)'],

	])('%s', (input, expected) => {
		test('is rendered: ' + expected, () => {
			const parseChord = chordParserFactory();
			const renderChord = chordRendererFactory({ useShortNamings: true });
			const chord = parseChord(input);
			expect(renderChord(chord)).toBe(expected);
		});
	});

});

describe('Transpose', () => {

	describe.each([

		// transposeValue !== 0

		['+3', 				'C/E', 	3, 	false, 	false,	'D#/G'],
		['+3, useFlats', 	'C/E', 	3, 	true, 	false,	'Eb/G'],
		['-4', 				'C/E', 	-4, false, 	false,	'G#/C'],
		['-4, useFlats', 	'C/E', 	-4, true, 	false,	'Ab/C'],

		// transposeValue === 0

		['sharp', 									'G#', 	0, 	false, 	false,	'G#'],
		['sharp, useFlats', 						'G#', 	0, 	true, 	false,	'G#'],
		['sharp, useFlats, harmonizeAccidentals', 	'G#', 	0, 	true, 	true,	'Ab'],
		['sharp, harmonizeAccidentals', 			'G#', 	0, 	false, 	true,	'G#'],

		['flat', 									'Ab', 	0, 	false, 	false,	'Ab'],
		['flat, useFlats', 							'Ab', 	0, 	true, 	false,	'Ab'],
		['flat, useFlats, harmonizeAccidentals', 	'Ab', 	0, 	true, 	true,	'Ab'],
		['flat, harmonizeAccidentals', 				'Ab', 	0, 	false, 	true,	'G#'],

	])('%s', (title, input, transposeValue, useFlats, harmonizeAccidentals, transposed) => {
		test(input + 'is transposed: ' + transposed, () => {
			const parseChord = chordParserFactory();
			const renderChord = chordRendererFactory({ transposeValue, useFlats, harmonizeAccidentals });
			const chord = parseChord(input);
			expect(renderChord(chord)).toBe(transposed);
		});
	});

});

describe('Printers', () => {

	const parseChord = chordParserFactory();
	const chordC = parseChord('C');

	describe.each([

		['text printer', 		'text', 		'C'],
		['raw printer', 		'raw', 			chordC],
		['unknown printer', 	'idontexist', 	'C'],

	])('%s', (title, printer, expected) => {
		test(title, () => {
			const renderChord = chordRendererFactory({ printer });
			const rendered = renderChord(chordC);
			expect(rendered).toEqual(expected);
		});
	});

});

describe('invalid options values', () => {
	describe.each([

		['invalid simplify value', 						'Cm7', 		'Cmi7', 	{ simplify: false }],
		['invalid simplify value, suspended chord', 	'C7sus', 	'C7sus',	{ simplify: false }],

	])('%s', (title, input, expected, options) => {

		test(input + ' is rendered: ' + expected, () => {
			const parseChord = chordParserFactory();
			const renderChord = chordRendererFactory(options);
			const chord = Object.freeze(parseChord(input));
			expect(renderChord(chord)).toBe(expected);
		});
	});
});
