import _cloneDeep from 'lodash/cloneDeep';

import chain from '../helpers/chain';

import shortenNormalized from './filters/shortenNormalized';
import textPrinter from './printer/text';

/**
 * Create a pre-configured chord rendering function
 * @param {Boolean} useShortNamings - if true, use short rendering instead of the academic rendering of chords
 * @returns {function(Chord): String}
 */
function chordRendererFactory({
	useShortNamings = false
} = {}) {

	const allFilters = [];

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
 * Create the rendering function of chord structures
 **/
export default chordRendererFactory;
