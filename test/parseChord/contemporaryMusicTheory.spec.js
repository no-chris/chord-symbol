import parseChord from '../../src/parseChord';
import intervalsToSemitones from '../../src/intervalsToSemitones';
import allModifiers from '../../src/allModifiers';
import combineModifiers from './helpers/combineModifiers';
import getAllSymbolModifiers from '../../src/getAllSymbolModifiers';


const allCases = [
	[ 'C5',						'C', ['1', '5'], 										[ allModifiers.power ] ],
	[ 'C(omit3)',				'C', ['1', '5'], 										[ allModifiers.omit3 ] ],
	[ 'Csus',					'C', ['1', '4', '5'], 									[ allModifiers.sus ] ],
	[ 'C(b5)',					'C', ['1', '3', 'b5'], 									[ allModifiers.fifthFlat ] ],
	[ 'C',						'C', ['1', '3', '5'] ],
	[ 'C+',						'C', ['1', '3', '#5'], 									[ allModifiers.aug ] ],
	[ 'C6(b5)',					'C', ['1', '3', 'b5', '6'], 							[ allModifiers.fifthFlat, allModifiers.add6 ] ],
	[ 'C6',						'C', ['1', '3', '5', '6'], 								[ allModifiers.add6 ] ],
	[ 'C6(#5)',					'C', ['1', '3', '#5', '6'], 							[ allModifiers.fifthSharp, allModifiers.add6 ] ],
	[ 'C69',					'C', ['1', '3', '5', '6', '9'], 						[ allModifiers.add69 ] ],
	[ 'C69(#11)',				'C', ['1', '3', '5', '6', '9', '#11'], 					[ allModifiers.add69, allModifiers.eleventhSharp ] ],
	[ 'Cma6(b5)',				'C', ['1', '3', 'b5', '6'], 							[ allModifiers.ma, allModifiers.fifthFlat, allModifiers.add6 ] ],
	[ 'Cma6',					'C', ['1', '3', '5', '6'], 								[ allModifiers.ma, allModifiers.add6 ] ],
	[ 'Cma69',					'C', ['1', '3', '5', '6', '9'], 						[ allModifiers.ma, allModifiers.add69 ] ],
	[ 'Cma6(#5)',				'C', ['1', '3', '#5', '6'], 							[ allModifiers.ma, allModifiers.fifthSharp, allModifiers.add6 ] ],
	[ 'Cma7(b5)',				'C', ['1', '3', 'b5', '7'], 							[ allModifiers.ma7, allModifiers.fifthFlat ] ],
	[ 'Cma7',					'C', ['1', '3', '5', '7'], 								[ allModifiers.ma7 ] ],
	[ 'Cma7(#5)',				'C', ['1', '3', '#5', '7'], 							[ allModifiers.ma7, allModifiers.fifthSharp ] ],
	[ 'Cadd9(omit3)',			'C', ['1', '5', '9'], 									[ allModifiers.omit3, allModifiers.add9 ] ],
	[ 'Cadd9(no3)',				'C', ['1', '5', '9'], 									[ allModifiers.no3, allModifiers.add6 ] ],
	[ 'Cadd9',					'C', ['1', '3', '5', '9'], 								[ allModifiers.add9 ] ],
	[ 'C(add9)',				'C', ['1', '3', '5', '9'] ],
	[ 'Cma9',					'C', ['1', '3', '5', '7', '9'], 						[ allModifiers.ma9 ] ],
	[ 'Cma9(no3)',				'C', ['1', '5', '7', '9'], 								[ allModifiers.ma9, allModifiers.omit3 ] ],
	[ 'Cma9(#11)',				'C', ['1', '3', '5', '7', '9', '#11'], 					[ allModifiers.ma9, allModifiers.eleventhSharp ] ],
	[ 'Cma9(omit3)',			'C', ['1', '5', '7', '9'], 								[ allModifiers.ma9, allModifiers.omit3 ] ],
	[ 'Cma13(#11)',				'C', ['1', '3', '5', '7', '9', '#11', '13'],			[ allModifiers.ma13, allModifiers.eleventhSharp ] ],
	[ 'Cmi7',					'C', ['1', 'b3', '5', 'b7'], 							[ allModifiers.mi, allModifiers.dom7 ] ],
	[ 'Cmi9',					'C', ['1', 'b3', '5', 'b7', '9'], 						[ allModifiers.mi, allModifiers.dom9 ] ],
	[ 'Cmi11',					'C', ['1', 'b3', '5', 'b7', '9', '11'], 				[ allModifiers.mi, allModifiers.dom11 ] ],
	[ 'Cmi7(add11)',			'C', ['1', 'b3', '5', 'b7', '11'], 						[ allModifiers.mi, allModifiers.dom7, allModifiers.add11 ] ],
	[ 'Cmi13',					'C', ['1', 'b3', '5', 'b7', '9', '11', '13'], 			[ allModifiers.mi, allModifiers.dom13 ] ],
	[ 'C°',						'C', ['1', 'b3', 'b5'], 								[ allModifiers.dim ] ],
	[ 'Cmi(#5)',				'C', ['1', 'b3', '#5'], 								[ allModifiers.mi, allModifiers.fifthSharp ] ],
	[ 'Cmi7(b5)',				'C', ['1', 'b3', 'b5', 'b7'], 							[ allModifiers.mi, allModifiers.dom7, allModifiers.fifthFlat ] ],
	[ 'Cmi7(#5)',				'C', ['1', 'b3', '#5', 'b7'], 							[ allModifiers.mi, allModifiers.dom7, allModifiers.fifthSharp ] ],
	[ 'Cmi7(b5,#5)',			'C', ['1', 'b3', 'b5', '#5', 'b7'], 					[ allModifiers.mi, allModifiers.dom7, allModifiers.fifthFlat, allModifiers.fifthSharp ] ],
	[ 'Cmi9(b5)',				'C', ['1', 'b3', 'b5', 'b7', '9'], 						[ allModifiers.mi, allModifiers.dom9, allModifiers.fifthFlat ] ],
	[ 'Cmi11(b5)',				'C', ['1', 'b3', 'b5', 'b7', '9', '11'], 				[ allModifiers.mi, allModifiers.dom11, allModifiers.fifthFlat ] ],
	[ 'Cmi7(b5,add11)',			'C', ['1', 'b3', 'b5', 'b7', '11'], 					[ allModifiers.mi, allModifiers.dom7, allModifiers.fifthFlat, allModifiers.add11 ]  ],
	[ 'Cmi11(b5,no3)',			'C', ['1', 'b5', 'b7', '9', '11'], 						[ allModifiers.mi, allModifiers.dom11, allModifiers.fifthFlat, allModifiers.omit3 ] ],
	[ 'Cmi11(b5,b13)',			'C', ['1', 'b3', 'b5', 'b7', '9', '11', 'b13'], 		[ allModifiers.mi, allModifiers.dom11, allModifiers.fifthFlat, allModifiers.addb13 ] ],
	[ 'Cmi',					'C', ['1', 'b3', '5'], 									[ allModifiers.mi ] ],
	[ 'Cmi6',					'C', ['1', 'b3', '5', '6'], 							[ allModifiers.mi, allModifiers.add6 ] ],
	[ 'CmiMa7',					'C', ['1', 'b3', '5', '7'], 							[ allModifiers.mi, allModifiers.ma7 ] ],
	[ 'Cmi add9',				'C', ['1', 'b3', '5', '9'], 							[ allModifiers.mi, allModifiers.add9 ] ],
	[ 'Cmi(add9)',				'C', ['1', 'b3', '5', '9'], 							[ allModifiers.mi, allModifiers.add9 ] ],
	[ 'Cmi69',					'C', ['1', 'b3', '5', '6', '9'], 						[ allModifiers.mi, allModifiers.add69 ] ],
	[ 'CmiMa9',					'C', ['1', 'b3', '5', '7', '9'], 						[ allModifiers.mi, allModifiers.ma9 ] ],
	[ 'CmiMa9(add13)',			'C', ['1', 'b3', '5', '7', '9', '13'], 					[ allModifiers.mi, allModifiers.ma9, allModifiers.add13 ] ],
	[ 'Cmi69(add11)',			'C', ['1', 'b3', '5', '6', '9', '11'], 					[ allModifiers.mi, allModifiers.add69, allModifiers.add11 ] ],
	[ 'CmiMa11',				'C', ['1', 'b3', '5', '7', '9', '11'], 					[ allModifiers.mi, allModifiers.ma11 ] ],
	[ 'CmiMa13',				'C', ['1', 'b3', '5', '7', '9', '11', '13'], 			[ allModifiers.mi, allModifiers.ma13 ] ],
	[ 'C7',						'C', ['1', '3', '5', 'b7'], 							[ allModifiers.dom7 ] ],
	[ 'C9',						'C', ['1', '3', '5', 'b7', '9'], 						[ allModifiers.dom9 ] ],
	[ 'C9(13)',					'C', ['1', '3', '5', 'b7', '9', '13'], 					[ allModifiers.dom9, allModifiers.add13 ] ],
	[ 'C9(add13)',				'C', ['1', '3', '5', 'b7', '9', '13'], 					[ allModifiers.dom9, allModifiers.add13 ] ],
	[ 'C11',					'C', ['1', '4', '5', 'b7', '9'], 						[ allModifiers.dom11 ] ],
	[ 'C13',					'C', ['1', '3', '5', 'b7', '9', '13'], 					[ allModifiers.dom13 ] ],
	[ 'C7sus',					'C', ['1', '4', '5', 'b7'], 							[ allModifiers.sus, allModifiers.dom7 ] ],
	[ 'C9sus',					'C', ['1', '4', '5', 'b7', '9'], 						[ allModifiers.sus, allModifiers.dom9 ] ],
	[ 'C13sus',					'C', ['1', '4', '5', 'b7', '9', '13'], 					[ allModifiers.sus, allModifiers.dom13 ] ],
	[ 'C7(b5)',					'C', ['1', '3', 'b5', 'b7'], 							[ allModifiers.dom7, allModifiers.fifthFlat ] ],
	[ 'C9(b5)',					'C', ['1', '3', 'b5', 'b7', '9'], 						[ allModifiers.dom9, allModifiers.fifthFlat ] ],
	[ 'C7(#11)',				'C', ['1', '3', '5', 'b7', '#11'], 						[ allModifiers.dom7, allModifiers.eleventhSharp ] ],
	[ 'C9(#11)',				'C', ['1', '3', '5', 'b7', '9', '#11'], 				[ allModifiers.dom9, allModifiers.eleventhSharp ] ],
	[ 'C13(#11)',				'C', ['1', '3', '5', 'b7', '9', '#11', '13'], 			[ allModifiers.dom13, allModifiers.eleventhSharp ] ],
	[ 'C7(b9)',					'C', ['1', '3', '5', 'b7', 'b9'], 						[ allModifiers.dom7, allModifiers.ninthFlat ] ],
	[ 'C7(#9)',					'C', ['1', '3', '5', 'b7', '#9'], 						[ allModifiers.dom7, allModifiers.ninthSharp ] ],
	[ 'C7(b9,#9)',				'C', ['1', '3', '5', 'b7', 'b9', '#9'], 				[ allModifiers.dom7, allModifiers.ninthFlat, allModifiers.ninthSharp ] ],
	[ 'C7(b9,#11)',				'C', ['1', '3', '5', 'b7', 'b9', '#11'], 				[ allModifiers.dom7, allModifiers.ninthFlat, allModifiers.eleventhSharp ] ],
	[ 'C7(#9,#11)',				'C', ['1', '3', '5', 'b7', '#9', '#11'], 				[ allModifiers.dom7, allModifiers.ninthSharp, allModifiers.eleventhSharp ] ],
	[ 'C7(b9,#9,#11)',			'C', ['1', '3', '5', 'b7', 'b9', '#9', '#11'], 			[ allModifiers.dom7, allModifiers.ninthFlat, allModifiers.ninthSharp, allModifiers.eleventhSharp ]  ],
	[ 'C13(b9)',				'C', ['1', '3', '5', 'b7', 'b9', '13'], 				[ allModifiers.dom13, allModifiers.ninthFlat ] ],
	[ 'C13(#9)',				'C', ['1', '3', '5', 'b7', '#9', '13'], 				[ allModifiers.dom13, allModifiers.ninthSharp ] ],
	[ 'C13(b9,#9)',				'C', ['1', '3', '5', 'b7', 'b9', '#9', '13'], 			[ allModifiers.dom13, allModifiers.ninthFlat, allModifiers.ninthSharp ] ],
	[ 'C13(b9,#11)',			'C', ['1', '3', '5', 'b7', 'b9', '#11', '13'], 			[ allModifiers.dom13, allModifiers.ninthFlat, allModifiers.eleventhSharp ] ],
	[ 'C13(#9,#11)',			'C', ['1', '3', '5', 'b7', '#9', '#11', '13'], 			[ allModifiers.dom13, allModifiers.ninthSharp, allModifiers.eleventhSharp ] ],
	[ 'C13(b9,#9,#11)',			'C', ['1', '3', '5', 'b7', 'b9', '#9', '#11', '13'],	[ allModifiers.dom13, allModifiers.ninthFlat, allModifiers.ninthSharp, allModifiers.eleventhSharp ]  ],
	[ 'C7(#5)',					'C', ['1', '3', '#5', 'b7'], 							[ allModifiers.dom7, allModifiers.fifthSharp ] ],
	[ 'C7(#5,b9)',				'C', ['1', '3', '#5', 'b7', 'b9'], 						[ allModifiers.dom7, allModifiers.fifthSharp, allModifiers.ninthFlat ] ],
	[ 'C7(#5,#9)',				'C', ['1', '3', '#5', 'b7', '#9'], 						[ allModifiers.dom7, allModifiers.fifthSharp, allModifiers.ninthSharp ] ],
	[ 'C7(#5,b9,#9)',			'C', ['1', '3', '#5', 'b7', 'b9', '#9'], 				[ allModifiers.dom7, allModifiers.fifthSharp, allModifiers.ninthFlat, allModifiers.ninthSharp ] ],
	[ 'C7(#5,b9,#11)',			'C', ['1', '3', '#5', 'b7', 'b9', '#11'], 				[ allModifiers.dom7, allModifiers.fifthSharp, allModifiers.ninthFlat, allModifiers.eleventhSharp ] ],
	[ 'C7(#5,#9,#11)',			'C', ['1', '3', '#5', 'b7', '#9', '#11'], 				[ allModifiers.dom7, allModifiers.fifthSharp, allModifiers.ninthSharp, allModifiers.eleventhSharp ] ],
	[ 'C7(#5,b9,#9,#11)',		'C', ['1', '3', '#5', 'b7', 'b9', '#9', '#11'], 		[ allModifiers.dom7, allModifiers.fifthSharp, allModifiers.ninthFlat, allModifiers.ninthSharp, allModifiers.eleventhSharp ]  ],
	[ 'C7(b13)',				'C', ['1', '3', '5', 'b7', 'b13'], 						[ allModifiers.dom7, allModifiers.thirteenthFlat ] ],
	[ 'C7(b9,b13)',				'C', ['1', '3', '5', 'b7', 'b9', 'b13'],				[ allModifiers.dom7, allModifiers.ninthFlat, allModifiers.thirteenthFlat ] ],
	[ 'C7(#9,b13)',				'C', ['1', '3', '5', 'b7', '#9', 'b13'], 				[ allModifiers.dom7, allModifiers.ninthSharp, allModifiers.thirteenthFlat ] ],
	[ 'C7(b9,#9,b13)',			'C', ['1', '3', '5', 'b7', 'b9', '#9', 'b13'], 			[ allModifiers.dom7, allModifiers.ninthFlat, allModifiers.ninthSharp, allModifiers.thirteenthFlat ]  ],
	[ 'C7(b9,#11,b13)',			'C', ['1', '3', '5', 'b7', 'b9', '#11', 'b13'], 		[ allModifiers.dom7, allModifiers.ninthFlat, allModifiers.eleventhSharp, allModifiers.thirteenthFlat ]  ],
	[ 'C7(#9,#11,b13)',			'C', ['1', '3', '5', 'b7', '#9', '#11', 'b13'], 		[ allModifiers.dom7, allModifiers.ninthSharp, allModifiers.eleventhSharp, allModifiers.thirteenthFlat ]  ],
	[ 'C7(b9,#9,#11,b13)', 		'C', ['1', '3', '5', 'b7', 'b9', '#9', '#11', 'b13'],	[ allModifiers.dom7, allModifiers.ninthFlat, allModifiers.ninthSharp, allModifiers.eleventhSharp, allModifiers.thirteenthFlat ]  ],
	[ 'Cdim',					'C', ['1', 'b3', 'b5'], 								[ allModifiers.dim ] ],
	[ 'Cdim7',					'C', ['1', 'b3', 'b5', 'bb7'], 							[ allModifiers.dim7 ] ],
	[ 'Cdim7(add ma7)',			'C', ['1', 'b3', 'b5', 'bb7', '7'], 					[ allModifiers.dim7, allModifiers.add7 ] ],
	[ 'Cdim7(add ma7,9)',		'C', ['1', 'b3', 'b5', 'bb7', '7', '9'], 				[ allModifiers.dim7, allModifiers.add7, allModifiers.add9 ] ],
	[ 'Cdim7(add ma7,9,11)',	'C', ['1', 'b3', 'b5', 'bb7', '7', '9', '11'], 			[ allModifiers.dim7, allModifiers.add7, allModifiers.add9, allModifiers.add11 ] ],
	[ 'Cdim7(add ma7,9,11,b13)','C', ['1', 'b3', 'b5', 'bb7', '7', '9', '11', 'b13'],	[ allModifiers.dim7, allModifiers.add7, allModifiers.add9, allModifiers.add11, allModifiers.thirteenthFlat ]  ],
	[ 'Cdim7(add ma7,11)',		'C', ['1', 'b3', 'b5', 'bb7', '7', '11'], 				[ allModifiers.dim7, allModifiers.add7, allModifiers.add11 ] ],
	[ 'Cdim7(add ma7,9,b13)',	'C', ['1', 'b3', 'b5', 'bb7', '7', '9', 'b13'], 		[ allModifiers.dim7, allModifiers.add7, allModifiers.add9, allModifiers.thirteenthFlat ] ],
	[ 'Cdim7(add ma7,b13)',		'C', ['1', 'b3', 'b5', 'bb7', '7', 'b13'], 				[ allModifiers.dim7, allModifiers.add7, allModifiers.thirteenthFlat ] ],
	[ 'Cdim7(add 9)',			'C', ['1', 'b3', 'b5', 'bb7', '9'], 					[ allModifiers.dim7, allModifiers.add9 ] ],
	[ 'Cdim7(add 9,11)',		'C', ['1', 'b3', 'b5', 'bb7', '9', '11'], 				[ allModifiers.dim7, allModifiers.add9, allModifiers.add11 ] ],
	[ 'Cdim7(add 9,11,b13)',	'C', ['1', 'b3', 'b5', 'bb7', '9', '11', 'b13'], 		[ allModifiers.dim7, allModifiers.add9, allModifiers.add11, allModifiers.thirteenthFlat ]  ],
	[ 'Cdim7(add 9,b13)',		'C', ['1', 'b3', 'b5', 'bb7', '9', 'b13'], 				[ allModifiers.dim7, allModifiers.add9, allModifiers.thirteenthFlat ] ],
	[ 'Cdim7(add 11)',			'C', ['1', 'b3', 'b5', 'bb7', '11'], 					[ allModifiers.dim7, allModifiers.add11 ] ],
	[ 'Cdim7(add 11,b13)',		'C', ['1', 'b3', 'b5', 'bb7', '11', 'b13'], 			[ allModifiers.dim7, allModifiers.add11, allModifiers.thirteenthFlat ]   ],
	[ 'Cdim7(add b13)',			'C', ['1', 'b3', 'b5', 'bb7', 'b13'], 					[ allModifiers.dim7, allModifiers.thirteenthFlat ] ],

];




describe('Contemporary Music Theory - All chords symbols', () => {

	describe.each(allCases)('%s', (symbol, rootNote, intervals, allSymbolModifiers = []) => {
		const semitones = intervals.map(interval => intervalsToSemitones[interval]).sort((a, b) => (a - b));

		test('is parsed: ' + intervals.join(' '), () => {
			const parsed = parseChord(symbol);
			expect(parsed.semitones).toEqual(semitones);
			expect(parsed.rootNote).toEqual(rootNote);
		});

		const allVariants = [];
		if (allSymbolModifiers.length) {
			allVariants.push(
				...combineModifiers(
					...allSymbolModifiers.map(getAllSymbolModifiers),
				)
					.map(modifier => rootNote + modifier)
					.filter(modifier => modifier !== symbol)
			);
		}
		if (allVariants.length && allVariants.length < 1000) { //fixme
			describe.each(allVariants)('variant: %s', (variant) => {
				test('is parsed:  ' + intervals.join(' '), () => {
					const parsed = parseChord(variant);
					expect(parsed.semitones).toEqual(semitones);
				});
			});
		}
	});

});
