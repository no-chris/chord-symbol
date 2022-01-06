import { notes } from '../../dictionaries/notes';
import { majorQualities } from '../../dictionaries/qualities';

const notesSharp = [
	notes.A,
	notes.ASharp,
	notes.B,
	notes.C,
	notes.CSharp,
	notes.D,
	notes.DSharp,
	notes.E,
	notes.F,
	notes.FSharp,
	notes.G,
	notes.GSharp,
];

const notesFlat = [
	notes.A,
	notes.BFlat,
	notes.B,
	notes.C,
	notes.DFlat,
	notes.D,
	notes.EFlat,
	notes.E,
	notes.F,
	notes.GFlat,
	notes.G,
	notes.AFlat,
];

const rootNoteToScaleAccidentals = {
	[notes.C]: { maj: 'flat', min: 'flat' },
	[notes.CSharp]: { maj: 'sharp', min: 'sharp' },
	[notes.DFlat]: { maj: 'flat', min: 'flat' },
	[notes.D]: { maj: 'sharp', min: 'flat' },
	[notes.DSharp]: { maj: 'sharp', min: 'sharp' },
	[notes.EFlat]: { maj: 'flat', min: 'flat' },
	[notes.E]: { maj: 'sharp', min: 'sharp' },
	[notes.F]: { maj: 'flat', min: 'flat' },
	[notes.FSharp]: { maj: 'sharp', min: 'sharp' },
	[notes.GFlat]: { maj: 'flat', min: 'flat' },
	[notes.G]: { maj: 'sharp', min: 'flat' },
	[notes.GSharp]: { maj: 'sharp', min: 'sharp' },
	[notes.AFlat]: { maj: 'flat', min: 'flat' },
	[notes.A]: { maj: 'sharp', min: 'flat' },
	[notes.ASharp]: { maj: 'sharp', min: 'sharp' },
	[notes.BFlat]: { maj: 'flat', min: 'flat' },
	[notes.B]: { maj: 'sharp', min: 'sharp' },
};

/**
 * Convert intervals in actual notes.
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
export default function nameIndividualChordNotes(chord) {
	const rootNote = chord.normalized.rootNote;
	const semitones = chord.normalized.semitones;
	const quality = chord.normalized.quality;

	const minMaj = majorQualities.includes(quality) ? 'maj' : 'min';
	const refNotes =
		rootNoteToScaleAccidentals[rootNote][minMaj] === 'sharp'
			? notesSharp
			: notesFlat;

	const rootNoteIndex = refNotes.indexOf(rootNote);
	const indexedNotes = [
		...refNotes.slice(rootNoteIndex),
		...refNotes.slice(0, rootNoteIndex),
		// repeating...
		...refNotes.slice(rootNoteIndex),
		...refNotes.slice(0, rootNoteIndex),
	];

	const chordNotes = semitones.map((i) => indexedNotes[i]);

	chord.normalized.notes = chordNotes;

	return chord;
}
