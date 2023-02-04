import {
	notesSharp,
	sharpsToFlats,
	flatsToSharps,
} from '../../dictionaries/notes';

import nameIndividualChordNotes from '../../parser/filters/nameIndividualChordNotes';

export default function transpose(transposeValue, accidentals, chord) {
	const { rootNote, bassNote } = chord.normalized;

	const rootSharp = convertToSharp(rootNote);
	chord.normalized.rootNote = transposeNote(
		rootSharp,
		transposeValue,
		accidentals
	);
	chord.formatted.rootNote = chord.normalized.rootNote;

	if (bassNote) {
		const bassSharp = convertToSharp(bassNote);
		chord.normalized.bassNote = transposeNote(
			bassSharp,
			transposeValue,
			accidentals
		);
		chord.formatted.bassNote = chord.normalized.bassNote;
	}

	return nameIndividualChordNotes(chord);
}

function transposeNote(note, value, accidentals) {
	const noteIndex = notesSharp.indexOf(note);
	const transposedIndex = noteIndex + value;

	const octaves = Math.floor(transposedIndex / 12);
	const correctedTransposedIndex = transposedIndex - octaves * 12;

	const transposed = notesSharp[correctedTransposedIndex];

	return accidentals === 'flat'
		? sharpsToFlats[transposed] || transposed
		: transposed;
}

function convertToSharp(note) {
	return flatsToSharps[note] || note;
}
