import initChord from '../../../src/parser/filters/initChord';
import parseBase from '../../../src/parser/filters/parseBase';

import {
	englishVariants,
	germanVariants,
} from '../../../src/dictionaries/notes';
import { NoSymbolFoundError } from '../../../src/helpers/ChordParsingError';

describe('Basic parsing: rootNote, descriptor & bassNote', () => {
	describe.each([
		['A', 'A'],
		['Am', 'A', 'm'],
		['Am7', 'A', 'm7'],
		['A/F#', 'A', undefined, 'F#'],
		['Am7/F#', 'A', 'm7', 'F#'],
		['A6/9', 'A', '6/9'],
		['A6/9/G', 'A', '6/9', 'G'],
		['A(add 9)', 'A', '(add 9)'],
		['Adim.', 'A', 'dim.'],
		['A° add ma7', 'A', '° add ma7'],
		['Abb97', 'Ab', 'b97'],
	])('%s', (symbol, rootNote, descriptor, bassNote) => {
		test(`rootNote: '${rootNote}', descriptor: '${descriptor}', bassNote: '${bassNote}'`, () => {
			const chord = initChord({}, symbol);
			const parsed = parseBase(englishVariants, chord).input;

			expect(parsed.symbol).toBe(symbol);
			expect(parsed.rootNote).toBe(rootNote);
			expect(parsed.descriptor).toBe(descriptor);
			expect(parsed.bassNote).toBe(bassNote);
		});
	});
});

describe('German notes', () => {
	describe.each([
		['A♯', 'A♯'],
		['A#', 'A#'],
		['Ais', 'Ais'],
		['Hb', 'Hb'],
		['H♭', 'H♭'],
		['Hes', 'Hes'],
		['Hes/F#', 'Hes', 'F#'],
		['H/H#', 'H', 'H#'],
		['H/Hb', 'H', 'Hb'],
	])(`%s`, (symbol, rootNote, bassNote) => {
		test('is correctly parsed in German notation', () => {
			const chord = initChord({}, symbol);
			const parsed = parseBase(germanVariants, chord).input;

			expect(parsed.symbol).toBe(symbol);
			expect(parsed.rootNote).toBe(rootNote);
			expect(parsed.bassNote).toBe(bassNote);
		});
	});
});

describe('invalid chords', () => {
	describe.each([['I'], ['I/A'], ['Im']])('%s', (symbol) => {
		test('should throw a NoSymbolFoundError ', () => {
			const chord = initChord({}, symbol);

			const shouldThrow = () => {
				parseBase(englishVariants, chord);
			};

			expect(shouldThrow).toThrowError();
			expect(shouldThrow).toThrow(NoSymbolFoundError);
			expect(shouldThrow).toThrow(
				`"${symbol}" does not seems to be a chord`
			);
		});
	});
});
