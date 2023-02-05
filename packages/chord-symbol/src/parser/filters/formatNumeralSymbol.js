import { flatsToSharps, notesSharp } from '../../dictionaries/notes';
import { semitonesToDegree } from '../../dictionaries/degrees';
import { minorQualities, qualities } from '../../dictionaries/qualities';

const diatonicChords = {
	major: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'],
	dom7: ['IΔ', 'ii⁷', 'iii⁷', 'IVΔ', 'V⁷', 'vi⁷', 'viiø'],
	minor: ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII'],
	minor7: ['i⁷', 'iiø', 'IIIΔ', 'iv⁷', 'v⁷', 'VIΔ', 'VIIΔ'],
};

const borrowedChords = {
	borrowedFromMinor: ['i', 'ii°', '♭III', 'iv', 'v', '♭VI', '♭VII'],
	borrowedFromMinor7: ['i⁷', 'iiø', '♭IIIΔ', 'iv⁷', 'v⁷', '♭VIΔ', '♭VIIΔ'],
	borrowedFromMajor: ['I', 'ii', '♯iii', 'IV', 'V', '♯vi', '♯vii°'],
	borrowedFromDom7: ['IΔ', 'ii⁷', '♯iii⁷', 'IVΔ', 'V⁷', '♯vi⁷', '♯viiø'],
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
	console.log(interval);
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
	[qualities.dom7]: (chord, inversion) => (inversion === '' ? '⁷' : ''),

	[qualities.mi]: () => '',
	[qualities.mi6]: () => '',
	[qualities.mi7]: (chord, inversion) => {
		if (chord.normalized.intervals.includes('b5')) {
			return 'ø';
		} else {
			return inversion === '' ? '⁷' : '';
		}
	},
	[qualities.miMa7]: () => 'mΔ',

	[qualities.aug]: () => '+',
	[qualities.dim]: () => '°',
	[qualities.dim7]: (chord, inversion) => (inversion === '' ? '°⁷' : '°'),

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
			inversion = isSeventh(chord) ? '⁶₅' : '⁶';
		} else if (bassIsFifth(chord)) {
			inversion = isSeventh(chord) ? '⁴₃' : '⁶₄';
		} else if (bassIsSeventh(chord)) {
			inversion = '²';
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
