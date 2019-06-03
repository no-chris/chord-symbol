import { parseChord, chordRendererFactory } from '../../src/index';

const renderChordNormalized = chordRendererFactory();
const renderChordShort = chordRendererFactory({ useShortNamings: true });
const renderChordRaw = chordRendererFactory({ printer: 'raw' });

const chordInput = document.getElementById('chordInput');

const normalized = document.querySelector('[data-output="normalized"]');
const normalizedShort = document.querySelector('[data-output="normalizedShort"]');
const intervals = document.querySelector('[data-output="intervals"]');
const semitones = document.querySelector('[data-output="semitones"]');
const rootnote = document.querySelector('[data-output="rootnote"]');
const bassnote = document.querySelector('[data-output="bassnote"]');
const json = document.querySelector('[data-output="json"]');

let input;
let chord;

chordInput.addEventListener('keyup', () => {
	input = chordInput.value;
	chord = parseChord(input);

	normalized.textContent 		= (!chord) ? '-' : renderChordNormalized(chord);
	normalizedShort.textContent = (!chord) ? '-' : renderChordShort(chord);
	intervals.textContent 		= (!chord) ? '-' : chord.normalized.intervals.join('-');
	semitones.textContent 		= (!chord) ? '-' : chord.normalized.semitones.join('-');
	rootnote.textContent 		= (!chord) ? '-' : chord.formatted.rootNote;
	bassnote.textContent 		= (!chord) ? '-' : chord.formatted.bassNote;
	json.textContent 			= (!chord) ? '-' : JSON.stringify(renderChordRaw(chord), null, 4);
});
