import allModifiers from './allModifiers';

export default {
	'bass':			allModifiers.bass,

	'sus2':			allModifiers.sus2,
	'suspended2':	allModifiers.sus2,

	'2':			allModifiers.add2,
	'add2':			allModifiers.add2,

	'omit3': 		allModifiers.omit3,
	'no3': 			allModifiers.omit3,

	'-': 			allModifiers.min,
	'm': 			allModifiers.min,
	'MI': 			allModifiers.min,
	'MIN': 			allModifiers.min,
	'Mi': 			allModifiers.min,
	'Min': 			allModifiers.min,
	'Minor':		allModifiers.min,
	'mi': 			allModifiers.min,
	'min': 			allModifiers.min,
	'minor':		allModifiers.min,
	'b3':			allModifiers.min,

	'Δ':			allModifiers.maj,
	'M': 			allModifiers.maj,
	'MA': 			allModifiers.maj,
	'MAJ': 			allModifiers.maj,
	'Ma': 			allModifiers.maj,
	'Maj': 			allModifiers.maj,
	'Major':		allModifiers.maj,
	'ma':			allModifiers.maj,
	'maj':			allModifiers.maj,
	'major':		allModifiers.maj,

	'add3':			allModifiers.add3,

	'sus':			allModifiers.sus,
	'sus4':			allModifiers.sus,
	'suspended':	allModifiers.sus,
	'suspended4':	allModifiers.sus,

	'4':			allModifiers.add4,
	'add4':			allModifiers.add4,

	'omit5': 		allModifiers.omit5,
	'no5': 			allModifiers.omit5,

	'b5':	 		allModifiers.fifthFlat,
	'♭5':			allModifiers.fifthFlat,

	'Ø':			allModifiers.halfDim,
	'ø':			allModifiers.halfDim,

	'°':			allModifiers.dim,
	'0':			allModifiers.dim,
	'dim':		    allModifiers.dim,
	'dim.':		    allModifiers.dim,
	'diminished':	allModifiers.dim,

	'°7':			allModifiers.dim7,
	'07':			allModifiers.dim7,
	'dim7':		    allModifiers.dim7,
	'dim.7':	    allModifiers.dim7,
	'diminished7':	allModifiers.dim7,
	'7°':			allModifiers.dim7,
	'70':			allModifiers.dim7,
	'7dim':		    allModifiers.dim7,
	'7dim.':	 	allModifiers.dim7,
	'7diminished':	allModifiers.dim7,


	'5': 			allModifiers.power,

	'#5':			allModifiers.fifthSharp,
	'♯5':			allModifiers.fifthSharp,

	'+':		 	allModifiers.aug,
	'aug':		 	allModifiers.aug,
	'augmented': 	allModifiers.aug,

	'6':			allModifiers.add6,
	'add6':			allModifiers.add6,

	'6/9':			allModifiers.sixthNinth,
	'69':			allModifiers.sixthNinth,

	'7':			allModifiers.seventhFlat,

	'Δ7':			allModifiers.seventh,
	'M7':			allModifiers.seventh,
	'MA7': 			allModifiers.seventh,
	'MAJ7': 		allModifiers.seventh,
	'Ma7': 			allModifiers.seventh,
	'Maj7':			allModifiers.seventh,
	'Major7':		allModifiers.seventh,
	'ma7':			allModifiers.seventh,
	'maj7':			allModifiers.seventh,
	'major7':		allModifiers.seventh,

	'addΔ7':		allModifiers.addma7,
	'addM7':		allModifiers.addma7,
	'addMA7': 		allModifiers.addma7,
	'addMAJ7': 		allModifiers.addma7,
	'addMa7': 		allModifiers.addma7,
	'addMaj7':		allModifiers.addma7,
	'addMajor7':	allModifiers.addma7,
	'addma7':		allModifiers.addma7,
	'addmaj7':		allModifiers.addma7,
	'addmajor7':	allModifiers.addma7,

	'b9':			allModifiers.ninthFlat,
	'♭9':			allModifiers.ninthFlat,

	'addb9': 		allModifiers.addb9,
	'add♭9': 		allModifiers.addb9,

	'9':			allModifiers.ninth,

	'add9': 		allModifiers.add9,


	'Δ9':			allModifiers.majorNinth,
	'M9':			allModifiers.majorNinth,
	'MA9': 			allModifiers.majorNinth,
	'MAJ9': 		allModifiers.majorNinth,
	'Ma9': 			allModifiers.majorNinth,
	'Maj9':			allModifiers.majorNinth,
	'Major9':		allModifiers.majorNinth,
	'ma9':			allModifiers.majorNinth,
	'maj9':			allModifiers.majorNinth,
	'major9':		allModifiers.majorNinth,


	'#9':			allModifiers.ninthSharp,
	'♯9':			allModifiers.ninthSharp,

	'add#9': 		allModifiers.adds9,
	'add♯9': 		allModifiers.adds9,

	'11':			allModifiers.eleventh,

	'add11': 		allModifiers.add11,

	'#11':			allModifiers.eleventhSharp,
	'♯11':			allModifiers.eleventhSharp,

	'add#11': 		allModifiers.adds11,

	'b13':			allModifiers.thirteenthFlat,
	'♭13':			allModifiers.thirteenthFlat,

	'addb13': 		allModifiers.addb13,
	'add♭13': 		allModifiers.addb13,

	'13':			allModifiers.thirteenth,


	'Δ13':			allModifiers.majorThirteenth,
	'M13':			allModifiers.majorThirteenth,
	'MA13': 			allModifiers.majorThirteenth,
	'MAJ13': 		allModifiers.majorThirteenth,
	'Ma13': 			allModifiers.majorThirteenth,
	'Maj13':			allModifiers.majorThirteenth,
	'Major13':		allModifiers.majorThirteenth,
	'ma13':			allModifiers.majorThirteenth,
	'maj13':			allModifiers.majorThirteenth,
	'major13':		allModifiers.majorThirteenth,

	'add13': 		allModifiers.add13,
};
