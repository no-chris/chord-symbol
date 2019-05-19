import parseChord from './parseChord';


class Chord  {
	constructor(symbol) {
		this.symbol = symbol;
		this.parsed = parseChord(symbol);
	}

	getSymbol() {
		return this.symbol;
	}

	getNormalizedSymbol() {

	}
}

export function fromSymbol(symbol) {
	return new Chord(symbol);
}

