import allScales from '../../dictionaries/scales';
import { minorQualities } from '../../dictionaries/qualities';

const degreeToRoman = {
	1: 'I',
	2: 'II',
	3: 'III',
	4: 'IV',
	5: 'V',
	6: 'VI',
	7: 'VII',
};

/**
 * xxx
 * @param {String} key
 * @param {Chord} chord
 * @returns {Chord}
 */
export default function formatNumeralSymbol(key, chord) {
	if (!key) {
		chord.formatted.numeralSymbol = 'I';
	} else {
		const keyScale = allScales[key];
		const degree = keyScale.notes.indexOf(chord.formatted.rootNote) + 1;
		const roman = degreeToRoman[degree];
		const numeralSymbol = minorQualities.includes(chord.normalized.quality)
			? roman.toLowerCase()
			: roman;

		chord.formatted.numeralSymbol = numeralSymbol;
	}
	return chord;
}
