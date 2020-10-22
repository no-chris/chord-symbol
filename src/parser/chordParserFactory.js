import chain from '../helpers/chain';

import {
	englishVariants,
	latinVariants,
	germanVariants,
} from '../dictionaries/notes';

import checkUserFilters from '../helpers/checkUserFilters';

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
	fifthFlat: true,
	fifthSharp: true,
	ninthFlat: true,
	ninthSharp: true,
	eleventhSharp: true,
	thirteenthFlat: true,
};

/**
 * Create a chord parser function
 * @param {ParserConfiguration} [parserConfiguration]
 * @returns {function(String): Chord|Null}
 */
function chordParserFactory({
	altIntervals = defaultAltIntervals,
	customFilters = [],
} = {}) {
	const allAltIntervals = Object.assign(
		{},
		defaultAltIntervals,
		altIntervals
	);

	checkUserFilters(customFilters);

	return parseChord;

	/**
	 * Convert an input string into an abstract chord structure
	 * @param {String} symbol - the chord symbol candidate
	 * @returns {Chord|Null} A chord object if the given string is successfully parsed. Null otherwise.
	 */
	function parseChord(symbol) {
		const allNotes = [englishVariants, latinVariants, germanVariants];

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
				...customFilters,
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
