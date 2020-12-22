class InvalidInputError extends Error {
	constructor(message) {
		super(message);
		this.name = 'InvalidInputError';
	}
}

class ChordSymbolError extends Error {
	constructor(message, chord, errorName) {
		super(message);
		this.name = errorName;
		this.chord = chord;
	}
}

class NoSymbolFoundError extends ChordSymbolError {
	constructor(message, chord) {
		super(message, chord, 'NoSymbolFoundError');
	}
}

class InvalidModifierError extends ChordSymbolError {
	constructor(message, chord) {
		super(message, chord, 'InvalidModifierError');
	}
}

class InvalidIntervalsError extends ChordSymbolError {
	constructor(message, chord) {
		super(message, chord, 'InvalidIntervalsError');
	}
}

export {
	InvalidModifierError,
	InvalidInputError,
	InvalidIntervalsError,
	NoSymbolFoundError,
};
