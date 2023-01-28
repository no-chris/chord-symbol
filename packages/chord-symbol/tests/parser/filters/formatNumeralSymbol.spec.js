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

		[undefined, 'D', 'I'],
		[undefined, 'F#', 'I'],
		[undefined, 'Ab', 'I'],

		['C', 'C', 'I'],
		['C', 'C#', '♭II'],
		['C', 'Db', '♭II'],
		['C', 'D', 'II'],
		['C', 'D#', '♭III'],
		['C', 'Eb', '♭III'],
		['C', 'E', 'III'],
		['C', 'F', 'IV'],
		['C', 'F#', '♭V'],
		['C', 'Gb', '♭V'],
		['C', 'G', 'V'],
		['C', 'G#', '♭VI'],
		['C', 'Ab', '♭VI'],
		['C', 'A', 'VI'],
		['C', 'A#', '♭VII'],
		['C', 'Bb', '♭VII'],
		['C', 'B', 'VII'],

		['D#', 'C', 'VI'],
		['D#', 'C#', '♯VI'],
		['D#', 'Db', '♯VI'],
		['D#', 'D', 'VII'],
		['D#', 'D#', 'I'],
		['D#', 'Eb', 'I'],
		['D#', 'E', '♯I'],
		['D#', 'F', 'II'],
		['D#', 'F#', '♯II'],
		['D#', 'Gb', '♯II'],
		['D#', 'G', 'III'],
		['D#', 'G#', 'IV'],
		['D#', 'Ab', 'IV'],
		['D#', 'A', '♯IV'],
		['D#', 'A#', 'V'],
		['D#', 'Bb', 'V'],
		['D#', 'B', '♯V'],

		['Cm', 'C', 'I'],
		['Cm', 'C#', '♭II'],
		['Cm', 'Db', '♭II'],
		['Cm', 'D', 'II'],
		['Cm', 'D#', 'III'],
		['Cm', 'Eb', 'III'],
		['Cm', 'E', '♭IV'],
		['Cm', 'F', 'IV'],
		['Cm', 'F#', '♭V'],
		['Cm', 'Gb', '♭V'],
		['Cm', 'G', 'V'],
		['Cm', 'G#', 'VI'],
		['Cm', 'Ab', 'VI'],
		['Cm', 'A', '♭VII'],
		['Cm', 'A#', 'VII'],
		['Cm', 'Bb', 'VII'],
		['Cm', 'B', '♭I'],

		['Dbm', 'Db', 'I'],
		['Dbm', 'D', '♭II'],
		['Dbm', 'D#', 'II'],
		['Dbm', 'Eb', 'II'],
		['Dbm', 'E', 'III'],
		['Dbm', 'F', '♭IV'],
		['Dbm', 'F#', 'IV'],
		['Dbm', 'Gb', 'IV'],
		['Dbm', 'G', '♭V'],
		['Dbm', 'G#', 'V'],
		['Dbm', 'Ab', 'V'],
		['Dbm', 'A', 'VI'],
		['Dbm', 'A#', '♭VII'],
		['Dbm', 'Bb', '♭VII'],
		['Dbm', 'B', 'VII'],
		['Dbm', 'C', '♭I'],
		['Dbm', 'C#', 'I'],

		/* * /
		/* */
	])('Key of %s', (key, chord, expectedDegree) => {
		test(`${chord} => ${expectedDegree}`, () => {
			const parseChord = getParseChord();
			const normalized = formatNumeralSymbol(key, parseChord(chord));
			expect(normalized.formatted.numeralSymbol).toEqual(expectedDegree);
		});

		test(`${chord + 'm'} => ${expectedDegree.toLowerCase()}`, () => {
			const parseChord = getParseChord();
			const normalized = formatNumeralSymbol(
				key,
				parseChord(chord + 'm')
			);
			expect(normalized.formatted.numeralSymbol).toEqual(
				expectedDegree.toLowerCase()
			);
		});
	});
});
