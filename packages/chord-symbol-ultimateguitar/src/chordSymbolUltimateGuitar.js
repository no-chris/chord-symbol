/**
 * Create a renderer filter function that modifies the rendered chord to be closer to the style used by Ultimate Guitar.
 * @returns {import("../../chord-symbol").CustomFilter} The filter function
 */
const chordSymbolUltimateGuitar = () => {
	return (chord) => {
		chord.formatted.symbol = chord.formatted.symbol
			.replace(/[() ]/g, '')
			.replace('mM', 'mMaj')
			.replace('°', 'dim');

		return chord;
	};
};

export default chordSymbolUltimateGuitar;
