import { hasAll } from '../../helpers/hasElement';
import { InvalidIntervalsError } from '../../helpers/ChordParsingError';

const allForbiddenCombos = [
	['2', '3'],
	['2', '9'],
	['3', 'b3'],
	//['3',  '4'], // valid in the Real Book: F#7SUS(add 3)
	['4', '11'],
	['5', 'b5'],
	['5', '#5'],
	['b6', '#5'],
	['b6', '6'],
	['b6', '13'],
	['6', '13'],
	['b7', 'bb7'],
	['7', 'b7'],
	['9', 'b9'],
	['9', '#9'],
	['11', '#11'],
	['13', 'b13'],
];

/**
 * Check parsed interval list to detect potential inconsistencies
 *
 * @param {Chord} chord
 * @returns {Chord|Null}
 */
export default function checkIntervalsConsistency(chord) {
	const intervals = chord.normalized.intervals;

	const forbiddenCombo = allForbiddenCombos.find((combo) =>
		hasAll(intervals, combo)
	);

	if (forbiddenCombo) {
		throw new InvalidIntervalsError(chord, forbiddenCombo);
	}

	return chord;
}
