import normalizeDescriptor from '../../../src/renderer/filters/normalizeDescriptor';
import parseChord from '../../../src/parseChord';

describe('normalizeDescriptor', () => {

	describe.each([

		/**/
		/**/

		['Dominant7', 		'C7', 		'7'],
		['Dominant9', 		'C9', 		'9'],
		['Dominant11', 		'C11', 		'9sus'],
		['Dominant13', 		'C13', 		'13'],

		['Major', 			'CMAJ',		''],
		['Major6',			'Cadd6', 	'6'],
		['Major69',			'C6/9', 	'69'],
		['Major7',			'CM7', 		'ma7'],
		['Major9',			'CM9', 		'ma9'],
		['Major11',			'CM11', 	'ma9sus'],
		['Major13',			'CM13', 	'ma13'],

		['Minor',			'Cm', 		'mi'],
		['Minor6',			'Cmin6',	'mi6'],
		['Minor69',			'Cm9/6',	'mi69'],
		['Minor7',			'C7m', 		'mi7'],
		['Minor9',			'C9m', 		'mi9'],
		['Minor11',			'C11m', 	'mi11'],
		['Minor13',			'C13m', 	'mi13'],

		['MinorMajor7',		'CMinΔ7', 	'miMa7'],
		['MinorMajor9',		'CMinMA9', 	'miMa9'],
		['MinorMajor11',	'CMinmaj11','miMa11'],
		['MinorMajor13',	'CmΔ13',	'miMa13'],

		['Sus',				'Csus4', 	'sus'],
		['MinorSus',		'Cmisus', 	'sus'],
		['SusDominant7',	'Csus7', 	'7sus'],
		['SusDominant9',	'Csus9', 	'9sus'],
		['SusDominant13',	'Csus13', 	'13sus'],
		['SusMajor7',		'CsusΔ7', 	'ma7sus'],
		['SusMajor9',		'CsusΔ9', 	'ma9sus'],
		['SusMajor13',		'CsusΔ13', 	'ma13sus'],

		['Diminished',		'C°', 		'dim'],
		['Diminished7',		'C7°', 		'dim7'],
		['Augmented',		'Caug', 	'+'],
		['Augmented7',		'C7+', 		'7', 	['#5'] ],

		['PowerChord',		'C5', 		'5'],
		['Bass',			'C(bass)', 	' bass'],

		['omit3', 			'C7(omit3)',  		'7', 	['omit3'] ],
		['omit3', 			'Cmi7(omit3)',  	'mi7', 	['omit3'] ],
		['omit5', 			'Cmi7(omit5)',  	'mi7', 	['omit5'] ],

		['add3', 			'C7sus(add3)',  	'7sus', ['add3'] ],

		['sort alt>add',		'C7b5(add13)', 		'7', 	['b5', 'add13'] ],
		['sort add>omit',		'C7(omit3,add13)', 	'7', 	['add13', 'omit3'] ],
		['sort alt>omit',		'C7b5(add13)', 		'7', 	['b5', 'add13'] ],
		['sort alt>add>omit',	'C7omit3b5add13', 	'7', 	['b5', 'add13', 'omit3'] ],
		['sort alt b>#',		'C7(#11,#9,b9,#5,b5)','7', 	['b5', '#5', 'b9', '#9', '#11'] ],

		['add ma7',				'Cdim7(add ma7)',	'dim7', ['addMa7'] ],
		['add b9 with space',	'C(b9)', 			'', 	['add b9'] ],
		['add #9 with space',	'C(#9)', 			'', 	['add #9'] ],
		['add #11 with space',	'Cm(#11)', 			'mi', 	['add #11'] ],
		['add b13 with space',	'C(b13)', 			'', 	['add b13'] ],

		['do not repeat add',	'C(add11,add13)', 	'', 	['add11', '13'] ],
		['do not repeat omit',	'C7(omit3,omit5)', 	'7', 	['omit3', '5'] ],
		['added + omitted',	'C7(omit3,5,add11,13)', '7', 	['add11', '13', 'omit3', '5'] ],

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

		// more edge cases...
		['mi6 + dominant9',		'C6m9', 			'mi9', 	['add13'] ],
		['6 + dominant9',		'C679', 			'13', 	[] ],
		['min + aug',			'Cm+', 				'mi', 	['#5'] ],

		/**/
		/**/


	])('%s: %s', (title, input, quality, changes = []) => {
		test('is normalized: ' + quality + ((changes.length === 0) ? '' : '(' + changes.join(',') + ')'), () => {
			const chord = parseChord(input);
			const normalized = normalizeDescriptor(chord);

			expect(normalized.normalizedDescriptor.quality).toBe(quality);
			expect(normalized.normalizedDescriptor.changes).toEqual(changes);
		});
	});

});
