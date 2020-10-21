import normalizeDescriptor from '../../../src/parser/filters/normalizeDescriptor';
import shortenNormalized from '../../../src/renderer/filters/shortenNormalized';
import chordParserFactory from '../../../src/parser/chordParserFactory';

describe('shortenNormalized', () => {
	describe.each([
		['CMaj9', 'M9'],
		['CmiMa13', 'mM13'],

		['Cmi7', 'm7'],

		['Cdim', '°'],
		['Cdim7', '°7'],

		['C(add9)', '2'],
		['C2', '2'],

		['C(add9,no3)', 'sus2', []],
		['Csus2', 'sus2', []],

		['C7(#5)', '7+', []],

		['Cdim7(add ma7)', '°7', ['addM7']],

		['Cmi7(omit3)', 'm7', ['no3']],

		['C11', '11', []],
		['CM11', 'ma11', []],
		['C11(b9)', '11', ['b9']],
	])('%s => %s', (input, descriptor, chordChanges = []) => {
		test('is rendered ' + descriptor, () => {
			const parseChord = chordParserFactory();

			const chord = parseChord(input);
			const normalized = normalizeDescriptor(chord);
			const shortened = shortenNormalized(normalized);

			expect(shortened.formatted.descriptor).toStrictEqual(descriptor);
			expect(shortened.formatted.chordChanges).toStrictEqual(chordChanges);
		});
	});
});
