import { flatsToSharps, notesSharp } from '../../dictionaries/notes';
import { semitonesToDegree } from '../../dictionaries/degrees';
import { minorQualities, qualities } from '../../dictionaries/qualities';

const diatonicChords = {
	major: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'],
	dom7: ['IΔ', 'ii⁷', 'iii⁷', 'IVΔ', 'V⁷', 'vi⁷', 'viiø⁷'],
	minor: ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII'],
	minor7: ['i⁷', 'iiø⁷', 'IIIΔ', 'iv⁷', 'v⁷', 'VIΔ', 'VIIΔ'],
};

const borrowedChords = {
	borrowedFromMinor: ['i', 'ii°', '♭III', 'iv', 'v', '♭VI', '♭VII'],
	borrowedFromMinor7: ['i⁷', 'iiø⁷', '♭IIIΔ', 'iv⁷', 'v⁷', '♭VIΔ', '♭VIIΔ'],
	borrowedFromMajor: ['I', 'ii', '♯iii', 'IV', 'V', '♯vi', '♯vii°'],
	borrowedFromDom7: ['IΔ', 'ii⁷', '♯iii⁷', 'IVΔ', 'V⁷', '♯vi⁷', '♯viiø⁷'],
};

/**
 * xxx
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
	degree = getRomanDegree(key, keyQuality, chord);

	const descriptor = qualityToDescriptor[chord.normalized.quality](chord);

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

	const inversion = '';

	chord.numeral = {
		symbol,
		degree,
		descriptor,
		inversion,
		type,
	};
	return chord;
}

function getRomanDegree(key, keyQuality, chord) {
	const keyNote = key.replace('m', '');

	const interval = getIntervalBetweenNotes(
		keyNote,
		chord.normalized.rootNote
	);
	const romanDegree = semitonesToDegree[keyQuality][interval] || '?';

	const chordQuality = minorQualities.includes(chord.normalized.quality)
		? 'minor'
		: 'major';

	return chordQuality === 'minor' ? romanDegree.toLowerCase() : romanDegree;
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
	[qualities.dom7]: () => '⁷',

	[qualities.mi]: () => '',
	[qualities.mi6]: () => '',
	[qualities.mi7]: (chord) =>
		chord.normalized.intervals.includes('b5') ? 'ø⁷' : '⁷',
	[qualities.miMa7]: () => 'mΔ',

	[qualities.aug]: () => '+',
	[qualities.dim]: () => '°',
	[qualities.dim7]: () => '°⁷',

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
