import transpose from '../../../src/renderer/filters/transpose';
import chordParserFactory from '../../../src/parser/chordParserFactory';

describe.each([
	['C+1, #', 'C', 1, 'sharp', 'C#'],
	['C+2, #', 'C', 2, 'sharp', 'D'],
	['C+3, #', 'C', 3, 'sharp', 'D#'],
	['C+4, #', 'C', 4, 'sharp', 'E'],
	['C+5, #', 'C', 5, 'sharp', 'F'],
	['C+6, #', 'C', 6, 'sharp', 'F#'],
	['C+7, #', 'C', 7, 'sharp', 'G'],
	['C+8, #', 'C', 8, 'sharp', 'G#'],
	['C+9, #', 'C', 9, 'sharp', 'A'],
	['C+10, #', 'C', 10, 'sharp', 'A#'],
	['C+11, #', 'C', 11, 'sharp', 'B'],
	['C+12, #', 'C', 12, 'sharp', 'C'],
	['C+13, #', 'C', 13, 'sharp', 'C#'],
	['C+23, #', 'C', 23, 'sharp', 'B'],
	['C+24, #', 'C', 24, 'sharp', 'C'],
	['C+25, #', 'C', 25, 'sharp', 'C#'],
	['C+36, #', 'C', 36, 'sharp', 'C'],

	['C+1, b', 'C', 1, 'flat', 'Db'],
	['C+2, b', 'C', 2, 'flat', 'D'],
	['C+3, b', 'C', 3, 'flat', 'Eb'],
	['C+4, b', 'C', 4, 'flat', 'E'],
	['C+5, b', 'C', 5, 'flat', 'F'],
	['C+6, b', 'C', 6, 'flat', 'Gb'],
	['C+7, b', 'C', 7, 'flat', 'G'],
	['C+8, b', 'C', 8, 'flat', 'Ab'],
	['C+9, b', 'C', 9, 'flat', 'A'],
	['C+10, b', 'C', 10, 'flat', 'Bb'],
	['C+11, b', 'C', 11, 'flat', 'B'],
	['C+12, b', 'C', 12, 'flat', 'C'],
	['C+13, b', 'C', 13, 'flat', 'Db'],
	['C+23, b', 'C', 23, 'flat', 'B'],
	['C+24, b', 'C', 24, 'flat', 'C'],
	['C+25, b', 'C', 25, 'flat', 'Db'],
	['C+36, b', 'C', 36, 'flat', 'C'],

	['C-1, #', 'C', -1, 'sharp', 'B'],
	['C-2, #', 'C', -2, 'sharp', 'A#'],
	['C-3, #', 'C', -3, 'sharp', 'A'],
	['C-4, #', 'C', -4, 'sharp', 'G#'],
	['C-5, #', 'C', -5, 'sharp', 'G'],
	['C-6, #', 'C', -6, 'sharp', 'F#'],
	['C-7, #', 'C', -7, 'sharp', 'F'],
	['C-8, #', 'C', -8, 'sharp', 'E'],
	['C-9, #', 'C', -9, 'sharp', 'D#'],
	['C-10, #', 'C', -10, 'sharp', 'D'],
	['C-11, #', 'C', -11, 'sharp', 'C#'],
	['C-12, #', 'C', -12, 'sharp', 'C'],
	['C-13, #', 'C', -13, 'sharp', 'B'],
	['C-23, #', 'C', -23, 'sharp', 'C#'],
	['C-24, #', 'C', -24, 'sharp', 'C'],
	['C-25, #', 'C', -25, 'sharp', 'B'],
	['C-36, #', 'C', -36, 'sharp', 'C'],

	['C-1, b', 'C', -1, 'flat', 'B'],
	['C-2, b', 'C', -2, 'flat', 'Bb'],
	['C-3, b', 'C', -3, 'flat', 'A'],
	['C-4, b', 'C', -4, 'flat', 'Ab'],
	['C-5, b', 'C', -5, 'flat', 'G'],
	['C-6, b', 'C', -6, 'flat', 'Gb'],
	['C-7, b', 'C', -7, 'flat', 'F'],
	['C-8, b', 'C', -8, 'flat', 'E'],
	['C-9, b', 'C', -9, 'flat', 'Eb'],
	['C-10, b', 'C', -10, 'flat', 'D'],
	['C-11, b', 'C', -11, 'flat', 'Db'],
	['C-12, b', 'C', -12, 'flat', 'C'],
	['C-13, b', 'C', -13, 'flat', 'B'],
	['C-23, b', 'C', -23, 'flat', 'Db'],
	['C-24, b', 'C', -24, 'flat', 'C'],
	['C-25, b', 'C', -25, 'flat', 'B'],
	['C-36, b', 'C', -36, 'flat', 'C'],

	['C+7, #', 'C/G', 7, 'sharp', 'G', 'D'],
	['C#+7, #', 'C#/G#', 7, 'sharp', 'G#', 'D#'],
	['D+7, #', 'D/A', 7, 'sharp', 'A', 'E'],
	['D#+7, #', 'D#/A#', 7, 'sharp', 'A#', 'F'],
	['E+7, #', 'E/B', 7, 'sharp', 'B', 'F#'],
	['F+7, #', 'F/C', 7, 'sharp', 'C', 'G'],
	['F#+7, #', 'F#/C#', 7, 'sharp', 'C#', 'G#'],
	['G+7, #', 'G/D', 7, 'sharp', 'D', 'A'],
	['G#+7, #', 'G#/D#', 7, 'sharp', 'D#', 'A#'],
	['A+7, #', 'A/E', 7, 'sharp', 'E', 'B'],
	['A#+7, #', 'A#/F', 7, 'sharp', 'F', 'C'],
	['B+7, #', 'B/F#', 7, 'sharp', 'F#', 'C#'],

	['Cm7b5+7, #', 'Cm7b5', 7, 'sharp', 'G'],
	['A+ +3, #', 'A+', 3, 'sharp', 'C'],

	['C#+0, b', 'C#', 0, 'flat', 'Db'],
	['Db+0, #', 'Db', 0, 'sharp', 'C#'],
])(
	'Transpose: %s',
	(title, symbol, value, accidentals, transposedRoot, transposedBass) => {
		test('Should convert ' + symbol + ' into ' + transposedRoot, () => {
			const parseChord = chordParserFactory();

			const chord = parseChord(symbol);

			const transposed = transpose(value, accidentals, chord);

			chord.normalized.rootNote = transposedRoot;
			chord.formatted.rootNote = transposedRoot;

			chord.normalized.bassNote = transposedBass;
			chord.formatted.bassNote = transposedBass;

			expect(transposed).toEqual(chord);
		});
	}
);

describe.each([
	['C13', 'C13', 0, 'sharp', ['C', 'E', 'G', 'Bb', 'D', 'A']],
	['C13', 'C#13', 1, 'sharp', ['C#', 'F', 'G#', 'B', 'D#', 'A#']],
	['C13', 'Db13', 1, 'flat', ['Db', 'F', 'Ab', 'B', 'Eb', 'Bb']],
	['C13', 'D13', 2, 'sharp', ['D', 'F#', 'A', 'C', 'E', 'B']],
	['Cm13', 'Dm13', 2, 'sharp', ['D', 'F', 'A', 'C', 'E', 'G', 'B']],
	['C13', 'D#13', 3, 'sharp', ['D#', 'G', 'A#', 'C#', 'F', 'C']],
	['C13', 'Eb13', 3, 'flat', ['Eb', 'G', 'Bb', 'Db', 'F', 'C']],
	['C13', 'E13', 4, 'sharp', ['E', 'G#', 'B', 'D', 'F#', 'C#']],
	['Cm13', 'Em13', 4, 'sharp', ['E', 'G', 'B', 'D', 'F#', 'A', 'C#']],
	['C13', 'F13', 5, 'sharp', ['F', 'A', 'C', 'Eb', 'G', 'D']],
	['Cm13', 'Fm13', 5, 'sharp', ['F', 'Ab', 'C', 'Eb', 'G', 'Bb', 'D']],
	['C13', 'F#13', 6, 'sharp', ['F#', 'A#', 'C#', 'E', 'G#', 'D#']],
	['C13', 'Gb13', 6, 'flat', ['Gb', 'Bb', 'Db', 'E', 'Ab', 'Eb']],
	['C13', 'G13', 7, 'sharp', ['G', 'B', 'D', 'F', 'A', 'E']],
	['Cm13', 'Gm13', 7, 'sharp', ['G', 'Bb', 'D', 'F', 'A', 'C', 'E']],
	['C13', 'G#13', 8, 'sharp', ['G#', 'C', 'D#', 'F#', 'A#', 'F']],
	['C13', 'Ab13', 8, 'flat', ['Ab', 'C', 'Eb', 'Gb', 'Bb', 'F']],
	['C13', 'A13', 9, 'sharp', ['A', 'C#', 'E', 'G', 'B', 'F#']],
	['C13m', 'Am13', 9, 'sharp', ['A', 'C', 'E', 'G', 'B', 'D', 'Gb']],
	['C13', 'A#13', 10, 'sharp', ['A#', 'D', 'F', 'G#', 'C', 'G']],
	['C13', 'Bb13', 10, 'flat', ['Bb', 'D', 'F', 'Ab', 'C', 'G']],
	['C13', 'B13', 11, 'sharp', ['B', 'D#', 'F#', 'A', 'C#', 'G#']],
	['Cm13', 'Bm13', 11, 'sharp', ['B', 'D', 'F#', 'A', 'C#', 'E', 'G#']],
])(
	'Should also transpose chord notes',
	(chord, rendered, transposeValue, accidentals, notes) => {
		test(
			chord +
				' +' +
				transposeValue +
				' => ' +
				rendered +
				' (' +
				notes.join(' ') +
				')',
			() => {
				const parseChord = chordParserFactory();
				const parsed = parseChord(chord);

				const transposed = transpose(
					transposeValue,
					accidentals,
					parsed
				);

				expect(transposed.normalized.notes).toEqual(notes);
			}
		);
	}
);
