class ChordSymbolError extends Error {
	constructor(message, chord, errorName = 'ChordSymbolError') {
		super(message);
		this.name = errorName;
		this.chord = chord;
	}
}

class InvalidModifierError extends ChordSymbolError {
	constructor(message, chord) {
		super(message, chord, 'ChordParsingError');
	}
}

class InvalidIntervalsError extends ChordSymbolError {
	constructor(message, chord) {
		super(message, chord, 'InvalidIntervalsError');
	}
}

export { InvalidModifierError, InvalidIntervalsError };
