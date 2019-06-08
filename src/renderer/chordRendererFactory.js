import _cloneDeep from 'lodash/cloneDeep';

import chain from '../helpers/chain';

import shortenNormalized from './filters/shortenNormalized';
import simplifyFilter from './filters/simplify';
import textPrinter from './printer/text';

/**
 * Create a pre-configured chord rendering function
 * @param {Boolean} useShortNamings - if true, use short namings instead of the "academic" ones
 * @param {('none'|'max'|'core')} simplify - The level of simplification. `max` will basically remove everything but minor 3rd,
 * `core` will try to keep only the chord core characteristics, leaving out suspensions, extensions, alterations, adds and omits.
 * @returns {function(Chord): String}
 */
function chordRendererFactory({
	useShortNamings = false,
	simplify = 'none',
} = {}) {

	const allFilters = [];

	if (simplify !== 'none') {
		allFilters.push(
			simplifyFilter.bind(null, simplify)
		);
	}

	if (useShortNamings) {
		allFilters.push(shortenNormalized);
	}

	return renderChord;

	/**
	 * Render a chord structure
	 * @param {Chord} chord - the chord structure to render
	 * @returns {String|*} output might depends on the selected printer
	 */
	function renderChord(chord) {
		const filteredChord = chain(allFilters, _cloneDeep(chord));

		return textPrinter(filteredChord);
	}
}

/**
 * @module chordRendererFactory
 * Expose the chordRendererFactory() function
 **/
export default chordRendererFactory;
