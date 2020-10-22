import allModifiers from '../../src/dictionaries/modifiers';

import getAllSymbolModifiers from './getAllSymbolModifiers';

describe('getAllSymbolModifiers()', () => {
	test('should retrieve all symbols for the given modifier', () => {
		const symbols = getAllSymbolModifiers(allModifiers.sus).sort();
		const expected = [
			'4',
			'sus',
			'sus4',
			'suspended',
			'suspended4',
		].sort();

		expect(symbols).toEqual(expected);
	});
});
