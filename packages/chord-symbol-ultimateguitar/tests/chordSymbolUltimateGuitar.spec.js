import {
	chordParserFactory,
	chordRendererFactory,
} from '../../chord-symbol/src/index';
import chordSymbolUltimateGuitar from '../src/chordSymbolUltimateGuitar';

describe('chordSymbolUltimateGuitar', () => {
	test('Module', () => {
		expect(chordSymbolUltimateGuitar).toBeInstanceOf(Function);
		expect(chordSymbolUltimateGuitar()).toBeInstanceOf(Function);
	});
});

describe.each([
	['remove parenthesis', 'A7(#9)', 'A7#9'],
	['replace ° with "dim" in dim chords', 'A°', 'Adim'],
	['replace ° with "dim" in dim7 chords', 'A7°', 'Adim7'],
	['remove spaces', 'C(#9)', 'Cadd#9'],
])('%s', (title, input, output) => {
	test(input + ' => ' + output, () => {
		const parsed = chordParserFactory()(input);
		const rendered = chordRendererFactory({
			customFilters: [chordSymbolUltimateGuitar()],
			useShortNamings: true,
		})(parsed);
		expect(rendered).toEqual(output);
	});
});
