import normalizeChord from '../src/normalizeChord';
import parseChord from '../src/parseChord';

describe.skip('normalizeChord', () => {

	describe.each([

		['Cm', 'Cmi']

	])('%s => %s', (input, expected) => {
		test('correctly normalize', () => {
			const parsed = parseChord(input);
			expect(normalizeChord(parsed)).toBe(expected);
		});
	});

});
