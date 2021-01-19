export {
	chordParserFactory,
	chordRendererFactory,
	Chord,
	ChordInput,
	FormattedChord,
	NormalizedChord,
	ParserConfiguration,
	RendererConfiguration,
};

/**
 * A data object representing a chord. It is the result of the parsing operation and can be used for rendering.
 */
type Chord = {
	/**
	 * - information derived from the symbol given as an input.
	 * If you need to trace what has generated a given chord, you'll find it here.
	 */
	input?: ChordInput;
	/**
	 * - abstract representation of the chord based on its intervals.
	 */
	normalized?: NormalizedChord;
	/**
	 * - pre-rendering of the normalized chord.
	 */
	formatted?: FormattedChord;
	/**
	 * - configuration passed to the parser on chord creation.
	 */
	parserConfiguration?: ParserConfiguration;
	/**
	 * - if defined, then the parsing failed and this array will contain the reason(s) why
	 */
	error?: ChordSymbolError[];
};
/**
 * The source from which the chord structure has been built
 */
type ChordInput = {
	/**
	 * - the exact string used as a source for parsing. Ex: `Cm7b5/Gb`
	 */
	symbol: string;
	/**
	 * - the root note from the input string. Ex: `C`
	 */
	rootNote: string;
	/**
	 * - the bass note from the input string. Ex: `Gb`
	 */
	bassNote: string;
	/**
	 * - the string between the root note and the bass note. Ex: `m7b5`
	 */
	descriptor: string;
	/**
	 * - the modified descriptor such as parsing is possible.
	 * Ex: `m add9` for `Cmadd9`, a space is added for disambiguation between `m + add` and `ma + dd`.
	 */
	parsableDescriptor: string;
	/**
	 * - the detected modifiers during parsing
	 */
	modifiers: string;
	/**
	 * - notation system in which the symbol was parsed
	 */
	notationSystem: 'english' | 'german' | 'latin';
};
/**
 * Abstract representation of the chord based on its intervals
 */
type NormalizedChord = {
	/**
	 * - the normalized root note in english notation. Ex: `C`
	 */
	rootNote: string;
	/**
	 * - the normalized bass note in english notation. Ex: `Gb`
	 */
	bassNote: string;
	/**
	 * - list of intervals composing the chord. Ex: `['1', 'b3', 'b5', 'b7']` for `Cm7b5/Gb`
	 */
	intervals: string[];
	/**
	 * - list of notes composing the chord. Ex: `['C', 'Eb', 'Gb', 'Bb']` for `Cm7b5/Gb`
	 */
	notes: string[];
	/**
	 * - intervals converted to semitones. Ex: `[0, 3, 6, 10]`
	 */
	semitones: number[];
	/**
	 * - keep track of intents that are part of the symbol but cannot be conveyed by the interval list only
	 */
	intents: {
		major: boolean;
		eleventh: boolean;
		alt: boolean;
	};
	/**
	 * - "Vertical quality" of the chord, its core characteristics,
	 * usually conveyed by the 3rd and the 7th, and sometimes the 5th. Ex: `major`, `minor7`, `minorMajor7`...
	 */
	quality: string;
	/**
	 * - whether the chord has a suspended 3rd or not
	 */
	isSuspended: boolean;
	/**
	 * - upper extensions of the base chord, can be one or more of `9`, `11` & `13`.
	 * Ex: `['9', '11', '13']` for `Cm13`
	 */
	extensions: string[];
	/**
	 * - notes that are part of the chord or its extensions, but either flattened or sharpened.
	 * Ex: `['b5']` for `Cm7b5/Gb`
	 */
	alterations: string[];
	/**
	 * - added notes that are neither extensions nor alterations.
	 * Ex: `['9']` for `C(add9,omit3)`
	 */
	adds: string[];
	/**
	 * - removed notes from chord
	 * Ex: `['3']` for `C(add9,omit3)`
	 */
	omits: string[];
};
/**
 * Pre-rendered version of the chord with the main "vertical quality" and the chord changes.
 * Intended to be used as building blocks of a rendered chord
 */
type FormattedChord = {
	/**
	 * - formatted root note
	 */
	rootNote: string;
	/**
	 * - formatted bass note
	 */
	bassNote: string;
	/**
	 * - the descriptor, gives the vertical quality of the chords and its extensions
	 */
	descriptor: string;
	/**
	 * - sorted and prefixed list of changes, whether altered, added or omitted notes.
	 * Changes are given in the following order: alterations and added, sorted by interval, then omitted.
	 * If multiple added/omits are present, the `add/omit` symbol is only printed once: `A+(add b9,#9)`
	 */
	chordChanges: string[];
};
/**
 * Configuration of the chord parser
 */
type ParserConfiguration = {
	/**
	 * =['english','german','latin'] -
	 * Notation systems that should be used to try parsing a symbol. All by default.
	 */
	notationSystems?: Array<'english' | 'german' | 'latin'> | undefined;
	/**
	 * =['b5','#5','b9','#9','#11','b13'] -
	 * user selection of intervals affected by the `alt` modifier (all by default).
	 * Since using the `C7alt` symbol is a way to leave some room for interpretation by the player, Chord-symbol offer the possibility to declare what are
	 * the intervals that the `alt` modifier should yield
	 * If you would like `alt` to consistently yield a specific set of intervals, you can specify those here.
	 */
	altIntervals: Array<'b5' | '#5' | 'b9' | '#9' | '#11' | 'b13'>;
	/**
	 * - custom filters applied during parsing
	 */
	customFilters?: customFilter[];
};
/**
 * Description of an error that occurred during the parsing.
 */
type ChordSymbolError = {
	/**
	 * - error code,
	 * or exception type in custom filters
	 */
	type:
		| 'InvalidIntervals'
		| 'InvalidInput'
		| 'InvalidModifier'
		| 'NoSymbolFound'
		| 'UnexpectedError';
	/**
	 * - error description, or the exception message in custom filters
	 */
	message: string;
	/**
	 * - the chord object, in the state that it was when the error occurred
	 */
	chord?: Chord;
	/**
	 * - the notation system context in which the error occurred
	 */
	notationSystem?: 'english' | 'german' | 'latin';
};
/**
 * Configuration of the chord renderer
 */
type RendererConfiguration = {
	/**
	 * - if true, use short namings instead of the "academic" ones
	 */
	useShortNamings?: boolean;
	/**
	 * - The level of simplification.
	 * `max` will basically remove everything but minor 3rd,
	 * `core` will try to keep only the chord core characteristics, leaving out suspensions, extensions, alterations, adds and omits.
	 */
	simplify?: 'none' | 'max' | 'core';
	/**
	 * - positive or negative semitones value
	 */
	transposeValue?: number;
	/**
	 * - convert accidentals to either sharp or flats
	 */
	harmonizeAccidentals?: boolean;
	/**
	 * - prefer flats for transposition/harmonization
	 */
	useFlats?: boolean;
	/**
	 * - the printer to use for the rendering. `text` returns a string, `raw` the processed chord object.
	 */
	printer?: 'text' | 'raw';
	/**
	 * - the notation system to use when rendering the chord.
	 * `auto` will use the same system in which the symbol was originally parsed.
	 */
	notationSystem?: 'auto' | 'english' | 'german' | 'latin';
	/**
	 * - custom filters applied during rendering
	 */
	customFilters?: customFilter[];
};
/**
 * Custom filter applied during processing or rendering. Custom filters will be applied at the end of the processing pipe,
 * after all built-in filters have been applied.
 * - To fail the parsing, throw an exception and it will use the Error API.
 * If you want to be able to filter your exception in error handling, or to pass the chord object in its current state, use
 * [custom error types]{@link https://github.com/no-chris/chord-symbol/blob/master/src/helpers/ChordParsingError.js}
 * - To fail the rendering, simply return `null`.
 * Warning: if you throw an exception in a rendering filter, `ChordSymbol` will not catch it and the client code will need to handle it.
 * Don't do that!
 */
type customFilter = (arg0: Chord) => Chord;

/**
 * Create a chord parser function
 * @param {ParserConfiguration} [parserConfiguration]
 * @returns {function(String): Chord|Null}
 */
declare function chordParserFactory({
	altIntervals,
}?: ParserConfiguration): (arg0: string) => Chord | null;

/**
 * Create a pre-configured chord rendering function
 * @param {RendererConfiguration} [rendererConfiguration]
 * @returns {function(Chord): String}
 */
declare function chordRendererFactory({
	useShortNamings,
	simplify,
	transposeValue,
	harmonizeAccidentals,
	useFlats,
	printer,
}?: RendererConfiguration): (arg0: Chord) => string;
