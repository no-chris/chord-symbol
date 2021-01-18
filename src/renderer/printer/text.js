/**
 * @param {Chord} chord
 * @returns {String}
 */
export default function textPrinter(chord) {
	if (chord) {
		const {
			rootNote,
			bassNote,
			descriptor,
			chordChanges,
		} = chord.formatted;

		let printed = rootNote;

		if (descriptor) {
			printed += descriptor;
		}
		if (chordChanges && chordChanges.length) {
			printed += '(' + chordChanges.join(',') + ')';
		}
		if (bassNote) {
			printed += '/' + bassNote;
		}

		return printed;
	}
	return null;
}
