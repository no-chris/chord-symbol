import combineModifiers from './helpers/combineModifiers';
import getAllSymbolModifiers from '../../src/getAllSymbolModifiers';

import allModifiers from '../../src/allModifiers';

import parseChord from '../../src/parseChord';


describe('Combined modifiers', () => {
	const rootNote = 'G#';

	describe.each([
		...combineModifiers(
			getAllSymbolModifiers(allModifiers.sus2),
			getAllSymbolModifiers(allModifiers.sus),
		).map(modifier => [
			rootNote + modifier, ['1', '4', '5', '9']
		]),

		...combineModifiers(
			getAllSymbolModifiers(allModifiers.mi),
			getAllSymbolModifiers(allModifiers.add2),
			getAllSymbolModifiers(allModifiers.ninthFlat),
		).map(modifier => [
			rootNote + modifier, ['1', 'b3', '5', 'b9']
		]),

		...combineModifiers(
			getAllSymbolModifiers(allModifiers.maj),
			getAllSymbolModifiers(allModifiers.add4),
			getAllSymbolModifiers(allModifiers.dom9),
		).map(modifier => [
			rootNote + modifier, ['1', '3', '4', '5', 'b7', '9']
		]),

		...combineModifiers(
			getAllSymbolModifiers(allModifiers.sus2),
			getAllSymbolModifiers(allModifiers.add6),
			getAllSymbolModifiers(allModifiers.ninthSharp),
		).map(modifier => [
			rootNote + modifier, ['1', '5', '6', '#9']
		]),

		...combineModifiers(
			getAllSymbolModifiers(allModifiers.sus4),
			getAllSymbolModifiers(allModifiers.dom7),
			getAllSymbolModifiers(allModifiers.dom11),
		).map(modifier => [
			rootNote + modifier, ['1', '4', '5', 'b7', '9', '11']
		]),

		...combineModifiers(
			getAllSymbolModifiers(allModifiers.fifthFlat),
			getAllSymbolModifiers(allModifiers.dom7),
			getAllSymbolModifiers(allModifiers.eleventhSharp),
		).map(modifier => [
			rootNote + modifier, ['1', '3', 'b5', 'b7', '#11']
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
			getAllSymbolModifiers(allModifiers.dom13),
		).map(modifier => [
			rootNote + modifier, ['1', 'b3', '#5', 'b7', '9', '11', '13']
		]),

	])('%s', (input, intervals) => {
		test('should yield ' + intervals.join(' '), () => {
			const parsed = parseChord(input);
			expect(parsed.intervals).toEqual(intervals);
		});
	});

});
