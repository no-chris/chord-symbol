import { parseChord, chordRendererFactory } from '../index';

const renderChordNormalized = chordRendererFactory();
const renderChordShort = chordRendererFactory({ useShortNamings: true });

const chordInput = document.getElementById('chordInput');

const normalized = document.querySelector('[data-output="normalized"]');
const normalizedShort = document.querySelector('[data-output="normalizedShort"]');
const intervals = document.querySelector('[data-output="intervals"]');
const semitones = document.querySelector('[data-output="semitones"]');

let input;
let chord;

chordInput.addEventListener('keyup', () => {
	input = chordInput.value;
	chord = parseChord(input);

	normalized.textContent 		= (!chord) ? '-' : renderChordNormalized(chord);
	normalizedShort.textContent = (!chord) ? '-' : renderChordShort(chord);
	intervals.textContent 		= (!chord) ? '-' : chord.intervals.join('-');
	semitones.textContent 		= (!chord) ? '-' : chord.semitones.join('-');
});
