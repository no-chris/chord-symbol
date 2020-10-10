import chain from '../helpers/chain';

import { englishVariants, latinVariants, germanVariants } from '../dictionaries/notes';

import initChord from './filters/initChord';
import parseBase from './filters/parseBase';
import parseDescriptor from './filters/parseDescriptor';
import normalizeNotes from './filters/normalizeNotes';
import normalizeDescriptor from './filters/normalizeDescriptor';
import formatSymbolParts from './filters/formatSymbolParts';

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
 * Intervals affected by the Alt modifier when parsing an altered chord written "C7alt", for example.
 * @typedef {Object} AltIntervals
 * @type {Object}
 * @property {Boolean} fifthFlat - if the alt modifier should flatten the fifth
 * @property {Boolean} fifthSharp - if the alt modifier should sharpen the fifth
 * @property {Boolean} ninthFlat - if the alt modifier should flatten the ninth
 * @property {Boolean} ninthSharp - if the alt modifier should sharpen the ninth
 * @property {Boolean} eleventhSharp - if the alt modifier should sharpen the eleventh
 * @property {Boolean} thirteenthFlat - if the alt modifier should flatten the thirteenth
 */

/**
 * Default alterations triggered by the use of the alt modifier, eg none.
 * @type AltIntervals
 */
const defaultAltIntervals = {
	fifthFlat: 		false,
	fifthSharp: 	false,
	ninthFlat: 		false,
	ninthSharp: 	false,
	eleventhSharp:	false,
	thirteenthFlat:	false,
};

/**
 * Create a chord parser function
 * @param {AltIntervals} altIntervals - user selection of intervals affected by the "alt" modifier (none by default).
 * Since using the "C7alt" symbol is a way to leave some room for interpretation by the player, Chord-symbol does alter any interval
 * by default when parsing an "alt" chord symbol. If you would like "alt" to consistently yield a specific set of intervals,
 * you can specify those here.
 * @returns {function(String): Chord|Null}
 */
function chordParserFactory({ altIntervals = defaultAltIntervals } = {}) {

	const allAltIntervals = Object.assign({}, defaultAltIntervals, altIntervals);

	return parseChord;

	/**
	 * Convert an input string into an abstract chord structure
	 * @param {String} symbol - the chord symbol candidate
	 * @returns {Chord|Null} A chord object if the given string is successfully parsed. Null otherwise.
	 */
	function parseChord(symbol) {
		const allNotes = [
			englishVariants,
			latinVariants,
			germanVariants,
		];

		let chord;
		let allFilters;

		while (allNotes.length && !chord) {
			allFilters = [
				initChord,
				parseBase.bind(null, allNotes.shift()),
				parseDescriptor.bind(null, allAltIntervals),
				normalizeNotes,
				normalizeDescriptor,
				formatSymbolParts,
			];

			chord = chain(allFilters, symbol);
		}
		return chord;
	}
}

/**
 * @module chordParserFactory
 * Expose the chordParserFactory() function
 */
export default chordParserFactory;
