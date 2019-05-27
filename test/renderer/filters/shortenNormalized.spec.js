import normalizeDescriptor from '../../../src/renderer/filters/normalizeDescriptor';
import shortenNormalized from '../../../src/renderer/filters/shortenNormalized';
import parseChord from '../../../src/parseChord';

describe('shortenNormalized', () => {

	describe.each([

		['CMaj9', 			'M9'],
		['CmiMa13', 		'mM13'],

		['Cmi7', 			'm7'],

		['Cdim', 			'°'],
		['Cdim7', 			'°7'],

		['C(add9)', 		'2'],
		['C2', 				'2'],

		['C(add9,no3)', 	'sus2', [] ],
		['Csus2', 			'sus2', [] ],

		['C7(#5)', 			'7+', 	[] ],

		['Cdim7(add ma7)',	'°7', 	['addM7'] ],

		['Cmi7(omit3)',  	'm7', 	['no3'] ],

	])('%s => %s', (input, quality, changes = []) => {
		test('is rendered ' + quality, () => {
			const chord = parseChord(input);
			const normalized = normalizeDescriptor(chord);
			const shortened = shortenNormalized(normalized);

			expect(shortened.normalizedDescriptor.quality).toStrictEqual(quality);
			expect(shortened.normalizedDescriptor.changes).toStrictEqual(changes);
		});
	});
});
