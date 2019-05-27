/**
 * @param {Chord} chord
 * @returns {String}
 */
export default function textPrinter(chord) {
	let printed = chord.rootNote;

	if (chord.normalizedDescriptor) {
		const { quality, changes } = chord.normalizedDescriptor;
		if (quality) {
			printed += quality;
		}
		if (changes && changes.length) {
			printed += '(' + changes.join(',') + ')';
		}

	} else if (chord.descriptor) {
		printed += chord.descriptor;
	}

	if (chord.bassNote) {
		printed += '/' + chord.bassNote;
	}
	return printed;
}
