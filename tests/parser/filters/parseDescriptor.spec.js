import parseDescriptor from '../../../src/parser/filters/parseDescriptor';
import initChord from '../../../src/parser/filters/initChord';
import parseBase from '../../../src/parser/filters/parseBase';

function parseChord(symbol) {
	return [
		initChord,
		parseBase,
	].reduce((chord, filter) => {
		return (chord) ? filter(chord) : null;
	}, symbol);
}

describe('Parsable descriptor', () => {
	describe.each([

		// basic, spaces & coma
		[ 'A' ],
		[ 'Am',		'm' ],
		[ 'A7 add9','7add9' ],


		// Parenthesis with incomplete verbs
		[ 'A(add9)', 			' add9 ' ],
		[ 'A(add9,11)', 		' add9 add11 ' ],
		[ 'A(add 9,11)', 		' add9 add11 ' ],
		[ 'A( add 9, add 11)', 	' add9 add11 ' ],
		[ 'A(add9,omit3)', 		' add9 omit3 ' ],
		[ 'A(omit3,5)', 		' omit3 omit5 ' ],
		[ 'A(no3,5)', 			' no3 no5 ' ],
		[ 'A(no3,5,add#11)', 	' no3 no5 add#11 ' ],

		[ 'A(no3,5)(add#11,b13)', 	' no3 no5  add#11 addb13 ' ],
		[ 'Am(no3,5)7(add#11,b13)', 'm no3 no5 7 add#11 addb13 ' ],


		// lowercase everything but Major "M"
		[ 'ASUSMAJ7ADD9OMIT3', 	'susMaj7add9omit3' ],
		[ 'ASUSMAJ7ADD9OMIT5', 	'susMaj7add9omit5' ],
		[ 'ADIM', 				'dim' ],
		[ 'ADIM.',				'dim.' ],
		[ 'ADIMINISHED',		'diminished' ],
		[ 'ADIM',				'dim' ],
		[ 'AAUGMENTED',			'augmented' ],


		// disambiguation for modifiers combination edge cases
		[ 'Amadd9',		'm add9' ],
		[ 'AMadd9',		'M add9' ],
		[ 'Amino3',		'mi no3' ],
		[ 'Amino5',		'mi no5' ],
		[ 'Adimaddma7',	'dim addma7' ],
		[ 'A7dimaddma7','7dim addma7' ],
		[ 'AM9/6',		'M 9/6' ],
		[ 'AM96',		'M 96' ],
		[ 'Aadd#96',	'add#9 6' ],
		[ 'Aadd♯96',	'add♯9 6' ],
		[ 'Aaddb96',	'addb9 6' ],
		[ 'Aadd♭96',	'add♭9 6' ],

	])('%s', (symbol, parsableDescriptor) => {
		test(`correctly transform descriptor into: >${parsableDescriptor}<`, () => {
			const chord = parseChord(symbol);
			const parsed = parseDescriptor(chord);
			expect(parsed.input.parsableDescriptor).toBe(parsableDescriptor);
		});
	});
});


describe('Intervals', () => {
	describe.each([

		[ 'A',				[ '1', '3', '5'] ],
		[ 'A6',				[ '1', '3', '5', '6'] ],
		[ 'A69',			[ '1', '3', '5', '6', '9'] ],
		[ 'AM7',			[ '1', '3', '5', '7'] ],
		[ 'AM9',			[ '1', '3', '5', '7', '9'] ],
		[ 'AM11',			[ '1', '5', '7', '9', '11'] ],
		[ 'AM13',			[ '1', '3', '5', '7', '9', '13'] ],

		[ 'A7',				[ '1', '3', '5', 'b7'] ],
		[ 'A9',				[ '1', '3', '5', 'b7', '9'] ],
		[ 'A11',			[ '1', '5', 'b7', '9', '11'] ],
		[ 'A13',			[ '1', '3', '5', 'b7', '9', '13'] ],

		[ 'Am',				[ '1', 'b3', '5'] ],
		[ 'Am6',			[ '1', 'b3', '5', '6'] ],
		[ 'Am69',			[ '1', 'b3', '5', '6', '9'] ],
		[ 'Am7',			[ '1', 'b3', '5', 'b7'] ],
		[ 'Am9',			[ '1', 'b3', '5', 'b7', '9'] ],
		[ 'Am11',			[ '1', 'b3', '5', 'b7', '9', '11'] ],
		[ 'Am13',			[ '1', 'b3', '5', 'b7', '9', '11', '13'] ],
		[ 'Am67',			[ '1', 'b3', '5', 'b7', '13'] ],
		[ 'Am6/97',			[ '1', 'b3', '5', 'b7', '9', '13'] ],

		[ 'Csus',			[ '1', '4', '5'] ],
		[ 'Csus(add3)',		[ '1', '3', '4', '5'] ],
		[ 'AM7sus',			[ '1', '4', '5', '7'] ],
		[ 'AM9sus',			[ '1', '4', '5', '7', '9'] ],
		[ 'AM11sus',		[ '1', '4', '5', '7', '9', '11'] ],
		[ 'AM13sus',		[ '1', '4', '5', '7', '9', '13'] ],
		[ 'A7sus',			[ '1', '4', '5', 'b7'] ],
		[ 'A9sus',			[ '1', '4', '5', 'b7', '9'] ],
		[ 'A11sus',			[ '1', '4', '5', 'b7', '9', '11'] ],
		[ 'A13sus',			[ '1', '4', '5', 'b7', '9', '13'] ],

		[ 'Adim',			[ '1', 'b3', 'b5'] ],
		[ 'Ah',				[ '1', 'b3', 'b5', 'b7'] ],
		[ 'Adim7',			[ '1', 'b3', 'b5', 'bb7'] ],
		[ 'Adim(ma7)',		[ '1', 'b3', 'b5', '7'] ],
		[ 'Ao7(ma7)',		[ '1', 'b3', 'b5', 'bb7', '7'] ],
		[ 'Ao7(add ma7)',	[ '1', 'b3', 'b5', 'bb7', '7'] ],
		[ 'A+',				[ '1', '3', '#5'] ],
		[ 'A+7',			[ '1', '3', '#5', 'b7'] ],

		[ 'A(bass)',		[ '1' ] ],
		[ 'A5',				[ '1', '5' ] ],

		[ 'Aomit3omit5',	[ '1' ] ],

	])('%s', (symbol, intervals) => {
		test('is parsed: ' + intervals.join('-'), () => {
			const chord = parseChord(symbol);
			const parsed = parseDescriptor(chord);
			expect(parsed.normalized.intervals).toEqual(intervals);
		});
	});
});


// todo: add intents test
