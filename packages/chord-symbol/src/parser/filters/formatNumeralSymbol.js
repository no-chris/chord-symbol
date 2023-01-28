import { getScaleAccidental } from '../../dictionaries/scales';
import { minorQualities } from '../../dictionaries/qualities';
import _invert from 'lodash/invert';

// fixme: import from somewhere else
const sharpsToFlats = {
	'C#': 'Db',
	'D#': 'Eb',
	'F#': 'Gb',
	'G#': 'Ab',
	'A#': 'Bb',
};
const flatsToSharps = _invert(sharpsToFlats);

const semitonesToDegree = {
	major: {
		sharp: {
			0: 'I',
			1: '♯I',
			2: 'II',
			3: '♯II',
			4: 'III',
			5: 'IV',
			6: '♯IV',
			7: 'V',
			8: '♯V',
			9: 'VI',
			10: '♯VI',
			11: 'VII',
		},
		flat: {
			0: 'I',
			1: '♭II',
			2: 'II',
			3: '♭III',
			4: 'III',
			5: 'IV',
			6: '♭V',
			7: 'V',
			8: '♭VI',
			9: 'VI',
			10: '♭VII',
			11: 'VII',
		},
	},
	minor: {
		sharp: {
			0: 'I',
			1: '♯I',
			2: 'II',
			3: 'III',
			4: '♯III',
			5: 'IV',
			6: '♯IV',
			7: 'V',
			8: 'VI',
			9: '♯VI',
			10: 'VII',
			11: '♯VII',
		},
		flat: {
			0: 'I',
			1: '♭II',
			2: 'II',
			3: 'III',
			4: '♭IV',
			5: 'IV',
			6: '♭V',
			7: 'V',
			8: 'VI',
			9: '♭VII',
			10: 'VII',
			11: '♭I',
		},
	},
};

/**
 * xxx
 * @param {String} key
 * @param {Chord} chord
 * @returns {Chord}
 */
export default function formatNumeralSymbol(key, chord) {
	let numeralSymbol;

	if (!key) {
		numeralSymbol = isMinor(chord) ? 'i' : 'I';
	} else {
		numeralSymbol = getRomanDegree(key, chord);
	}
	chord.formatted.numeralSymbol = numeralSymbol;
	return chord;
}

function isMinor(chord) {
	return minorQualities.includes(chord.normalized.quality);
}

function getRomanDegree(key, chord) {
	const interval = getIntervalBetweenNotes(
		key.replace('m', ''),
		chord.normalized.rootNote
	);
	const keyQuality = key.indexOf('m') > -1 ? 'minor' : 'major';
	const accidental = getScaleAccidental(key);
	const romanDegree = semitonesToDegree[keyQuality][accidental][interval];

	return isMinor(chord) ? romanDegree.toLowerCase() : romanDegree;
}

function getIntervalBetweenNotes(note1, note2) {
	const allNotes = [
		'C',
		'C#',
		'D',
		'D#',
		'E',
		'F',
		'F#',
		'G',
		'G#',
		'A',
		'A#',
		'B',
	];
	const note1Index = allNotes.indexOf(flatsToSharps[note1] || note1);
	const note2Index = allNotes.indexOf(flatsToSharps[note2] || note2);
	return (note2Index - note1Index + 12) % 12;
}
