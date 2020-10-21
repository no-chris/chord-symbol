import _cloneDeep from 'lodash/cloneDeep';

/**
 * @param {String} symbol
 * @param {Object} parserConfiguration
 * @returns {Chord}
 */
export default function initChord(parserConfiguration = {}, symbol) {
	return {
		input: {
			symbol,
		},
		normalized: {},
		formatted: {},
		parserConfiguration: _cloneDeep(parserConfiguration),
	};
}
