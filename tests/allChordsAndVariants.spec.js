import fs from 'fs';
import path from 'path';

import intervalsToSemitones from '../src/dictionaries/intervalsToSemitones';

import combineModifiers from './testsHelpers/combineModifiers';
import getAllSymbolModifiers from './testsHelpers/getAllSymbolModifiers';

import chordParserFactory from '../src/parser/chordParserFactory';
import chordRendererFactory from '../src/renderer/chordRendererFactory';

const TEST_SUITE = process.env.TEST_SUITE;
const VARIANT_THRESHOLD = 750; // limit the number of tested combinations per symbol

// prettier-ignore
const allSrcSymbols = [
	/**/

	// Chords symbols from: Contemporary Music Theory

	['C5', 'C', ['1', '5'], 'C5'],
	['C(omit3)', 'C', ['1', '5'], 'C5'],
	['Csus', 'C', ['1', '4', '5'], 'Csus'],
	['C(b5)', 'C', ['1', '3', 'b5'], 'C(b5)'],
	['C', 'C', ['1', '3', '5'], 'C'],
	['C+', 'C', ['1', '3', '#5'], 'C+'],
	['C6(b5)', 'C', ['1', '3', 'b5', '6'], 'C6(b5)'],
	['C6', 'C', ['1', '3', '5', '6'], 'C6'],
	['C6(#5)', 'C', ['1', '3', '#5', '6'], 'C6(#5)'],
	['C69', 'C', ['1', '3', '5', '6', '9'], 'C69'],
	['C69(#11)', 'C', ['1', '3', '5', '6', '9', '#11'], 'C69(#11)'],
	['Cma6(b5)', 'C', ['1', '3', 'b5', '6'], 'C6(b5)'],
	['Cma6', 'C', ['1', '3', '5', '6'], 'C6'],
	['Cma69', 'C', ['1', '3', '5', '6', '9'], 'C69'],
	['Cma6(#5)', 'C', ['1', '3', '#5', '6'], 'C6(#5)'],
	['Cma7(b5)', 'C', ['1', '3', 'b5', '7'], 'Cma7(b5)'],
	['Cma7', 'C', ['1', '3', '5', '7'], 'Cma7'],
	['Cma7(#5)', 'C', ['1', '3', '#5', '7'], 'Cma7(#5)'],
	['Cadd9(omit3)', 'C', ['1', '5', '9'], 'C(add9,omit3)'],
	['Cadd9(no3)', 'C', ['1', '5', '9'], 'C(add9,omit3)'],
	['Cadd9', 'C', ['1', '3', '5', '9'], 'C(add9)'],
	['C(add9)', 'C', ['1', '3', '5', '9'], 'C(add9)'],
	['Cma9', 'C', ['1', '3', '5', '7', '9'], 'Cma9'],
	['Cma9(no3)', 'C', ['1', '5', '7', '9'], 'Cma9(omit3)'],
	['Cma9(#11)', 'C', ['1', '3', '5', '7', '9', '#11'], 'Cma9(#11)'],
	['Cma9(omit3)', 'C', ['1', '5', '7', '9'], 'Cma9(omit3)'],
	['Cma13', 'C', ['1', '3', '5', '7', '9', '13'], 'Cma13'],
	['Cma13(#11)', 'C', ['1', '3', '5', '7', '9', '#11', '13'], 'Cma13(#11)'],
	['C°', 'C', ['1', 'b3', 'b5'], 'Cdim'],
	['Cmi', 'C', ['1', 'b3', '5'], 'Cmi'],
	['Cmi add9', 'C', ['1', 'b3', '5', '9'], 'Cmi(add9)'],
	['Cmi(add9)', 'C', ['1', 'b3', '5', '9'], 'Cmi(add9)'],
	['Cmi6', 'C', ['1', 'b3', '5', '6'], 'Cmi6'],
	['Cmi69', 'C', ['1', 'b3', '5', '6', '9'], 'Cmi69'],
	['Cmi69(add11)', 'C', ['1', 'b3', '5', '6', '9', '11'], 'Cmi69(add11)'],
	['Cmi(#5)', 'C', ['1', 'b3', '#5'], 'Cmi(#5)'],
	['Cmi7', 'C', ['1', 'b3', '5', 'b7'], 'Cmi7'],
	['Cmi7(b5)', 'C', ['1', 'b3', 'b5', 'b7'], 'Cmi7(b5)'],
	['Cmi7(#5)', 'C', ['1', 'b3', '#5', 'b7'], 'Cmi7(#5)'],
	['Cmi7(b5,#5)', 'C', ['1', 'b3', 'b5', '#5', 'b7'], 'Cmi7(b5,#5)'],
	['Cmi7(b5,add11)', 'C', ['1', 'b3', 'b5', 'b7', '11'], 'Cmi7(b5,add11)'],
	['Cmi7(add11)', 'C', ['1', 'b3', '5', 'b7', '11'], 'Cmi7(add11)'],
	['Cmi9', 'C', ['1', 'b3', '5', 'b7', '9'], 'Cmi9'],
	['Cmi9(b5)', 'C', ['1', 'b3', 'b5', 'b7', '9'], 'Cmi9(b5)'],
	['Cmi11', 'C', ['1', 'b3', '5', 'b7', '9', '11'], 'Cmi11'],
	['Cmi11(b5)', 'C', ['1', 'b3', 'b5', 'b7', '9', '11'], 'Cmi11(b5)'],
	['Cmi11(b5,no3)', 'C', ['1', 'b5', 'b7', '9', '11'], 'Cmi11(b5,omit3)'],
	['Cmi11(b5,#5)', 'C', ['1', 'b3', 'b5', '#5', 'b7', '9', '11'], 'Cmi11(b5,#5)'],
	['Cmi11(b5,b13)', 'C', ['1', 'b3', 'b5', 'b7', '9', '11', 'b13'], 'Cmi11(b5,b13)'],
	['Cmi13', 'C', ['1', 'b3', '5', 'b7', '9', '11', '13'], 'Cmi13'],
	['CmiMa7', 'C', ['1', 'b3', '5', '7'], 'CmiMa7'],
	['CmiMa9', 'C', ['1', 'b3', '5', '7', '9'], 'CmiMa9'],
	['CmiMa9(add13)', 'C', ['1', 'b3', '5', '7', '9', '13'], 'CmiMa9(add13)'],
	['CmiMa11', 'C', ['1', 'b3', '5', '7', '9', '11'], 'CmiMa11'],
	['CmiMa13', 'C', ['1', 'b3', '5', '7', '9', '11', '13'], 'CmiMa13'],
	['C7', 'C', ['1', '3', '5', 'b7'], 'C7'],
	['C7sus', 'C', ['1', '4', '5', 'b7'], 'C7sus'],
	['C7sus(b9)', 'C', ['1', '4', '5', 'b7', 'b9'], 'C7sus(b9)'],
	['C7(b5)', 'C', ['1', '3', 'b5', 'b7'], 'C7(b5)'],
	['C7(b5,#5)', 'C', ['1', '3', 'b5', '#5', 'b7'], 'C7(b5,#5)'],
	['C7(b5,#5,b9)', 'C', ['1', '3', 'b5', '#5', 'b7', 'b9'], 'C7(b5,#5,b9)'],
	['C7(b5,#5,#9)', 'C', ['1', '3', 'b5', '#5', 'b7', '#9'], 'C7(b5,#5,#9)'],
	['C7(b5,#5,b9,#9)', 'C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9'], 'C7(b5,#5,b9,#9)'],
	['C7(b5,#5,b9,#9,b13)', 'C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9', 'b13'], 'C7(b5,#5,b9,#9,b13)'],
	['C7(b5,b9)', 'C', ['1', '3', 'b5', 'b7', 'b9'], 'C7(b5,b9)'],
	['C7(b5,b9,#9)', 'C', ['1', '3', 'b5', 'b7', 'b9', '#9'], 'C7(b5,b9,#9)'],
	['C7(b5,b9,b13)', 'C', ['1', '3', 'b5', 'b7', 'b9', 'b13'], 'C7(b5,b9,b13)'],
	['C7(b5,#9)', 'C', ['1', '3', 'b5', 'b7', '#9'], 'C7(b5,#9)'],
	['C7(b5,#9,b13)', 'C', ['1', '3', 'b5', 'b7', '#9', 'b13'], 'C7(b5,#9,b13)'],
	['C7(b5,b13)', 'C', ['1', '3', 'b5', 'b7', 'b13'], 'C7(b5,b13)'],
	['C7(#5)', 'C', ['1', '3', '#5', 'b7'], 'C7(#5)'],
	['C7(#5,b9)', 'C', ['1', '3', '#5', 'b7', 'b9'], 'C7(#5,b9)'],
	['C7(#5,#9)', 'C', ['1', '3', '#5', 'b7', '#9'], 'C7(#5,#9)'],
	['C7(#5,b9,#9)', 'C', ['1', '3', '#5', 'b7', 'b9', '#9'], 'C7(#5,b9,#9)'],
	['C7(#5,b9,#11)', 'C', ['1', '3', '#5', 'b7', 'b9', '#11'], 'C7(#5,b9,#11)'],
	['C7(#5,#9,#11)', 'C', ['1', '3', '#5', 'b7', '#9', '#11'], 'C7(#5,#9,#11)'],
	['C7(#5,b9,#9,#11)', 'C', ['1', '3', '#5', 'b7', 'b9', '#9', '#11'], 'C7(#5,b9,#9,#11)'],
	['C7(#5, #11)', 'C', ['1', '3', '#5', 'b7', '#11'], 'C7(#5,#11)'],
	['C7(b9)', 'C', ['1', '3', '5', 'b7', 'b9'], 'C7(b9)'],
	['C7(b9,#9)', 'C', ['1', '3', '5', 'b7', 'b9', '#9'], 'C7(b9,#9)'],
	['C7(b9,#11)', 'C', ['1', '3', '5', 'b7', 'b9', '#11'], 'C7(b9,#11)'],
	['C7(b9,#9,#11)', 'C', ['1', '3', '5', 'b7', 'b9', '#9', '#11'], 'C7(b9,#9,#11)'],
	['C7(b9,#9,b13)', 'C', ['1', '3', 'b7', 'b9', '#9', 'b13'], 'C7(b9,#9,b13)'],
	['C7(b9,#9,#11,b13)', 'C', ['1', '3', 'b7', 'b9', '#9', '#11', 'b13'], 'C7(b9,#9,#11,b13)'],
	['C7(b9,#11,b13)', 'C', ['1', '3', 'b7', 'b9', '#11', 'b13'], 'C7(b9,#11,b13)'],
	['C7(b9,b13)', 'C', ['1', '3', 'b7', 'b9', 'b13'], 'C7(b9,b13)'],
	['C7(#9)', 'C', ['1', '3', '5', 'b7', '#9'], 'C7(#9)'],
	['C7(#9,#11)', 'C', ['1', '3', '5', 'b7', '#9', '#11'], 'C7(#9,#11)'],
	['C7(#9,b13)', 'C', ['1', '3', 'b7', '#9', 'b13'], 'C7(#9,b13)'],
	['C7(#9,#11,b13)', 'C', ['1', '3', 'b7', '#9', '#11', 'b13'], 'C7(#9,#11,b13)'],
	['C7(#11)', 'C', ['1', '3', '5', 'b7', '#11'], 'C7(#11)'],
	['C7(#11,b13)', 'C', ['1', '3', 'b7', '#11', 'b13'], 'C7(#11,b13)'],
	['C7(b13)', 'C', ['1', '3', 'b7', 'b13'], 'C7(b13)'],
	['C9', 'C', ['1', '3', '5', 'b7', '9'], 'C9'],
	['C9(13)', 'C', ['1', '3', '5', 'b7', '9', '13'], 'C13'],
	['C9(add13)', 'C', ['1', '3', '5', 'b7', '9', '13'], 'C13'],
	['C9sus', 'C', ['1', '4', '5', 'b7', '9'], 'C9sus'],
	['C9(b5)', 'C', ['1', '3', 'b5', 'b7', '9'], 'C9(b5)'],
	['C9(b5,#5)', 'C', ['1', '3', 'b5', '#5', 'b7', '9'], 'C9(b5,#5)'],
	['C9(b5,b13)', 'C', ['1', '3', 'b5', 'b7', '9', 'b13'], 'C9(b5,b13)'],
	['C9(#5,#11)', 'C', ['1', '3', '#5', 'b7', '9', '#11'], 'C9(#5,#11)'],
	['C9(#11)', 'C', ['1', '3', '5', 'b7', '9', '#11'], 'C9(#11)'],
	['C9(#11,b13)', 'C', ['1', '3', 'b7', '9', '#11', 'b13'], 'C9(#11,b13)'],
	['C11', 'C', ['1', '5', 'b7', '9', '11'], 'C9sus'],
	['C11(b9)', 'C', ['1', '5', 'b7', 'b9', '11'], 'C7sus(b9)'],
	['C13', 'C', ['1', '3', '5', 'b7', '9', '13'], 'C13'],
	['C13sus', 'C', ['1', '4', '5', 'b7', '9', '13'], 'C13sus'],
	['C13(b5)', 'C', ['1', '3', 'b5', 'b7', '9', '13'], 'C13(b5)'],
	['C13(b5,b9)', 'C', ['1', '3', 'b5', 'b7', 'b9', '13'], 'C13(b5,b9)'],
	['C13(b5,#9)', 'C', ['1', '3', 'b5', 'b7', '#9', '13'], 'C13(b5,#9)'],
	['C13(b5,b9,#9)', 'C', ['1', '3', 'b5', 'b7', 'b9', '#9', '13'], 'C13(b5,b9,#9)'],
	['C13(b9)', 'C', ['1', '3', '5', 'b7', 'b9', '13'], 'C13(b9)'],
	['C13(b9,#9)', 'C', ['1', '3', '5', 'b7', 'b9', '#9', '13'], 'C13(b9,#9)'],
	['C13(b9,#11)', 'C', ['1', '3', '5', 'b7', 'b9', '#11', '13'], 'C13(b9,#11)'],
	['C13(b9,#9,#11)', 'C', ['1', '3', '5', 'b7', 'b9', '#9', '#11', '13'], 'C13(b9,#9,#11)'],
	['C13(#9)', 'C', ['1', '3', '5', 'b7', '#9', '13'], 'C13(#9)'],
	['C13(#9,#11)', 'C', ['1', '3', '5', 'b7', '#9', '#11', '13'], 'C13(#9,#11)'],
	['C13(#11)', 'C', ['1', '3', '5', 'b7', '9', '#11', '13'], 'C13(#11)'],
	['Cdim', 'C', ['1', 'b3', 'b5'], 'Cdim'],
	['Cdim7', 'C', ['1', 'b3', 'b5', 'bb7'], 'Cdim7'],
	['Cdim7(add ma7)', 'C', ['1', 'b3', 'b5', 'bb7', '7'], 'Cdim7(addMa7)'],
	['Cdim7(add ma7,9)', 'C', ['1', 'b3', 'b5', 'bb7', '7', '9'], 'Cdim7(addMa7,9)'],
	['Cdim7(add ma7,9,11)', 'C', ['1', 'b3', 'b5', 'bb7', '7', '9', '11'], 'Cdim7(addMa7,9,11)'],
	['Cdim7(add ma7,9,11,b13)', 'C', ['1', 'b3', 'b5', 'bb7', '7', '9', '11', 'b13'], 'Cdim7(addMa7,9,11,b13)'],
	['Cdim7(add ma7,11)', 'C', ['1', 'b3', 'b5', 'bb7', '7', '11'], 'Cdim7(addMa7,11)'],
	['Cdim7(add ma7,11,b13)', 'C', ['1', 'b3', 'b5', 'bb7', '7', '11', 'b13'], 'Cdim7(addMa7,11,b13)'],
	['Cdim7(add ma7,9,b13)', 'C', ['1', 'b3', 'b5', 'bb7', '7', '9', 'b13'], 'Cdim7(addMa7,9,b13)'],
	['Cdim7(add ma7,b13)', 'C', ['1', 'b3', 'b5', 'bb7', '7', 'b13'], 'Cdim7(addMa7,b13)'],
	['Cdim7(add 9)', 'C', ['1', 'b3', 'b5', 'bb7', '9'], 'Cdim7(add9)'],
	['Cdim7(add 9,11)', 'C', ['1', 'b3', 'b5', 'bb7', '9', '11'], 'Cdim7(add9,11)'],
	['Cdim7(add 9,11,b13)', 'C', ['1', 'b3', 'b5', 'bb7', '9', '11', 'b13'], 'Cdim7(add9,11,b13)'],
	['Cdim7(add 9,b13)', 'C', ['1', 'b3', 'b5', 'bb7', '9', 'b13'], 'Cdim7(add9,b13)'],
	['Cdim7(add 11)', 'C', ['1', 'b3', 'b5', 'bb7', '11'], 'Cdim7(add11)'],
	['Cdim7(add 11,b13)', 'C', ['1', 'b3', 'b5', 'bb7', '11', 'b13'], 'Cdim7(add11,b13)'],
	['Cdim7(add b13)', 'C', ['1', 'b3', 'b5', 'bb7', 'b13'], 'Cdim7(add b13)'],

	// Chords symbols from: The New Real Book vol1

	['C bass', 'C', ['1'], 'C bass'],
	['C', 'C', ['1', '3', '5'], 'C'],
	['CSUS', 'C', ['1', '4', '5'], 'Csus'],
	['C+', 'C', ['1', '3', '#5'], 'C+'],
	['C6', 'C', ['1', '3', '5', '6'], 'C6'],
	['C6/9', 'C', ['1', '3', '5', '6', '9'], 'C69'],
	['CMA7(b5)', 'C', ['1', '3', 'b5', '7'], 'Cma7(b5)'],
	['C#MA7SUS(b5)', 'C#', ['1', '4', 'b5', '7'], 'C#ma7sus(b5)'],
	['CMA7', 'C', ['1', '3', '5', '7'], 'Cma7'],
	['CMA7(#5)', 'C', ['1', '3', '#5', '7'], 'Cma7(#5)'],
	['CMA7(#11)', 'C', ['1', '3', '5', '7', '#11'], 'Cma7(#11)'],
	['C(add 9,omit 3)', 'C', ['1', '5', '9'], 'C(add9,omit3)'],
	['C(add 9)', 'C', ['1', '3', '5', '9'], 'C(add9)'],
	['CMA9', 'C', ['1', '3', '5', '7', '9'], 'Cma9'],
	['CMA9(#11)', 'C', ['1', '3', '5', '7', '9', '#11'], 'Cma9(#11)'],
	['CMA7(add 13)', 'C', ['1', '3', '5', '7', '13'], 'Cma7(add13)'],
	['CMA13', 'C', ['1', '3', '5', '7', '9', '13'], 'Cma13'],
	['CMA13(#11)', 'C', ['1', '3', '5', '7', '9', '#11', '13'], 'Cma13(#11)'],
	['Bb(add 9,add b13)', 'Bb', ['1', '3', '9', 'b13'], 'Bb(add9,b13)'],
	['A+(add b9,add #9)', 'A', ['1', '3', '#5', 'b9', '#9'], 'A+(add b9,#9)'],
	['CMI7', 'C', ['1', 'b3', '5', 'b7'], 'Cmi7'],
	['CMI7(omit 5)', 'C', ['1', 'b3', 'b7'], 'Cmi7(omit5)'],
	['CMI9', 'C', ['1', 'b3', '5', 'b7', '9'], 'Cmi9'],
	['CMI11', 'C', ['1', 'b3', '5', 'b7', '9', '11'], 'Cmi11'],
	['CMI7(add 11)', 'C', ['1', 'b3', '5', 'b7', '11'], 'Cmi7(add11)'],
	['CMI13', 'C', ['1', 'b3', '5', 'b7', '9', '11', '13'], 'Cmi13'],
	['CMI7(add 13)', 'C', ['1', 'b3', '5', 'b7', '13'], 'Cmi7(add13)'],
	['G#MI7(add 11, omit 5)', 'G#', ['1', 'b3', 'b7', '11'], 'G#mi7(add11,omit5)'],
	['Cdim.', 'C', ['1', 'b3', 'b5'], 'Cdim'],
	['CMI7(b5)', 'C', ['1', 'b3', 'b5', 'b7'], 'Cmi7(b5)'],
	['CMI9(b5)', 'C', ['1', 'b3', 'b5', 'b7', '9'], 'Cmi9(b5)'],
	['CMI11(b5)', 'C', ['1', 'b3', 'b5', 'b7', '9', '11'], 'Cmi11(b5)'],
	['CMI', 'C', ['1', 'b3', '5'], 'Cmi'],
	['CMI6', 'C', ['1', 'b3', '5', '6'], 'Cmi6'],
	['CMI(MA7)', 'C', ['1', 'b3', '5', '7'], 'CmiMa7'],
	['CMI(add9)', 'C', ['1', 'b3', '5', '9'], 'Cmi(add9)'],
	['CMI6/9', 'C', ['1', 'b3', '5', '6', '9'], 'Cmi69'],
	['C7', 'C', ['1', '3', '5', 'b7'], 'C7'],
	['C7(omit 3)', 'C', ['1', '5', 'b7'], 'C7(omit3)'],
	['C9', 'C', ['1', '3', '5', 'b7', '9'], 'C9'],
	['C13', 'C', ['1', '3', '5', 'b7', '9', '13'], 'C13'],
	['C7SUS', 'C', ['1', '4', '5', 'b7'], 'C7sus'],
	['F#7SUS(add 3)', 'F#', ['1', '3', '4', '5', 'b7'], 'F#7sus(add3)'],
	['C9SUS', 'C', ['1', '4', '5', 'b7', '9'], 'C9sus'],
	['C13SUS', 'C', ['1', '4', '5', 'b7', '9', '13'], 'C13sus'],
	['C7(b5)', 'C', ['1', '3', 'b5', 'b7'], 'C7(b5)'],
	['C7(b5,b9)', 'C', ['1', '3', 'b5', 'b7', 'b9'], 'C7(b5,b9)'],
	['C9(b5)', 'C', ['1', '3', 'b5', 'b7', '9'], 'C9(b5)'],
	['C13(b5)', 'C', ['1', '3', 'b5', 'b7', '9', '13'], 'C13(b5)'],
	['C7(#11)', 'C', ['1', '3', '5', 'b7', '#11'], 'C7(#11)'],
	['C9(#11)', 'C', ['1', '3', '5', 'b7', '9', '#11'], 'C9(#11)'],
	['C13(#11)', 'C', ['1', '3', '5', 'b7', '9', '#11', '13'], 'C13(#11)'],
	['C7(b9)', 'C', ['1', '3', '5', 'b7', 'b9'], 'C7(b9)'],
	['C7(#9)', 'C', ['1', '3', '5', 'b7', '#9'], 'C7(#9)'],
	['C7(b9,#11)', 'C', ['1', '3', '5', 'b7', 'b9', '#11'], 'C7(b9,#11)'],
	['C7(#9,#11)', 'C', ['1', '3', '5', 'b7', '#9', '#11'], 'C7(#9,#11)'],
	['C7SUS(b9)', 'C', ['1', '4', '5', 'b7', 'b9'], 'C7sus(b9)'],
	['C13SUS(b9)', 'C', ['1', '4', '5', 'b7', 'b9', '13'], 'C13sus(b9)'],
	['C13(b9)', 'C', ['1', '3', '5', 'b7', 'b9', '13'], 'C13(b9)'],
	['C13(#11)', 'C', ['1', '3', '5', 'b7', '9', '#11', '13'], 'C13(#11)'],
	['C7(#5)', 'C', ['1', '3', '#5', 'b7'], 'C7(#5)'],
	['C7(#5,b9)', 'C', ['1', '3', '#5', 'b7', 'b9'], 'C7(#5,b9)'],
	['C7(#5,#9)', 'C', ['1', '3', '#5', 'b7', '#9'], 'C7(#5,#9)'],
	['C9(#5)', 'C', ['1', '3', '#5', 'b7', '9'], 'C9(#5)'],
	['C°7', 'C', ['1', 'b3', 'b5', 'bb7'], 'Cdim7'],
	['C°7(add MA7)', 'C', ['1', 'b3', 'b5', 'bb7', '7'], 'Cdim7(addMa7)'],
	['C/E', 'C/E', ['1', '3', '5'], 'C/E'],
	['C/G', 'C/G', ['1', '3', '5'], 'C/G'],
	['E/C', 'E/C', ['1', '3', '5'], 'E/C'],
	['Bb/C', 'Bb/C', ['1', '3', '5'], 'Bb/C'],
	['C(add 9)/E', 'C/E', ['1', '3', '5', '9'], 'C(add9)/E'],
	['F/F#', 'F/F#', ['1', '3', '5'], 'F/F#'],
	['E+/G', 'E/G', ['1', '3', '#5'], 'E+/G'],
	['G7SUS/A', 'G/A', ['1', '4', '5', 'b7'], 'G7sus/A'],
	['GMA7(#5)/F#', 'G/F#', ['1', '3', '#5', '7'], 'Gma7(#5)/F#'],
	['EbMA7(#5)/F', 'Eb/F', ['1', '3', '#5', '7'], 'Ebma7(#5)/F'],
	['BMA7SUS/F#', 'B/F#', ['1', '4', '5', '7'], 'Bma7sus/F#'],


	// Chords symbols from: iReal Pro

	['C^7', 'C', ['1', '3', '5', '7'], 'Cma7', [m.ma7]],
	['C-7', 'C', ['1', 'b3', '5', 'b7'], 'Cmi7', [m.mi, m.seventh]],
	['C7', 'C', ['1', '3', '5', 'b7'], 'C7', [m.seventh]],
	['C7sus', 'C', ['1', '4', '5', 'b7'], 'C7sus', [m.sus, m.seventh]],
	['C^', 'C', ['1', '3', '5'], 'C'], // really? or MA7 ?
	['C-', 'C', ['1', 'b3', '5'], 'Cmi', [m.mi]],
	['C7alt', 'C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9', '#11', 'b13'], 'C7alt', [m.alt]],
	['Csus', 'C', ['1', '4', '5'], 'Csus', [m.sus]],
	['C6', 'C', ['1', '3', '5', '6'], 'C6', [m.add6]],
	['C-6', 'C', ['1', 'b3', '5', '6'], 'Cmi6', [m.mi, m.add6]],
	['Co7', 'C', ['1', 'b3', 'b5', 'bb7'], 'Cdim7', [m.dim]],
	['Cø7', 'C', ['1', 'b3', 'b5', 'b7'], 'Cmi7(b5)', [m.mi, m.seventh, m.fifthFlat]],
	['C^9', 'C', ['1', '3', '5', '7', '9'], 'Cma9', [m.ma, m.ninth]],
	['C-9', 'C', ['1', 'b3', '5', 'b7', '9'], 'Cmi9', [m.mi, m.ninth]],
	['C9', 'C', ['1', '3', '5', 'b7', '9'], 'C9', [m.ninth]],
	['C9sus', 'C', ['1', '4', '5', 'b7', '9'], 'C9sus', [m.ninth, m.sus]],
	['C^13', 'C', ['1', '3', '5', '7', '9', '13'], 'Cma13', [m.ma, m.thirteenth]],
	['C-11', 'C', ['1', 'b3', '5', 'b7', '9', '11'], 'Cmi11', [m.mi, m.eleventh]],
	['C13', 'C', ['1', '3', '5', 'b7', '9', '13'], 'C13', [m.thirteenth]],
	['C13sus', 'C', ['1', '4', '5', 'b7', '9', '13'], 'C13sus', [m.sus, m.thirteenth]],
	['C6/9', 'C', ['1', '3', '5', '6', '9'], 'C69', [m.add69]],
	['C-6/9', 'C', ['1', 'b3', '5', '6', '9'], 'Cmi69', [m.add69]],
	['C-^7', 'C', ['1', 'b3', '5', '7'], 'CmiMa7', [m.mi, m.ma7]],
	['C-^9', 'C', ['1', 'b3', '5', '7', '9'], 'CmiMa9', [m.mi, m.ma, m.ninth]],
	['C^7#11', 'C', ['1', '3', '5', '7', '#11'], 'Cma7(#11)', [m.ma7, m.eleventhSharp]],
	['C^9#11', 'C', ['1', '3', '5', '7', '9', '#11'], 'Cma9(#11)', [m.ma, m.ninth, m.eleventhSharp]],
	//['C-b6', 'C', ['1'], '', []],
	['C-#5', 'C', ['1', 'b3', '#5'], 'Cmi(#5)', [m.mi, m.fifthSharp]],
	['C^7#5', 'C', ['1', '3', '#5', '7'], 'Cma7(#5)', [m.ma7, m.fifthSharp]],
	['Cadd9', 'C', ['1', '3', '5', '9'], 'C(add9)', [m.add9]],
	['C-7b5', 'C', ['1', 'b3', 'b5', 'b7'], 'Cmi7(b5)', [m.mi, m.seventh, m.fifthFlat]],
	['Cø9', 'C', ['1', 'b3', 'b5', 'b7', '9'], 'Cmi9(b5)', [m.mi, m.seventh, m.fifthFlat, m.ninth]],
	['C2', 'C', ['1', '3', '5', '9'], 'C(add9)', [m.add2]],
	['C5', 'C', ['1', '5'], 'C5', [m.power]],
	['C+', 'C', ['1', '3', '#5'], 'C+', [m.aug]],
	['Co', 'C', ['1', 'b3', 'b5'], 'Cdim', [m.dim]],
	['Cø', 'C', ['1', 'b3', 'b5', 'b7'], 'Cmi7(b5)', [m.mi, m.seventh, m.fifthFlat]],
	['C7b9', 'C', ['1', '3', '5', 'b7', 'b9'], 'C7(b9)', [m.seventh, m.ninthFlat]],
	['C7#9', 'C', ['1', '3', '5', 'b7', '#9'], 'C7(#9)', [m.seventh, m.ninthSharp]],
	['C7b5', 'C', ['1', '3', 'b5', 'b7'], 'C7(b5)', [m.seventh, m.fifthFlat]],
	['C7#5', 'C', ['1', '3', '#5', 'b7'], 'C7(#5)', [m.seventh, m.fifthSharp]],
	['C7b13', 'C', ['1', '3', 'b7', 'b13'], 'C7(b13)', [m.seventh, m.thirteenthFlat]],
	['C7#11', 'C', ['1', '3', '5', 'b7', '#11'], 'C7(#11)', [m.seventh, m.eleventhSharp]],
	['C9#11', 'C', ['1', '3', '5', 'b7', '9', '#11'], 'C9(#11)', [m.ninth, m.eleventhSharp]],
	['C13#11', 'C', ['1', '3', '5', 'b7', '9', '#11', '13'], 'C13(#11)', [m.thirteenth, m.eleventhSharp]],
	['C11', 'C', ['1', '5', 'b7', '9', '11'], 'C9sus', [m.eleventh]],
	['C7b9sus', 'C', ['1', '4', '5', 'b7', 'b9'], 'C7sus(b9)', [m.sus, m.seventh, m.ninthFlat]],
	['C7b13sus', 'C', ['1', '4', 'b7', 'b13'], 'C7sus(b13)', [m.sus, m.seventh, m.thirteenthFlat]],
	['C7add3sus', 'C', ['1', '3', '4', '5', 'b7'], 'C7sus(add3)', [m.sus, m.seventh, m.add3]],
	['C9b5', 'C', ['1', '3', 'b5', 'b7', '9'], 'C9(b5)', [m.ninth, m.fifthFlat]],
	['C9#5', 'C', ['1', '3', '#5', 'b7', '9'], 'C9(#5)', [m.ninth, m.fifthSharp]],
	['C13b9', 'C', ['1', '3', '5', 'b7', 'b9', '13'], 'C13(b9)', [m.thirteenth, m.ninthFlat]],
	['C13#9', 'C', ['1', '3', '5', 'b7', '#9', '13'], 'C13(#9)', [m.thirteenth, m.ninthSharp]],
	['C7b9b13', 'C', ['1', '3', 'b7', 'b9', 'b13'], 'C7(b9,b13)', [m.seventh, m.ninthFlat, m.thirteenthFlat]],
	['C7b9#5', 'C', ['1', '3', '#5', 'b7', 'b9'], 'C7(#5,b9)', [m.seventh, m.fifthSharp, m.ninthFlat]],
	['C7b9b5', 'C', ['1', '3', 'b5', 'b7', 'b9'], 'C7(b5,b9)', [m.seventh, m.fifthFlat, m.ninthFlat]],
	['C7b9#9', 'C', ['1', '3', '5', 'b7', 'b9', '#9'], 'C7(b9,#9)', [m.seventh, m.ninthFlat, m.ninthSharp]],
	['C7#9#5', 'C', ['1', '3', '#5', 'b7', '#9'], 'C7(#5,#9)', [m.seventh, m.fifthSharp, m.ninthSharp]],
	['C7#9b5', 'C', ['1', '3', 'b5', 'b7', '#9'], 'C7(b5,#9)', [m.seventh, m.fifthFlat, m.ninthSharp]],
	['C7#9#11', 'C', ['1', '3', '5', 'b7', '#9', '#11'], 'C7(#9,#11)', [m.seventh, m.ninthSharp, m.eleventhSharp]],
	['C7b9#11', 'C', ['1', '3', '5', 'b7', 'b9', '#11'], 'C7(b9,#11)', [m.seventh, m.ninthFlat, m.eleventhSharp]],

	/**/

	// other chords symbols

	['C2', 'C', ['1', '3', '5', '9'], 'C(add9)'],
	['Csus2', 'C', ['1', '5', '9'], 'C(add9,omit3)'],
	['C6(#9)', 'C', ['1', '3', '5', '6', '#9'], 'C6(add #9)'],
	['C6(b9)', 'C', ['1', '3', '5', '6', 'b9'], 'C6(add b9)'],
	['Cø', 'C', ['1', 'b3', 'b5', 'b7'], 'Cmi7(b5)'],
	['Cadd11', 'C', ['1', '3', '5', '11'], 'C(add11)'],
	['CΔ', 'C', ['1', '3', '5', '7'], 'Cma7'],
	['C^', 'C', ['1', '3', '5', '7'], 'Cma7'],
	['CmiMa7', 'C', ['1', 'b3', '5', '7'], 'CmiMa7'],
	['Cmi^13', 'C', ['1', 'b3', '5', '7', '9', '11', '13'], 'CmiMa13'],
	['CmiΔ13', 'C', ['1', 'b3', '5', '7', '9', '11', '13'], 'CmiMa13'],
	['C^sus(b5)', 'C', ['1', '4', 'b5', '7'], 'Cma7sus(b5)'],
	['CΔsus(b5)', 'C', ['1', '4', 'b5', '7'], 'Cma7sus(b5)'],

	// altered chords

	['Calt', 'C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9', '#11', 'b13'], 'C7alt'],
	['Calt.', 'C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9', '#11', 'b13'], 'C7alt'],
	['Caltered', 'C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9', '#11', 'b13'], 'C7alt'],
	['C7alt', 'C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9', '#11', 'b13'], 'C7alt'],
	['C7alt.', 'C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9', '#11', 'b13'], 'C7alt'],
	['C7altered', 'C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9', '#11', 'b13'], 'C7alt'],
];

const allCases = [];
const allCasesSymbols = [];
const allTestedSymbols = [];

let allVariants;

allSrcSymbols.forEach((symbolSrc) => {
	const [symbol, notes, intervals, printed] = symbolSrc;
	const [rootNote, bassNote] = notes.split('/');

	if (!allCasesSymbols.includes(symbol)) {
		addCase(symbol, symbol, rootNote, printed, intervals);

		const parseChord = chordParserFactory();
		const modifiers = parseChord(symbol).input.modifiers;

		allVariants = [
			...combineModifiers(...modifiers.map(getAllSymbolModifiers)),
		]
			.map(
				(variant) =>
					rootNote + variant + (bassNote ? '/' + bassNote : '')
			)
			.filter((variant) => variant !== symbol);

		if (TEST_SUITE !== 'short') {
			allVariants
				.slice(0, VARIANT_THRESHOLD)
				.filter((variant) => {
					return !allCasesSymbols.includes(variant);
				})
				.forEach((variant) => {
					addCase(
						symbol + ' / variant: ' + variant,
						variant,
						rootNote,
						printed,
						intervals
					);
				});
		}
	}
});

function addCase(title, symbol, rootNote, printed, intervals) {
	allCases.push([title, symbol, rootNote, printed, intervals]);
	allCasesSymbols.push(symbol);
}

describe.each(allCases)('%s', (title, symbol, rootNote, printed, intervals) => {
	allTestedSymbols.push(symbol);

	test('is parsed: ' + intervals.join(' '), () => {
		const parseChord = chordParserFactory();

		const semitones = intervals
			.map((interval) => intervalsToSemitones[interval])
			.sort((a, b) => a - b);
		const parsed = parseChord(symbol);

		expect(parsed.normalized.intervals).toEqual(intervals);
		expect(parsed.normalized.semitones).toEqual(semitones);
		expect(parsed.normalized.rootNote).toEqual(rootNote);
	});

	test('is rendered: ' + printed, () => {
		const parseChord = chordParserFactory();
		const renderChord = chordRendererFactory();

		const chord = parseChord(symbol);
		const rendered = renderChord(chord);

		expect(rendered).toEqual(printed);
	});

	test('is rendered, then re-parsed correctly', () => {
		const parseChord = chordParserFactory();
		const renderChord = chordRendererFactory({ useShortNamings: true });

		const chord1 = parseChord(symbol);
		const rendered = renderChord(chord1);
		const chord2 = parseChord(rendered);
		expect(chord1.normalized.intervals).toEqual(
			chord2.normalized.intervals
		);
	});
});

afterAll(() => {
	fs.writeFileSync(
		path.resolve(__dirname + '/../allTestedSymbols.txt'),
		allTestedSymbols.sort().join('\n')
	);
});
