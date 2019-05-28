import parseChord from '../../../src/parseChord';
import normalizeDescriptor from '../../../src/renderer/filters/normalizeDescriptor';
import textPrinter from '../../../src/renderer/printer/text';

describe('Descriptor not normalized', () => {

	describe.each([

		['No quality descriptor', 	'C', 			'C'],
		['No bass note', 			'Cm(#11)7', 	'Cm(#11)7'],
		['With bass note', 			'Cm(#11)7/E', 	'Cm(#11)7/E'],

	])('%s', (title, input, expected) => {
		test('return original descriptor', () => {
			const printed = textPrinter(parseChord(input));
			expect(printed).toEqual(expected);
		});
	});
});

describe('Normalized descriptor', () => {

	describe.each([

		['No quality descriptor', 	'C', 			'C'],
		['No alt/add/omit', 		'C7m', 			'Cmi7'],
		['No bass note', 			'Cm(add13)7', 	'Cmi7(add13)'],
		['With bass note', 			'Cm(add13)7/E', 'Cmi7(add13)/E'],

	])('%s', (title, input, expected) => {
		test('return normalized descriptor', () => {
			const normalized = normalizeDescriptor(parseChord(input));
			const printed = textPrinter(normalized);
			expect(printed).toEqual(expected);
		});
	});
});
