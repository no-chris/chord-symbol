import chordRendererFactory from '../src/renderer/chordRendererFactory';
import parseChord from '../src/parser/parseChord';

describe('Module', () => {
	test('Should expose a function', () => {
		expect(chordRendererFactory).toBeInstanceOf(Function);
	});
	test('Factory should return a function', () => {
		const renderChord = chordRendererFactory();
		expect(renderChord).toBeInstanceOf(Function);
	});
});

describe('renderChord()', () => {

	describe.each([

		['Cm7', 'Cmi7'],

	])('%s', (input, expected) => {

		test('is rendered: ' + expected, () => {
			const renderChord = chordRendererFactory();
			const chord = parseChord(input);
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
			const renderChord = chordRendererFactory({ useShortNamings: true });
			const chord = parseChord(input);
			expect(renderChord(chord)).toBe(expected);
		});
	});

});
