import allModifiers from '../../../src/allModifiers';

import getAllSymbolModifiers from './getAllSymbolModifiers';

describe('getAllSymbolModifiers()', () => {
	test('should retrieve all symbols for the given modifier', () => {
		const symbols = getAllSymbolModifiers(allModifiers.sus4).sort();
		const expected = [
			'sus',
			'sus4',
			'suspended',
			'suspended4',
		].sort();

		expect(symbols).toEqual(expected);
	});
});
