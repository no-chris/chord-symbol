import parseChord from '../src/parseChord';

describe('parseChord', () => {
	test('module', () => {
		expect(parseChord).toBeInstanceOf(Function);
	});
});

describe('parseChord()', () => {
	test('should return given string', () => {
		expect(parseChord('C')).toBe('C');
	});
});
