import _ from 'lodash';
import cartesian from 'cartesian';
import getPermutations from 'get-permutations';

import allModifiers from '../../src/allModifiers';
import symbolsToModifiers from '../../src/symbolsToModifiers';
import degreesToIntervals from '../../src/degreesToIntervals';

import parseChord from '../../src/parseChord';

function getAllSymbolModifiers(modifier) {
	return _.chain(symbolsToModifiers)
		.pickBy(v => v === modifier)
		.keys()
		.value();
}

function combineModifiers() {
	return getPermutations([...arguments])
		.map(permutation => cartesian(permutation))
		.map(permutationProducts => permutationProducts.map(product => product.join('')))
		.flat()
		.map(modifier => (['b', '♭', '#', '♯'].includes(modifier[0]) ? `(${modifier})` : modifier))
		.sort();
}

describe('Test helpers', () => {
	describe('combineModifiers()', () => {
		test('Should create all possible combinations of given modifiers', () => {
			const combined = combineModifiers(
				['sus', 'sus4'],
				['M7', 'Maj7'],
				['2', 'add2'],
			);
			const expected = [
				'susM72',
				'susM7add2',
				'susMaj72',
				'susMaj7add2',
				'sus4M72',
				'sus4M7add2',
				'sus4Maj72',
				'sus4Maj7add2',

				'sus2M7',
				'susadd2M7',
				'sus2Maj7',
				'susadd2Maj7',
				'sus42M7',
				'sus4add2M7',
				'sus42Maj7',
				'sus4add2Maj7',

				'M7sus2',
				'M7susadd2',
				'M7sus42',
				'M7sus4add2',
				'Maj7sus2',
				'Maj7susadd2',
				'Maj7sus42',
				'Maj7sus4add2',

				'M72sus',
				'M72sus4',
				'M7add2sus',
				'M7add2sus4',
				'Maj72sus',
				'Maj72sus4',
				'Maj7add2sus',
				'Maj7add2sus4',

				'2M7sus',
				'2M7sus4',
				'2Maj7sus',
				'2Maj7sus4',
				'add2M7sus',
				'add2M7sus4',
				'add2Maj7sus',
				'add2Maj7sus4',

				'2susM7',
				'2susMaj7',
				'2sus4M7',
				'2sus4Maj7',
				'add2susM7',
				'add2susMaj7',
				'add2sus4M7',
				'add2sus4Maj7',
			].sort();

			expect(combined).toEqual(expected);
		});

		test('should wrap modifier in parenthesis if it starts with an accidental', () => {
			const combined = combineModifiers(
				['b9', '♭9'],
				['#11', '♯11'],
			);
			const expected = [
				'(b9#11)',
				'(b9♯11)',
				'(♭9#11)',
				'(♭9♯11)',
				'(#11b9)',
				'(#11♭9)',
				'(♯11b9)',
				'(♯11♭9)',
			].sort();

			expect(combined).toEqual(expected);
		});
	});

	describe('getAllSymbolModifiers()', () => {
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
