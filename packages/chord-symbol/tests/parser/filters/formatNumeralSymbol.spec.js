import formatNumeralSymbol from '../../../src/parser/filters/formatNumeralSymbol';
import initChord from '../../../src/parser/filters/initChord';
import parseBase from '../../../src/parser/filters/parseBase';
import getParsableDescriptor from '../../../src/parser/filters/getParsableDescriptor';
import parseDescriptor from '../../../src/parser/filters/parseDescriptor';
import checkIntervalsConsistency from '../../../src/parser/filters/checkIntervalsConsistency';
import normalizeNotes from '../../../src/parser/filters/normalizeNotes';
import normalizeDescriptor from '../../../src/parser/filters/normalizeDescriptor';
import formatSymbolParts from '../../../src/parser/filters/formatSymbolParts';
import formatSymbol from '../../../src/parser/filters/formatSymbol';
import nameIndividualChordNotes from '../../../src/parser/filters/nameIndividualChordNotes';
import { englishVariants } from '../../../src/dictionaries/notes';
import chain from '../../../src/helpers/chain';

function getParseChord(altIntervals = ['b5', '#5', 'b9', '#9', '#11', 'b13']) {
	return (symbol) => {
		const filters = [
			initChord.bind(null, {}),
			parseBase.bind(null, englishVariants),
			getParsableDescriptor,
			parseDescriptor.bind(null, altIntervals),
			checkIntervalsConsistency,
			normalizeNotes,
			normalizeDescriptor,
			formatSymbolParts,
			formatSymbol,
			nameIndividualChordNotes,
		];
		return chain(filters, symbol);
	};
}

describe('formatNumeralSymbol', () => {
	describe.each([
		['No key = I, regardless of the chord (C)', undefined, 'C', 'I'],
		['No key = I, regardless of the chord (G)', undefined, 'G', 'I'],
		['No key = I, regardless of the chord (Abm)', undefined, 'Abm', 'I'],

		['Cm returns "i" in the key of C', 'C', 'Cm', 'i'],
		['D returns "II" in the key of C', 'C', 'D', 'II'],
		['Dm returns "ii" in the key of C', 'C', 'Dm', 'ii'],
		['G returns "V" in the key of C', 'C', 'G', 'V'],
		['Gm returns "v" in the key of C', 'C', 'Gm', 'v'],
		['D returns "V" in the key of G', 'G', 'D', 'V'],
		['Dm returns "v" in the key of G', 'G', 'Dm', 'v'],
		['B returns "VII" in the key of C', 'C', 'B', 'VII'],
		['Bm returns "vii" in the key of C', 'C', 'Bm', 'vii'],

		['C# returns "♯I" in the key of C', 'C', 'C#', '♯I'],
	])('%s', (title, key, input, expected) => {
		test('return normalized descriptor', () => {
			const parseChord = getParseChord();
			const normalized = formatNumeralSymbol(key, parseChord(input));
			expect(normalized.formatted.numeralSymbol).toEqual(expected);
		});
	});
});
