import _cloneDeep from 'lodash/cloneDeep';

import textPrinter from './text';
import chordParserFactory from '../../parser/chordParserFactory';

/**
 * @param {Chord} chord
 * @returns {Chord}
 */
export default function rawPrinter(chord) {
	const textPrinted = textPrinter(chord);

	// fixme: re-parse in order to get the input...
	const parseChord = chordParserFactory(chord.parserConfiguration);
	const reParsed = parseChord(textPrinted);
	const cloned = _cloneDeep(chord);
	cloned.input = reParsed.input;

	return cloned;
}
