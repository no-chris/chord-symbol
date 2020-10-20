import '../typedefs';

import _cloneDeep from 'lodash/cloneDeep';

import chain from '../helpers/chain';

import shortenNormalized from './filters/shortenNormalized';
import simplifyFilter from './filters/simplify';
import transpose from './filters/transpose';
import textPrinter from './printer/text';
import rawPrinter from './printer/raw';

/**
 * Create a pre-configured chord rendering function
 * @param {Object} [RendererConfiguration]
 * @param {Boolean} [RendererConfiguration.useShortNamings] - if true, use short namings instead of the "academic" ones
 * @param {('none'|'max'|'core')} [RendererConfiguration.simplify] - The level of simplification.
 * `max` will basically remove everything but minor 3rd,
 * `core` will try to keep only the chord core characteristics, leaving out suspensions, extensions, alterations, adds and omits.
 * @param {Number} [RendererConfiguration.transposeValue] - positive or negative semitones value
 * @param {Boolean} [RendererConfiguration.harmonizeAccidentals] - convert accidentals to either sharp or flats
 * @param {Boolean} [RendererConfiguration.useFlats] - prefer flats for transposition/harmonization
 * @param {('text'|'raw')} [RendererConfiguration.printer] - the printer to use for the rendering.
 * 'text' returns a string, 'raw' the processed chord object.
 * @returns {function(Chord): String}
 */
function chordRendererFactory({
	useShortNamings = false,
	simplify = 'none',
	transposeValue = 0,
	harmonizeAccidentals = false,
	useFlats = false,
	printer = 'text'
} = {}) {

	const allFilters = [];

	if (['max', 'core'].includes(simplify)) {
		allFilters.push(
			simplifyFilter.bind(null, simplify)
		);
	}

	if (harmonizeAccidentals || transposeValue !== 0) {
		allFilters.push(
			transpose.bind(null, transposeValue, useFlats)
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
		if (chord === null) {
			return null;
		}
		const filteredChord = chain(allFilters, _cloneDeep(chord));

		return (printer === 'raw') ? rawPrinter(filteredChord) : textPrinter(filteredChord);
	}
}

/**
 * @module chordRendererFactory
 * Expose the chordRendererFactory() function
 **/
export default chordRendererFactory;
