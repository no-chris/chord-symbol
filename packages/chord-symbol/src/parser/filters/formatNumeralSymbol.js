import { flatsToSharps, notesSharp } from '../../dictionaries/notes';
import { semitonesToDegree } from '../../dictionaries/degrees';
import { minorQualities } from '../../dictionaries/qualities';
import { getScaleAccidental } from '../../dictionaries/scales';

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
	const keyNote = key.replace('m', '');
	const keyQuality = key.indexOf('m') > -1 ? 'minor' : 'major';

	const interval = getIntervalBetweenNotes(
		keyNote,
		chord.normalized.rootNote
	);
	const accidental = getScaleAccidental(key);
	const romanDegree = semitonesToDegree[keyQuality][accidental][interval];

	return isMinor(chord) ? romanDegree.toLowerCase() : romanDegree;
}

function getIntervalBetweenNotes(note1, note2) {
	const note1Index = notesSharp.indexOf(flatsToSharps[note1] || note1);
	const note2Index = notesSharp.indexOf(flatsToSharps[note2] || note2);
	return (note2Index - note1Index + 12) % 12;
}
