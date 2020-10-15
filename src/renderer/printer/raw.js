import _cloneDeep from 'lodash/cloneDeep';

/**
 * @param {Chord} chord
 * @returns {Chord}
 */
export default function rawPrinter(chord) {
	return _cloneDeep(chord);
}
