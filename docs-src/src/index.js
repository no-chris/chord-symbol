import { parseChord, chordRendererFactory } from '../../src/index';
import {Pianokeys} from 'custom-piano-keys'

const renderChordNormalized = chordRendererFactory();
const renderChordShort = chordRendererFactory({ useShortNamings: true });

const chordInput = document.getElementById('chordInput');

const normalized = document.querySelector('[data-output="normalized"]');
const pianokeysDiv = document.querySelector('[data-output="pianokeys"]');
const normalizedShort = document.querySelector('[data-output="normalizedShort"]');
const intervals = document.querySelector('[data-output="intervals"]');
const json = document.querySelector('[data-output="json"]');
const outputDetails = document.querySelector('.output-details');

let input;
let chord;
let symbolNormalized;
let symbolShort;
let mappedNotes;
let markedKeys;
let pianokeys;
let rootNotes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
let rootNoteIndex;
let octaveCount;

function myReducer(total, item) {
    return total + " " + item;
}

chordInput.addEventListener('keyup', () => {

  if(pianokeysDiv.firstChild) {
    pianokeysDiv.firstChild.remove()
  }

  input = chordInput.value;
  chord = parseChord(input);
  if(chord) {
    rootNoteIndex = rootNotes.indexOf(chord.normalized.rootNote)
    if(rootNoteIndex !== -1) {
      mappedNotes = chord.normalized.semitones.map(x => x + 1 + rootNoteIndex)
      octaveCount = 1
      if(mappedNotes.some(x => x > 12)) {
        octaveCount = 2
      }
      markedKeys = mappedNotes.reduce(myReducer,"").trim()
      pianokeys = document.createElement("custom-piano-keys")
      pianokeys.setAttribute("marked-keys", markedKeys)
      pianokeys.setAttribute("oct-count", octaveCount)
      pianokeysDiv.appendChild(pianokeys)
    }
  }

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
});
