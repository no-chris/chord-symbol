const qualities = {
	ma: 'major',
	ma6: 'major6',
	ma7: 'major7',
	dom7: 'dominant7',

	mi: 'minor',
	mi6: 'minor6',
	mi7: 'minor7',
	miMa7: 'minorMajor7',

	aug: 'augmented',
	dim: 'diminished',
	dim7: 'diminished7',

	power: 'power',
	bass: 'bass',
};

const majorQualities = [
	qualities.ma,
	qualities.ma6,
	qualities.ma7,
	qualities.dom7,
	qualities.aug,
];

const minorQualities = [
	qualities.mi,
	qualities.mi6,
	qualities.mi7,
	qualities.miMa7,
	qualities.dim,
	qualities.dim7,
];

export { qualities, majorQualities, minorQualities };
