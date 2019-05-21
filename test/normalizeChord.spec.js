import normalizeChord from '../src/normalizeChord';
import parseChord from '../src/parseChord';

describe('normalizeChord', () => {

	describe.each([

		['Cm', 'Cmi'],
		['Cm/Eb', 'Cmi/Eb'],

	])('%s => %s', (input, expected) => {
		test('correctly normalize', () => {
			const parsed = parseChord(input);
			expect(normalizeChord(parsed)).toBe(expected);
		});
	});

});
