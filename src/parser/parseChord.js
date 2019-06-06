import chain from '../helpers/chain';

import { englishVariants, latinVariants, germanVariants } from '../dictionaries/notes';

import initChord from './filters/initChord';
import parseBase from './filters/parseBase';
import parseDescriptor from './filters/parseDescriptor';
import normalizeNotes from './filters/normalizeNotes';
import normalizeDescriptor from './filters/normalizeDescriptor';
import formatSymbolParts from './filters/formatSymbolParts';

/**
 * @typedef {Object} Chord
 * @type {Object}
 * @property {ChordInput} input
 * @property {NormalizedChord} normalized
 * @property {FormattedChord} formatted
 */

/**
 * @typedef {Object} ChordInput
 * @type {Object}
 * @property {String} rootNote
 * @property {String} [bassNote]
 * @property {String} descriptor
 * @property {String} parsableDescriptor
 */
/**
 * @typedef {Object} NormalizedChord
 * @type {Object}
 * @property {String} rootNote
 * @property {String} [bassNote]
 * @property {String} parsableDescriptor
 * @property {String[]} intervals
 * @property {Number[]} semitones
 * @property {Object} intents
 * @property {Boolean} intents.major
 * @property {Boolean} intents.eleventh
 * @property {String} quality
 * @property {Boolean} isSuspended
 * @property {String[]} extensions
 * @property {String[]} adds
 * @property {String[]} alterations
 * @property {String[]} omits
 */

/**
 * @typedef {Object} FormattedChord
 * @type {Object}
 * @property {String} rootNote
 * @property {String} [bassNote]
 * @property {String} descriptor
 * @property {String[]} chordChanges
 */

/**
 * @param {String} symbol
 * @returns {Chord|Null}
 */
export default function parseChord(symbol) {
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
