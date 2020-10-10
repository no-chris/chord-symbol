import { chordParserFactory, chordRendererFactory } from '../../src/index';
import 'custom-piano-keys';

const parseChord = chordParserFactory();
const renderChordNormalized = chordRendererFactory();
const renderChordShort = chordRendererFactory({ useShortNamings: true });

const chordInput = document.getElementById('chordInput');

const normalized = document.querySelector('[data-output="normalized"]');
const normalizedShort = document.querySelector('[data-output="normalizedShort"]');
const intervals = document.querySelector('[data-output="intervals"]');
const json = document.querySelector('[data-output="json"]');
const outputDetails = document.querySelector('.output-details');

let input;
let chord;
let symbolNormalized;
let symbolShort;

chordInput.addEventListener('keyup', () => {
	input = chordInput.value;
	chord = parseChord(input);

	symbolNormalized = (!chord) ? '' : renderChordNormalized(chord);
	symbolShort = (!chord) ? '' : renderChordShort(chord);

	if (!chord) {
		outputDetails.classList.add('hidden');
	} else {
		outputDetails.classList.remove('hidden');
	}

	normalized.textContent 		= (!chord) ? '-' : symbolNormalized;
	normalizedShort.textContent = (symbolNormalized === symbolShort) ? '' : 'alternate: ' + symbolShort;
	intervals.textContent 		= (!chord) ? '-' : chord.normalized.intervals.join('-');
	json.textContent 			= (!chord) ? '-' : JSON.stringify(chord, null, 4);

	updatePianoKeys(chord);
});



// Custom piano keys
// https://github.com/jutunen/custom-piano-keys
const pianokeysDiv = document.querySelector('[data-output="pianokeys"]');

let mappedNotes;
let markedKeys;
let pianokeys;
let rootNotes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
let rootNoteIndex;
let octaveCount;

function myReducer(total, item) {
	return total + ' ' + item;
}

function updatePianoKeys() {
	if(pianokeysDiv.firstChild) {
		pianokeysDiv.firstChild.remove();
	}
	if(chord) {
		rootNoteIndex = rootNotes.indexOf(chord.normalized.rootNote);
		if(rootNoteIndex !== -1) {
			mappedNotes = chord.normalized.semitones.map(x => x + 1 + rootNoteIndex);
			octaveCount = 1;
			if(mappedNotes.some(x => x > 12)) {
				octaveCount = 2;
			}
			markedKeys = mappedNotes.reduce(myReducer,'').trim();
			pianokeys = document.createElement('custom-piano-keys');
			pianokeys.setAttribute('marked-keys', markedKeys);
			pianokeys.setAttribute('oct-count', octaveCount);
			pianokeysDiv.appendChild(pianokeys);
		}
	}
}
