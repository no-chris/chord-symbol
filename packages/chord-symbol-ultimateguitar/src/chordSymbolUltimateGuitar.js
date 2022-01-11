const chordSymbolUltimateGuitar = () => {
	return (chord) => {
		chord.formatted.symbol = chord.formatted.symbol
			.replace(/[() ]/g, '')
			.replace('°', 'dim');

		return chord;
	};
};

export default chordSymbolUltimateGuitar;
