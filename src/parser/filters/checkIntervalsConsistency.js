import { hasAll } from '../../helpers/hasElement';

const allForbiddenCombos = [
	//['2',  '3'], // "2" modifier yields a ninth interval and not a second (eg, C2 = Cadd9)
	['3',  'b3'],
	//['3',  '4'], // valid in the Real Book: F#7SUS(add 3)
	['5',  'b5'],
	['5',  '#5'],
	['b7', 'bb7'],
	//['7',  'bb7'], // valid in the Real Book: C°7(add MA7)
	['7',  'b7'],
	['9',  'b9'],
	['9',  '#9'],
	['11', '#11'],
	['13', 'b13'],
];

/**
 * @param {Chord} chord
 * @returns {Chord|Null}
 */
export default function checkIntervalsConsistency(chord) {
	const intervals = chord.normalized.intervals;

	const hasForbiddenCombo = allForbiddenCombos.some(combo => hasAll(intervals, combo));

	return hasForbiddenCombo ? null : chord;
}
