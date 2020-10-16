import intervalsToSemitones from '../src/dictionaries/intervalsToSemitones';
import m from '../src/dictionaries/modifiers';

import combineModifiers from './testsHelpers/combineModifiers';
import getAllSymbolModifiers from './testsHelpers/getAllSymbolModifiers';

import chordParserFactory from '../src/parser/chordParserFactory';
import chordRendererFactory from '../src/renderer/chordRendererFactory';

const TEST_SUITE = process.env.TEST_SUITE;
const VARIANT_THRESHOLD = 750; // limit the number of tested combinations per symbol

const allSrcSymbols = [

	/**/

	// Chords symbols from: Contemporary Music Theory

	[ 'C5',				'C', ['1', '5'], 								'C5', 				[ m.power ] ],
	[ 'C(omit3)',		'C', ['1', '5'], 								'C5',				[ m.omit3 ] ],
	[ 'Csus',			'C', ['1', '4', '5'], 							'Csus', 			[ m.sus ] ],
	[ 'C(b5)',			'C', ['1', '3', 'b5'], 							'C(b5)', 			[ m.fifthFlat ] ],
	[ 'C',				'C', ['1', '3', '5'], 							'C' ],
	[ 'C+',				'C', ['1', '3', '#5'], 							'C+', 				[ m.aug ] ],
	[ 'C6(b5)',			'C', ['1', '3', 'b5', '6'], 					'C6(b5)', 			[ m.fifthFlat, m.add6 ] ],
	[ 'C6',				'C', ['1', '3', '5', '6'], 						'C6', 				[ m.add6 ] ],
	[ 'C6(#5)',			'C', ['1', '3', '#5', '6'], 					'C6(#5)', 			[ m.fifthSharp, m.add6 ] ],
	[ 'C69',			'C', ['1', '3', '5', '6', '9'], 				'C69', 				[ m.add69 ] ],
	[ 'C69(#11)',		'C', ['1', '3', '5', '6', '9', '#11'], 			'C69(#11)', 		[ m.add69, m.eleventhSharp ] ],
	[ 'Cma6(b5)',		'C', ['1', '3', 'b5', '6'], 					'C6(b5)', 			[ m.ma, m.fifthFlat, m.add6 ] ],
	[ 'Cma6',			'C', ['1', '3', '5', '6'], 						'C6', 				[ m.ma, m.add6 ] ],
	[ 'Cma69',			'C', ['1', '3', '5', '6', '9'], 				'C69',				[ m.ma, m.add69 ] ],
	[ 'Cma6(#5)',		'C', ['1', '3', '#5', '6'], 					'C6(#5)',			[ m.ma, m.fifthSharp, m.add6 ] ],
	[ 'Cma7(b5)',		'C', ['1', '3', 'b5', '7'], 					'Cma7(b5)', 		[ m.ma7, m.fifthFlat ] ],
	[ 'Cma7',			'C', ['1', '3', '5', '7'], 						'Cma7',				[ m.ma7 ] ],
	[ 'Cma7(#5)',		'C', ['1', '3', '#5', '7'], 					'Cma7(#5)', 		[ m.ma7, m.fifthSharp ] ],
	[ 'Cadd9(omit3)',	'C', ['1', '5', '9'], 							'C(add9,omit3)', 	[ m.omit3, m.add9 ] ],
	[ 'Cadd9(no3)',		'C', ['1', '5', '9'], 							'C(add9,omit3)',	[ m.omit3, m.add9 ] ],
	[ 'Cadd9',			'C', ['1', '3', '5', '9'], 						'C(add9)',			[ m.add9 ] ],
	[ 'C(add9)',		'C', ['1', '3', '5', '9'],						'C(add9)', ],
	[ 'Cma9',			'C', ['1', '3', '5', '7', '9'], 				'Cma9', 			[ m.ma, m.ninth ] ],
	[ 'Cma9(no3)',		'C', ['1', '5', '7', '9'], 						'Cma9(omit3)', 		[ m.ma, m.ninth, m.omit3 ] ],
	[ 'Cma9(#11)',		'C', ['1', '3', '5', '7', '9', '#11'], 			'Cma9(#11)',		[ m.ma, m.ninth, m.eleventhSharp ] ],
	[ 'Cma9(omit3)',	'C', ['1', '5', '7', '9'], 						'Cma9(omit3)', 		[ m.ma, m.ninth, m.omit3 ] ],
	[ 'Cma13',			'C', ['1', '3', '5', '7', '9', '13'],			'Cma13',  	 		[ m.ma, m.thirteenth ] ],
	[ 'Cma13(#11)',		'C', ['1', '3', '5', '7', '9', '#11', '13'],	'Cma13(#11)',  	 	[ m.ma, m.thirteenth, m.eleventhSharp ] ],
	[ 'C°',				'C', ['1', 'b3', 'b5'], 						'Cdim', 			[ m.dim ] ],
	[ 'Cmi',			'C', ['1', 'b3', '5'], 							'Cmi', 				[ m.mi ] ],
	[ 'Cmi add9',		'C', ['1', 'b3', '5', '9'], 					'Cmi(add9)', 		[ m.mi, m.add9 ] ],
	[ 'Cmi(add9)',		'C', ['1', 'b3', '5', '9'], 					'Cmi(add9)', 		[ m.mi, m.add9 ] ],
	[ 'Cmi6',			'C', ['1', 'b3', '5', '6'], 					'Cmi6', 			[ m.mi, m.add6 ] ],
	[ 'Cmi69',			'C', ['1', 'b3', '5', '6', '9'], 				'Cmi69', 			[ m.mi, m.add69 ] ],
	[ 'Cmi69(add11)',	'C', ['1', 'b3', '5', '6', '9', '11'], 			'Cmi69(add11)', 	[ m.mi, m.add69, m.add11 ] ],
	[ 'Cmi(#5)',		'C', ['1', 'b3', '#5'], 						'Cmi(#5)',			[ m.mi, m.fifthSharp ] ],
	[ 'Cmi7',			'C', ['1', 'b3', '5', 'b7'], 					'Cmi7', 			[ m.mi, m.seventh ] ],
	[ 'Cmi7(b5)',		'C', ['1', 'b3', 'b5', 'b7'], 					'Cmi7(b5)', 		[ m.mi, m.seventh, m.fifthFlat ] ],
	[ 'Cmi7(#5)',		'C', ['1', 'b3', '#5', 'b7'], 					'Cmi7(#5)', 		[ m.mi, m.seventh, m.fifthSharp ] ],
	[ 'Cmi7(b5,#5)',	'C', ['1', 'b3', 'b5', '#5', 'b7'], 			'Cmi7(b5,#5)', 		[ m.mi, m.seventh, m.fifthFlat, m.fifthSharp ] ],
	[ 'Cmi7(b5,add11)',	'C', ['1', 'b3', 'b5', 'b7', '11'], 			'Cmi7(b5,add11)', 	[ m.mi, m.seventh, m.fifthFlat, m.add11 ]  ],
	[ 'Cmi7(add11)',	'C', ['1', 'b3', '5', 'b7', '11'], 				'Cmi7(add11)', 		[ m.mi, m.seventh, m.add11 ] ],
	[ 'Cmi9',			'C', ['1', 'b3', '5', 'b7', '9'], 				'Cmi9', 			[ m.mi, m.ninth ] ],
	[ 'Cmi9(b5)',		'C', ['1', 'b3', 'b5', 'b7', '9'], 				'Cmi9(b5)', 		[ m.mi, m.ninth, m.fifthFlat ] ],
	[ 'Cmi11',			'C', ['1', 'b3', '5', 'b7', '9', '11'], 		'Cmi11', 			[ m.mi, m.eleventh ] ],
	[ 'Cmi11(b5)',		'C', ['1', 'b3', 'b5', 'b7', '9', '11'], 		'Cmi11(b5)',		[ m.mi, m.eleventh, m.fifthFlat ] ],
	[ 'Cmi11(b5,no3)',	'C', ['1', 'b5', 'b7', '9', '11'], 				'Cmi11(b5,omit3)', 	[ m.mi, m.eleventh, m.fifthFlat, m.omit3 ] ],
	[ 'Cmi11(b5,#5)',	'C', ['1', 'b3', 'b5', '#5', 'b7', '9', '11'],  'Cmi11(b5,#5)', 	[ m.mi, m.eleventh, m.fifthFlat, m.fifthSharp ] ],
	[ 'Cmi11(b5,b13)',	'C', ['1', 'b3', 'b5', 'b7', '9', '11', 'b13'], 'Cmi11(b5,b13)', 	[ m.mi, m.eleventh, m.fifthFlat, m.addb13 ] ],
	[ 'Cmi13',			'C', ['1', 'b3', '5', 'b7', '9', '11', '13'], 	'Cmi13', 			[ m.mi, m.thirteenth ] ],
	[ 'CmiMa7',			'C', ['1', 'b3', '5', '7'], 					'CmiMa7', 			[ m.mi, m.ma7 ] ],
	[ 'CmiMa9',			'C', ['1', 'b3', '5', '7', '9'], 				'CmiMa9', 			[ m.mi, m.ma, m.ninth ] ],
	[ 'CmiMa9(add13)',	'C', ['1', 'b3', '5', '7', '9', '13'], 			'CmiMa9(add13)', 	[ m.mi, m.ma, m.ninth, m.add13 ] ],
	[ 'CmiMa11',		'C', ['1', 'b3', '5', '7', '9', '11'], 			'CmiMa11', 			[ m.mi, m.ma, m.eleventh ] ],
	[ 'CmiMa13',		'C', ['1', 'b3', '5', '7', '9', '11', '13'], 	'CmiMa13', 			[ m.mi, m.ma, m.thirteenth ] ],
	[ 'C7',				'C', ['1', '3', '5', 'b7'], 							'C7', 				[ m.seventh ] ],
	[ 'C7sus',			'C', ['1', '4', '5', 'b7'], 							'C7sus', 			[ m.sus, m.seventh ] ],
	[ 'C7sus(b9)',		'C', ['1', '4', '5', 'b7', 'b9'],						'C7sus(b9)',		[ m.sus, m.seventh, m.ninthFlat ] ],
	[ 'C7(b5)',			'C', ['1', '3', 'b5', 'b7'], 							'C7(b5)', 			[ m.seventh, m.fifthFlat ] ],
	[ 'C7(b5,#5)',		'C', ['1', '3', 'b5', '#5', 'b7'], 						'C7(b5,#5)', 		[ m.seventh, m.fifthFlat, m.fifthSharp ] ],
	[ 'C7(b5,#5,b9)',	'C', ['1', '3', 'b5', '#5', 'b7', 'b9'], 				'C7(b5,#5,b9)', 	[ m.seventh, m.fifthFlat, m.fifthSharp, m.ninthFlat ] ],
	[ 'C7(b5,#5,#9)',	'C', ['1', '3', 'b5', '#5', 'b7', '#9'], 				'C7(b5,#5,#9)', 	[ m.seventh, m.fifthFlat, m.fifthSharp, m.ninthSharp ] ],
	[ 'C7(b5,#5,b9,#9)','C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9'],			'C7(b5,#5,b9,#9)', 	[ m.seventh, m.fifthFlat, m.fifthSharp, m.ninthFlat, m.ninthSharp ] ],
	[ 'C7(b5,#5,b9,#9,b13)', 'C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9', 'b13'], 'C7(b5,#5,b9,#9,b13)',  [ m.seventh, m.fifthFlat, m.fifthSharp, m.ninthFlat, m.ninthSharp, m.thirteenthFlat ] ],
	[ 'C7(b5,b9)', 		'C', ['1', '3', 'b5', 'b7', 'b9'], 						'C7(b5,b9)', 		[ m.seventh, m.fifthFlat, m.ninthFlat ] ],
	[ 'C7(b5,b9,#9)', 	'C', ['1', '3', 'b5', 'b7', 'b9', '#9'], 				'C7(b5,b9,#9)',		[ m.seventh, m.fifthFlat, m.ninthFlat, m.ninthSharp ] ],
	[ 'C7(b5,b9,b13)', 	'C', ['1', '3', 'b5', 'b7', 'b9', 'b13'], 				'C7(b5,b9,b13)', 	[ m.seventh, m.fifthFlat, m.ninthFlat, m.thirteenthFlat ] ],
	[ 'C7(b5,#9)', 		'C', ['1', '3', 'b5', 'b7', '#9'], 						'C7(b5,#9)', 		[ m.seventh, m.fifthFlat, m.ninthSharp ] ],
	[ 'C7(b5,#9,b13)',	'C', ['1', '3', 'b5', 'b7', '#9', 'b13'], 				'C7(b5,#9,b13)',	[ m.seventh, m.fifthFlat, m.ninthSharp, m.thirteenthFlat ] ],
	[ 'C7(b5,b13)',		'C', ['1', '3', 'b5', 'b7', 'b13'], 					'C7(b5,b13)', 		[ m.seventh, m.fifthFlat, m.thirteenthFlat ] ],
	[ 'C7(#5)',			'C', ['1', '3', '#5', 'b7'], 							'C7(#5)', 			[ m.seventh, m.fifthSharp ] ],
	[ 'C7(#5,b9)',		'C', ['1', '3', '#5', 'b7', 'b9'], 						'C7(#5,b9)', 		[ m.seventh, m.fifthSharp, m.ninthFlat ] ],
	[ 'C7(#5,#9)',		'C', ['1', '3', '#5', 'b7', '#9'], 						'C7(#5,#9)', 		[ m.seventh, m.fifthSharp, m.ninthSharp ] ],
	[ 'C7(#5,b9,#9)',	'C', ['1', '3', '#5', 'b7', 'b9', '#9'], 				'C7(#5,b9,#9)', 	[ m.seventh, m.fifthSharp, m.ninthFlat, m.ninthSharp ] ],
	[ 'C7(#5,b9,#11)',	'C', ['1', '3', '#5', 'b7', 'b9', '#11'], 				'C7(#5,b9,#11)', 	[ m.seventh, m.fifthSharp, m.ninthFlat, m.eleventhSharp ] ],
	[ 'C7(#5,#9,#11)',	'C', ['1', '3', '#5', 'b7', '#9', '#11'], 				'C7(#5,#9,#11)', 	[ m.seventh, m.fifthSharp, m.ninthSharp, m.eleventhSharp ] ],
	[ 'C7(#5,b9,#9,#11)','C', ['1', '3', '#5', 'b7', 'b9', '#9', '#11'], 		'C7(#5,b9,#9,#11)',	[ m.seventh, m.fifthSharp, m.ninthFlat, m.ninthSharp, m.eleventhSharp ]  ],
	[ 'C7(#5, #11)',	'C', ['1', '3', '#5', 'b7', '#11'], 					'C7(#5,#11)',		[ m.seventh, m.fifthSharp, m.eleventhSharp ] ],
	[ 'C7(b9)',			'C', ['1', '3', '5', 'b7', 'b9'], 						'C7(b9)', 			[ m.seventh, m.ninthFlat ] ],
	[ 'C7(b9,#9)',		'C', ['1', '3', '5', 'b7', 'b9', '#9'], 				'C7(b9,#9)', 		[ m.seventh, m.ninthFlat, m.ninthSharp ] ],
	[ 'C7(b9,#11)',		'C', ['1', '3', '5', 'b7', 'b9', '#11'], 				'C7(b9,#11)', 		[ m.seventh, m.ninthFlat, m.eleventhSharp ] ],
	[ 'C7(b9,#9,#11)',	'C', ['1', '3', '5', 'b7', 'b9', '#9', '#11'], 			'C7(b9,#9,#11)', 	[ m.seventh, m.ninthFlat, m.ninthSharp, m.eleventhSharp ]  ],
	[ 'C7(b9,#9,b13)',	'C', ['1', '3', 'b7', 'b9', '#9', 'b13'], 				'C7(b9,#9,b13)', 	[ m.seventh, m.ninthFlat, m.ninthSharp, m.thirteenthFlat ]  ],
	[ 'C7(b9,#9,#11,b13)', 'C', ['1', '3', 'b7', 'b9', '#9', '#11', 'b13'],		'C7(b9,#9,#11,b13)',[ m.seventh, m.ninthFlat, m.ninthSharp, m.eleventhSharp, m.thirteenthFlat ]  ],
	[ 'C7(b9,#11,b13)',	'C', ['1', '3', 'b7', 'b9', '#11', 'b13'], 				'C7(b9,#11,b13)', 	[ m.seventh, m.ninthFlat, m.eleventhSharp, m.thirteenthFlat ]  ],
	[ 'C7(b9,b13)',		'C', ['1', '3', 'b7', 'b9', 'b13'],						'C7(b9,b13)', 		[ m.seventh, m.ninthFlat, m.thirteenthFlat ] ],
	[ 'C7(#9)',			'C', ['1', '3', '5', 'b7', '#9'], 						'C7(#9)', 			[ m.seventh, m.ninthSharp ] ],
	[ 'C7(#9,#11)',		'C', ['1', '3', '5', 'b7', '#9', '#11'], 				'C7(#9,#11)', 		[ m.seventh, m.ninthSharp, m.eleventhSharp ] ],
	[ 'C7(#9,b13)',		'C', ['1', '3', 'b7', '#9', 'b13'], 					'C7(#9,b13)', 		[ m.seventh, m.ninthSharp, m.thirteenthFlat ] ],
	[ 'C7(#9,#11,b13)',	'C', ['1', '3', 'b7', '#9', '#11', 'b13'], 				'C7(#9,#11,b13)', 	[ m.seventh, m.ninthSharp, m.eleventhSharp, m.thirteenthFlat ]  ],
	[ 'C7(#11)',		'C', ['1', '3', '5', 'b7', '#11'], 						'C7(#11)', 			[ m.seventh, m.eleventhSharp ] ],
	[ 'C7(#11,b13)',	'C', ['1', '3', 'b7', '#11', 'b13'], 					'C7(#11,b13)',		[ m.seventh, m.eleventhSharp, m.thirteenthFlat ] ],
	[ 'C7(b13)',		'C', ['1', '3', 'b7', 'b13'], 							'C7(b13)', 			[ m.seventh, m.thirteenthFlat ] ],
	[ 'C9',				'C', ['1', '3', '5', 'b7', '9'], 						'C9', 				[ m.ninth ] ],
	[ 'C9(13)',			'C', ['1', '3', '5', 'b7', '9', '13'], 					'C13', 				[ m.ninth, m.thirteenth ] ],
	[ 'C9(add13)',		'C', ['1', '3', '5', 'b7', '9', '13'], 					'C13', 				[ m.ninth, m.thirteenth ] ],
	[ 'C9sus',			'C', ['1', '4', '5', 'b7', '9'], 						'C9sus', 			[ m.sus, m.ninth ] ],
	[ 'C9(b5)',			'C', ['1', '3', 'b5', 'b7', '9'], 						'C9(b5)', 			[ m.ninth, m.fifthFlat ] ],
	[ 'C9(b5,#5)',		'C', ['1', '3', 'b5', '#5', 'b7', '9'], 				'C9(b5,#5)', 		[ m.ninth, m.fifthFlat, m.fifthSharp ] ],
	[ 'C9(b5,b13)',		'C', ['1', '3', 'b5', 'b7', '9', 'b13'], 				'C9(b5,b13)', 		[ m.ninth, m.fifthFlat, m.thirteenthFlat ] ],
	[ 'C9(#5,#11)',		'C', ['1', '3', '#5', 'b7', '9', '#11'], 				'C9(#5,#11)', 		[ m.ninth, m.fifthSharp, m.eleventhSharp ] ],
	[ 'C9(#11)',		'C', ['1', '3', '5', 'b7', '9', '#11'], 				'C9(#11)', 			[ m.ninth, m.eleventhSharp ] ],
	[ 'C9(#11,b13)',	'C', ['1', '3', 'b7', '9', '#11', 'b13'],				'C9(#11,b13)', 		[ m.ninth, m.eleventhSharp, m.thirteenthFlat ] ],
	[ 'C11',			'C', ['1', '5', 'b7', '9', '11'], 						'C9sus', 			[ m.eleventh ] ],
	[ 'C11(b9)',		'C', ['1', '5', 'b7', 'b9', '11'], 						'C7sus(b9)',		[ m.eleventh, m.ninthFlat ] ],
	[ 'C13',			'C', ['1', '3', '5', 'b7', '9', '13'], 					'C13', 				[ m.thirteenth ] ],
	[ 'C13sus',			'C', ['1', '4', '5', 'b7', '9', '13'], 					'C13sus',			[ m.sus, m.thirteenth ] ],
	[ 'C13(b5)',		'C', ['1', '3', 'b5', 'b7', '9', '13'], 				'C13(b5)', 			[ m.thirteenth, m.fifthFlat ] ],
	[ 'C13(b5,b9)',		'C', ['1', '3', 'b5', 'b7', 'b9', '13'], 				'C13(b5,b9)', 		[ m.thirteenth, m.fifthFlat, m.ninthFlat ] ],
	[ 'C13(b5,#9)',		'C', ['1', '3', 'b5', 'b7', '#9', '13'], 				'C13(b5,#9)', 		[ m.thirteenth, m.fifthFlat, m.ninthSharp ] ],
	[ 'C13(b5,b9,#9)',	'C', ['1', '3', 'b5', 'b7', 'b9', '#9', '13'], 			'C13(b5,b9,#9)', 	[ m.thirteenth, m.fifthFlat, m.ninthFlat, m.ninthSharp ] ],
	[ 'C13(b9)',		'C', ['1', '3', '5', 'b7', 'b9', '13'], 				'C13(b9)', 			[ m.thirteenth, m.ninthFlat ] ],
	[ 'C13(b9,#9)',		'C', ['1', '3', '5', 'b7', 'b9', '#9', '13'], 			'C13(b9,#9)', 		[ m.thirteenth, m.ninthFlat, m.ninthSharp ] ],
	[ 'C13(b9,#11)',	'C', ['1', '3', '5', 'b7', 'b9', '#11', '13'], 			'C13(b9,#11)', 		[ m.thirteenth, m.ninthFlat, m.eleventhSharp ] ],
	[ 'C13(b9,#9,#11)',	'C', ['1', '3', '5', 'b7', 'b9', '#9', '#11', '13'],	'C13(b9,#9,#11)', 	[ m.thirteenth, m.ninthFlat, m.ninthSharp, m.eleventhSharp ]  ],
	[ 'C13(#9)',		'C', ['1', '3', '5', 'b7', '#9', '13'], 				'C13(#9)', 			[ m.thirteenth, m.ninthSharp ] ],
	[ 'C13(#9,#11)',	'C', ['1', '3', '5', 'b7', '#9', '#11', '13'], 			'C13(#9,#11)', 		[ m.thirteenth, m.ninthSharp, m.eleventhSharp ] ],
	[ 'C13(#11)',		'C', ['1', '3', '5', 'b7', '9', '#11', '13'], 			'C13(#11)',			[ m.thirteenth, m.eleventhSharp ] ],
	[ 'Cdim',					'C', ['1', 'b3', 'b5'], 								'Cdim', 					[ m.dim ] ],
	[ 'Cdim7',					'C', ['1', 'b3', 'b5', 'bb7'], 							'Cdim7', 					[ m.dim7 ] ],
	[ 'Cdim7(add ma7)',			'C', ['1', 'b3', 'b5', 'bb7', '7'], 					'Cdim7(addMa7)', 			[ m.dim7, m.add7 ] ],
	[ 'Cdim7(add ma7,9)',		'C', ['1', 'b3', 'b5', 'bb7', '7', '9'], 				'Cdim7(addMa7,9)', 			[ m.dim7, m.add7, m.add9 ] ],
	[ 'Cdim7(add ma7,9,11)',	'C', ['1', 'b3', 'b5', 'bb7', '7', '9', '11'], 			'Cdim7(addMa7,9,11)', 		[ m.dim7, m.add7, m.add9, m.add11 ] ],
	[ 'Cdim7(add ma7,9,11,b13)','C', ['1', 'b3', 'b5', 'bb7', '7', '9', '11', 'b13'],	'Cdim7(addMa7,9,11,b13)', 	[ m.dim7, m.add7, m.add9, m.add11, m.thirteenthFlat ]  ],
	[ 'Cdim7(add ma7,11)',		'C', ['1', 'b3', 'b5', 'bb7', '7', '11'], 				'Cdim7(addMa7,11)', 		[ m.dim7, m.add7, m.add11 ] ],
	[ 'Cdim7(add ma7,11,b13)',	'C', ['1', 'b3', 'b5', 'bb7', '7', '11', 'b13'], 		'Cdim7(addMa7,11,b13)', 	[ m.dim7, m.add7, m.add11, m.thirteenthFlat ] ],
	[ 'Cdim7(add ma7,9,b13)',	'C', ['1', 'b3', 'b5', 'bb7', '7', '9', 'b13'], 		'Cdim7(addMa7,9,b13)',		[ m.dim7, m.add7, m.add9, m.thirteenthFlat ] ],
	[ 'Cdim7(add ma7,b13)',		'C', ['1', 'b3', 'b5', 'bb7', '7', 'b13'], 				'Cdim7(addMa7,b13)', 		[ m.dim7, m.add7, m.thirteenthFlat ] ],
	[ 'Cdim7(add 9)',			'C', ['1', 'b3', 'b5', 'bb7', '9'], 					'Cdim7(add9)', 				[ m.dim7, m.add9 ] ],
	[ 'Cdim7(add 9,11)',		'C', ['1', 'b3', 'b5', 'bb7', '9', '11'], 				'Cdim7(add9,11)', 			[ m.dim7, m.add9, m.add11 ] ],
	[ 'Cdim7(add 9,11,b13)',	'C', ['1', 'b3', 'b5', 'bb7', '9', '11', 'b13'], 		'Cdim7(add9,11,b13)', 		[ m.dim7, m.add9, m.add11, m.thirteenthFlat ]  ],
	[ 'Cdim7(add 9,b13)',		'C', ['1', 'b3', 'b5', 'bb7', '9', 'b13'], 				'Cdim7(add9,b13)', 			[ m.dim7, m.add9, m.thirteenthFlat ] ],
	[ 'Cdim7(add 11)',			'C', ['1', 'b3', 'b5', 'bb7', '11'], 					'Cdim7(add11)', 			[ m.dim7, m.add11 ] ],
	[ 'Cdim7(add 11,b13)',		'C', ['1', 'b3', 'b5', 'bb7', '11', 'b13'], 			'Cdim7(add11,b13)', 		[ m.dim7, m.add11, m.thirteenthFlat ]   ],
	[ 'Cdim7(add b13)',			'C', ['1', 'b3', 'b5', 'bb7', 'b13'], 					'Cdim7(add b13)', 			[ m.dim7, m.thirteenthFlat ] ],


	// Chords symbols from: The New Real Book vol1

	[ 'C bass', 			'C', ['1'], 										'C bass',	 			[ m.bass ] ],
	[ 'C', 					'C', ['1', '3', '5'],								'C' ],
	[ 'CSUS', 				'C', ['1', '4', '5'], 								'Csus', 				[ m.sus ] ],
	[ 'C+', 				'C', ['1', '3', '#5'], 								'C+', 					[ m.aug ] ],
	[ 'C6', 				'C', ['1', '3', '5', '6'], 							'C6', 					[ m.add6 ] ],
	[ 'C6/9', 				'C', ['1', '3', '5', '6', '9'], 					'C69', 					[ m.add69 ] ],
	[ 'CMA7(b5)', 			'C', ['1', '3', 'b5', '7'], 						'Cma7(b5)',				[ m.ma7, m.fifthFlat ] ],
	[ 'C#MA7SUS(b5)', 		'C#',['1', '4', 'b5', '7'], 						'C#ma7sus(b5)', 		[ m.sus, m.ma7, m.fifthFlat ] ],
	[ 'CMA7', 				'C', ['1', '3', '5', '7'], 							'Cma7', 				[ m.ma7 ] ],
	[ 'CMA7(#5)', 			'C', ['1', '3', '#5', '7'], 						'Cma7(#5)', 			[ m.ma7, m.fifthSharp ] ],
	[ 'CMA7(#11)', 			'C', ['1', '3', '5', '7', '#11'], 					'Cma7(#11)', 			[ m.ma7, m.eleventhSharp ] ],
	[ 'C(add 9,omit 3)',	'C', ['1', '5', '9'], 								'C(add9,omit3)', 		[ m.add9, m.omit3 ] ],
	[ 'C(add 9)',			'C', ['1', '3', '5', '9'], 							'C(add9)', 				[ m.add9 ] ],
	[ 'CMA9', 				'C', ['1', '3', '5', '7', '9'], 					'Cma9', 				[ m.ma, m.ninth ] ],
	[ 'CMA9(#11)', 			'C', ['1', '3', '5', '7', '9', '#11'], 				'Cma9(#11)', 			[ m.ma, m.ninth, m.eleventhSharp ] ],
	[ 'CMA7(add 13)', 		'C', ['1', '3', '5', '7', '13'], 					'Cma7(add13)', 			[ m.ma7, m.add13 ] ],
	[ 'CMA13', 				'C', ['1', '3', '5', '7', '9', '13'], 				'Cma13', 				[ m.ma, m.thirteenth ] ],
	[ 'CMA13(#11)', 		'C', ['1', '3', '5', '7', '9', '#11', '13'], 		'Cma13(#11)', 			[ m.ma, m.thirteenth, m.eleventhSharp ] ],
	[ 'Bb(add 9,add b13)', 	'Bb',['1', '3', '9', 'b13'], 						'Bb(add9,b13)', 		[ m.add9, m.addb13 ] ],
	[ 'A+(add b9,add #9)',	'A', ['1', '3', '#5', 'b9', '#9'], 					'A+(add b9,#9)', 		[ m.aug, m.ninthFlat, m.ninthSharp ] ],
	[ 'CMI7', 				'C', ['1', 'b3', '5', 'b7'], 						'Cmi7', 				[ m.mi, m.seventh ] ],
	[ 'CMI7(omit 5)', 		'C', ['1', 'b3', 'b7'], 							'Cmi7(omit5)', 			[ m.mi, m.seventh, m.omit5 ] ],
	[ 'CMI9', 				'C', ['1', 'b3', '5', 'b7', '9'], 					'Cmi9', 				[ m.mi, m.ninth ] ],
	[ 'CMI11', 				'C', ['1', 'b3', '5', 'b7', '9', '11'], 			'Cmi11', 				[ m.mi, m.eleventh ] ],
	[ 'CMI7(add 11)', 		'C', ['1', 'b3', '5', 'b7', '11'], 					'Cmi7(add11)', 			[ m.mi, m.seventh, m.add11 ] ],
	[ 'CMI13', 				'C', ['1', 'b3', '5', 'b7', '9', '11', '13'], 		'Cmi13', 				[ m.mi, m.thirteenth ] ],
	[ 'CMI7(add 13)', 		'C', ['1', 'b3', '5', 'b7', '13'], 					'Cmi7(add13)', 			[ m.mi, m.seventh, m.add13 ] ],
	[ 'G#MI7(add 11, omit 5)','G#', ['1', 'b3', 'b7', '11'], 					'G#mi7(add11,omit5)', 	[ m.mi, m.seventh, m.add11, m.omit5 ] ],
	[ 'Cdim.', 				'C', ['1', 'b3', 'b5'], 							'Cdim', 				[ m.dim ] ],
	[ 'CMI7(b5)', 			'C', ['1', 'b3', 'b5', 'b7'], 						'Cmi7(b5)', 			[ m.mi, m.seventh, m.fifthFlat ] ],
	[ 'CMI9(b5)', 			'C', ['1', 'b3', 'b5', 'b7', '9'], 					'Cmi9(b5)', 			[ m.mi, m.ninth, m.fifthFlat ] ],
	[ 'CMI11(b5)',			'C', ['1', 'b3', 'b5', 'b7', '9', '11'], 			'Cmi11(b5)', 			[ m.mi, m.eleventh, m.fifthFlat ] ],
	[ 'CMI', 				'C', ['1', 'b3', '5'], 								'Cmi', 					[ m.mi ] ],
	[ 'CMI6', 				'C', ['1', 'b3', '5', '6'], 						'Cmi6', 				[ m.mi, m.add6 ] ],
	[ 'CMI(MA7)', 			'C', ['1', 'b3', '5', '7'], 						'CmiMa7', 				[ m.mi, m.ma7 ] ],
	[ 'CMI(add9)', 			'C', ['1', 'b3', '5', '9'], 						'Cmi(add9)', 			[ m.mi, m.add9 ] ],
	[ 'CMI6/9', 			'C', ['1', 'b3', '5', '6', '9'], 					'Cmi69', 				[ m.mi, m.add69 ] ],
	[ 'C7', 				'C', ['1', '3', '5', 'b7'], 						'C7', 					[ m.seventh ] ],
	[ 'C7(omit 3)', 		'C', ['1', '5', 'b7'], 								'C7(omit3)', 			[ m.seventh, m.omit3 ] ],
	[ 'C9', 				'C', ['1', '3', '5', 'b7', '9'], 					'C9', 					[ m.ninth ] ],
	[ 'C13', 				'C', ['1', '3', '5', 'b7', '9', '13'], 				'C13', 					[ m.thirteenth ] ],
	[ 'C7SUS', 				'C', ['1', '4', '5', 'b7'], 						'C7sus', 				[ m.sus, m.seventh ] ],
	[ 'F#7SUS(add 3)', 		'F#',['1', '3', '4', '5', 'b7'], 					'F#7sus(add3)', 		[ m.sus, m.seventh, m.add3 ] ],
	[ 'C9SUS', 				'C', ['1', '4', '5', 'b7', '9'], 					'C9sus', 				[ m.sus, m.ninth ] ],
	[ 'C13SUS', 			'C', ['1', '4', '5', 'b7', '9', '13'], 				'C13sus', 				[ m.sus, m.thirteenth ] ],
	[ 'C7(b5)', 			'C', ['1', '3', 'b5', 'b7'], 						'C7(b5)', 				[ m.seventh, m.fifthFlat ] ],
	[ 'C7(b5,b9)', 			'C', ['1' , '3', 'b5', 'b7', 'b9'], 				'C7(b5,b9)', 			[ m.seventh, m.fifthFlat, m.ninthFlat ] ],
	[ 'C9(b5)', 			'C', ['1', '3', 'b5', 'b7', '9'], 					'C9(b5)', 				[ m.ninth, m.fifthFlat ] ],
	[ 'C13(b5)', 			'C', ['1', '3', 'b5', 'b7', '9', '13'], 			'C13(b5)', 				[ m.thirteenth, m.fifthFlat ] ],
	[ 'C7(#11)', 			'C', ['1', '3', '5', 'b7', '#11'], 					'C7(#11)', 				[ m.seventh, m.eleventhSharp ] ],
	[ 'C9(#11)', 			'C', ['1', '3', '5', 'b7', '9', '#11'], 			'C9(#11)', 				[ m.ninth, m.eleventhSharp ] ],
	[ 'C13(#11)', 			'C', ['1', '3', '5', 'b7', '9', '#11', '13'], 		'C13(#11)', 			[ m.thirteenth, m.eleventhSharp ] ],
	[ 'C7(b9)', 			'C', ['1', '3', '5', 'b7', 'b9'], 					'C7(b9)', 				[ m.seventh, m.ninthFlat ] ],
	[ 'C7(#9)', 			'C', ['1', '3', '5', 'b7', '#9'], 					'C7(#9)', 				[ m.seventh, m.ninthSharp ] ],
	[ 'C7(b9,#11)', 		'C', ['1', '3', '5', 'b7', 'b9', '#11'], 			'C7(b9,#11)', 			[ m.seventh, m.ninthFlat, m.eleventhSharp ] ],
	[ 'C7(#9,#11)', 		'C', ['1', '3', '5', 'b7', '#9', '#11'], 			'C7(#9,#11)', 			[ m.seventh, m.ninthSharp, m.eleventhSharp ] ],
	[ 'C7SUS(b9)', 			'C', ['1', '4', '5', 'b7', 'b9'], 					'C7sus(b9)', 			[ m.sus, m.seventh, m.ninthFlat ] ],
	[ 'C13SUS(b9)', 		'C', ['1', '4', '5', 'b7', 'b9', '13'], 			'C13sus(b9)', 			[ m.sus, m.thirteenth, m.ninthFlat ] ],
	[ 'C13(b9)', 			'C', ['1', '3', '5', 'b7', 'b9', '13'], 			'C13(b9)', 				[ m.thirteenth, m.ninthFlat ] ],
	[ 'C13(#11)', 			'C', ['1', '3', '5', 'b7', '9', '#11', '13'], 		'C13(#11)', 			[ m.thirteenth, m.eleventhSharp ] ],
	[ 'C7(#5)', 			'C', ['1', '3', '#5', 'b7'], 						'C7(#5)', 				[ m.seventh, m.fifthSharp] ],
	[ 'C7(#5,b9)', 			'C', ['1', '3', '#5', 'b7', 'b9'], 					'C7(#5,b9)', 			[ m.seventh, m.fifthSharp, m.ninthFlat ] ],
	[ 'C7(#5,#9)', 			'C', ['1', '3', '#5', 'b7', '#9'], 					'C7(#5,#9)', 			[ m.seventh, m.fifthSharp, m.ninthSharp ] ],
	[ 'C9(#5)', 			'C', ['1', '3', '#5', 'b7', '9'], 					'C9(#5)', 				[ m.ninth, m.fifthSharp ] ],
	[ 'C°7', 				'C', ['1', 'b3', 'b5', 'bb7'], 						'Cdim7', 				[ m.dim7 ] ],
	[ 'C°7(add MA7)', 		'C', ['1', 'b3', 'b5', 'bb7', '7'], 				'Cdim7(addMa7)', 		[ m.dim7, m.add7 ] ],
	[ 'C/E', 				'C/E', ['1', '3', '5' ], 			'C/E' ],
	[ 'C/G', 				'C/G', ['1', '3', '5' ], 			'C/G' ],
	[ 'E/C', 				'E/C', ['1', '3', '5' ], 			'E/C' ],
	[ 'Bb/C', 				'Bb/C',['1', '3', '5' ], 			'Bb/C' ],
	[ 'C(add 9)/E', 		'C/E', ['1', '3', '5', '9'], 		'C(add9)/E', 	[ m.add9 ] ],
	[ 'F/F#', 				'F/F#',['1', '3', '5'], 			'F/F#' ],
	[ 'E+/G', 				'E/G', ['1', '3', '#5'], 			'E+/G', 		[ m.aug ] ],
	[ 'G7SUS/A', 			'G/A', ['1', '4', '5', 'b7'], 		'G7sus/A', 		[ m.sus, m.seventh ] ],
	[ 'GMA7(#5)/F#', 		'G/F#',['1', '3', '#5', '7'], 		'Gma7(#5)/F#', 	[ m.ma7, m.fifthSharp ] ],
	[ 'EbMA7(#5)/F', 		'Eb/F',['1', '3', '#5', '7'], 		'Ebma7(#5)/F', 	[ m.ma7, m.fifthSharp ] ],
	[ 'BMA7SUS/F#', 		'B/F#',['1', '4', '5', '7'], 		'Bma7sus/F#', 	[ m.sus, m.ma7 ] ],

	/**/

	// other chords symbols

	[ 'C2', 		'C', ['1', '3', '5', '9'], 				'C(add9)', 		[ m.add2 ] ],
	[ 'Csus2', 		'C', ['1', '5', '9'], 					'C(add9,omit3)',[ m.sus2 ] ],
	[ 'C6(#9)',		'C', ['1', '3', '5', '6', '#9'],		'C6(add #9)', 	[ m.add6, m.ninthSharp ] ],
	[ 'C6(b9)',		'C', ['1', '3', '5', '6', 'b9'],		'C6(add b9)',	[ m.add6, m.ninthFlat ] ],
	[ 'Cø',			'C', ['1', 'b3', 'b5', 'b7'],			'Cmi7(b5)', 	[ m.halfDim ] ],

	// altered chords
	['Calt',		'C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9', '#11', 'b13'],	'C7alt', [ m.alt ] ],
	['Calt.',		'C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9', '#11', 'b13'],	'C7alt', [ m.alt ] ],
	['Caltered',	'C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9', '#11', 'b13'],	'C7alt', [ m.alt ] ],
	['C7alt', 		'C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9', '#11', 'b13'],	'C7alt', [ m.alt ] ],
	['C7alt.', 		'C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9', '#11', 'b13'],	'C7alt', [ m.alt ] ],
	['C7altered', 	'C', ['1', '3', 'b5', '#5', 'b7', 'b9', '#9', '#11', 'b13'],	'C7alt', [ m.alt ] ],

];

const allCases = [];
const allCasesSymbols = [];
let allVariants;

allSrcSymbols.forEach(symbolSrc => {
	const [ symbol, notes, intervals, printed, modifiers = [] ] = symbolSrc;
	const [ rootNote, bassNote ] = notes.split('/');

	if (!allCasesSymbols.includes(symbol)) {
		addCase(symbol, symbol, rootNote, printed, intervals);

		allVariants = [...combineModifiers(
			...modifiers.map(getAllSymbolModifiers),
		)]
			.map(variant => rootNote + variant + ((bassNote) ? '/' + bassNote : ''))
			.filter(variant => variant !== symbol);

		if (TEST_SUITE !== 'short') {
			allVariants
				.slice(0, VARIANT_THRESHOLD)
				.filter(variant => {
					return !allCasesSymbols.includes(variant);
				})
				.forEach(variant => {
					addCase(symbol + ' / variant: ' + variant, variant, rootNote, printed, intervals);
				});
		}
	}
});

function addCase(title, symbol, rootNote, printed, intervals) {
	allCases.push([ title, symbol, rootNote, printed, intervals ]);
	allCasesSymbols.push(symbol);
}

describe.each(allCases)('%s', (title, symbol, rootNote, printed, intervals) => {
	test('is parsed: ' + intervals.join(' '), () => {
		const parseChord = chordParserFactory();

		const semitones = intervals.map(interval => intervalsToSemitones[interval]).sort((a, b) => (a - b));
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
		expect(chord1.normalized.intervals).toEqual(chord2.normalized.intervals);
	});
});
