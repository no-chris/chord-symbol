import _cloneDeep from 'lodash/cloneDeep';

import chain from '../helpers/chain';

import shortenNormalized from './filters/shortenNormalized';
import textPrinter from './printer/text';

/**
 *
 * @param options
 * @returns {function(*=): String}
 */
export default function chordRendererFactory({
	useShortNamings = false,
	printer = 'text'
} = {}) {

	const allFilters = [];

	if (useShortNamings) {
		allFilters.push(shortenNormalized);
	}

	function renderChord(chord) {
		const filteredChord = chain(allFilters, _cloneDeep(chord));

		switch (printer) {
			case 'text': return textPrinter(filteredChord);
			case 'raw': return filteredChord;

		}
		return textPrinter(filteredChord);
	}

	return renderChord;
}

