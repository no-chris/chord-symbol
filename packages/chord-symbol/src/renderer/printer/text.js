/**
 * @param {Chord} chord
 * @returns {String}
 */
export default function textPrinter(chord) {
	return chord && chord.formatted && chord.formatted.symbol
		? chord.formatted.symbol
		: null;
}
