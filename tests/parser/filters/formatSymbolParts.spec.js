import formatSymbolParts from '../../../src/parser/filters/formatSymbolParts';

import initChord from '../../../src/parser/filters/initChord';
import parseBase from '../../../src/parser/filters/parseBase';
import parseDescriptor from '../../../src/parser/filters/parseDescriptor';
import normalizeNotes from '../../../src/parser/filters/normalizeNotes';
import normalizeDescriptor from '../../../src/parser/filters/normalizeDescriptor';

function parseChord(symbol) {
	return [
		initChord,
		parseBase,
		parseDescriptor,
		normalizeNotes,
		normalizeDescriptor,
	].reduce((chord, filter) => {
		return (chord) ? filter(chord) : null;
	}, symbol);
}

describe('normalizeDescriptor', () => {
	describe.each([
		/**/
		/**/

		['major',				'C', 				'', 		[] ],
		['major + sus',			'Csus4', 			'sus', 		[] ],
		['major6',				'C6', 				'6', 		[] ],
		['major6 + sus',		'C6sus4', 			'6sus', 	[] ],
		['major6 + 9',			'C69', 				'69', 		[] ],
		['major6 + 9 + sus',	'Csus469', 			'69sus',	[] ],
		['major7',				'CM7', 				'ma7', 		[] ],
		['major7 + sus',		'Csus4M7', 			'ma7sus',	[] ],
		['major9',				'CM9', 				'ma9', 		[] ],
		['major9 + sus',		'CM9sus4', 			'ma9sus',	[] ],
		['major11',				'CM11', 			'ma9sus', 	[] ],
		['major11 + sus',		'CM11sus', 			'ma9sus', 	[] ],
		['major13',				'CM13',				'ma13',		[] ],
		['major13 + sus',		'Csus4M13',			'ma13sus',	[] ],

		['dominant7',			'C7',				'7',	[] ],
		['dominant7 + sus',		'Csus47',			'7sus',	[] ],
		['dominant9',			'C9',				'9',	[] ],
		['dominant9 + sus',		'C9sus',			'9sus',	[] ],
		['dominant11',			'C11',				'9sus',	[] ],
		['dominant11 + sus',	'C11sus',			'9sus',	[] ],
		['dominant13',			'C13',				'13',	[] ],
		['dominant13 + sus',	'C13sus',			'13sus',[] ],

		['minor',				'Cm',				'mi',		[] ],
		['minor + sus',			'Cmsus',			'misus',	[] ],
		['minor6',				'Cm6',				'mi6',		[] ],
		['minor6 + sus',		'Cm6sus',			'mi6sus',	[] ],
		['minor6 + 9',			'Cm69',				'mi69',		[] ],
		['minor6 + 9 + sus',	'Cm69sus',			'mi69sus',	[] ],
		['minor7',				'Cm7',				'mi7',		[] ],
		['minor7 + sus',		'Cm7sus',			'mi7sus',	[] ],
		['minor9',				'Cm9',				'mi9',		[] ],
		['minor9 + sus',		'Cm9sus',			'mi9sus',	[] ],
		['minor11',				'Cm11',				'mi11',		[] ],
		['minor11 + sus',		'Csus4m11',			'mi11sus',	[] ],
		['minor13',				'Cm13',				'mi13',		[] ],
		['minor13 + sus',		'Cm13sus',			'mi13sus',	[] ],

		['minorMajor7',			'CminM7',			'miMa7',	[] ],
		['minorMajor7 + sus',	'CminM7sus',		'miMa7sus',	[] ],
		['minorMajor9',			'CminM9',			'miMa9',	[] ],
		['minorMajor9 + sus',	'CminM9sus',		'miMa9sus',	[] ],
		['minorMajor11',		'CminM11',			'miMa11',	[] ],
		['minorMajor11',		'Cminsus4M11',		'miMa11sus',[] ],
		['minorMajor13',		'CminM13',			'miMa13',	[] ],
		['minorMajor13 + sus',	'CminM13sus',		'miMa13sus',[] ],

		['aug',					'Caug',				'+',		[] ],
		['aug + sus',			'Caugsus',			'+sus',		[] ],
		['dim',					'C°',				'dim',		[] ],
		['dim + sus',			'C°sus4',			'dimsus',	[] ],
		['dim',					'C°7',				'dim7',		[] ],
		['dim + sus',			'C°7sus4',			'dim7sus',	[] ],

		['power',				'C5',				'5',		[] ],
		['bass',				'A bass',			' bass',	[] ],

		['sort alt>add',		'C7b5(add13)', 		'7', 	['b5', 'add13'] ],
		['sort alt>omit',		'C7b5(add13)', 		'7', 	['b5', 'add13'] ],
		['sort alt b>#',		'C7(#11,#9,b9,#5,b5)','7', 	['b5', '#5', 'b9', '#9', '#11'] ],

		['add b9 with space',	'C(b9)', 			'', 	['add b9'] ],
		['add #9 with space',	'C(#9)', 			'', 	['add #9'] ],
		['add #11 with space',	'Cm(#11)', 			'mi', 	['add #11'] ],
		['add b13 with space',	'C(b13)', 			'', 	['add b13'] ],

		['do not repeat add',	'C(add9,add13)', 	'', 	['add9', '13'] ],
		['do not repeat omit',	'C7(omit3,omit5)', 	'7', 	['omit3', '5'] ],
		['added + omitted',		'C(omit5,3,add13,9)','', 	['add9', '13', 'omit3', '5'] ],
		['omit m3',				'Cm7(omit3)', 		'mi7', 	['omit3'] ],

		['b5 always alt (dom)',	'C7(b5)', 			'7', 	['b5'] ],
		['b5 always alt (mi7)',	'Cm7(b5)', 			'mi7', 	['b5'] ],
		['b5 always alt (ma7)',	'CM7(b5)', 			'ma7', 	['b5'] ],
		['#5 always alt (dom)',	'C7(#5)', 			'7', 	['#5'] ],
		['#5 always alt (mi7)',	'Cm7(#5)', 			'mi7', 	['#5'] ],
		['#5 always alt (ma7)',	'CM7(#5)', 			'ma7', 	['#5'] ],
		['#11 alt if major',	'C(#11)', 			'', 	['#11'] ],
		['#11 added if minor',	'Cm(#11)', 			'mi', 	['add #11'] ],
		['b13 added if major',	'C(b13)', 			'', 	['add b13'] ],
		['b13 alt if minor',	'Cm(b13)', 			'mi', 	['b13'] ],
		['dim b5',				'C°(b5)', 			'dim', 	[] ], // has already b5
		['dim #5 add',			'C°(#5)', 			'dim', 	['add #5'] ],
		['dim b9 add',			'C°(b9)', 			'dim', 	['add b9'] ],
		['dim #9 add',			'C°(#9)', 			'dim', 	['add #9'] ],
		['dim7 M7 add',			'C°7(ma7)', 		'dim7', ['addMa7'] ],

		// displayed extension is not the highest extension
		['11',					'C11', 				'9sus', [] ],
		['11 + b9',				'C11(b9)', 			'7sus',	['b9'] ],

		// more edge cases...
		['mi6 + dominant9',		'C6m9', 			'mi9',	['add13'] ],
		['6 + dominant9',		'C679', 			'13', 	[] ],
		['min + aug',			'Cm+', 				'mi', 	['#5'] ],
		['mi7 + 9 + add13 = 9',	'CmiMa9(add13)', 	'miMa9',['add13'] ],
		['ma7 + 9 + add13 = 13','CM9(add13)', 		'ma13',	[] ],

		/**/

	])('%s: %s', (title, symbol, descriptor, chordChanges) => {
		test('is normalized', () => {
			const chord = parseChord(symbol);
			const formatted = formatSymbolParts(chord).formatted;

			expect(formatted.descriptor).toBe(descriptor);
			expect(formatted.chordChanges).toEqual(chordChanges);
		});
	});

});

describe('root & bass note', () => {
	describe.each([

		['C', 'C'],
		['C/E', 'C', 'E'],

	])('%s', (symbol, rootNote, bassNote) => {
		const chord = parseChord(symbol);
		const formatted = formatSymbolParts(chord).formatted;

		expect(formatted.rootNote).toBe(rootNote);
		expect(formatted.bassNote).toBe(bassNote);
	});
});
