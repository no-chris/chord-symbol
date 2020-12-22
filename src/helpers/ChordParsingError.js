class InvalidInputError extends Error {
	constructor(message) {
		super(message);
		this.name = 'InvalidInput';
	}
}

class UnexpectedError extends Error {
	constructor(message) {
		super(message);
		this.name = 'UnexpectedError';
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
		super(message, chord, 'NoSymbolFound');
	}
}

class InvalidModifierError extends ChordSymbolError {
	constructor(message, chord) {
		super(message, chord, 'InvalidModifier');
	}
}

class InvalidIntervalsError extends ChordSymbolError {
	constructor(message, chord) {
		super(message, chord, 'InvalidIntervals');
	}
}

export {
	InvalidModifierError,
	InvalidInputError,
	InvalidIntervalsError,
	NoSymbolFoundError,
	UnexpectedError,
};
