/**
 * @param {String[]} noteVariants
 * @param {Chord} chord
 * @returns {Chord|null}
 */
export default function parseBase(noteVariants, chord) {
	const { symbol } = chord.input;
	const notesRegex = noteVariants.join('|');
	const notesAndDescriptorRegex = new RegExp(
		'^' +
			'(' +
			notesRegex +
			')' +
			'(.*?)' +
			'(/(' +
			notesRegex +
			'))?' +
			'$'
	);
	const result = symbol.match(notesAndDescriptorRegex);

	if (result && result[1]) {
		chord.input.rootNote = result[1];

		if (result[2]) {
			chord.input.descriptor = result[2];
		}
		if (result[4]) {
			chord.input.bassNote = result[4];
		}
		return chord;
	} else {
		return null;
	}
}
