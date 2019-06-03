import _cloneDeep from 'lodash/cloneDeep';

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

	function applyFilters(initialChord) {
		return allFilters.reduce((modifiedChord, filter) => {
			return filter(_cloneDeep(modifiedChord));
		}, initialChord);
	}

	function renderChord(chord) {
		const filteredChord = applyFilters(chord);

		switch (printer) {
			case 'text': return textPrinter(filteredChord);
			case 'raw': return filteredChord;

		}
		return textPrinter(filteredChord);
	}

	return renderChord;
}

