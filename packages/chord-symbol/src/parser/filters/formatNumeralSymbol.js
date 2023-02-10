import { flatsToSharps, notesSharp } from '../../dictionaries/notes';
import { semitonesToDegree } from '../../dictionaries/degrees';
import { minorQualities, qualities } from '../../dictionaries/qualities';

const u = {
	sup2: '\u00B2', // ²
	sup4: '\u2074', // ⁴
	sup5: '\u2075', // ⁵
	sup6: '\u2076', // ⁶
	sup7: '\u2077', // ⁷
	sub3: '\u2083', // ₃
	sub4: '\u2084', // ₄
	sub5: '\u2085', // ₅
	flat: '\u266D', // ♭
	sharp: '\u266F', // ♯
};

const diatonicChords = {
	major: [`I`, `ii`, `iii`, `IV`, `V`, `vi`, `vii°`],
	dom7: [
		`IΔ`,
		`ii${u.sup7}`,
		`iii${u.sup7}`,
		`IVΔ`,
		`V${u.sup7}`,
		`vi${u.sup7}`,
		`viiø`,
	],
	minor: [`i`, `ii°`, `III`, `iv`, `v`, `VI`, `VII`],
	minor7: [
		`i${u.sup7}`,
		`iiø`,
		`IIIΔ`,
		`iv${u.sup7}`,
		`v${u.sup7}`,
		`VIΔ`,
		`VIIΔ`,
	],
};

const borrowedChords = {
	borrowedFromMinor: [
		`i`,
		`ii°`,
		`${u.flat}III`,
		`iv`,
		`v`,
		`${u.flat}VI`,
		`${u.flat}VII`,
	],
	borrowedFromMinor7: [
		`i${u.sup7}`,
		`iiø`,
		`${u.flat}IIIΔ`,
		`iv${u.sup7}`,
		`v${u.sup7}`,
		`${u.flat}VIΔ`,
		`${u.flat}VIIΔ`,
	],
	borrowedFromMajor: [
		`I`,
		`ii`,
		`${u.sharp}iii`,
		`IV`,
		`V`,
		`${u.sharp}vi`,
		`${u.sharp}vii°`,
	],
	borrowedFromDom7: [
		`IΔ`,
		`ii${u.sup7}`,
		`${u.sharp}iii${u.sup7}`,
		`IVΔ`,
		`V${u.sup7}`,
		`${u.sharp}vi${u.sup7}`,
		`${u.sharp}viiø`,
	],
};

/**
 * Construct the roman numeral symbol for a chord
 * @param {String} key
 * @param {Chord} chord
 * @returns {Chord}
 */
export default function formatNumeralSymbol(key = '', chord) {
	let degree;
	let symbol;
	let type;

	if (!key) key = chord.normalized.rootNote;

	const keyQuality = key.indexOf('m') > -1 ? 'minor' : 'major';
	const thirdQuality = minorQualities.includes(chord.normalized.quality)
		? 'minor'
		: 'major';

	degree = getRomanDegree(key, keyQuality, chord, thirdQuality);

	const inversion = getInversion(chord);
	const descriptor = qualityToDescriptor[chord.normalized.quality](
		chord,
		inversion
	);

	symbol = `${degree}${descriptor}`;

	if (isDiatonic(keyQuality, symbol)) {
		type = 'diatonic';
	} else if (isBorrowed(keyQuality, symbol)) {
		type = 'borrowed';
	} else {
		type = 'unknown';
		degree = '?';
		symbol = `${degree}${descriptor}`;
	}

	symbol += inversion;

	chord.numeral = {
		symbol,
		degree,
		descriptor,
		inversion,
		type,
		thirdQuality,
	};
	return chord;
}

function getRomanDegree(key, keyQuality, chord, thirdQuality) {
	const keyNote = key.replace('m', '');

	const interval = getIntervalBetweenNotes(
		keyNote,
		chord.normalized.rootNote
	);
	const romanDegree = semitonesToDegree[keyQuality][interval] || '?';

	return thirdQuality === 'minor' ? romanDegree.toLowerCase() : romanDegree;
}

function getIntervalBetweenNotes(note1, note2) {
	const note1Index = notesSharp.indexOf(flatsToSharps[note1] || note1);
	const note2Index = notesSharp.indexOf(flatsToSharps[note2] || note2);
	return (note2Index - note1Index + 12) % 12;
}

const qualityToDescriptor = {
	[qualities.ma]: () => '',
	[qualities.ma6]: () => '',
	[qualities.ma7]: () => 'Δ',
	[qualities.dom7]: (chord, inversion) =>
		inversion === '' ? `${u.sup7}` : '',

	[qualities.mi]: () => '',
	[qualities.mi6]: () => '',
	[qualities.mi7]: (chord, inversion) => {
		if (chord.normalized.intervals.includes('b5')) {
			return 'ø';
		} else {
			return inversion === '' ? `${u.sup7}` : '';
		}
	},
	[qualities.miMa7]: () => 'mΔ',

	[qualities.aug]: () => '+',
	[qualities.dim]: () => '°',
	[qualities.dim7]: (chord, inversion) =>
		inversion === '' ? `°${u.sup7}` : '°',

	[qualities.power]: () => '',
	[qualities.bass]: () => '',
};

function isDiatonic(keyQuality, symbol) {
	if (keyQuality === 'major') {
		return (
			diatonicChords.major.includes(symbol) ||
			diatonicChords.dom7.includes(symbol)
		);
	} else {
		return (
			diatonicChords.minor.includes(symbol) ||
			diatonicChords.minor7.includes(symbol)
		);
	}
}

function isBorrowed(keyQuality, symbol) {
	if (keyQuality === 'major') {
		return (
			borrowedChords.borrowedFromMinor.includes(symbol) ||
			borrowedChords.borrowedFromMinor7.includes(symbol)
		);
	} else {
		return (
			borrowedChords.borrowedFromMajor.includes(symbol) ||
			borrowedChords.borrowedFromDom7.includes(symbol)
		);
	}
}

function getInversion(chord) {
	let inversion = '';
	if (chord.normalized.bassNote) {
		if (bassIsThird(chord)) {
			inversion = isSeventh(chord) ? `${u.sup6}${u.sub5}` : `${u.sup6}`;
		} else if (bassIsFifth(chord)) {
			inversion = isSeventh(chord)
				? `${u.sup4}${u.sub3}`
				: `${u.sup6}${u.sub4}`;
		} else if (bassIsSeventh(chord)) {
			inversion = `²`;
		}
	}
	return inversion;
}

function isSeventh(chord) {
	return [
		qualities.ma7,
		qualities.mi7,
		qualities.miMa7,
		qualities.dom7,
		qualities.dim7,
	].includes(chord.normalized.quality);
}

function bassIsThird(chord) {
	return bassIsIntervalNote(chord, 'b3') || bassIsIntervalNote(chord, '3');
}

function bassIsFifth(chord) {
	return (
		bassIsIntervalNote(chord, 'b5') ||
		bassIsIntervalNote(chord, '5') ||
		bassIsIntervalNote(chord, '#5')
	);
}

function bassIsSeventh(chord) {
	return (
		bassIsIntervalNote(chord, 'bb7') ||
		bassIsIntervalNote(chord, 'b7') ||
		bassIsIntervalNote(chord, '7')
	);
}

function bassIsIntervalNote(chord, interval) {
	const intervalNoteIndex = chord.normalized.intervals.indexOf(interval);
	if (intervalNoteIndex === -1) return false;

	const normalizedBassNote =
		flatsToSharps[chord.normalized.bassNote] || chord.normalized.bassNote;
	const normalizedIntervalNote =
		flatsToSharps[chord.normalized.notes[intervalNoteIndex]] ||
		chord.normalized.notes[intervalNoteIndex];

	return normalizedBassNote === normalizedIntervalNote;
}
