import chain from '../helpers/chain';

import { englishVariants, latinVariants, germanVariants } from '../dictionaries/notes';

import initChord from './filters/initChord';
import parseBase from './filters/parseBase';
import parseDescriptor from './filters/parseDescriptor';
import normalizeNotes from './filters/normalizeNotes';
import normalizeDescriptor from './filters/normalizeDescriptor';
import formatSymbolParts from './filters/formatSymbolParts';

/**
 * The chord structure returned by parseChord()
 * @typedef {Object} Chord
 * @type {Object}
 * @property {ChordInput} input - everything derived from the string given as a parameter to parseChord()
 * @property {NormalizedChord} normalized - abstract representation of the chord based on its intervals
 * @property {FormattedChord} formatted - pre-rendering of the normalized chord
 */

/**
 * The source from which the chord structure has been built
 * @typedef {Object} ChordInput
 * @type {Object}
 * @property {String} symbol - the exact string given as an input to the parseChord() function
 * @property {String} rootNote - the root note from the input string
 * @property {String} [bassNote] - the bass note from the input string
 * @property {String} [descriptor] - the string between the root note and the bass note
 * @property {String} parsableDescriptor - the modified descriptor such as parsing is possible
 */

/**
 * Abstract representation of the chord based on its intervals
 * @typedef {Object} NormalizedChord
 * @type {Object}
 * @property {String} rootNote - the normalized root note in english notation
 * @property {String} [bassNote] - the normalized bass note in english notation
 * @property {String[]} intervals - list of intervals composing the chord. Ex: \['1', 'b3', '5', 'b7'\] for Cmi7
 * @property {Number[]} semitones - intervals converted to semitones. Ex: \[0, 3, 7, 10\]
 * @property {Object} intents - keep track of intents that are part of the symbol but cannot be conveyed by the interval list only
 * @property {Boolean} intents.major - whether the chord has a major quality or not. Especially useful to find the source quality of suspended chords
 * @property {Boolean} intents.eleventh - for edge cases ; allows to differentiate between C9sus and C11
 * @property {String} quality - "Vertical quality" of the chord, its core characteristics,
 * usually conveyed by the 3rd and the 7th, and sometimes the 5th
 * @property {Boolean} isSuspended - whether the chord has a suspended 3rd or not
 * @property {String[]} extensions - upper extensions of the base chord, can be one or more of '9', '11' & '13'
 * @property {String[]} alterations - notes that are part of the chord or its extensions, but either flattened or sharpened
 * @property {String[]} adds - added notes that are neither extensions nor alterations
 * @property {String[]} omits - removed notes from chord
 */

/**
 * Pre-rendered version of the chord with the main "vertical quality" and the chord changes.
 * Intended to be used as building blocks of a rendered chord
 * @typedef {Object} FormattedChord
 * @type {Object}
 * @property {String} rootNote - formatted root note
 * @property {String} [bassNote] - formatted bass note
 * @property {String} descriptor - the descriptor, gives the vertical quality of the chords and its extensions
 * @property {String[]} chordChanges - sorted and prefixed list of changes, whether altered, added or omitted notes.
 */

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
			parseDescriptor,
			normalizeNotes,
			normalizeDescriptor,
			formatSymbolParts,
		];

		chord = chain(allFilters, symbol);
	}
	return chord;

}

/**
 * @module parseChord
 * Parse a potential chord symbol given as a string
 */
export default parseChord;
