import chain from '../../../src/helpers/chain';
import { englishVariants } from '../../../src/dictionaries/notes';

import parseDescriptor from '../../../src/parser/filters/parseDescriptor';
import initChord from '../../../src/parser/filters/initChord';
import parseBase from '../../../src/parser/filters/parseBase';
import intervalsToSemitones from '../../../src/dictionaries/intervalsToSemitones';

function parseChord(symbol) {
	const allFilters = [
		initChord,
		parseBase.bind(null, englishVariants),
	];
	return chain(allFilters, symbol);
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


describe('Intervals & semitones', () => {
	describe.each([

		[ 'A',				[ '1', '3', '5'], 					{ major: true, eleventh: false } ],
		[ 'A6',				[ '1', '3', '5', '6'],				{ major: true, eleventh: false } ],
		[ 'A69',			[ '1', '3', '5', '6', '9'],			{ major: true, eleventh: false } ],
		[ 'AM7',			[ '1', '3', '5', '7'],				{ major: true, eleventh: false } ],
		[ 'AM9',			[ '1', '3', '5', '7', '9'],			{ major: true, eleventh: false } ],
		[ 'AM11',			[ '1', '5', '7', '9', '11'],		{ major: true, eleventh: true } ],
		[ 'AM13',			[ '1', '3', '5', '7', '9', '13'],	{ major: true, eleventh: false } ],

		[ 'A7',				[ '1', '3', '5', 'b7'],				{ major: true, eleventh: false } ],
		[ 'A9',				[ '1', '3', '5', 'b7', '9'],		{ major: true, eleventh: false } ],
		[ 'A11',			[ '1', '5', 'b7', '9', '11'],		{ major: true, eleventh: true } ],
		[ 'A13',			[ '1', '3', '5', 'b7', '9', '13'],	{ major: true, eleventh: false } ],

		[ 'Am',				[ '1', 'b3', '5'],							{ major: false, eleventh: false } ],
		[ 'Am6',			[ '1', 'b3', '5', '6'],						{ major: false, eleventh: false } ],
		[ 'Am69',			[ '1', 'b3', '5', '6', '9'],				{ major: false, eleventh: false } ],
		[ 'Am7',			[ '1', 'b3', '5', 'b7'],					{ major: false, eleventh: false } ],
		[ 'Am9',			[ '1', 'b3', '5', 'b7', '9'],				{ major: false, eleventh: false } ],
		[ 'Am11',			[ '1', 'b3', '5', 'b7', '9', '11'],			{ major: false, eleventh: true } ],
		[ 'Am13',			[ '1', 'b3', '5', 'b7', '9', '11', '13'],	{ major: false, eleventh: false } ],
		[ 'Am67',			[ '1', 'b3', '5', 'b7', '13'],				{ major: false, eleventh: false } ],
		[ 'Am6/97',			[ '1', 'b3', '5', 'b7', '9', '13'],			{ major: false, eleventh: false } ],

		[ 'Csus',			[ '1', '4', '5'],							{ major: true, eleventh: false } ],
		[ 'Csus(add3)',		[ '1', '3', '4', '5'],						{ major: true, eleventh: false } ],
		[ 'AM7sus',			[ '1', '4', '5', '7'],						{ major: true, eleventh: false } ],
		[ 'AM9sus',			[ '1', '4', '5', '7', '9'],					{ major: true, eleventh: false } ],
		[ 'AM11sus',		[ '1', '4', '5', '7', '9', '11'],			{ major: true, eleventh: true } ],
		[ 'AM13sus',		[ '1', '4', '5', '7', '9', '13'],			{ major: true, eleventh: false } ],
		[ 'A7sus',			[ '1', '4', '5', 'b7'],						{ major: true, eleventh: false } ],
		[ 'A9sus',			[ '1', '4', '5', 'b7', '9'],				{ major: true, eleventh: false } ],
		[ 'A11sus',			[ '1', '4', '5', 'b7', '9', '11'],			{ major: true, eleventh: true } ],
		[ 'A13sus',			[ '1', '4', '5', 'b7', '9', '13'],			{ major: true, eleventh: false } ],

		[ 'Adim',			[ '1', 'b3', 'b5'],							{ major: false, eleventh: false } ],
		[ 'Ah',				[ '1', 'b3', 'b5', 'b7'],					{ major: false, eleventh: false } ],
		[ 'Adim7',			[ '1', 'b3', 'b5', 'bb7'],					{ major: false, eleventh: false } ],
		[ 'Adim(ma7)',		[ '1', 'b3', 'b5', '7'],					{ major: false, eleventh: false } ],
		[ 'Ao7(ma7)',		[ '1', 'b3', 'b5', 'bb7', '7'],				{ major: false, eleventh: false } ],
		[ 'Ao7(add ma7)',	[ '1', 'b3', 'b5', 'bb7', '7'],				{ major: false, eleventh: false } ],
		[ 'A+',				[ '1', '3', '#5'],							{ major: true, eleventh: false } ],
		[ 'A+7',			[ '1', '3', '#5', 'b7'],					{ major: true, eleventh: false } ],

		[ 'A(bass)',		[ '1' ],									{ major: true, eleventh: false } ],
		[ 'A5',				[ '1', '5' ],								{ major: true, eleventh: false } ],

		[ 'Aomit3omit5',	[ '1' ],									{ major: true, eleventh: false } ],

		[ 'C4',				[ '1', '3', '4', '5' ],						{ major: true, eleventh: false } ],
		[ 'Cadd4',			[ '1', '3', '4', '5' ],						{ major: true, eleventh: false } ],


	])('%s', (symbol, intervals, intents) => {
		test('is parsed: ' + intervals.join('-'), () => {
			const chord = parseChord(symbol);
			const parsed = parseDescriptor(chord);
			const semitones = intervals.map(interval => intervalsToSemitones[interval]);

			expect(parsed.normalized.intervals).toEqual(intervals);
			expect(parsed.normalized.semitones).toEqual(semitones);
			expect(parsed.normalized.intents).toEqual(intents);
		});
	});
});


describe('invalid chords', () => {
	describe.each([

		[ 'Modifier does not exist', 'Az' ],
		[ 'Modifier is applied multiple times, 1', 'Aminm' ],
		[ 'Modifier is applied multiple times, 2', 'C°dim' ],

	])('%s', (title, symbol) => {
		test(symbol + ': should return null', () => {
			const chord = parseChord(symbol);
			const parsed = parseDescriptor(chord);

			expect(parsed).toBeNull();
		});
	});
});
