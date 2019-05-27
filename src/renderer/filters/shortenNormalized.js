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
	let quality;
	let changes = [];

	if (isSus2(chord)) {
		quality = shortDescriptors.sus2;

	} else if (isAdd2(chord)) {
		quality = shortDescriptors.add2;

	} else if (isAug7(chord)) {
		quality = shortDescriptors.aug7;

	} else {
		quality = chord.normalizedDescriptor.quality
			.replace('mi', shortDescriptors.mi)
			.replace(/[m|M]a/, shortDescriptors.ma)
			.replace('dim', shortDescriptors.dim);

		changes = chord.normalizedDescriptor.changes
			.map(change => {
				return change
					.replace(/[m|M]a/, shortDescriptors.ma)
					.replace('omit', shortDescriptors.omit);
			});

	}
	return {
		...chord,
		normalizedDescriptor: {
			quality,
			changes,
		}
	};
}

function isSus2(chord) {
	return hasExactly(chord.intervals, ['1', '5', '9']);
}

function isAdd2(chord) {
	return hasExactly(chord.intervals, ['1', '3', '5', '9']);
}

function isAug7(chord) {
	return hasExactly(chord.intervals, ['1', '3', '#5', 'b7']);
}

