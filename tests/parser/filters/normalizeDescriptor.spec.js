import _ from 'lodash';
import { englishVariants } from '../../../src/dictionaries/notes';

import chain from '../../../src/helpers/chain';

import initChord from '../../../src/parser/filters/initChord';
import parseBase from '../../../src/parser/filters/parseBase';
import parseDescriptor from '../../../src/parser/filters/parseDescriptor';

import normalizeDescriptor from '../../../src/parser/filters/normalizeDescriptor';


function parseChord(symbol) {
	const filters = [
		initChord,
		parseBase.bind(null, englishVariants),
		parseDescriptor.bind(null, {}),
	];
	return chain(filters, symbol);
}


describe('normalizeDescriptor', () => {
	const base = {
		quality: '',
		isSuspended: false,
		extensions: [],
		alterations: [],
		adds: [],
		omits: []
	};

	describe.each([

		/**/
		/**/

		['Dominant7', 		'C7', 		{ quality: 'dominant7' } ],
		['Dominant9', 		'C9', 		{ quality: 'dominant7', extensions: ['9'] } ],
		['Dominant11', 		'C11', 		{ quality: 'dominant7', extensions: ['9', '11'], isSuspended: true } ],
		['Dominant13', 		'C13', 		{ quality: 'dominant7', extensions: ['9', '13'] } ],
		['Altered', 		'Calt', 	{ quality: 'dominant7', alterations: ['alt'] } ],

		['Major', 			'CMAJ', 	{ quality: 'major' } ],
		['Major6',			'Cadd6', 	{ quality: 'major6' } ],
		['Major69',			'C6/9', 	{ quality: 'major6', adds: ['9'] } ],
		['Major7',			'CM7', 		{ quality: 'major7' } ],
		['Major9',			'CM9', 		{ quality: 'major7', extensions: ['9'] } ],
		['Major11',			'CM11', 	{ quality: 'major7', extensions: ['9', '11'], isSuspended: true } ],
		['Major13',			'CM13', 	{ quality: 'major7', extensions: ['9', '13'] } ],
		['Major add4',		'C4', 		{ quality: 'major', extensions: [], adds: ['3'], isSuspended: true } ],
		['Major add4',		'Cadd4',	{ quality: 'major', extensions: [], adds: ['3'], isSuspended: true } ],

		['Minor',			'Cm', 		{ quality: 'minor' } ],
		['Minor6',			'Cmin6',	{ quality: 'minor6' } ],
		['Minor69',			'Cm9/6',	{ quality: 'minor6', adds: ['9'] } ],
		['Minor7',			'C7m', 		{ quality: 'minor7' } ],
		['Minor9',			'C9m', 		{ quality: 'minor7', extensions: ['9'] } ],
		['Minor11',			'C11m', 	{ quality: 'minor7', extensions: ['9', '11'] } ],
		['Minor13',			'C13m', 	{ quality: 'minor7', extensions: ['9', '11', '13'] } ],

		['MinorMajor7',		'CMinΔ7', 	{ quality: 'minorMajor7' } ],
		['MinorMajor9',		'CMinMA9', 	{ quality: 'minorMajor7', extensions: ['9'] } ],
		['MinorMajor11',	'CMinmaj11',{ quality: 'minorMajor7', extensions: ['9', '11'] } ],
		['MinorMajor13',	'CmΔ13',	{ quality: 'minorMajor7', extensions: ['9', '11', '13'] } ],

		['Sus',				'Csus4', 	{ quality: 'major', isSuspended: true } ],
		['MinorSus',		'Cmisus', 	{ quality: 'minor', isSuspended: true } ],
		['SusDominant7',	'Csus7', 	{ quality: 'dominant7', isSuspended: true } ],
		['SusDominant9',	'Csus9', 	{ quality: 'dominant7', isSuspended: true, extensions: ['9'] } ],
		['SusDominant13',	'Csus13', 	{ quality: 'dominant7', isSuspended: true, extensions: ['9', '13'] } ],
		['SusMajor7',		'CsusΔ7', 	{ quality: 'major7', isSuspended: true } ],
		['SusMajor9',		'CsusΔ9', 	{ quality: 'major7', isSuspended: true, extensions: ['9'] } ],
		['SusMajor13',		'CsusΔ13', 	{ quality: 'major7', isSuspended: true, extensions: ['9', '13'] } ],

		['Diminished',		'C°', 		{ quality: 'diminished' } ],
		['Diminished7',		'C7°', 		{ quality: 'diminished7' } ],
		['Augmented',		'Caug', 	{ quality: 'augmented' } ],
		['Augmented7',		'C7+', 		{ quality: 'dominant7', alterations: ['#5'] } ],


		['PowerChord',		'C5', 		{ quality: 'power' } ],
		['Bass',			'C(bass)', 	{ quality: 'bass' } ],

		['omit3', 			'C7(omit3)',  		{ quality: 'dominant7', omits: ['3'] } ],
		['omit3', 			'Cmi7(omit3)',  	{ quality: 'minor7', omits: ['b3'] } ],
		['omit5', 			'Cmi7(omit5)',  	{ quality: 'minor7', omits: ['5'] } ],
		['omit3,omit5', 	'C7(omit3,omit5)',  { quality: 'dominant7', omits: ['3', '5'] } ],

		['add3', 			'C7sus(add3)',  	{ quality: 'dominant7', isSuspended: true, adds: ['3'] } ],

		['alt + add',		'C7b5(add13)', 		{ quality: 'dominant7', alterations: ['b5'], adds: ['13'] } ],
		['add + omit',		'C7(omit3,add13)', 	{ quality: 'dominant7', adds: ['13'], omits: ['3'] } ],
		['alt + add + omit','C7omit3b5add13', 	{ quality: 'dominant7', alterations: ['b5'], adds: ['13'], omits: ['3'] } ],
		['mutliple alts',	'C7(#11,#9,b9,#5,b5)',{ quality: 'dominant7', alterations: ['b5', '#5', 'b9', '#9', '#11'] } ],
		['add ma7',			'Cdim7(add ma7)',	{ quality: 'diminished7', adds: ['7'] } ],
		['minor + add3',	'Cm(add3)',			{ quality: 'minor', adds: ['3'] } ],
		['minor + aug',		'Cm+',				{ quality: 'minor', alterations: ['#5'] } ],

		/**/
		/**/

	])('%s: %s', (title, input, expected) => {
		test('is normalized', () => {
			const chord = parseChord(input);
			const normalized = normalizeDescriptor(chord).normalized;
			const expectedFull = _.defaults(expected, base);

			expect(normalized.quality).toBe(expectedFull.quality);
			expect(normalized.isSuspended).toBe(expectedFull.isSuspended);
			expect(normalized.extensions).toEqual(expectedFull.extensions);
			expect(normalized.alterations).toEqual(expectedFull.alterations);
			expect(normalized.adds).toEqual(expectedFull.adds);
			expect(normalized.omits).toEqual(expectedFull.omits);
		});
	});
});
