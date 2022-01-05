const notes = {
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

const english = {
	Ab: notes.AFlat,
	A: notes.A,
	'A#': notes.ASharp,
	Bb: notes.BFlat,
	B: notes.B,
	'B#': notes.C,
	Cb: notes.B,
	C: notes.C,
	'C#': notes.CSharp,
	Db: notes.DFlat,
	D: notes.D,
	'D#': notes.DSharp,
	Eb: notes.EFlat,
	E: notes.E,
	'E#': notes.F,
	Fb: notes.E,
	F: notes.F,
	'F#': notes.FSharp,
	Gb: notes.GFlat,
	G: notes.G,
	'G#': notes.GSharp,
};

const latin = {
	Lab: notes.AFlat,
	La: notes.A,
	'La#': notes.ASharp,
	Sib: notes.BFlat,
	Si: notes.B,
	'Si#': notes.C,
	Dob: notes.B,
	Do: notes.C,
	'Do#': notes.CSharp,
	Reb: notes.DFlat,
	Réb: notes.DFlat,
	Re: notes.D,
	Ré: notes.D,
	'Re#': notes.DSharp,
	'Ré#': notes.DSharp,
	Mib: notes.EFlat,
	Mi: notes.E,
	'Mi#': notes.F,
	Fab: notes.E,
	Fa: notes.F,
	'Fa#': notes.FSharp,
	Solb: notes.GFlat,
	Sol: notes.G,
	'Sol#': notes.GSharp,
};

const german = {
	As: notes.AFlat,
	A: notes.A,
	Ais: notes.ASharp,
	Hes: notes.BFlat,
	H: notes.B,
	His: notes.C,
	Ces: notes.B,
	C: notes.C,
	Cis: notes.CSharp,
	Des: notes.DFlat,
	D: notes.D,
	Dis: notes.DSharp,
	Es: notes.EFlat,
	E: notes.E,
	Eis: notes.F,
	Fes: notes.E,
	F: notes.F,
	Fis: notes.FSharp,
	Ges: notes.GFlat,
	G: notes.G,
	Gis: notes.GSharp,
};

function getAccidentalsVariation(source) {
	let variant;
	return Object.keys(source).reduce((acc, curr) => {
		if (curr.match(/.[b|#]$/)) {
			variant = curr.replace('#', '♯').replace('b', '♭');
			acc[variant] = source[curr];
		}
		return acc;
	}, {});
}

const englishVariantsToNotes = {
	...english,
	...getAccidentalsVariation(english),
};

const latinVariantsToNotes = {
	...latin,
	...getAccidentalsVariation(latin),
};

const germanVariantsToNotes = {
	...german,
};

const allVariantsToNotes = {
	...englishVariantsToNotes,
	...latinVariantsToNotes,
	...germanVariantsToNotes,
};

const allVariants = Object.keys(allVariantsToNotes).sort(
	(a, b) => b.length - a.length
);

const englishVariants = Object.keys(englishVariantsToNotes).sort(
	(a, b) => b.length - a.length
);

const latinVariants = Object.keys(latinVariantsToNotes).sort(
	(a, b) => b.length - a.length
);

const germanVariants = Object.keys(germanVariantsToNotes).sort(
	(a, b) => b.length - a.length
);

const allVariantsPerGroup = [
	{ name: 'english', notes: englishVariants },
	{ name: 'german', notes: germanVariants },
	{ name: 'latin', notes: latinVariants },
];

export {
	notes,
	allVariants,
	allVariantsPerGroup,
	englishVariants,
	latinVariants,
	germanVariants,
	allVariantsToNotes,
	englishVariantsToNotes,
	latinVariantsToNotes,
	germanVariantsToNotes,
};
