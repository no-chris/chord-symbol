const allModifiers = {
	// base
	ma: 'ma',
	mi: 'mi',
	dim: 'dim',
	halfDim: 'halfDim',
	aug: 'aug',
	seventh: 'seventh',

	// suspended
	sus: 'sus',
	sus2: 'sus2',

	// extensions
	ninth: 'ninth',
	eleventh: 'eleventh',
	thirteenth: 'thirteenth',

	// alterations
	fifthFlat: 'b5',
	fifthSharp: '#5',
	ninthFlat: 'b9',
	ninthSharp: '#9',
	eleventhSharp: '#11',
	thirteenthFlat: 'b13',

	// added
	add3: 'add3',
	add4: 'add4',
	add6: 'add6',
	add69: 'add69',
	add7: 'add7',
	add9: 'add9',
	add11: 'add11',
	add13: 'add13',

	// special
	bass: 'bass',
	omit3: 'omit3',
	omit5: 'omit5',
	power: 'power',
	alt: 'alt',
};

/**
 * WARNING: when adding new modifiers symbols, be careful of possible edge cases that might arise with some combinations.
 * For example, without edge case handling, "madd9" would be parsed as "ma" instead of "m"+"add9"
 */

const major = {
	'^': [allModifiers.ma, allModifiers.add7],
	Δ: [allModifiers.ma, allModifiers.add7],
	M: allModifiers.ma,
	Ma: allModifiers.ma,
	Maj: allModifiers.ma,
	Major: allModifiers.ma,
	ma: allModifiers.ma,
	maj: allModifiers.ma,
	major: allModifiers.ma,
};

const major7th = getDerivedModifiers(
	major,
	allModifiers.add7,
	(symbol) => symbol + '7'
);
const add7 = getDerivedModifiers(
	major,
	allModifiers.add7,
	(symbol) => 'add' + symbol + '7'
);

const allSymbols = {
	// major
	...major,
	...major7th,

	// minor
	'-': allModifiers.mi,
	m: allModifiers.mi,
	Mi: allModifiers.mi,
	Min: allModifiers.mi,
	Minor: allModifiers.mi,
	mi: allModifiers.mi,
	min: allModifiers.mi,
	minor: allModifiers.mi,

	// diminished / augmented
	'°': allModifiers.dim,
	o: allModifiers.dim,
	0: allModifiers.dim,
	dim: allModifiers.dim,
	'dim.': allModifiers.dim,
	diminished: allModifiers.dim,

	Ø: allModifiers.halfDim,
	ø: allModifiers.halfDim,
	h: allModifiers.halfDim,

	'+': allModifiers.aug,
	aug: allModifiers.aug,
	augmented: allModifiers.aug,

	// seventh
	7: allModifiers.seventh,

	// suspended
	4: allModifiers.sus,
	sus: allModifiers.sus,
	sus4: allModifiers.sus,
	suspended: allModifiers.sus,
	suspended4: allModifiers.sus,
	sus2: allModifiers.sus2,
	suspended2: allModifiers.sus2,

	// extensions
	9: allModifiers.ninth,
	11: allModifiers.eleventh,
	13: allModifiers.thirteenth,

	// alterations
	b3: allModifiers.mi,
	b5: allModifiers.fifthFlat,
	'♭5': allModifiers.fifthFlat,
	'#5': allModifiers.fifthSharp,
	'♯5': allModifiers.fifthSharp,
	b9: allModifiers.ninthFlat,
	'♭9': allModifiers.ninthFlat,
	addb9: allModifiers.ninthFlat,
	'add♭9': allModifiers.ninthFlat,
	'#9': allModifiers.ninthSharp,
	'♯9': allModifiers.ninthSharp,
	'add#9': allModifiers.ninthSharp,
	'add♯9': allModifiers.ninthSharp,
	'#11': allModifiers.eleventhSharp,
	'♯11': allModifiers.eleventhSharp,
	'add#11': allModifiers.eleventhSharp,
	b13: allModifiers.thirteenthFlat,
	'♭13': allModifiers.thirteenthFlat,
	addb13: allModifiers.thirteenthFlat,
	'add♭13': allModifiers.thirteenthFlat,

	// added
	...add7,
	2: allModifiers.add9,
	add2: allModifiers.add9,
	add3: allModifiers.add3,
	add4: allModifiers.add4,
	6: allModifiers.add6,
	add6: allModifiers.add6,
	'6/9': allModifiers.add69,
	69: allModifiers.add69,
	96: allModifiers.add69,
	'9/6': allModifiers.add69,
	add9: allModifiers.add9,
	add11: allModifiers.add11,
	add13: allModifiers.add13,

	// special
	bass: allModifiers.bass,
	omit3: allModifiers.omit3,
	no3: allModifiers.omit3,
	omit5: allModifiers.omit5,
	no5: allModifiers.omit5,
	5: allModifiers.power,
	alt: allModifiers.alt,
	'alt.': allModifiers.alt,
	altered: allModifiers.alt,
};

function getDerivedModifiers(source, modifierId, derivedFn) {
	return Object.keys(source)
		.map(derivedFn)
		.reduce((acc, curr) => {
			acc[curr] = modifierId;
			return acc;
		}, {});
}

const allVariants = Object.keys(allSymbols).sort((a, b) => b.length - a.length);

export { allSymbols, allVariants };
export default allModifiers;
