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
		// returns 1 when no key is given
		[undefined, 'no key', 'C', { symbol: 'I', type: 'diatonic' }],
		[undefined, 'no key', 'Cm', { symbol: 'i', type: 'borrowed' }],

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
		['C', '(7th/diatonic)', 'Bø7', { symbol: 'viiø', type: 'diatonic' }],

		// borrowed chords from parallel minor key
		['C', '(triad/borrowed)', 'Cm', { symbol: 'i', type: 'borrowed' }],
		['C', '(triad/borrowed)', 'D°', { symbol: 'ii°', type: 'borrowed' }],
		['C', '(triad/borrowed)', 'Eb', { symbol: '♭III', type: 'borrowed' }],
		['C', '(triad/borrowed)', 'Fm', { symbol: 'iv', type: 'borrowed' }],
		['C', '(triad/borrowed)', 'Gm', { symbol: 'v', type: 'borrowed' }],
		['C', '(triad/borrowed)', 'Ab', { symbol: '♭VI', type: 'borrowed' }],
		['C', '(triad/borrowed)', 'Bb', { symbol: '♭VII', type: 'borrowed' }],

		['C', '(7th/borrowed)', 'Cm7', { symbol: 'i⁷', type: 'borrowed' }],
		['C', '(7th/borrowed)', 'Dø7', { symbol: 'iiø', type: 'borrowed' }],
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
		['Cm', '(7th/diatonic)', 'Dø7', { symbol: 'iiø', type: 'diatonic' }],
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
		['Cm', '(7th/borrowed)', 'Bø7', { symbol: '♯viiø', type: 'borrowed' }],

		// other chords
		['C', '(triad/other)', 'C7', { symbol: '?⁷', type: 'unknown' }],
		['C', '(triad/other)', 'C°', { symbol: '?°', type: 'unknown' }],

		// chord extensions
		['C', '(G9 => V⁷)', 'G9', { symbol: 'V⁷', type: 'diatonic' }],
		['C', '(G11 => V⁷)', 'G11', { symbol: 'V⁷', type: 'diatonic' }],
		['C', '(G13 => V⁷)', 'G13', { symbol: 'V⁷', type: 'diatonic' }],
		['C', '(CMa6 => I)', 'CMa6', { symbol: 'I', type: 'diatonic' }],
		['C', '(CMa9 => IΔ)', 'CMa9', { symbol: 'IΔ', type: 'diatonic' }],
		['C', '(CMa11 => IΔ)', 'CMa11', { symbol: 'IΔ', type: 'diatonic' }],
		['C', '(CMa13 => IΔ)', 'CMa13', { symbol: 'IΔ', type: 'diatonic' }],
		['C', '(Dmi6 => ii)', 'Dmi6', { symbol: 'ii', type: 'diatonic' }],
		['C', '(Dmi9 => ii7)', 'Dmi9', { symbol: 'ii⁷', type: 'diatonic' }],
		['C', '(Dmi11 => ii7)', 'Dmi11', { symbol: 'ii⁷', type: 'diatonic' }],
		['C', '(Dmi13 => ii7)', 'Dmi13', { symbol: 'ii⁷', type: 'diatonic' }],
		['C', '(C+ => ?+)', 'C+', { symbol: '?+', type: 'unknown' }],
		['C', '(C5 => I)', 'C5', { symbol: 'I', type: 'diatonic' }],
		['C', '(Cbass => I)', 'C(bass)', { symbol: 'I', type: 'diatonic' }],

		// inversions
		['C', '(major/1st inv.)', 'C/E', { symbol: 'I⁶', type: 'diatonic' }],
		['C', '(major/2nd inv.)', 'C/G', { symbol: 'I⁶₄', type: 'diatonic' }],
		['C', '(M7/1st inv.)', 'CM7/E', { symbol: 'IΔ⁶₅', type: 'diatonic' }],
		['C', '(M7/2nd inv.)', 'CM7/G', { symbol: 'IΔ⁴₃', type: 'diatonic' }],
		['C', '(M7/3rd inv.)', 'CM7/B', { symbol: 'IΔ²', type: 'diatonic' }],
		['C', '(miM7/1st)', 'CmM7/Eb', { symbol: '?mΔ⁶₅', type: 'unknown' }],
		['C', '(miM7/2nd)', 'CmM7/G', { symbol: '?mΔ⁴₃', type: 'unknown' }],
		['C', '(miM7/3rd)', 'CmM7/B', { symbol: '?mΔ²', type: 'unknown' }],
		['C', '(minor/1st inv.)', 'Dm/F', { symbol: 'ii⁶', type: 'diatonic' }],
		['C', '(minor/1st inv.)', 'Dm/A', { symbol: 'ii⁶₄', type: 'diatonic' }],
		['C', '(mi7/1st inv.)', 'Dm7/F', { symbol: 'ii⁶₅', type: 'diatonic' }],
		['C', '(mi7/2nd inv.)', 'Dm7/A', { symbol: 'ii⁴₃', type: 'diatonic' }],
		['C', '(mi7/3rd inv.)', 'Dm7/C', { symbol: 'ii²', type: 'diatonic' }],
		['C', '(dim/1st)', 'Bdim/D', { symbol: 'vii°⁶', type: 'diatonic' }],
		['C', '(dim/2nd)', 'Bdim/F', { symbol: 'vii°⁶₄', type: 'diatonic' }],
		['C', '(7th/1st)', 'G7/B', { symbol: 'V⁶₅', type: 'diatonic' }],
		['C', '(7th/2nd)', 'G7/D', { symbol: 'V⁴₃', type: 'diatonic' }],
		['C', '(7th/3rd)', 'G7/F', { symbol: 'V²', type: 'diatonic' }],
		['C', '(M7th/1st)', 'FM7/A', { symbol: 'IVΔ⁶₅', type: 'diatonic' }],
		['C', '(M7th/2nd)', 'FM7/C', { symbol: 'IVΔ⁴₃', type: 'diatonic' }],
		['C', '(M7th/3rd)', 'FM7/E', { symbol: 'IVΔ²', type: 'diatonic' }],
		['C', '(dim7)', 'Bbdim7', { symbol: '?°⁷', type: 'unknown' }],
		['C', '(dim7/1)', 'Bbdim7/C#', { symbol: '?°⁶₅', type: 'unknown' }],
		['C', '(dim7/2)', 'Bbdim7/E', { symbol: '?°⁴₃', type: 'unknown' }],
		['C', '(dim7/3)', 'Bbdim7/G', { symbol: '?°²', type: 'unknown' }],
		['C', '(ø)', 'Bø', { symbol: 'viiø', type: 'diatonic' }],
		['C', '(ø/1)', 'Bø/D', { symbol: 'viiø⁶₅', type: 'diatonic' }],
		['C', '(ø/2)', 'Bø/F', { symbol: 'viiø⁴₃', type: 'diatonic' }],
		['C', '(ø/3)', 'Bø/A', { symbol: 'viiø²', type: 'diatonic' }],

		// bass is not an inversion
		[
			'C',
			'(bass not an inversion)',
			'C/Eb',
			{ symbol: 'I', type: 'diatonic' },
		],

		// degree does not have a numeral conversion (yet)
		['C', '(bII)', 'C#', { symbol: '?', type: 'unknown' }],
		['C', '(bii)', 'C#m', { symbol: '?', type: 'unknown' }],
		['C', '(bV)', 'F#', { symbol: '?', type: 'unknown' }],
		['C', '(bv)', 'F#m', { symbol: '?', type: 'unknown' }],
		['Cm', '(bII)', 'C#', { symbol: '?', type: 'unknown' }],
		['Cm', '(bii)', 'C#m', { symbol: '?', type: 'unknown' }],
		['Cm', '(bV)', 'F#', { symbol: '?', type: 'unknown' }],
		['Cm', '(bv)', 'F#m', { symbol: '?', type: 'unknown' }],

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
});
