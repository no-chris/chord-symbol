import { hasAll } from '../../helpers/hasElement';

const allForbiddenCombos = [
	['3',  'b3'],
	['3',  '4'],
	['5',  'b5'],
	['5',  '#5'],
	['b7', 'bb7'],
	['7',  'bb7'], // really?
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
