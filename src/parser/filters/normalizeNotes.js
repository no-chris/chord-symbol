import { variantsToNotes } from '../../dics/allNotes';

export default function normalizeNotes(chord) {
	chord.normalized.rootNote = variantsToNotes[chord.input.rootNote];

	if (chord.input.bassNote) {
		chord.normalized.bassNote = variantsToNotes[chord.input.bassNote];
	}

	return chord;
}
