const allNotes = {
	AFlat: 'Ab',
	A: 'A',
	ASharp: 'A#',
	BFlat: 'Bb',
	B: 'B',
	C: 'C',
	CSharp: 'C#',
	DFlat: 'Db',
	D: 'D',
	DSharp: 'D#',
	EFlat: 'Eb',
	E: 'E',
	F: 'F',
	FSharp: 'F#',
	GFlat: 'Gb',
	G: 'G',
	GSharp: 'G#',
};

const englishNotation = {
	'Ab': 	allNotes.AFlat,
	'A': 	allNotes.A,
	'A#': 	allNotes.ASharp,
	'Bb': 	allNotes.BFlat,
	'B': 	allNotes.B,
	'B#': 	allNotes.C,
	'Cb': 	allNotes.B,
	'C': 	allNotes.C,
	'C#': 	allNotes.CSharp,
	'Db': 	allNotes.DFlat,
	'D': 	allNotes.D,
	'D#': 	allNotes.DSharp,
	'Eb': 	allNotes.EFlat,
	'E': 	allNotes.E,
	'E#': 	allNotes.F,
	'Fb': 	allNotes.E,
	'F': 	allNotes.F,
	'F#': 	allNotes.FSharp,
	'Gb': 	allNotes.GFlat,
	'G': 	allNotes.G,
	'G#': 	allNotes.GSharp,
};

const latinNotation = {
	'Lab': 	allNotes.AFlat,
	'La': 	allNotes.A,
	'La#': 	allNotes.ASharp,
	'Sib': 	allNotes.BFlat,
	'Si': 	allNotes.B,
	'Si#': 	allNotes.C,
	'Dob': 	allNotes.B,
	'Do': 	allNotes.C,
	'Do#': 	allNotes.CSharp,
	'Reb': 	allNotes.DFlat,
	'Réb': 	allNotes.DFlat,
	'Re': 	allNotes.D,
	'Ré': 	allNotes.D,
	'Re#': 	allNotes.DSharp,
	'Ré#': 	allNotes.DSharp,
	'Mib': 	allNotes.EFlat,
	'Mi': 	allNotes.E,
	'Mi#': 	allNotes.F,
	'Fab': 	allNotes.E,
	'Fa': 	allNotes.F,
	'Fa#': 	allNotes.FSharp,
	'Solb': allNotes.GFlat,
	'Sol': 	allNotes.G,
	'Sol#': allNotes.GSharp,
};

const germanNotation = {
	'As': 	allNotes.AFlat,
	'A': 	allNotes.A,
	'Ais': 	allNotes.ASharp,
	'Hes': 	allNotes.BFlat,
	'H': 	allNotes.B,
	'His': 	allNotes.C,
	'Ces': 	allNotes.B,
	'C': 	allNotes.C,
	'Cis': 	allNotes.CSharp,
	'Des': 	allNotes.DFlat,
	'D': 	allNotes.D,
	'Dis': 	allNotes.DSharp,
	'Es': 	allNotes.EFlat,
	'E': 	allNotes.E,
	'Eis': 	allNotes.F,
	'Fes': 	allNotes.E,
	'F': 	allNotes.F,
	'Fis': 	allNotes.FSharp,
	'Ges': 	allNotes.GFlat,
	'G': 	allNotes.G,
	'Gis': 	allNotes.GSharp,
};

function getAccidentalsVariation(source) {
	let variant;
	return Object.keys(source)
		.reduce((acc, curr) => {
			if (curr.match(/.[b|#]$/)) {
				variant = curr
					.replace('#', '♯')
					.replace('b', '♭');
				acc[variant] = source[curr];
			}
			return acc;
		}, {});
}

const variantsToNotes = {
	...englishNotation,
	...getAccidentalsVariation(englishNotation),
	...latinNotation,
	...getAccidentalsVariation(latinNotation),
	...germanNotation,
};

const allVariants = Object.keys(variantsToNotes)
	.sort((a, b) => b.length - a.length);

export { allNotes, allVariants, variantsToNotes };
