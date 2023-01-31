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
		/* * /
		/* */
		// diatonic chords (major key)
		['C', '(triad/diatonic)', 'C', { symbol: 'I', type: 'diatonic' }],
		['C', '(triad/diatonic)', 'Dm', { symbol: 'ii', type: 'diatonic' }],
		['C', '(triad/diatonic)', 'Em', { symbol: 'iii', type: 'diatonic' }],
		['C', '(triad/diatonic)', 'F', { symbol: 'IV', type: 'diatonic' }],
		['C', '(triad/diatonic)', 'G', { symbol: 'V', type: 'diatonic' }],
		['C', '(triad/diatonic)', 'Am', { symbol: 'vi', type: 'diatonic' }],
		['C', '(triad/diatonic)', 'B°', { symbol: 'vii°', type: 'diatonic' }],

		['C', '(7th/diatonic)', 'CM7', { symbol: 'IΔ', type: 'diatonic' }],
		['C', '(7th/diatonic)', 'Dm7', { symbol: 'ii⁷', type: 'diatonic' }],
		['C', '(7th/diatonic)', 'Em7', { symbol: 'iii⁷', type: 'diatonic' }],
		['C', '(7th/diatonic)', 'FM7', { symbol: 'IVΔ', type: 'diatonic' }],
		['C', '(7th/diatonic)', 'G7', { symbol: 'V⁷', type: 'diatonic' }],
		['C', '(7th/diatonic)', 'Am7', { symbol: 'vi⁷', type: 'diatonic' }],
		['C', '(7th/diatonic)', 'Bø7', { symbol: 'viiø⁷', type: 'diatonic' }],

		// borrowed chords from parallel minor key
		['C', '(triad/borrowed)', 'Cm', { symbol: 'i', type: 'borrowed' }],
		['C', '(triad/borrowed)', 'D°', { symbol: 'ii°', type: 'borrowed' }],
		['C', '(triad/borrowed)', 'Eb', { symbol: '♭III', type: 'borrowed' }],
		['C', '(triad/borrowed)', 'Fm', { symbol: 'iv', type: 'borrowed' }],
		['C', '(triad/borrowed)', 'Gm', { symbol: 'v', type: 'borrowed' }],
		['C', '(triad/borrowed)', 'Ab', { symbol: '♭VI', type: 'borrowed' }],
		['C', '(triad/borrowed)', 'Bb', { symbol: '♭VII', type: 'borrowed' }],

		['C', '(7th/borrowed)', 'Cm7', { symbol: 'i⁷', type: 'borrowed' }],
		['C', '(7th/borrowed)', 'Dø7', { symbol: 'iiø⁷', type: 'borrowed' }],
		['C', '(7th/borrowed)', 'EbΔ', { symbol: '♭IIIΔ', type: 'borrowed' }],
		['C', '(7th/borrowed)', 'Fm7', { symbol: 'iv⁷', type: 'borrowed' }],
		['C', '(7th/borrowed)', 'Gm7', { symbol: 'v⁷', type: 'borrowed' }],
		['C', '(7th/borrowed)', 'AbΔ', { symbol: '♭VIΔ', type: 'borrowed' }],
		['C', '(7th/borrowed)', 'BbΔ', { symbol: '♭VIIΔ', type: 'borrowed' }],

		// diatonic chords (minor key)
		['Cm', '(triad/diatonic)', 'Cm', { symbol: 'i', type: 'diatonic' }],
		['Cm', '(triad/diatonic)', 'D°', { symbol: 'ii°', type: 'diatonic' }],
		['Cm', '(triad/diatonic)', 'Eb', { symbol: 'III', type: 'diatonic' }],
		['Cm', '(triad/diatonic)', 'Fm', { symbol: 'iv', type: 'diatonic' }],
		['Cm', '(triad/diatonic)', 'Gm', { symbol: 'v', type: 'diatonic' }],
		['Cm', '(triad/diatonic)', 'Ab', { symbol: 'VI', type: 'diatonic' }],
		['Cm', '(triad/diatonic)', 'Bb', { symbol: 'VII', type: 'diatonic' }],

		['Cm', '(7th/diatonic)', 'Cm7', { symbol: 'i⁷', type: 'diatonic' }],
		['Cm', '(7th/diatonic)', 'Dø7', { symbol: 'iiø⁷', type: 'diatonic' }],
		['Cm', '(7th/diatonic)', 'EbΔ', { symbol: 'IIIΔ', type: 'diatonic' }],
		['Cm', '(7th/diatonic)', 'Fm7', { symbol: 'iv⁷', type: 'diatonic' }],
		['Cm', '(7th/diatonic)', 'Gm7', { symbol: 'v⁷', type: 'diatonic' }],
		['Cm', '(7th/diatonic)', 'AbΔ', { symbol: 'VIΔ', type: 'diatonic' }],
		['Cm', '(7th/diatonic)', 'BbΔ', { symbol: 'VIIΔ', type: 'diatonic' }],

		// borrowed chords from parallel major key
		['Cm', '(triad/borrowed)', 'C', { symbol: 'I', type: 'borrowed' }],
		['Cm', '(triad/borrowed)', 'Dm', { symbol: 'ii', type: 'borrowed' }],
		['Cm', '(triad/borrowed)', 'Em', { symbol: '♯iii', type: 'borrowed' }],
		['Cm', '(triad/borrowed)', 'F', { symbol: 'IV', type: 'borrowed' }],
		['Cm', '(triad/borrowed)', 'G', { symbol: 'V', type: 'borrowed' }],
		['Cm', '(triad/borrowed)', 'Am', { symbol: '♯vi', type: 'borrowed' }],
		['Cm', '(triad/borrowed)', 'B°', { symbol: '♯vii°', type: 'borrowed' }],

		['Cm', '(7th/borrowed)', 'CM7', { symbol: 'IΔ', type: 'borrowed' }],
		['Cm', '(7th/borrowed)', 'Dm7', { symbol: 'ii⁷', type: 'borrowed' }],
		['Cm', '(7th/borrowed)', 'Em7', { symbol: '♯iii⁷', type: 'borrowed' }],
		['Cm', '(7th/borrowed)', 'FM7', { symbol: 'IVΔ', type: 'borrowed' }],
		['Cm', '(7th/borrowed)', 'G7', { symbol: 'V⁷', type: 'borrowed' }],
		['Cm', '(7th/borrowed)', 'Am7', { symbol: '♯vi⁷', type: 'borrowed' }],
		['Cm', '(7th/borrowed)', 'Bø7', { symbol: '♯viiø⁷', type: 'borrowed' }],

		// other chords
		['C', '(triad/other)', 'C7', { symbol: '?⁷', type: 'unknown' }],
		['C', '(triad/other)', 'C°', { symbol: '?°', type: 'unknown' }],

		/* * /
		/* */
	])('Key of %s %s', (key, title, chord, expected) => {
		test(`${chord} => ${expected.symbol}`, () => {
			const parseChord = getParseChord();
			const normalized = formatNumeralSymbol(key, parseChord(chord));
			expect(normalized.numeral.symbol).toEqual(expected.symbol);
			expect(normalized.numeral.type).toEqual(expected.type);
		});
	});

	describe.skip.each([
		['C', 'Gma', 'V'],
		['C', 'G7', 'V7'],
		['C', 'G9', 'V7'],
		['C', 'G13', 'V7'],
		['C', 'GM7', 'VM7'],
		['C', 'GM9', 'VM7'],
		['C', 'GM13', 'VM7'],
		['C', 'G+', 'V+'],
		['C', 'G7+', 'V+'],
		['C', 'Gdim', 'v°'],
		['C', 'Gdim7', 'v7°'],
	])('Chord descriptor', (key, chord, expectedDegree) => {
		test(`${chord} => ${expectedDegree}`, () => {
			const parseChord = getParseChord();
			const normalized = formatNumeralSymbol(key, parseChord(chord));
			expect(normalized.formatted.numeralSymbol).toEqual(expectedDegree);
		});
	});
});
