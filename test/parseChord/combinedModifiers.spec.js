import combineModifiers from './helpers/combineModifiers';
import getAllSymbolModifiers from './helpers/getAllSymbolModifiers';

import allModifiers from '../../src/allModifiers';
import degreesToIntervals from '../../src/degreesToIntervals';

import parseChord from '../../src/parseChord';


describe('Combined modifiers', () => {
	const rootNote = 'G#';

	describe.each([
		...combineModifiers(
			getAllSymbolModifiers(allModifiers.sus2),
			getAllSymbolModifiers(allModifiers.sus4),
		).map(modifier => [
			rootNote + modifier, ['1', '2', '4', '5']
		]),

		...combineModifiers(
			getAllSymbolModifiers(allModifiers.min),
			getAllSymbolModifiers(allModifiers.add2),
			getAllSymbolModifiers(allModifiers.ninthFlat),
		).map(modifier => [
			rootNote + modifier, ['1', '2', 'b3', '5', 'b7', 'b9']
		]),

		...combineModifiers(
			getAllSymbolModifiers(allModifiers.maj),
			getAllSymbolModifiers(allModifiers.add4),
			getAllSymbolModifiers(allModifiers.ninth),
		).map(modifier => [
			rootNote + modifier, ['1', '3', '4', '5', 'b7', '9']
		]),

		...combineModifiers(
			getAllSymbolModifiers(allModifiers.sus2),
			getAllSymbolModifiers(allModifiers.add6),
			getAllSymbolModifiers(allModifiers.ninthSharp),
		).map(modifier => [
			rootNote + modifier, ['1', '2', '5', '6', 'b7', '#9']
		]),

		...combineModifiers(
			getAllSymbolModifiers(allModifiers.sus4),
			getAllSymbolModifiers(allModifiers.seventhFlat),
			getAllSymbolModifiers(allModifiers.eleventh),
		).map(modifier => [
			rootNote + modifier, ['1', '4', '5', 'b7', '9', '11']
		]),

		...combineModifiers(
			getAllSymbolModifiers(allModifiers.fifthFlat),
			getAllSymbolModifiers(allModifiers.seventh),
			getAllSymbolModifiers(allModifiers.eleventhSharp),
		).map(modifier => [
			rootNote + modifier, ['1', '3', 'b5', '7', '9', '#11']
		]),

		...combineModifiers(
			getAllSymbolModifiers(allModifiers.min),
			getAllSymbolModifiers(allModifiers.fifthSharp),
			getAllSymbolModifiers(allModifiers.thirteenthFlat),
		).map(modifier => [
			rootNote + modifier, ['1', 'b3', '#5', 'b7', '9', '11', 'b13']
		]),

		...combineModifiers(
			getAllSymbolModifiers(allModifiers.min),
			getAllSymbolModifiers(allModifiers.fifthSharp),
			getAllSymbolModifiers(allModifiers.thirteenth),
		).map(modifier => [
			rootNote + modifier, ['1', 'b3', '#5', 'b7', '9', '11', '13']
		]),

	])('%s', (input, degrees) => {
		test('should detect correct intervals', () => {
			const parsed = parseChord(input);
			const intervals = degrees.map(degree => degreesToIntervals[degree]);
			expect(parsed.intervals).toEqual(intervals);
		});
	});

});
