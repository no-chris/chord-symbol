import chain from '../helpers/chain';
import _cloneDeep from 'lodash/cloneDeep';
import _isString from 'lodash/isString';
import checkCustomFilters from '../helpers/checkCustomFilters';

import { allVariantsPerGroup } from '../dictionaries/notes';
import { allKeys } from '../dictionaries/allKeys';

import {
	InvalidInputError,
	UnexpectedError,
} from '../helpers/ChordParsingError';

import checkIntervalsConsistency from './filters/checkIntervalsConsistency';
import formatSymbol from './filters/formatSymbol';
import formatSymbolParts from './filters/formatSymbolParts';
import formatNumeralSymbol from './filters/formatNumeralSymbol';
import getParsableDescriptor from './filters/getParsableDescriptor';
import initChord from './filters/initChord';
import nameIndividualChordNotes from './filters/nameIndividualChordNotes';
import normalizeNotes from './filters/normalizeNotes';
import normalizeDescriptor from './filters/normalizeDescriptor';
import parseBase from './filters/parseBase';
import parseDescriptor from './filters/parseDescriptor';

/**
 * Create a chord parser function
 * @param {ParserConfiguration} [parserConfiguration]
 * @returns {function(String): MaybeChord}
 */
function chordParserFactory(parserConfiguration = {}) {
	const allAltIntervals = ['b5', '#5', 'b9', '#9', '#11', 'b13'];
	const allNotationSystems = ['english', 'german', 'latin'];

	const {
		notationSystems = _cloneDeep(allNotationSystems),
		altIntervals = _cloneDeep(allAltIntervals),
		customFilters = [],
		key = '',
	} = parserConfiguration;

	checkAltIntervals(altIntervals, allAltIntervals);
	checkNotationSystems(notationSystems, allNotationSystems);
	checkCustomFilters(customFilters);
	checkKey(key);

	return parseChord;

	/**
	 * Convert an input string into an abstract chord structure
	 * @param {String} symbol - the chord symbol candidate
	 * @returns {MaybeChord} A chord data object if the given string is successfully parsed.
	 *   A chord parse failure object with an `error` property otherwise.
	 */
	function parseChord(symbol) {
		const allErrors = [];

		if (!isInputValid(symbol)) {
			const e = new InvalidInputError();
			allErrors.push(formatError(e));
		}

		const allVariantsPerGroupCopy = _cloneDeep(allVariantsPerGroup).filter(
			(variantsGroup) => notationSystems.includes(variantsGroup.name)
		);

		let chord;
		let allFilters;
		let variants;

		if (!allErrors.length) {
			while (allVariantsPerGroupCopy.length && !chord) {
				variants = allVariantsPerGroupCopy.shift();

				allFilters = [
					initChord.bind(null, parserConfiguration),
					parseBase.bind(null, variants.notes),
					getParsableDescriptor,
					parseDescriptor.bind(null, altIntervals),
					checkIntervalsConsistency,
					normalizeNotes,
					normalizeDescriptor,
					formatSymbolParts,
					formatSymbol,
					nameIndividualChordNotes,
					formatNumeralSymbol.bind(null, key),
					...customFilters,
				];

				try {
					chord = chain(allFilters, symbol);
					if (chord) {
						chord.input.notationSystem = variants.name;
					} else {
						allErrors.push(getUnexpectedError(variants.name));
					}
				} catch (e) {
					allErrors.push(formatError(e, variants.name));
				}
			}
		}

		return chord ? chord : { error: allErrors };
	}
}

function checkAltIntervals(altIntervals, allAltIntervals) {
	checkArray('altIntervals', altIntervals, allAltIntervals, true);
}

function checkNotationSystems(notationSystems, allNotationSystems) {
	checkArray('notationSystems', notationSystems, allNotationSystems);
}

function checkArray(arrayName, arrayToTest, allowedValues, allowEmpty) {
	if (!Array.isArray(arrayToTest)) {
		throw new TypeError(`'${arrayName}' should be an array`);
	}
	if (!allowEmpty && arrayToTest.length === 0) {
		throw new TypeError(`'${arrayName}' cannot be empty`);
	}
	arrayToTest.forEach((system) => {
		if (!allowedValues.includes(system)) {
			throw new TypeError(
				`'${system}' is not a valid value for ${arrayName}`
			);
		}
	});
}

function checkKey(key) {
	if (key !== '' && (!_isString(key) || !allKeys.includes(key))) {
		throw new TypeError(`'${key}' is not a valid value for key`);
	}
}

function isInputValid(input) {
	return typeof input === 'string' && input.length > 0;
}

function getUnexpectedError(notationSystem) {
	const error = new UnexpectedError();
	return formatError(error, notationSystem);
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
