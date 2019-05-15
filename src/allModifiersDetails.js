import allModifiers from './allModifiers';

export default {
	[allModifiers.min]: {
		includes: ['b3'],
		excludes: ['3'],
	},
	[allModifiers.maj]: {
		includes: ['3'],
		excludes: ['b3'],
	},
	[allModifiers.sus2]: {
		includes: ['2'],
		excludes: ['b3', '3'],
	},
	[allModifiers.sus4]: {
		includes: ['4'],
		excludes: ['b3', '3'],
	},
	[allModifiers.halfDim]: {
		includes: ['b3', 'b5', 'b7'],
		excludes: ['3', '5', '#5', '7'],
	},
	[allModifiers.dim]: {
		includes: ['b3', 'b5', '6'],
		excludes: ['3', '5', '#5', '7', '7'],
	},
	[allModifiers.power]: {
		includes: ['5'],
		excludes: ['2', '3', 'b3', '4', 'b5', '#5', '6', 'b7', '7', 'b9', '9', '#9', '11', '#11', 'b13', '13'],
	},
	[allModifiers.aug]: {
		includes: ['3', '#5'],
		excludes: ['b3', 'b5', '5'],
	},
	[allModifiers.fifthFlat]: {
		includes: ['b5'],
		excludes: ['5', '#5'],
	},
	[allModifiers.fifthSharp]: {
		includes: ['#5'],
		excludes: ['b5', '5'],
	},
	[allModifiers.seventhFlat]: {
		includes: ['b7'],
		excludes: ['7'],
	},
	[allModifiers.seventh]: {
		includes: ['7'],
		excludes: ['b7'],
	},
	[allModifiers.ninthFlat]: {
		includes: ['b9'],
		implies: ['7th'],
		excludes: ['9', '#9'],
	},
	[allModifiers.ninth]: {
		includes: ['9'],
		implies: ['7th'],
		excludes: ['b9', '#9'],
	},
	[allModifiers.ninthSharp]: {
		includes: ['#9'],
		implies: ['7th'],
		excludes: ['b9', '9th'],
	},
	[allModifiers.eleventh]: {
		includes: ['11'],
		implies: ['7th', '9th'],
		excludes: ['#11'],
	},
	[allModifiers.eleventhSharp]: {
		includes: ['#11'],
		implies: ['7th', '9th'],
		excludes: ['11'],
	},
	[allModifiers.thirteenthFlat]: {
		includes: ['b7', '9', '11', 'b13'],
		implies: ['7th', '9th', '11th'],
		excludes: ['13'],
	},
	[allModifiers.thirteenth]: {
		includes: ['13'],
		implies: ['7th', '9th', '11th'],
		excludes: ['b13'],
	},
	[allModifiers.add2]: {
		includes: ['2'],
	},
	[allModifiers.add4]: {
		includes: ['4'],
	},
	[allModifiers.add6]: {
		includes: ['6'],
	},
	[allModifiers.addb9]: {
		includes: ['b9'],
		excludes: ['9', '#9'],
	},
	[allModifiers.add9]: {
		includes: ['9'],
		excludes: ['b9', '#9'],
	},
	[allModifiers.adds9]: {
		includes: ['#9'],
		excludes: ['b9', '9'],
	},
	[allModifiers.add11]: {
		includes: ['11'],
		excludes: ['#11'],
	},
	[allModifiers.adds11]: {
		includes: ['#11'],
		excludes: ['11'],
	},
	[allModifiers.addb13]: {
		includes: ['b13'],
		excludes: ['13'],
	},
	[allModifiers.add13]: {
		includes: ['13'],
		excludes: ['b13'],
	},
};
