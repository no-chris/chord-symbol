import textPrinter from '../../../src/renderer/printer/text';

describe.each([
	['null chord', null, null],
	['no "formatted" property', {}, null],
	['no "symbol" property', { formatted: { something: '' } }, null],
	['expected "symbol" property', { formatted: { symbol: 'CM7' } }, 'CM7'],
])('%s', (title, input, expected) => {
	test('should return the `formatted.symbol` property of the given chord, if exists, null ortherwise', () => {
		expect(textPrinter(input)).toBe(expected);
	});
});
