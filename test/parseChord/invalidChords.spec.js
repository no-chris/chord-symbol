import combineModifiers from './helpers/combineModifiers';
import getAllSymbolModifiers from '../../src/getAllSymbolModifiers';

import allModifiers from '../../src/allModifiers';

import parseChord from '../../src/parseChord';


describe.skip('Forbidden modifiers combinations', () => {
	const rootNote = 'Eb';

	describe.each([
		...combineModifiers(
			getAllSymbolModifiers(allModifiers.sus2),
			getAllSymbolModifiers(allModifiers.min),
		).map(modifier => (rootNote + modifier)),

		...combineModifiers(
			getAllSymbolModifiers(allModifiers.sus2),
			getAllSymbolModifiers(allModifiers.maj),
		).map(modifier => (rootNote + modifier)),

		...combineModifiers(
			getAllSymbolModifiers(allModifiers.sus4),
			getAllSymbolModifiers(allModifiers.min),
		).map(modifier => (rootNote + modifier)),

		...combineModifiers(
			getAllSymbolModifiers(allModifiers.sus4),
			getAllSymbolModifiers(allModifiers.maj),
		).map(modifier => (rootNote + modifier)),

	])('%s', (input) => {
		test('should return null on invalid chords combinations', () => {
			expect(parseChord(input)).toBeNull();
		});
	});

});
