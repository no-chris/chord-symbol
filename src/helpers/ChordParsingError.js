class InvalidInputError extends Error {
	/**
	 *  The parser was not given a valid string to parse
	 *  ex: `parseChord(null)`
	 */
	constructor() {
		super('The given symbol is not a valid string');
		this.name = 'InvalidInput';
	}
}

class UnexpectedError extends Error {
	/**
	 * This error is very unlikely to happen.
	 * If it does, it is probably in the context of a custom filter that returns `null` instead of throwing an exception.
	 */
	constructor() {
		const message =
			'An unexpected error happened. Maybe a custom filter returned null instead of throwing an exception?';
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
	/**
	 * The given string cannot be confused with a chord symbol in the current notation system
	 * ex: `parseChord('Ape')`
	 * @param {Chord} chord - the chord object, in the state that it was when the error occurred
	 */
	constructor(chord) {
		const message = `"${chord.input.symbol}" does not seems to be a chord`;
		super(message, chord, 'NoSymbolFound');
	}
}

class InvalidModifierError extends ChordSymbolError {
	/**
	 * The given string looks like a chord symbol, but `ChordSymbol` does not understand its descriptor.
	 * It can be either because of a typo, or just because the given word is not a symbol.
	 * ex: `parseChord('Amid')`
	 * @param {Chord} chord - the chord object, in the state that it was when the error occurred
	 * @param {String} invalidChars - the characters that proved problematic when parsing the symbol
	 */
	constructor(chord, invalidChars) {
		const message = `The chord descriptor "${chord.input.descriptor}" contains unknown or duplicated modifiers: "${invalidChars}"`;
		super(message, chord, 'InvalidModifier');
	}
}

class InvalidIntervalsError extends ChordSymbolError {
	/**
	 * The given string is a chord symbol, but the resulting interval list is not valid
	 * ex: `parseChord('A7M7')`
	 * @param {Chord} chord - the chord object, in the state that it was when the error occurred
	 * @param {String[]} forbiddenCombo - intervals that should not belong together in a chord
	 */
	constructor(chord, forbiddenCombo) {
		const message =
			`"${chord.input.symbol}" describes a chord with an invalid intervals combo: ` +
			forbiddenCombo.join(' and ');
		super(message, chord, 'InvalidIntervals');
	}
}

export {
	InvalidInputError,
	InvalidIntervalsError,
	InvalidModifierError,
	NoSymbolFoundError,
	UnexpectedError,
};
