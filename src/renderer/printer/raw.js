import _cloneDeep from 'lodash/cloneDeep';

import textPrinter from './text';
import chordParserFactory from '../../parser/chordParserFactory';

/**
 * @param {Chord} chord
 * @returns {Chord}
 */
export default function rawPrinter(chord) {
	const textPrinted = textPrinter(chord);
	const parseChord = chordParserFactory(chord.parserConfiguration);
	const reParsed = parseChord(textPrinted);

	return _cloneDeep(reParsed);
}
