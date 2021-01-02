/**
 * A data object representing a chord. It is the result of the parsing operation and can be used for rendering.
 * @typedef {Object} Chord
 * @type {Object}
 * @property {ChordInput} [input] - information derived from the symbol given as an input.
 * If you need to trace what has generated a given chord, you'll find it here.
 * @property {NormalizedChord} [normalized] - abstract representation of the chord based on its intervals.
 * @property {FormattedChord} [formatted] - pre-rendering of the normalized chord.
 * @property {ParserConfiguration} [parserConfiguration] - configuration passed to the parser on chord creation.
 * @property {ChordSymbolError[]} [error] - if defined, then the parsing failed and this array will contain the reason(s) why
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
 * Configuration of the chord parser
 * @typedef {Object} ParserConfiguration
 * @type {Object}
 * @property {Array<('english'|'german'|'latin')>=} notationSystems=['english','german','latin'] -
 * 	Notation systems that should be used to try parsing a symbol. All by default.
 * @property {Array<('b5'|'#5'|'b9'|'#9'|'#11'|'b13')>} altIntervals=['b5','#5','b9','#9','#11','b13'] -
 * user selection of intervals affected by the `alt` modifier (all by default).
 * Since using the `C7alt` symbol is a way to leave some room for interpretation by the player, Chord-symbol offer the possibility to declare what are
 * the intervals that the `alt` modifier should yield
 * If you would like `alt` to consistently yield a specific set of intervals, you can specify those here.
 * @property {customFilter[]} [customFilters=[]] - custom filters applied during parsing
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
 * @property {Boolean} [harmonizeAccidentals=false] - convert accidentals to either sharp or flats
 * @property {Boolean} [useFlats=false] - prefer flats for transposition/harmonization
 * @property {('text'|'raw')} [printer='text'] - the printer to use for the rendering. `text` returns a string, `raw` the processed chord object.
 * @property {('auto'|'english'|'german'|'latin')} [notationSystem='english'] - the notation system to use when rendering the chord.
 * 	`auto` will use the same system in which the symbol was originally parsed.
 * @property {customFilter[]} [customFilters=[]] - custom filters applied during rendering
 */

/**
 * Custom filter applied during processing or rendering. Custom filters will be applied at the end of the processing pipe,
 * after all built-in filters have been applied.
 * - To fail the parsing, throw an exception and it will use the Error API.
 * If you want to be able to filter your exception in error handling, or to pass the chord object in its current state, use
 * [custom error types]{@link https://github.com/no-chris/chord-symbol/blob/master/src/helpers/ChordParsingError.js}
 * - To fail the rendering, simply return `null`.
 * Warning: if you throw an exception in a rendering filter, `ChordSymbol` will not catch it and the client code will need to handle it.
 * Don't do that!
 * @typedef {function(Chord): Chord} customFilter
 * @type {Function}
 * @param {Chord} chord - The chord object will be passed to the filter as the only parameter
 * @returns {Chord|Null} - Either the modified chord object, or `null` to cancel the processing and skip the remaining filters.
 */
