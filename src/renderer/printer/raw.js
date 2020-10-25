import _cloneDeep from 'lodash/cloneDeep';

import textPrinter from './text';
import chordParserFactory from '../../parser/chordParserFactory';

/**
 * @param {Chord} chord
 * @returns {Chord}
 */
export default function rawPrinter(chord) {
	const cloned = _cloneDeep(chord);

	// Re-parse the rendered chord to get the 'input' property right
	const textPrinted = textPrinter(chord);
	const parseChord = chordParserFactory(chord.parserConfiguration);
	const reParsed = parseChord(textPrinted);
	cloned.input = reParsed.input;

	return cloned;
}
