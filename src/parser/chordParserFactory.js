import chain from '../helpers/chain';
import checkCustomFilters from '../helpers/checkCustomFilters';

import {
	englishVariants,
	latinVariants,
	germanVariants,
} from '../dictionaries/notes';

import checkIntervalsConsistency from './filters/checkIntervalsConsistency';
import formatSymbolParts from './filters/formatSymbolParts';
import getParsableDescriptor from './filters/getParsableDescriptor';
import initChord from './filters/initChord';
import nameIndividualChordNotes from './filters/nameIndividualChordNotes';
import normalizeNotes from './filters/normalizeNotes';
import normalizeDescriptor from './filters/normalizeDescriptor';
import parseBase from './filters/parseBase';
import parseDescriptor from './filters/parseDescriptor';

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

	checkCustomFilters(customFilters);

	return parseChord;

	/**
	 * Convert an input string into an abstract chord structure
	 * @param {String} symbol - the chord symbol candidate
	 * @returns {Chord|Null} A chord object if the given string is successfully parsed. Null otherwise.
	 */
	function parseChord(symbol) {
		const allNotes = [englishVariants, latinVariants, germanVariants];
		const allErrors = [];

		let chord;
		let allFilters;

		while (allNotes.length && !chord) {
			allFilters = [
				initChord.bind(null, { altIntervals }),
				parseBase.bind(null, allNotes.shift()),
				getParsableDescriptor,
				parseDescriptor.bind(null, allAltIntervals),
				checkIntervalsConsistency,
				normalizeNotes,
				normalizeDescriptor,
				formatSymbolParts,
				nameIndividualChordNotes,
				...customFilters,
			];

			try {
				chord = chain(allFilters, symbol);
			} catch (e) {
				allErrors.push({
					type: e.name,
					chord: e.chord, // fixme: this might not exist
					message: e.message,
					//fixme: noteVariants: Object.keys({})
				});
			}
		}

		if (!chord) {
			chord = {};
			chord.error = formatErrors(allErrors);
		}

		return chord;
	}
}

const formatErrors = (allErrors) => {
	//fixme: dedupe or remove?
	return allErrors;
};

/**
 * @module chordParserFactory
 * Expose the chordParserFactory() function
 */
export default chordParserFactory;
