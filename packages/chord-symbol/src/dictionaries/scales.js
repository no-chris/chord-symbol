const scaleToAccidental = {
	C: 'flat',
	D: 'sharp',
	E: 'sharp',
	F: 'flat',
	G: 'sharp',
	A: 'sharp',
	B: 'sharp',

	Cm: 'flat',
	Dm: 'flat',
	Em: 'sharp',
	Fm: 'flat',
	Gm: 'flat',
	Am: 'flat',
	Bm: 'sharp',
};

function getScaleAccidental(scale) {
	if (scale.indexOf('#') > -1) {
		return 'sharp';
	} else if (scale.indexOf('b') > -1) {
		return 'flat';
	} else return scaleToAccidental[scale];
}

export { scaleToAccidental, getScaleAccidental };
