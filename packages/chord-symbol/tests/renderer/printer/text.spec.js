import chordParserFactory from '../../../src/parser/chordParserFactory';
import normalizeDescriptor from '../../../src/parser/filters/normalizeDescriptor';
import textPrinter from '../../../src/renderer/printer/text';

describe('Normalized descriptor', () => {
	describe.each([
		['No quality descriptor', 'C', 'C'],
		['No alt/add/omit', 'C7m', 'Cmi7'],
		['No bass note', 'Cm(add 13)7', 'Cmi7(add13)'],
		['With bass note', 'Cm(add 13)7/E', 'Cmi7(add13)/E'],
		['Altered', 'C7altered', 'C7alt'],
	])('%s', (title, input, expected) => {
		test('return normalized descriptor', () => {
			const parseChord = chordParserFactory();
			const normalized = normalizeDescriptor(parseChord(input));
			const printed = textPrinter(normalized);
			expect(printed).toEqual(expected);
		});
	});
});

describe('null', () => {
	test('should return null if given invalid chord', () => {
		expect(textPrinter(null)).toBeNull();
	});
});
