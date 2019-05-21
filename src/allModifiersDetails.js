//fixme: merge with allModifiers

import allModifiers from './allModifiers';

export default {

	// major
	[allModifiers.ma]: {
		includes: ['3'],
	},
	[allModifiers.ma7]: {
		includes: ['7'],
	},
	[allModifiers.ma9]: {
		includes: ['7', '9'],
	},
	[allModifiers.ma11]: {
		includes: ['7', '9', '11'],
	},
	[allModifiers.ma13]: {
		includes: ['7', '9', '11', '13'],
	},


	// minor
	[allModifiers.mi]: {
		includes: ['b3'],
	},


	// suspended
	[allModifiers.sus]: {
		includes: ['4'],
	},
	// We include "sus2" to reflect the fact that it is widely used, though not always considered musically correct
	[allModifiers.sus2]: {
		includes: ['9'],
	},


	// dominant
	[allModifiers.dom7]: {
		includes: ['b7'],
	},
	[allModifiers.dom9]: {
		includes: ['b7', '9'],
	},
	[allModifiers.dom11]: {
		includes: ['b7', '9', '11'],
	},
	[allModifiers.dom13]: {
		includes: ['b7', '9', '11', '13'],
	},


	// diminished
	[allModifiers.dim]: {
		includes: ['b3', 'b5'],
	},
	[allModifiers.dim7]: {
		includes: ['b3', 'b5', 'bb7'],
	},
	[allModifiers.halfDim]: {
		includes: ['b3', 'b5', 'b7'],
	},
	[allModifiers.aug]: {
		includes: ['3', '#5'],
	},


	// alterations
	[allModifiers.fifthFlat]: {
		includes: ['b5'],
		omit: ['5'],
	},
	[allModifiers.fifthSharp]: {
		includes: ['#5'],
		omit: ['5'],
	},
	[allModifiers.ninthFlat]: {
		includes: ['b9'],
		omit: ['9'],
	},
	[allModifiers.ninthSharp]: {
		includes: ['#9'],
		omit: ['9'],
	},
	[allModifiers.eleventhSharp]: {
		includes: ['#11'],
		omit: ['11'],
	},
	[allModifiers.thirteenthFlat]: {
		includes: ['b13'],
	},


	// added
	[allModifiers.add3]: {
		includes: ['3'],
	},
	[allModifiers.add6]: {
		includes: ['6'],
	},
	[allModifiers.add69]: {
		includes: ['6', '9'],
	},
	[allModifiers.addma7]: {
		includes: ['7'],
	},
	[allModifiers.add9]: {
		includes: ['9'],
	},
	[allModifiers.add11]: {
		includes: ['11'],
	},
	[allModifiers.add13]: {
		includes: ['13'],
	},


	// special
	[allModifiers.bass]: {
		includes: ['1'],
		omit: ['2', 'm3', '3', '4', 'b5', '5', '#5', '6', 'm7', '7', 'b9', '9', '#9', '11', '#11', 'b13', '13'],
	},
	[allModifiers.omit3]: {
		omit: ['3', 'b3'],
	},
	[allModifiers.omit5]: {
		omit: ['5'],
	},
	[allModifiers.power]: {
		includes: ['5'],
		omit: ['2', 'b3', '3', '4', 'b5', '#5', '6', 'b7', '7', 'b9', '9', '#9', '11', '#11', 'b13', '13'],
	},
};
