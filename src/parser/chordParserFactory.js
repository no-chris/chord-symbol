import chain from '../helpers/chain';
import _cloneDeep from 'lodash/cloneDeep';
import checkCustomFilters from '../helpers/checkCustomFilters';

import { allVariantsPerGroup } from '../dictionaries/notes';

import { InvalidInputError } from '../helpers/ChordParsingError';

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
		const allNotesPerGroup = _cloneDeep(allVariantsPerGroup);
		const allErrors = [];

		if (!isInputValid(symbol)) {
			const e = new InvalidInputError(
				'The given symbol is not a valid string'
			);
			allErrors.push(formatError(e));
		}

		let chord;
		let allFilters;
		let variants;

		if (!allErrors.length) {
			while (allNotesPerGroup.length && !chord) {
				variants = allNotesPerGroup.shift();

				allFilters = [
					initChord.bind(null, { altIntervals }),
					parseBase.bind(null, variants.notes),
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
					allErrors.push(formatError(e, variants.name));
				}
			}
		}

		return chord ? chord : { error: allErrors };
	}
}

function isInputValid(input) {
	return typeof input === 'string' && input.length > 0;
}

function formatError(exceptionError, notationSystem) {
	return {
		type: exceptionError.name,
		chord: exceptionError.chord,
		message: exceptionError.message,
		notationSystem,
	};
}

/**
 * @module chordParserFactory
 * Expose the chordParserFactory() function
 */
export default chordParserFactory;
