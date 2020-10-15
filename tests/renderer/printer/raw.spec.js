import chordParserFactory from '../../../src/parser/chordParserFactory';
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
});
