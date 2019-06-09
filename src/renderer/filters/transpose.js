import _invert from 'lodash/invert';

const notes = [
	'C',
	'C#',
	'D',
	'D#',
	'E',
	'F',
	'F#',
	'G',
	'G#',
	'A',
	'A#',
	'B',
];

const sharpsToFlats = {
	'C#': 'Db',
	'D#': 'Eb',
	'F#': 'Gb',
	'G#': 'Ab',
	'A#': 'Bb',
};

const flatsToSharps = _invert(sharpsToFlats);

export default function transpose(transposeValue, useFlats, chord) {
	const { rootNote, bassNote } = chord.formatted;

	const rootSharp = convertToSharp(rootNote);
	chord.formatted.rootNote = transposeNote(rootSharp, transposeValue, useFlats);

	if (bassNote) {
		const bassSharp = convertToSharp(bassNote);
		chord.formatted.bassNote = transposeNote(bassSharp, transposeValue, useFlats);
	}

	return chord;
}

function transposeNote(note, value, useFlats) {
	const noteIndex = notes.indexOf(note);
	const transposedIndex = noteIndex + value;

	const octaves = Math.floor(transposedIndex / 12);
	const correctedTransposedIndex = transposedIndex - (octaves * 12);

	const transposed = notes[correctedTransposedIndex];

	return (useFlats)
		? sharpsToFlats[transposed] || transposed
		: transposed;
}

function convertToSharp(note) {
	return flatsToSharps[note] || note;
}
