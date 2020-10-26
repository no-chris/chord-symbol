import { hasAll } from '../../helpers/hasElement';

const allForbiddenCombos = [
	['2', '3'],
	['2', '9'],
	['3', 'b3'],
	//['3',  '4'], // valid in the Real Book: F#7SUS(add 3)
	['4', '11'],
	['5', 'b5'],
	['5', '#5'],
	['6', '13'],
	['b7', 'bb7'],
	['7', 'b7'],
	['9', 'b9'],
	['9', '#9'],
	['11', '#11'],
	['13', 'b13'],
];

/**
 * @param {Chord} chord
 * @returns {Chord|Null}
 */
export default function checkIntervalsConsistency(chord) {
	const intervals = chord.normalized.intervals;

	const hasForbiddenCombo = allForbiddenCombos.some((combo) =>
		hasAll(intervals, combo)
	);

	return hasForbiddenCombo ? null : chord;
}
