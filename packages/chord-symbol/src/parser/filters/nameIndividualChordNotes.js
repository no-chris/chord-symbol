import { minorQualities } from '../../dictionaries/qualities';
import { notesSharp, notesFlat } from '../../dictionaries/notes';
import { getScaleAccidental } from '../../dictionaries/scales';

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

	let scale = rootNote;
	if (minorQualities.includes(quality)) {
		scale += 'm';
	}
	const refNotes =
		getScaleAccidental(scale) === 'sharp' ? notesSharp : notesFlat;

	const rootNoteIndex = refNotes.indexOf(rootNote);
	const indexedNotes = [
		...refNotes.slice(rootNoteIndex),
		...refNotes.slice(0, rootNoteIndex),
		// repeating...
		...refNotes.slice(rootNoteIndex),
		...refNotes.slice(0, rootNoteIndex),
	];

	chord.normalized.notes = semitones.map((i) => indexedNotes[i]);

	return chord;
}
