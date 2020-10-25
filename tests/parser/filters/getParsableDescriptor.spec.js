import chain from '../../../src/helpers/chain';
import { englishVariants } from '../../../src/dictionaries/notes';

import initChord from '../../../src/parser/filters/initChord';
import parseBase from '../../../src/parser/filters/parseBase';
import getParsableDescriptor from '../../../src/parser/filters/getParsableDescriptor';

function parseChord(symbol) {
	const allFilters = [
		initChord.bind(null, {}),
		parseBase.bind(null, englishVariants),
	];
	return chain(allFilters, symbol);
}

describe('Parsable descriptor', () => {
	describe.each([
		// basic, spaces & coma
		['A'],
		['Am', 'm'],
		['A7 add9', '7add9'],

		// Parenthesis with incomplete verbs
		['A(add9)', ' add9 '],
		['A(add9,11)', ' add9 add11 '],
		['A(add 9,11)', ' add9 add11 '],
		['A( add 9, add 11)', ' add9 add11 '],
		['A(add9,omit3)', ' add9 omit3 '],
		['A(omit3,5)', ' omit3 omit5 '],
		['A(no3,5)', ' no3 no5 '],
		['A(no3,5,add#11)', ' no3 no5 add#11 '],

		['A(no3,5)(add#11,b13)', ' no3 no5  add#11 addb13 '],
		['Am(no3,5)7(add#11,b13)', 'm no3 no5 7 add#11 addb13 '],

		// lowercase everything but Major "M"
		['ASUSMAJ7ADD9OMIT3', 'susMaj7add9omit3'],
		['ASUSMAJ7ADD9OMIT5', 'susMaj7add9omit5'],
		['ADIM', 'dim'],
		['ADIM.', 'dim.'],
		['ADIMINISHED', 'diminished'],
		['ADIM', 'dim'],
		['AAUGMENTED', 'augmented'],

		// disambiguation for modifiers combination edge cases
		['Amadd9', 'm add9'],
		['AMadd9', 'M add9'],
		['Amalt', 'm alt'],
		['AMalt', 'M alt'],
		['Amino3', 'mi no3'],
		['Amino5', 'mi no5'],
		['Adimaddma7', 'dim addma7'],
		['A7dimaddma7', '7dim addma7'],
		['Adimaltma7', 'dim altma7'],
		['A7dimaltma7', '7dim altma7'],
		['AM9/6', 'M 9/6'],
		['AM96', 'M 96'],
		['Aadd#96', 'add#9 6'],
		['Aadd♯96', 'add♯9 6'],
		['Aaddb96', 'addb9 6'],
		['Aadd♭96', 'add♭9 6'],
	])('%s', (symbol, parsableDescriptor) => {
		test(`correctly transform descriptor into: >${parsableDescriptor}<`, () => {
			const chord = parseChord(symbol);
			const parsed = getParsableDescriptor(chord);
			expect(parsed.input.parsableDescriptor).toBe(parsableDescriptor);
		});
	});
});
