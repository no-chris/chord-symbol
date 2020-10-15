import textPrinter from './text';
import chordParserFactory from '../../parser/chordParserFactory';

/**
 * @param {Chord} chord
 * @returns {Chord}
 */
export default function rawPrinter(chord) {
	const textPrinted = textPrinter(chord);
	const parseChord = chordParserFactory();

	return parseChord(textPrinted);
}
