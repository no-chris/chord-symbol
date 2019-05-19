import allModifiers from './allModifiers';

export default {
	[allModifiers.bass]: {
		includes: ['1'],
		omit: ['2', 'm3', '3', '4', 'b5', '5', '#5', '6', 'm7', '7', 'b9', '9', '#9', '11', '#11', 'b13', '13'],
	},
	[allModifiers.min]: {
		includes: ['b3'],
	},
	[allModifiers.omit3]: {
		omit: ['3'],
	},
	[allModifiers.maj]: {
		includes: ['3'],
	},
	[allModifiers.add3]: {
		includes: ['3'],
	},
	[allModifiers.sus2]: {
		includes: ['9'],
		omit: ['b3', '3'],
	},
	[allModifiers.sus]: {
		includes: ['4'],
	},
	[allModifiers.halfDim]: {
		includes: ['b3', 'b5', 'b7'],
	},
	[allModifiers.dim]: {
		includes: ['b3', 'b5'],
	},
	[allModifiers.dim7]: {
		includes: ['b3', 'b5', 'bb7'],
	},
	[allModifiers.omit5]: {
		omit: ['5'],
	},
	[allModifiers.power]: {
		includes: ['5'],
		omit: ['2', '3', 'b3', '4', 'b5', '#5', '6', 'b7', '7', 'b9', '9', '#9', '11', '#11', 'b13', '13'],
	},
	[allModifiers.aug]: {
		includes: ['3', '#5'],
	},
	[allModifiers.fifthFlat]: {
		includes: ['b5'],
	},
	[allModifiers.fifthSharp]: {
		includes: ['#5'],
	},
	[allModifiers.sixthNinth]: {
		includes: ['6', '9'],
	},
	[allModifiers.seventhFlat]: {
		includes: ['b7'],
	},
	[allModifiers.seventh]: {
		includes: ['7'],
	},
	[allModifiers.ninthFlat]: {
		includes: ['b9'],
		omit: ['9'],
	},
	[allModifiers.majorNinth]: {
		includes: ['7', '9'],
	},
	[allModifiers.ninth]: {
		includes: ['b7', '9'],
	},
	[allModifiers.ninthSharp]: {
		includes: ['#9'],
		omit: ['9'],
	},
	[allModifiers.eleventh]: {
		includes: ['b7', '9', '11'],
	},
	[allModifiers.eleventhSharp]: {
		includes: ['#11'],
	},
	[allModifiers.thirteenthFlat]: {
		includes: ['b7', '9', '11', 'b13'],
	},
	[allModifiers.thirteenth]: {
		includes: ['b7', '9', '11', '13'],
	},
	[allModifiers.majorThirteenth]: {
		includes: ['7', '9', '13'],
	},
	[allModifiers.add2]: {
		includes: ['2'],
	},
	[allModifiers.add4]: {
		includes: ['4'],
	},
	[allModifiers.addma7]: {
		includes: ['7'],
	},
	[allModifiers.add6]: {
		includes: ['6'],
	},
	[allModifiers.addb9]: {
		includes: ['b9'],
	},
	[allModifiers.add9]: {
		includes: ['9'],
	},
	[allModifiers.adds9]: {
		includes: ['#9'],
	},
	[allModifiers.add11]: {
		includes: ['11'],
	},
	[allModifiers.adds11]: {
		includes: ['#11'],
	},
	[allModifiers.addb13]: {
		includes: ['b13'],
	},
	[allModifiers.add13]: {
		includes: ['13'],
	},
};
