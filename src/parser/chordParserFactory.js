import '../typedefs';

import chain from '../helpers/chain';

import { englishVariants, latinVariants, germanVariants } from '../dictionaries/notes';

import initChord from './filters/initChord';
import parseBase from './filters/parseBase';
import parseDescriptor from './filters/parseDescriptor';
import normalizeNotes from './filters/normalizeNotes';
import normalizeDescriptor from './filters/normalizeDescriptor';
import formatSymbolParts from './filters/formatSymbolParts';
import checkIntervalsConsistency from './filters/checkIntervalsConsistency';
import nameIndividualChordNotes from './filters/nameIndividualChordNotes';


/**
 * Default alterations triggered by the use of the alt modifier, eg all possible alterations.
 * @type AltIntervals
 */
const defaultAltIntervals = {
	fifthFlat: 		true,
	fifthSharp: 	true,
	ninthFlat: 		true,
	ninthSharp: 	true,
	eleventhSharp:	true,
	thirteenthFlat:	true,
};

/**
 * Create a chord parser function
 * @param {Object} [ParserConfiguration]
 * @param {AltIntervals} [ParserConfiguration.altIntervals] - user selection of intervals affected by the "alt" modifier (all by default).
 * Since using the "C7alt" symbol is a way to leave some room for interpretation by the player, Chord-symbol offer the possibility
 * some level of flexibility when parsing an "alt" chord symbol.
 * If you would like "alt" to consistently yield a specific set of intervals, you can specify those here.
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
				initChord.bind(null, { altIntervals }),
				parseBase.bind(null, allNotes.shift()),
				parseDescriptor.bind(null, allAltIntervals),
				normalizeNotes,
				normalizeDescriptor,
				formatSymbolParts,
				checkIntervalsConsistency,
				nameIndividualChordNotes,
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
