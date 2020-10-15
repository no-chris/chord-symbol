import chordParserFactory from '../../../src/parser/chordParserFactory';
import chordRendererFactory from '../../../src/renderer/chordRendererFactory';
import rawPrinter from '../../../src/renderer/printer/raw';

const parseChord = chordParserFactory();

describe('raw printer', () => {
	test('should return null if given invalid chord', () => {
		expect(rawPrinter(null)).toBeNull();
	});

	test('should return a copy of the given chord', () => {
		const parsed = parseChord('C');
		const printed = rawPrinter(parsed);

		expect(printed).not.toBe(parsed);
		expect(printed).toEqual(parsed);
	});


	describe.each([

		[ 'Ch(#11,b13)', 0, 'none', false, 'Cmi7(b5,add #11,b13)' ],
		[ 'Ch(#11,b13)', 2, 'none', false, 'Dmi7(b5,add #11,b13)' ],
		[ 'Ch(#11,b13)', 2, 'core', false, 'Dmi7(b5)' ],
		[ 'Ch(#11,b13)', 4, 'max',  false, 'Emi' ],
		[ 'Ch(#11,b13)', 5, 'max',  true,  'Fm' ],

	])('should reflect the output of all rendering filters', (input, transposeValue, simplify, useShortNamings, expectedTxt) => {
		test(input + ' => ' + expectedTxt, () => {
			const renderTxt = chordRendererFactory({
				transposeValue,
				simplify,
				useShortNamings,
			});
			const renderRaw = chordRendererFactory({
				transposeValue,
				simplify,
				useShortNamings,
				printer: 'raw'
			});

			const parsedInput = parseChord(input);
			const inputRenderedTxt = renderTxt(parsedInput);
			const inputRenderedRaw = renderRaw(parsedInput);

			const parsedRendered = parseChord(inputRenderedTxt);

			expect(inputRenderedTxt).toEqual(expectedTxt);
			expect(inputRenderedRaw).toEqual(parsedRendered);
		});
	});
});
