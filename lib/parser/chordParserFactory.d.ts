export default chordParserFactory;
/**
 * A data object representing a chord. It is the result of the parsing operation and can be used for rendering.
 */
export type Chord = {
    /**
     * - information derived from the symbol given as an input.
     * If you need to trace what has generated a given chord, you'll find it here.
     */
    input: ChordInput;
    /**
     * - abstract representation of the chord based on its intervals.
     */
    normalized: NormalizedChord;
    /**
     * - pre-rendering of the normalized chord
     */
    formatted: FormattedChord;
};
/**
 * The source from which the chord structure has been built
 */
export type ChordInput = {
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
};
/**
 * Abstract representation of the chord based on its intervals
 */
export type NormalizedChord = {
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
export type FormattedChord = {
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
 * A data object representing a chord. It is the result of the parsing operation and can be used for rendering.
 * @typedef {Object} Chord
 * @type {Object}
 * @property {ChordInput} input - information derived from the symbol given as an input.
 * If you need to trace what has generated a given chord, you'll find it here.
 * @property {NormalizedChord} normalized - abstract representation of the chord based on its intervals.
 * @property {FormattedChord} formatted - pre-rendering of the normalized chord
 */
/**
 * The source from which the chord structure has been built
 * @typedef {Object} ChordInput
 * @type {Object}
 * @property {String} symbol - the exact string used as a source for parsing. Ex: `Cm7b5/Gb`
 * @property {String} rootNote - the root note from the input string. Ex: `C`
 * @property {String} bassNote - the bass note from the input string. Ex: `Gb`
 * @property {String} descriptor - the string between the root note and the bass note. Ex: `m7b5`
 * @property {String} parsableDescriptor - the modified descriptor such as parsing is possible.
 * Ex: `m add9` for `Cmadd9`, a space is added for disambiguation between `m + add` and `ma + dd`.
 */
/**
 * Abstract representation of the chord based on its intervals
 * @typedef {Object} NormalizedChord
 * @type {Object}
 * @property {String} rootNote - the normalized root note in english notation. Ex: `C`
 * @property {String} bassNote - the normalized bass note in english notation. Ex: `Gb`
 * @property {String[]} intervals - list of intervals composing the chord. Ex: `['1', 'b3', 'b5', 'b7']` for `Cm7b5/Gb`
 * @property {String[]} notes - list of notes composing the chord. Ex: `['C', 'Eb', 'Gb', 'Bb']` for `Cm7b5/Gb`
 * @property {Number[]} semitones - intervals converted to semitones. Ex: `[0, 3, 6, 10]`
 * @property {Object} intents - keep track of intents that are part of the symbol but cannot be conveyed by the interval list only
 * @property {Boolean} intents.major - whether the chord has a major quality or not. Especially useful to find the source quality of suspended chords
 * @property {Boolean} intents.eleventh - for edge cases ; allows to differentiate between `C9sus` and `C11`
 * @property {String} quality - "Vertical quality" of the chord, its core characteristics,
 * usually conveyed by the 3rd and the 7th, and sometimes the 5th. Ex: `major`, `minor7`, `minorMajor7`...
 * @property {Boolean} isSuspended - whether the chord has a suspended 3rd or not
 * @property {String[]} extensions - upper extensions of the base chord, can be one or more of `9`, `11` & `13`.
 * Ex: `['9', '11', '13']` for `Cm13`
 * @property {String[]} alterations - notes that are part of the chord or its extensions, but either flattened or sharpened.
 * Ex: `['b5']` for `Cm7b5/Gb`
 * @property {String[]} adds - added notes that are neither extensions nor alterations.
 * Ex: `['9']` for `C(add9,omit3)`
 * @property {String[]} omits - removed notes from chord
 * Ex: `['3']` for `C(add9,omit3)`
 */
/**
 * Pre-rendered version of the chord with the main "vertical quality" and the chord changes.
 * Intended to be used as building blocks of a rendered chord
 * @typedef {Object} FormattedChord
 * @type {Object}
 * @property {String} rootNote - formatted root note
 * @property {String} bassNote - formatted bass note
 * @property {String} descriptor - the descriptor, gives the vertical quality of the chords and its extensions
 * @property {String[]} chordChanges - sorted and prefixed list of changes, whether altered, added or omitted notes.
 * Changes are given in the following order: alterations and added, sorted by interval, then omitted.
 * If multiple added/omits are present, the `add/omit` symbol is only printed once: `A+(add b9,#9)`
 */
/**
 * Create a chord parser function
 * @returns {function(String): Chord|Null}
 */
declare function chordParserFactory(): (arg0: string) => Chord | null;
