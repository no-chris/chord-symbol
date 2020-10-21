import _difference from 'lodash/difference';

import chain from '../../helpers/chain';

import normalizeDescriptor from '../../parser/filters/normalizeDescriptor';
import formatSymbolParts from '../../parser/filters/formatSymbolParts';
import nameIndividualChordNotes from '../../parser/filters/nameIndividualChordNotes';
import intervalsToSemitones from '../../dictionaries/intervalsToSemitones';

import { hasNoneOf } from '../../helpers/hasElement';

/**
 * @param {Chord} chord
 * @param {('none'|'max'|'core')} level
 * @returns {Chord}
 */
export default function simplify(level = 'none', chord) {
	if (level === 'none') {
		return chord;
	}

	const intervalsToRemove = {
		max: [
			'4',
			'b5',
			'#5',
			'6',
			'bb7',
			'b7',
			'7',
			'b9',
			'9',
			'#9',
			'11',
			'#11',
			'b13',
			'13',
		],
		core: ['4', 'b9', '9', '#9', '11', '#11', 'b13', '13'],
	};

	const intervals = _difference(
		chord.normalized.intervals,
		intervalsToRemove[level]
	);

	if (hasNoneOf(intervals, ['b3', '3'])) {
		intervals.push(chord.normalized.intents.major ? '3' : 'b3');
	}

	if (hasNoneOf(intervals, ['b5', '5', '#5'])) {
		intervals.push('5');
	}

	chord.normalized.intervals = intervals;
	chord.normalized.semitones = intervals.map(
		(interval) => intervalsToSemitones[interval]
	);
	chord.normalized.intents.eleventh = false;
	chord.normalized.intents.alt = false;

	if (level === 'max') {
		delete chord.normalized.bassNote;
	}

	const allFilters = [
		normalizeDescriptor,
		formatSymbolParts,
		nameIndividualChordNotes,
	];

	return chain(allFilters, chord);
}
