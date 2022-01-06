/**
 * Render the chord by assembling all its components
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
export default function formatSymbol(chord) {
	const { rootNote, bassNote, descriptor, chordChanges } = chord.formatted;

	let symbol = rootNote;

	if (descriptor) {
		symbol += descriptor;
	}
	if (chordChanges && chordChanges.length) {
		symbol += '(' + chordChanges.join(',') + ')';
	}
	if (bassNote) {
		symbol += '/' + bassNote;
	}

	chord.formatted.symbol = symbol;

	return chord;
}
