import _cloneDeep from 'lodash/cloneDeep';

import chain from '../helpers/chain';
import checkCustomFilters from '../helpers/checkCustomFilters';

import shortenNormalized from './filters/shortenNormalized';
import simplifyFilter from './filters/simplify';
import transpose from './filters/transpose';
import convertNotationSystem from './filters/convertNotationSystem';
import textPrinter from './printer/text';
import rawPrinter from './printer/raw';

/**
 * Create a pre-configured chord rendering function
 * @param {RendererConfiguration} [rendererConfiguration]
 * @returns {function(Chord): String}
 */
function chordRendererFactory({
	useShortNamings = false,
	simplify = 'none',
	transposeValue = 0,
	harmonizeAccidentals = false,
	useFlats = false,
	printer = 'text',
	notationSystem = 'english',
	customFilters = [],
} = {}) {
	checkCustomFilters(customFilters);

	const allFilters = [];

	if (['max', 'core'].includes(simplify)) {
		allFilters.push(simplifyFilter.bind(null, simplify));
	}

	if (harmonizeAccidentals || transposeValue !== 0) {
		allFilters.push(transpose.bind(null, transposeValue, useFlats));
	}

	if (useShortNamings) {
		allFilters.push(shortenNormalized);
	}

	allFilters.push(convertNotationSystem.bind(null, notationSystem));
	allFilters.push(...customFilters);

	return renderChord;

	/**
	 * Render a chord structure
	 * @param {Chord} chord - the chord structure to render
	 * @returns {String|Chord} output depends on the selected printer: string for text printer (default), Chord for raw printer
	 */
	function renderChord(chord) {
		if (!isValidChord(chord)) {
			return null;
		}
		const filteredChord = chain(allFilters, _cloneDeep(chord));

		return printer === 'raw'
			? rawPrinter(filteredChord)
			: textPrinter(filteredChord);
	}
}

const isValidChord = (chord) => {
	return chord && typeof chord === 'object' && !chord.error && chord.input;
};

/**
 * @module chordRendererFactory
 * Expose the chordRendererFactory() function
 **/
export default chordRendererFactory;
