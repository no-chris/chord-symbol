/**
 * @param {String} symbol
 * @returns {Chord}
 */
export default function initChord(symbol) {
	return {
		input: {
			symbol,
		},
		normalized: {},
		formatted: {},
	};
}
