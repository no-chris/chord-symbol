/**
 * An object that may be a chord data object or a chord parsing failure object.
 * @typedef {(Chord|ChordParseFailure)} MaybeChord
 */

/**
 * A data object representing a chord. It is the result of a successful parsing operation and can be used for rendering.
 * @typedef {Object} Chord
 * @type {Object}
 * @property {ChordInput} input - information derived from the symbol given as an input.
 * If you need to trace what has generated a given chord, you'll find it here.
 * @property {NormalizedChord} normalized - abstract representation of the chord based on its intervals.
 * @property {FormattedChord} formatted - pre-rendering of the normalized chord.
 * @property {NumeralChord} numeral - chord in the roman numeral notation.
 * @property {ParserConfiguration} parserConfiguration - configuration passed to the parser on chord creation.
 */

/**
 * An error object for a chord that could not be parsed.
 * @typedef {Object} ChordParseFailure
 * @type {Object}
 * @property {ChordSymbolError[]} error - the reason(s) why the parsing failed.
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
 * @property {String} modifiers - the detected modifiers during parsing
 * @property {('english'|'german'|'latin')} notationSystem - notation system in which the symbol was parsed
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
 * @property {Boolean} intents.alt - if the chord was specified as altered
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
 * The `symbol` property contains the default assembled rendering
 * @typedef {Object} FormattedChord
 * @type {Object}
 * @property {String} symbol - full rendering of the chord
 * @property {String} rootNote - formatted root note
 * @property {String} bassNote - formatted bass note
 * @property {String} descriptor - the descriptor, gives the vertical quality of the chords and its extensions
 * @property {String[]} chordChanges - sorted and prefixed list of changes, whether altered, added or omitted notes.
 * Changes are given in the following order: alterations and added, sorted by interval, then omitted.
 * If multiple added/omits are present, the `add/omit` symbol is only printed once: `A+(add b9,#9)`
 */

/**
 * Roman numeral symbol of the chord, both rendered in a single string and also decomposed in its sub-parts.
 * The detection of the degree is based on the key given to the parser configuration.
 * The used approach is very naive and only based on whether the chord is diatonic to the given key or borrowed to its parallel major/minor scale
 * As such, it is only suitable for very basic harmonic analysis and a lot of chords will render as "?" because they won't fit
 * either scenario.
 * Having the symbol decomposed in its part will allow an external tool to easily override the detected degree
 * and reconstruct the symbol if needed.
 * @typedef {Object} NumeralChord
 * @type {Object}
 * @property {String} symbol - concatenation of the `degree`, the `descriptor` and the `inversion` properties
 * @property {String} degree - degree of the chord in the scale, or "?" if it cannot be determined.
 * If the `key` property is not given to the parser configuration, the degree will be either "I", "i" or "?"
 * @property {String} descriptor - quality of the chord (e.g. seventh, major seventh, diminished, etc.)
 * @property {String} inversion - inversion notation in the roman numeral format (e.g. ⁶₄, ⁶₅, etc.)
 * @property {('minor'|'major')} thirdQuality - quality of the third of the chord, either "minor" or "major"
 * @property {('diatonic'|'borrowed'|'unknown')} type - Either "diatonic" if the degree is part of the key scale,
 * "borrowed" if it is part of the parallel minor or major scale, "unknown" otherwise.
 */

/**
 * Configuration of the chord parser
 * @typedef {Object} ParserConfiguration
 * @type {Object}
 * @property {Array<('english'|'german'|'latin')>} [notationSystems=['english','german','latin']] -
 * 	Notation systems that should be used to try parsing a symbol. All by default.
 * @property {Array<('b5'|'#5'|'b9'|'#9'|'#11'|'b13')>} [altIntervals=['b5','#5','b9','#9','#11','b13']] -
 * user selection of intervals affected by the `alt` modifier (all by default).
 * Since using the `C7alt` symbol is a way to leave some room for interpretation by the player, Chord-symbol offer the possibility to declare what are
 * the intervals that the `alt` modifier should yield
 * If you would like `alt` to consistently yield a specific set of intervals, you can specify those here.
 * @property {CustomFilter[]} [customFilters=[]] - custom filters applied during parsing
 * @property {String} [key=''] - key on which to base the rendering of the numeral symbol.
 * The key needs to be given in english notation with a maximum of 3 characters using non-unicode accidentals.
 * E.g. `C`, `C#m` or `Ab` are all valid keys, while `B♭` and `C7` are not.
 * If not given, the parser will not be able to detect the degree of the chord.
 */

/**
 * Description of an error that occurred during the parsing.
 * @typedef {Object} ChordSymbolError
 * @type {Object}
 * @property {('InvalidIntervals'|'InvalidInput'|'InvalidModifier'|'NoSymbolFound'|'UnexpectedError')} type - error code,
 * or exception type in custom filters
 * @property {String} message - error description, or the exception message in custom filters
 * @property {Chord} [chord] - the chord object, in the state that it was when the error occurred
 * @property {('english'|'german'|'latin')} [notationSystem] - the notation system context in which the error occurred
 */

/**
 * Configuration of the chord renderer
 * @typedef {Object} RendererConfiguration
 * @type {Object}
 * @property {Boolean} [useShortNamings=false] - if true, use short namings instead of the "academic" ones
 * @property {('none'|'max'|'core')} [simplify='none'] - The level of simplification.
 * `max` will basically remove everything but minor 3rd,
 * `core` will try to keep only the chord core characteristics, leaving out suspensions, extensions, alterations, adds and omits.
 * @property {Number} [transposeValue=0] - positive or negative semitones value
 * @property {('original'|'flat'|'sharp')} [accidental='original'] - accidental to use when rendering a chord.
 * 'original' keeps the current one, if any. If transposeValue !== 0, sharp will be used
 * 'flat' render with flats
 * 'sharp' render with sharps
 * @property {('text'|'raw')} [printer='text'] - the printer to use for the rendering. `text` returns a string, `raw` the processed chord object.
 * @property {('auto'|'english'|'german'|'latin')} [notationSystem='english'] - the notation system to use when rendering the chord.
 * 	`auto` will use the same system in which the symbol was originally parsed.
 * @property {CustomFilter[]} [customFilters=[]] - custom filters applied during rendering
 */

/**
 * Custom filter applied during processing or rendering. Custom filters will be applied at the end of the processing pipe,
 * after all built-in filters have been applied.
 *
 * **Parsing filters**
 * - We recommend that you do not delete any property of the Chord object, because some rendering filters might rely on them.
 * For maximum compatibility, your best bet is to always rely on the existing chord object structure.
 * - To fail the parsing, throw an exception and it will use the Error API.
 * If you want to be able to filter your exception in error handling, or to pass the chord object in its current state, use
 * [custom error types]{@link https://github.com/no-chris/chord-symbol/blob/master/src/helpers/ChordParsingError.js}
 *
 * **Rendering filter**
 * - If the purpose of your rendering filter is to change the text output of `ChordSymbol`,
 * then use the `text` printer and override the `.formatted.symbol` property.
 * - If the purpose is to enrich the chord symbol object with some new information or data structure,
 * then use the `raw` printer and modify the `Chord` object accordingly.
 * - To fail the rendering, simply return `null`.
 * Warning: if you throw an exception in a rendering filter, `ChordSymbol` will not catch it and the client code will need to handle it.
 * Don't do that!
 * @typedef {function(Chord): (Chord|Null)} CustomFilter
 * @type {Function}
 * @param {Chord} chord - The chord object will be passed to the filter as the only parameter
 * @returns {(Chord|Null)} - Either the modified chord object, or `null` to cancel the processing and skip the remaining filters.
 */
