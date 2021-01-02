import _cloneDeep from 'lodash/cloneDeep';

import textPrinter from './text';
import chordParserFactory from '../../parser/chordParserFactory';

/**
 * This printer returns a `chord` object reflecting the applied rendering filters. This object is very close to what would
 * be obtained by re-parsing the rendered chord.
 * It is basically the `chord` object in its current state, with 2 differences:
 * - a re-built `input` property to include all the changes applied during rendering (transposition, simplification, etc.)
 * - a removed `notationSystems` parser configuration since it may not be relevant anymore, especially if the rendering changed the notation system
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
export default function rawPrinter(chord) {
	// make sure the chord can be re-parsed, whichever notation system was used for the rendering
	delete chord.parserConfiguration.notationSystems;

	const cloned = _cloneDeep(chord);

	// Re-parse the rendered chord to get the 'input' property right
	const textPrinted = textPrinter(chord);
	const parseChord = chordParserFactory(chord.parserConfiguration);
	const reParsed = parseChord(textPrinted);
	cloned.input = reParsed.input;

	return cloned;
}
