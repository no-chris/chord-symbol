/**
 * WARNING: when adding new strings, be careful of possible edge cases that might arise with some combinations.
 * For example, without edge case handling, "madd9" would be parsed as "ma" instead of "m"+"add9"
 */
import allModifiers from './allModifiers';

const major = {
	'Δ':		allModifiers.ma,
	'M': 		allModifiers.ma,
	'Ma': 		allModifiers.ma,
	'Maj': 		allModifiers.ma,
	'Major':	allModifiers.ma,
	'ma':		allModifiers.ma,
	'maj':		allModifiers.ma,
	'major':	allModifiers.ma,
};

const major7th = getDerivedModifiers(major, allModifiers.ma7, symbol => symbol + '7');
const major9th = getDerivedModifiers(major, allModifiers.ma9, symbol => symbol + '9');
const major11th = getDerivedModifiers(major, allModifiers.ma11, symbol => symbol + '11');
const major13th = getDerivedModifiers(major, allModifiers.ma13, symbol => symbol + '13');

const add7 = getDerivedModifiers(major, allModifiers.ma7, symbol => 'add' + symbol + '7');

const dim = {
	'°':			allModifiers.dim,
	'0':			allModifiers.dim,
	'dim':		    allModifiers.dim,
	'dim.':		    allModifiers.dim,
	'diminished':	allModifiers.dim,
};

const dim7_prefix = getDerivedModifiers(dim, allModifiers.dim7, symbol => '7' + symbol);
const dim7_suffix = getDerivedModifiers(dim, allModifiers.dim7, symbol => symbol + '7');

export default {

	// major
	...major,
	...major7th,
	...major9th,
	...major11th,
	...major13th,

	// minor
	'-': 			allModifiers.mi,
	'm': 			allModifiers.mi,
	'Mi': 			allModifiers.mi,
	'Min': 			allModifiers.mi,
	'Minor':		allModifiers.mi,
	'mi': 			allModifiers.mi,
	'min': 			allModifiers.mi,
	'minor':		allModifiers.mi,
	'b3':			allModifiers.mi,

	// suspended
	'sus':			allModifiers.sus,
	'sus4':			allModifiers.sus,
	'suspended':	allModifiers.sus,
	'suspended4':	allModifiers.sus,
	'sus2':			allModifiers.sus2,
	'suspended2':	allModifiers.sus2,

	// dominant
	'7':			allModifiers.dom7,
	'9':			allModifiers.dom9,
	'11':			allModifiers.dom11,
	'13':			allModifiers.dom13,

	// diminished / augmented
	...dim,
	...dim7_prefix,
	...dim7_suffix,
	'Ø':			allModifiers.halfDim,
	'ø':			allModifiers.halfDim,
	'+':		 	allModifiers.aug,
	'aug':		 	allModifiers.aug,
	'augmented': 	allModifiers.aug,

	// alterations
	'b5':	 		allModifiers.fifthFlat,
	'♭5':			allModifiers.fifthFlat,
	'#5':			allModifiers.fifthSharp,
	'♯5':			allModifiers.fifthSharp,
	'b9':			allModifiers.ninthFlat,
	'♭9':			allModifiers.ninthFlat,
	'addb9': 		allModifiers.ninthFlat,
	'add♭9': 		allModifiers.ninthFlat,
	'#9':			allModifiers.ninthSharp,
	'♯9':			allModifiers.ninthSharp,
	'add#9': 		allModifiers.ninthSharp,
	'add♯9': 		allModifiers.ninthSharp,
	'#11':			allModifiers.eleventhSharp,
	'♯11':			allModifiers.eleventhSharp,
	'add#11': 		allModifiers.eleventhSharp,
	'b13':			allModifiers.thirteenthFlat,
	'♭13':			allModifiers.thirteenthFlat,
	'addb13': 		allModifiers.thirteenthFlat,
	'add♭13': 		allModifiers.thirteenthFlat,

	// added
	...add7,
	'2':			allModifiers.add9,
	'add2':			allModifiers.add9,
	'add3':			allModifiers.add3,
	'4':			allModifiers.add11,
	'add4':			allModifiers.add11,
	'6':			allModifiers.add6,
	'add6':			allModifiers.add6,
	'6/9':			allModifiers.add69,
	'69':			allModifiers.add69,
	'96':			allModifiers.add69,
	'9/6':			allModifiers.add69,
	'add9': 		allModifiers.add9,
	'add11': 		allModifiers.add11,
	'add13': 		allModifiers.add13,

	// special
	'bass':			allModifiers.bass,
	'omit3': 		allModifiers.omit3,
	'no3': 			allModifiers.omit3,
	'omit5': 		allModifiers.omit5,
	'no5': 			allModifiers.omit5,
	'5': 			allModifiers.power,

};


function getDerivedModifiers(source, modifierId, mapFn) {
	return Object.keys(source)
		.map(mapFn)
		.reduce((acc, curr) => {
			acc[curr] = modifierId;
			return acc;
		}, {});
}
