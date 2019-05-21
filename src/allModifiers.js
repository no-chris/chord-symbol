// Modifiers are either directly mapped to degrees (most of the time), or to chord qualities.
// The later is useful when a modifier impact multiple degrees (dim, dim7, ma9...)
// They also help identifying the intent behind a given;
// Some may look like duplicates because they yield the same result, but they are not

export default {

	// major
	ma: 'ma',
	ma7: 'ma7',
	ma9: 'ma9',
	ma11: 'ma11',
	ma13: 'ma13',

	// minor
	mi: 'mi',

	// suspended
	sus: 'sus',
	sus2: 'sus2',

	// dominant
	dom7: 'dom7',
	dom9: 'dom9',
	dom11: 'dom11',
	dom13: 'dom13',

	// diminished / augmented
	dim: 'dim',
	dim7: 'dim7',
	halfDim: 'halfDim',
	aug: 'aug',

	// alterations
	fifthFlat: 'b5',
	fifthSharp: '#5',
	ninthFlat: 'b9',
	ninthSharp: '#9',
	eleventhSharp: '#11',
	thirteenthFlat: 'b13',

	// added
	add2: 'add2',
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

};
