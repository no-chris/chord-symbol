import _cloneDeep from 'lodash/cloneDeep';

import normalizeDescriptor from './filters/normalizeDescriptor';
import shortenNormalized from './filters/shortenNormalized';

import textPrinter from './printer/text';

/**
 *
 * @param options
 * @returns {function(*=): String}
 */
export default function chordRendererFactory({
	useShortNamings = false,
} = {}) {

	const allFilters = [];

	allFilters.push(normalizeDescriptor);

	if (useShortNamings) {
		allFilters.push(shortenNormalized);
	}

	function applyFilters(initialChord) {
		return allFilters.reduce((modifiedChord, filter) => {
			return filter(_cloneDeep(modifiedChord));
		}, initialChord);
	}

	function renderChord(chord) {
		const modifiedChord = applyFilters(chord);

		return textPrinter(modifiedChord);
	}

	return renderChord;
}

