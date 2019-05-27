import parseChord from '../../src/parseChord';

describe('Basic parsing: rootNote, descriptor & bassNote', () => {
	describe.each([

		[ 'A', 			'A' ],
		[ 'Am', 		'A', 'm' ],
		[ 'Am7', 		'A', 'm7' ],
		[ 'A/F#', 		'A', undefined, 'F#' ],
		[ 'Am7/F#', 	'A', 'm7', 'F#' ],
		[ 'A6/9', 		'A', '6/9' ],
		[ 'A6/9/G', 	'A', '6/9', 'G' ],
		[ 'A(add 9)', 	'A', '(add 9)' ],
		[ 'Adim.', 		'A', 'dim.' ],
		[ 'A° add ma7', 'A', '° add ma7' ],
		[ 'Abb97', 		'Ab', 'b97' ],

	])('%s', (input, rootNote, descriptor, bassNote) => {
		test(`rootNote: '${rootNote}', descriptor: '${descriptor}', bassNote: '${bassNote}'`, () => {
			const parsed = parseChord(input);

			expect(parsed.input).toBe(input);
			expect(parsed.rootNote).toBe(rootNote);
			expect(parsed.descriptor).toBe(descriptor);
			expect(parsed.bassNote).toBe(bassNote);
		});
	});
});


describe('invalid chords', () => {
	describe.each([

		[ 'I' ],
		[ 'I/A' ],
		[ 'Im' ],
		[ 'A6/Z' ],
		[ 'Ame' ],
		[ 'Amad7' ],
		[ 'America' ],
		[ 'A(' ],
		[ 'A((' ],
		[ 'A()(' ],
		[ 'A/' ],
		[ 'A(,,)' ],
		[ 'A,,' ],
		[ 'A..' ],
		[ 'Am..' ],
		[ 'A..m' ],
		[ 'A7.mb5' ],
		[ 'A7/mb5/G' ],
		[ 'A,b97' ],
		[ 'A7,mb5/G' ],

	])('%s', (input) => {
		test('should return null', () => {
			const parsed = parseChord(input);
			expect(parsed).toBeNull();
		});
	});
});


describe('Descriptor / parsable descriptor', () => {
	describe.each([

		// basic, spaces & coma
		[ 'A' ],
		[ 'Am',	'm', 'm' ],
		[ 'A7 add9', '7 add9', '7add9' ],


		// Parenthesis with incomplete verbs
		[ 'A(add9)', 			'(add9)', 				' add9 ' ],
		[ 'A(add9,11)', 		'(add9,11)', 			' add9 add11 ' ],
		[ 'A(add 9,11)', 		'(add 9,11)', 			' add9 add11 ' ],
		[ 'A( add 9, add 11)', 	'( add 9, add 11)', 	' add9 add11 ' ],
		[ 'A(add9,omit3)', 		'(add9,omit3)', 		' add9 omit3 ' ],
		[ 'A(omit3,5)', 		'(omit3,5)',	 		' omit3 omit5 ' ],
		[ 'A(no3,5)', 			'(no3,5)',	 			' no3 no5 ' ],
		[ 'A(no3,5,add#11)', 	'(no3,5,add#11)',		' no3 no5 add#11 ' ],

		[ 'A(no3,5)(add#11,b13)', 	'(no3,5)(add#11,b13)',	' no3 no5  add#11 addb13 ' ],
		[ 'Am(no3,5)7(add#11,b13)', 'm(no3,5)7(add#11,b13)','m no3 no5 7 add#11 addb13 ' ],


		// lowercase everything but Major "M"
		[ 'ASUSMAJ7ADD9OMIT3', 		'SUSMAJ7ADD9OMIT3',		'susMaj7add9omit3' ],
		[ 'ASUSMAJ7ADD9OMIT5', 		'SUSMAJ7ADD9OMIT5',		'susMaj7add9omit5' ],
		[ 'ADIM', 					'DIM',					'dim' ],
		[ 'ADIM.', 					'DIM.',					'dim.' ],
		[ 'ADIMINISHED', 			'DIMINISHED',			'diminished' ],
		[ 'ADIM', 					'DIM',					'dim' ],
		[ 'AAUGMENTED', 			'AUGMENTED',			'augmented' ],


		// disambiguation for modifiers combination edge cases
		[ 'Amadd9', 		'madd9',		'm add9' ],
		[ 'AMadd9', 		'Madd9',		'M add9' ],
		[ 'Amino3', 		'mino3',		'mi no3' ],
		[ 'Amino5', 		'mino5',		'mi no5' ],
		[ 'Adimaddma7',		'dimaddma7',	'dim addma7' ],
		[ 'A7dimaddma7', 	'7dimaddma7',	'7dim addma7' ],
		[ 'AM9/6', 			'M9/6',			'M 9/6' ],
		[ 'AM96', 			'M96',			'M 96' ],
		[ 'Aadd#96', 		'add#96',		'add#9 6' ],
		[ 'Aadd♯96', 		'add♯96',		'add♯9 6' ],
		[ 'Aaddb96', 		'addb96',		'addb9 6' ],
		[ 'Aadd♭96', 		'add♭96',		'add♭9 6' ],

	])('%s', (input, descriptor, parsableDescriptor) => {
		test(`parsableDescriptor: >${parsableDescriptor}<`, () => {
			const parsed = parseChord(input);
			expect(parsed.descriptor).toBe(descriptor);
			expect(parsed.parsableDescriptor).toBe(parsableDescriptor);
		});
	});

});

describe('Intervals', () => {
	describe.each([

		[ 'C',					[ '1', '3', '5'] ],
		[ 'C6',					[ '1', '3', '5', '6'] ],
		[ 'C69',				[ '1', '3', '5', '6', '9'] ],
		[ 'CM7',				[ '1', '3', '5', '7'] ],
		[ 'CM9',				[ '1', '3', '5', '7', '9'] ],
		[ 'CM11',				[ '1', '4', '5', '7', '9'] ],
		[ 'CM13',				[ '1', '3', '5', '7', '9', '13'] ],

		[ 'C7',					[ '1', '3', '5', 'b7'] ],
		[ 'C9',					[ '1', '3', '5', 'b7', '9'] ],
		[ 'C11',				[ '1', '4', '5', 'b7', '9'] ],
		[ 'C13',				[ '1', '3', '5', 'b7', '9', '13'] ],

		[ 'Cm',					[ '1', 'b3', '5'] ],
		[ 'Cm6',				[ '1', 'b3', '5', '6'] ],
		[ 'Cm69',				[ '1', 'b3', '5', '6', '9'] ],
		[ 'Cm7',				[ '1', 'b3', '5', 'b7'] ],
		[ 'Cm9',				[ '1', 'b3', '5', 'b7', '9'] ],
		[ 'Cm11',				[ '1', 'b3', '5', 'b7', '9', '11'] ],
		[ 'Cm13',				[ '1', 'b3', '5', 'b7', '9', '11', '13'] ],

		[ 'Csus',				[ '1', '4', '5'] ],
		[ 'CM7sus',				[ '1', '4', '5', '7'] ],
		[ 'CM9sus',				[ '1', '4', '5', '7', '9'] ],
		[ 'CM11sus',			[ '1', '4', '5', '7', '9'] ],
		[ 'CM13sus',			[ '1', '4', '5', '7', '9', '13'] ],
		[ 'C7sus',				[ '1', '4', '5', 'b7'] ],
		[ 'C9sus',				[ '1', '4', '5', 'b7', '9'] ],
		[ 'C11sus',				[ '1', '4', '5', 'b7', '9'] ],
		[ 'C13sus',				[ '1', '4', '5', 'b7', '9', '13'] ],

		[ 'Cdim',				[ '1', 'b3', 'b5'] ],
		[ 'Cdim7',				[ '1', 'b3', 'b5', 'bb7'] ],
		[ 'C+',					[ '1', '3', '#5'] ],
		[ 'C+7',				[ '1', '3', '#5', 'b7'] ],

		[ 'C(bass)',			[ '1' ] ],
		[ 'C5',					[ '1', '5' ] ],

		[ 'Comit3omit5',		[ '1' ] ],


	])('%s', (input, intervals) => {
		test('is parsed: ' + intervals.join('-'), () => {
			const parsed = parseChord(input);
			expect(parsed.intervals).toEqual(intervals);
		});
	});

});


