import { parseChord, chordRendererFactory } from '../../src/index';

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
});
