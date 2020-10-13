import chordParserFactory from '../../src/parser/chordParserFactory';

import { allVariants as allNotesVariants } from '../../src/dictionaries/notes';
import { allVariants as allModifiersVariants } from '../../src/dictionaries/modifiers';

describe('Module', () => {
	test('Should expose a function', () => {
		expect(chordParserFactory).toBeInstanceOf(Function);
	});
	test('Factory should return a function', () => {
		const parseChord = chordParserFactory();
		expect(parseChord).toBeInstanceOf(Function);
	});
});

describe('ambiguous rootNote', () => {
	const allCases = [];

	let modifierFirstLetter;
	let noteConflict;
	let symbol;

	allNotesVariants.forEach(noteVariant => {
		allModifiersVariants.forEach(modifierVariant => {
			modifierFirstLetter = modifierVariant[0];
			noteConflict = noteVariant + modifierFirstLetter;

			if (!['♭', 'b', '♯', '#'].includes(modifierFirstLetter) && allNotesVariants.includes(noteConflict)) {
				symbol = noteVariant + modifierVariant;
				allCases.push([
					symbol + ' conflict with: ' + noteConflict,
					symbol,
					noteVariant,
					modifierVariant
				]);
			}
		});
	});

	describe.each(allCases)('%s', (title, input, rootNote, descriptor) => {
		test('is  parsed ' + rootNote + ' + ' + descriptor, () => {
			const parseChord = chordParserFactory();
			const chord = parseChord(input);
			expect(chord.input.rootNote).toBe(rootNote);
			expect(chord.input.descriptor).toBe(descriptor);
		});
	});

});

describe('invalid chords', () => {
	describe.each([

		// wrong notes or descriptors
		[ 'I' ],
		[ 'I/A' ],
		[ 'Im' ],
		[ 'A6/Z' ],
		[ 'Ame' ],
		[ 'Amad7' ],
		[ 'America' ],
		[ 'A(' ],
		[ 'A((' ],
		[ 'A()(' ],
		[ 'A/' ],
		[ 'A(,,)' ],
		[ 'A,,' ],
		[ 'A..' ],
		[ 'Am..' ],
		[ 'A..m' ],
		[ 'A7.mb5' ],
		[ 'A7/mb5/G' ],
		[ 'A,b97' ],
		[ 'A7,mb5/G' ],

		// Invalid intervals combos
		[ 'Cm(add3)' ],
		[ 'C11sus4' ],
		[ 'C7M7' ],
		[ 'C(b9)(add9)' ],
		[ 'C(#9)(add9)' ],
		[ 'C(#11)(add11)' ],
		[ 'C(b13)(add13)' ],

	])('%s', (symbol) => {
		test('should return null', () => {
			const parseChord = chordParserFactory();
			const parsed = parseChord(symbol);
			expect(parsed).toBeNull();
		});
	});
});

