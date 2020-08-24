import { hasExactly } from '../../helpers/hasElement';

const shortDescriptors = {
	sus2: 'sus2',
	add2: '2',
	omit: 'no',
	ma: 'M',
	mi: 'm',
	dim: '°',
	aug7: '7+',
	eleventh: '11',
	alt: '7alt',
};


/**
 * @param {Chord} chord
 * @returns {Chord}
 */
export default function shortenNormalized(chord) {
	let descriptor;
	let chordChanges = chord.formatted.chordChanges;

	if (isSus2(chord)) {
		descriptor = shortDescriptors.sus2;
		chordChanges = [];

	} else if (isAdd2(chord)) {
		descriptor = shortDescriptors.add2;
		chordChanges = [];

	} else if (isAug7(chord)) {
		descriptor = shortDescriptors.aug7;
		chordChanges = [];

	} else if (isAlt(chord)) {
		descriptor = shortDescriptors.alt;
		chordChanges = [];

	} else if (isEleventh(chord)) {
		descriptor = chord.formatted.descriptor
			.replace(/7sus|9sus/, shortDescriptors.eleventh);

	} else {
		descriptor = chord.formatted.descriptor
			.replace('mi', shortDescriptors.mi)
			.replace(/[m|M]a/, shortDescriptors.ma)
			.replace('dim', shortDescriptors.dim)
		;
	}

	chordChanges = chordChanges
		.map(change => {
			return change
				.replace(/[m|M]a/, shortDescriptors.ma)
				.replace('omit', shortDescriptors.omit);
		});

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

function isAlt(chord) {
	return hasExactly(chord.normalized.intervals, [
		'1',
		'3',
		'#5',
		'b7',
		'b9',
		'#9',
		'#11',
		'b13'
	]);
}

function isEleventh(chord) {
	return chord.normalized.intents.eleventh;
}
