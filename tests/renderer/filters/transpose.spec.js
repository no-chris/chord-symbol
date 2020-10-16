import transpose from '../../../src/renderer/filters/transpose';
import chordParserFactory from '../../../src/parser/chordParserFactory';

describe.each([

	['C+1, #',  'C', 1,  false, 'C#'],
	['C+2, #',  'C', 2,  false, 'D'],
	['C+3, #',  'C', 3,  false, 'D#'],
	['C+4, #',  'C', 4,  false, 'E'],
	['C+5, #',  'C', 5,  false, 'F'],
	['C+6, #',  'C', 6,  false, 'F#'],
	['C+7, #',  'C', 7,  false, 'G'],
	['C+8, #',  'C', 8,  false, 'G#'],
	['C+9, #',  'C', 9,  false, 'A'],
	['C+10, #', 'C', 10, false, 'A#'],
	['C+11, #', 'C', 11, false, 'B'],
	['C+12, #', 'C', 12, false, 'C'],
	['C+13, #', 'C', 13, false, 'C#'],
	['C+23, #', 'C', 23, false, 'B'],
	['C+24, #', 'C', 24, false, 'C'],
	['C+25, #', 'C', 25, false, 'C#'],
	['C+36, #', 'C', 36, false, 'C'],

	['C+1, b',  'C', 1,  true,  'Db'],
	['C+2, b',  'C', 2,  true,  'D'],
	['C+3, b',  'C', 3,  true,  'Eb'],
	['C+4, b',  'C', 4,  true,  'E'],
	['C+5, b',  'C', 5,  true,  'F'],
	['C+6, b',  'C', 6,  true,  'Gb'],
	['C+7, b',  'C', 7,  true,  'G'],
	['C+8, b',  'C', 8,  true,  'Ab'],
	['C+9, b',  'C', 9,  true,  'A'],
	['C+10, b', 'C', 10, true,  'Bb'],
	['C+11, b', 'C', 11, true,  'B'],
	['C+12, b', 'C', 12, true,  'C'],
	['C+13, b', 'C', 13, true,  'Db'],
	['C+23, b', 'C', 23, true,  'B'],
	['C+24, b', 'C', 24, true,  'C'],
	['C+25, b', 'C', 25, true,  'Db'],
	['C+36, b', 'C', 36, true,  'C'],

	['C-1, #',  'C', -1,  false, 'B'],
	['C-2, #',  'C', -2,  false, 'A#'],
	['C-3, #',  'C', -3,  false, 'A'],
	['C-4, #',  'C', -4,  false, 'G#'],
	['C-5, #',  'C', -5,  false, 'G'],
	['C-6, #',  'C', -6,  false, 'F#'],
	['C-7, #',  'C', -7,  false, 'F'],
	['C-8, #',  'C', -8,  false, 'E'],
	['C-9, #',  'C', -9,  false, 'D#'],
	['C-10, #', 'C', -10, false, 'D'],
	['C-11, #', 'C', -11, false, 'C#'],
	['C-12, #', 'C', -12, false, 'C'],
	['C-13, #', 'C', -13, false, 'B'],
	['C-23, #', 'C', -23, false, 'C#'],
	['C-24, #', 'C', -24, false, 'C'],
	['C-25, #', 'C', -25, false, 'B'],
	['C-36, #', 'C', -36, false, 'C'],

	['C-1, b',  'C', -1,  true, 'B'],
	['C-2, b',  'C', -2,  true, 'Bb'],
	['C-3, b',  'C', -3,  true, 'A'],
	['C-4, b',  'C', -4,  true, 'Ab'],
	['C-5, b',  'C', -5,  true, 'G'],
	['C-6, b',  'C', -6,  true, 'Gb'],
	['C-7, b',  'C', -7,  true, 'F'],
	['C-8, b',  'C', -8,  true, 'E'],
	['C-9, b',  'C', -9,  true, 'Eb'],
	['C-10, b', 'C', -10, true, 'D'],
	['C-11, b', 'C', -11, true, 'Db'],
	['C-12, b', 'C', -12, true, 'C'],
	['C-13, b', 'C', -13, true, 'B'],
	['C-23, b', 'C', -23, true, 'Db'],
	['C-24, b', 'C', -24, true, 'C'],
	['C-25, b', 'C', -25, true, 'B'],
	['C-36, b', 'C', -36, true, 'C'],

	['C+7, #',  'C/G',   7, false, 'G',  'D'],
	['C#+7, #', 'C#/G#', 7, false, 'G#', 'D#'],
	['D+7, #',  'D/A',   7, false, 'A',  'E'],
	['D#+7, #', 'D#/A#', 7, false, 'A#', 'F'],
	['E+7, #',  'E/B',   7, false, 'B',  'F#'],
	['F+7, #',  'F/C',   7, false, 'C',  'G'],
	['F#+7, #', 'F#/C#', 7, false, 'C#', 'G#'],
	['G+7, #',  'G/D',   7, false, 'D',  'A'],
	['G#+7, #', 'G#/D#', 7, false, 'D#', 'A#'],
	['A+7, #',  'A/E',   7, false, 'E',  'B'],
	['A#+7, #', 'A#/F',  7, false, 'F',  'C'],
	['B+7, #',  'B/F#',  7, false, 'F#', 'C#'],

	['Cm7b5+7, #',  'Cm7b5', 7, false, 'G'],
	['A+ +3, #',  	'A+',  	 3, false, 'C'],

	['C#+0, b', 'C#', 0,  true,  'Db'],
	['Db+0, #', 'Db', 0,  false, 'C#'],

])('Transpose: %s', (title, symbol, value, useFlats, transposedRoot, transposedBass) => {
	test('Should convert ' + symbol + ' into ' + transposedRoot, () => {
		const parseChord = chordParserFactory();

		const chord = parseChord(symbol);

		const transposed = transpose(value, useFlats, chord);

		chord.normalized.rootNote = transposedRoot;
		chord.formatted.rootNote = transposedRoot;

		chord.normalized.bassNote = transposedBass;
		chord.formatted.bassNote = transposedBass;

		expect(transposed).toEqual(chord);
	});
});

describe.each([

	[ 'C13', 	'C13', 	0, false, 	['C', 'E', 'G', 'Bb', 'D', 'A'] ],
	[ 'C13', 	'C#13', 1, false, 	['C#', 'F', 'G#', 'B', 'D#', 'A#'] ],
	[ 'C13', 	'Db13', 1, true,	['Db', 'F', 'Ab', 'B', 'Eb', 'Bb'] ],
	[ 'C13', 	'D13', 	2, false, 	['D', 'F#', 'A', 'C', 'E', 'B'] ],
	[ 'Cm13', 	'Dm13', 2, false, 	['D', 'F', 'A', 'C', 'E', 'G', 'B'] ],
	[ 'C13', 	'D#13', 3, false, 	['D#', 'G', 'A#', 'C#', 'F', 'C'] ],
	[ 'C13', 	'Eb13', 3, true, 	['Eb', 'G', 'Bb', 'Db', 'F', 'C'] ],
	[ 'C13', 	'E13', 	4, false, 	['E', 'G#', 'B', 'D', 'F#', 'C#'] ],
	[ 'Cm13', 	'Em13', 4, false, 	['E', 'G', 'B', 'D', 'F#', 'A', 'C#'] ],
	[ 'C13', 	'F13',  5, false, 	['F', 'A', 'C', 'Eb', 'G', 'D'] ],
	[ 'Cm13', 	'Fm13', 5, false, 	['F', 'Ab', 'C', 'Eb', 'G', 'Bb', 'D'] ],
	[ 'C13', 	'F#13', 6, false, 	['F#', 'A#', 'C#', 'E', 'G#', 'D#'] ],
	[ 'C13', 	'Gb13', 6, true, 	['Gb', 'Bb', 'Db', 'E', 'Ab', 'Eb'] ],
	[ 'C13', 	'G13',  7, false, 	['G', 'B', 'D', 'F', 'A', 'E'] ],
	[ 'Cm13', 	'Gm13', 7, false, 	['G', 'Bb', 'D', 'F', 'A', 'C', 'E'] ],
	[ 'C13', 	'G#13', 8, false, 	['G#', 'C', 'D#', 'F#', 'A#', 'F'] ],
	[ 'C13', 	'Ab13', 8, true, 	['Ab', 'C', 'Eb', 'Gb', 'Bb', 'F'] ],
	[ 'C13', 	'A13',  9, false, 	['A', 'C#', 'E', 'G', 'B', 'F#'] ],
	[ 'C13m', 	'Am13', 9, false, 	['A', 'C', 'E', 'G', 'B', 'D', 'Gb'] ],
	[ 'C13', 	'A#13',10, false, 	['A#', 'D', 'F', 'G#', 'C', 'G'] ],
	[ 'C13', 	'Bb13',10, true, 	['Bb', 'D', 'F', 'Ab', 'C', 'G'] ],
	[ 'C13', 	'B13', 11, false, 	['B', 'D#', 'F#', 'A', 'C#', 'G#'] ],
	[ 'Cm13', 	'Bm13',11, false, 	['B', 'D', 'F#', 'A', 'C#', 'E', 'G#'] ],

])('Should also transpose chord notes', (chord, rendered, transposeValue, useFlats, notes) => {
	test(chord + ' +' + transposeValue + ' => ' + rendered + ' (' + notes.join(' ') + ')', () => {
		const parseChord = chordParserFactory();
		const parsed = parseChord(chord);

		const transposed = transpose(transposeValue, useFlats, parsed);

		expect(transposed.normalized.notes).toEqual(notes);
	});
});
