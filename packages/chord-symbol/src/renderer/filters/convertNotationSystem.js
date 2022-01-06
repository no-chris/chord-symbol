const translationTables = {
	german: {
		Ab: 'As',
		A: 'A',
		'A#': 'Ais',
		Bb: 'Hes',
		B: 'H',
		C: 'C',
		'C#': 'Cis',
		Db: 'Des',
		D: 'D',
		'D#': 'Dis',
		Eb: 'Es',
		E: 'E',
		F: 'F',
		'F#': 'Fis',
		Gb: 'Ges',
		G: 'G',
		'G#': 'Gis',
	},
	latin: {
		Ab: 'Lab',
		A: 'La',
		'A#': 'La#',
		Bb: 'Sib',
		B: 'Si',
		C: 'Do',
		'C#': 'Do#',
		Db: 'Reb',
		D: 'Re',
		'D#': 'Re#',
		Eb: 'Mib',
		E: 'Mi',
		F: 'Fa',
		'F#': 'Fa#',
		Gb: 'Solb',
		G: 'Sol',
		'G#': 'Sol#',
	},
};
const allNotationSystems = Object.keys(translationTables);

/**
 * @param {('auto'|'english'|'german'|'latin')} notationSystem
 * @param {Chord} chord
 * @returns {Chord|Null}
 */
export default function convertNotationSystem(
	notationSystem = 'english',
	chord
) {
	const finalNotationSystem =
		notationSystem === 'auto' ? chord.input.notationSystem : notationSystem;

	if (finalNotationSystem === 'english') return chord;
	if (!allNotationSystems.includes(finalNotationSystem)) return null;

	chord.formatted.rootNote =
		translationTables[finalNotationSystem][chord.formatted.rootNote];

	if (chord.formatted.bassNote) {
		chord.formatted.bassNote =
			translationTables[finalNotationSystem][chord.formatted.bassNote];
	}
	return chord;
}
