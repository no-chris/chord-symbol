export type Chord = {
    /**
     * - information derived from the symbol given as an input.
     * If you need to trace what has generated a given chord, you'll find it here.
     */
    input: import("./parser/chordParserFactory").ChordInput;
    /**
     * - abstract representation of the chord based on its intervals.
     */
    normalized: import("./parser/chordParserFactory").NormalizedChord;
    /**
     * - pre-rendering of the normalized chord
     */
    formatted: import("./parser/chordParserFactory").FormattedChord;
};
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
        /**
         * - whether the chord has a major quality or not. Especially useful to find the source quality of suspended chords
         */
        major: boolean;
        /**
         * - for edge cases ; allows to differentiate between `C9sus` and `C11`
         */
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
import chordParserFactory from "./parser/chordParserFactory";
import chordRendererFactory from "./renderer/chordRendererFactory";
export { chordParserFactory, chordRendererFactory };
