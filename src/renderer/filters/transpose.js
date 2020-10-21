import _invert from 'lodash/invert';

import nameIndividualChordNotes from '../../parser/filters/nameIndividualChordNotes';

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const sharpsToFlats = {
	'C#': 'Db',
	'D#': 'Eb',
	'F#': 'Gb',
	'G#': 'Ab',
	'A#': 'Bb',
};

const flatsToSharps = _invert(sharpsToFlats);

export default function transpose(transposeValue, useFlats, chord) {
	const { rootNote, bassNote } = chord.normalized;

	const rootSharp = convertToSharp(rootNote);
	chord.normalized.rootNote = transposeNote(
		rootSharp,
		transposeValue,
		useFlats
	);
	chord.formatted.rootNote = chord.normalized.rootNote;

	if (bassNote) {
		const bassSharp = convertToSharp(bassNote);
		chord.normalized.bassNote = transposeNote(
			bassSharp,
			transposeValue,
			useFlats
		);
		chord.formatted.bassNote = chord.normalized.bassNote;
	}

	return nameIndividualChordNotes(chord);
}

function transposeNote(note, value, useFlats) {
	const noteIndex = notes.indexOf(note);
	const transposedIndex = noteIndex + value;

	const octaves = Math.floor(transposedIndex / 12);
	const correctedTransposedIndex = transposedIndex - octaves * 12;

	const transposed = notes[correctedTransposedIndex];

	return useFlats ? sharpsToFlats[transposed] || transposed : transposed;
}

function convertToSharp(note) {
	return flatsToSharps[note] || note;
}
