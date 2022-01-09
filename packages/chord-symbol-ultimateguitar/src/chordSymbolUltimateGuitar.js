const chordSymbolUltimateGuitar = () => {
	return (chord) => {
		chord.formatted.symbol = chord.formatted.symbol
			.replace(/[ ()]/g, '')
			.replace('°', 'dim')
			.replace('mM', 'mMa');

		return chord;
	};
};

export default chordSymbolUltimateGuitar;
