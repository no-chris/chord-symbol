import { hasExactly } from '../helpers/hasInterval';

const shortDescriptors = {
	sus2: 'sus2',
	add2: '2',
	omit: 'no',
	ma: 'M',
	mi: 'm',
	dim: '°',
	aug7: '7+',
};


/**
 * @param {Chord} chord
 * @returns {Chord}
 */
export default function shortenNormalized(chord) {
	let descriptor;
	let chordChanges = [];

	if (isSus2(chord)) {
		descriptor = shortDescriptors.sus2;

	} else if (isAdd2(chord)) {
		descriptor = shortDescriptors.add2;

	} else if (isAug7(chord)) {
		descriptor = shortDescriptors.aug7;

	} else {
		descriptor = chord.formatted.descriptor
			.replace('mi', shortDescriptors.mi)
			.replace(/[m|M]a/, shortDescriptors.ma)
			.replace('dim', shortDescriptors.dim);

		chordChanges = chord.formatted.chordChanges
			.map(change => {
				return change
					.replace(/[m|M]a/, shortDescriptors.ma)
					.replace('omit', shortDescriptors.omit);
			});

	}
	return {
		...chord,
		formatted: {
			...chord.formatted,
			descriptor,
			chordChanges,
		}
	};
}

function isSus2(chord) {
	return hasExactly(chord.normalized.intervals, ['1', '5', '9']);
}

function isAdd2(chord) {
	return hasExactly(chord.normalized.intervals, ['1', '3', '5', '9']);
}

function isAug7(chord) {
	return hasExactly(chord.normalized.intervals, ['1', '3', '#5', 'b7']);
}

