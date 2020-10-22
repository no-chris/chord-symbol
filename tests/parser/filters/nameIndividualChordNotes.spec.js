import chain from '../../../src/helpers/chain';
import { englishVariants } from '../../../src/dictionaries/notes';

import nameIndividualChordNotes from '../../../src/parser/filters/nameIndividualChordNotes';

import initChord from '../../../src/parser/filters/initChord';
import parseBase from '../../../src/parser/filters/parseBase';
import parseDescriptor from '../../../src/parser/filters/parseDescriptor';
import normalizeDescriptor from '../../../src/parser/filters/normalizeDescriptor';
import normalizeNotes from '../../../src/parser/filters/normalizeNotes';

import chordParserFactory from '../../../src/parser/chordParserFactory';

function parseChord(symbol) {
	const filters = [initChord.bind(null, {}), parseBase.bind(null, englishVariants), parseDescriptor.bind(null, {}), normalizeDescriptor, normalizeNotes, nameIndividualChordNotes];
	return chain(filters, symbol);
}

describe('nameIndividualChordNotes', () => {
	describe.each([
		// intervals check
		['C', ['C', 'E', 'G']],
		['C7', ['C', 'E', 'G', 'Bb']],
		['C9', ['C', 'E', 'G', 'Bb', 'D']],
		['C11', ['C', 'G', 'Bb', 'D', 'F']],
		['C13', ['C', 'E', 'G', 'Bb', 'D', 'A']],
		['Cm', ['C', 'Eb', 'G']],
		['Cm7', ['C', 'Eb', 'G', 'Bb']],
		['Cm9', ['C', 'Eb', 'G', 'Bb', 'D']],
		['Cm11', ['C', 'Eb', 'G', 'Bb', 'D', 'F']],
		['Cm13', ['C', 'Eb', 'G', 'Bb', 'D', 'F', 'A']],

		/**/
		// all starting notes check
		['C#13', ['C#', 'F', 'G#', 'B', 'D#', 'A#']],
		['Db13', ['Db', 'F', 'Ab', 'B', 'Eb', 'Bb']],
		['D13', ['D', 'F#', 'A', 'C', 'E', 'B']],
		['Dm13', ['D', 'F', 'A', 'C', 'E', 'G', 'B']],
		['D#13', ['D#', 'G', 'A#', 'C#', 'F', 'C']],
		['Eb13', ['Eb', 'G', 'Bb', 'Db', 'F', 'C']],
		['E13', ['E', 'G#', 'B', 'D', 'F#', 'C#']],
		['Em13', ['E', 'G', 'B', 'D', 'F#', 'A', 'C#']],
		['F13', ['F', 'A', 'C', 'Eb', 'G', 'D']],
		['Fm13', ['F', 'Ab', 'C', 'Eb', 'G', 'Bb', 'D']],
		['F#13', ['F#', 'A#', 'C#', 'E', 'G#', 'D#']],
		['Gb13', ['Gb', 'Bb', 'Db', 'E', 'Ab', 'Eb']],
		['G13', ['G', 'B', 'D', 'F', 'A', 'E']],
		['Gm13', ['G', 'Bb', 'D', 'F', 'A', 'C', 'E']],
		['G#13', ['G#', 'C', 'D#', 'F#', 'A#', 'F']],
		['Ab13', ['Ab', 'C', 'Eb', 'Gb', 'Bb', 'F']],
		['A13', ['A', 'C#', 'E', 'G', 'B', 'F#']],
		['Am13', ['A', 'C', 'E', 'G', 'B', 'D', 'Gb']],
		['A#13', ['A#', 'D', 'F', 'G#', 'C', 'G']],
		['Bb13', ['Bb', 'D', 'F', 'Ab', 'C', 'G']],
		['B13', ['B', 'D#', 'F#', 'A', 'C#', 'G#']],
		['Bm13', ['B', 'D', 'F#', 'A', 'C#', 'E', 'G#']],

		// all qualities, with #/b difference between major and min
		['D', ['D', 'F#', 'A']],
		['D6', ['D', 'F#', 'A', 'B']],
		['D7', ['D', 'F#', 'A', 'C']],
		['DM7', ['D', 'F#', 'A', 'C#']],
		['D+', ['D', 'F#', 'A#']],

		['Dm', ['D', 'F', 'A']],
		['Dm6', ['D', 'F', 'A', 'B']],
		['Dm7', ['D', 'F', 'A', 'C']],
		['DmM7', ['D', 'F', 'A', 'Db']],
		['D°', ['D', 'F', 'Ab']],
		['D°7', ['D', 'F', 'Ab', 'B']],

		/**/
	])('%s', (symbol, expectedNotes) => {
		test(symbol + ' is composed of: ' + expectedNotes.join(', '), () => {
			const chord = parseChord(symbol);

			expect(chord.normalized.notes).toEqual(expectedNotes);
		});
	});

	describe('global parser', () => {
		test('should include note filter', () => {
			const globalParseChord = chordParserFactory();
			const parsed = globalParseChord('C7');

			expect(parsed.normalized).toHaveProperty('notes');
			expect(parsed.normalized.notes).toEqual(['C', 'E', 'G', 'Bb']);
		});
	});
});
