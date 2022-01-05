import chordParserFactory from '../../../src/parser/chordParserFactory';

import convertNotationSystem from '../../../src/renderer/filters/convertNotationSystem';

describe('convertNotationSystem()', () => {
	describe.each([
		['default to english:', 'G', undefined, 'G'],
		['default to english:', 'G/B', undefined, 'G', 'B'],
		['default to english:', 'Gb/Bb', undefined, 'Gb', 'Bb'],
		['convert to german:', 'A#/C#', undefined, 'A#', 'C#'],
		['auto-render to english:', 'G/B', 'auto', 'G', 'B'],
		['auto-render to english:', 'Gb/Bb', 'auto', 'Gb', 'Bb'],
		['auto-render to german:', 'Ges/Hes', 'auto', 'Ges', 'Hes'],
		['auto-render to latin:', 'La#/Do#', 'auto', 'La#', 'Do#'],
		['convert to german:', 'B', 'german', 'H'],
		['convert to german:', 'G/B', 'german', 'G', 'H'],
		['convert to german:', 'Gb/Bb', 'german', 'Ges', 'Hes'],
		['convert to german:', 'A#/C#', 'german', 'Ais', 'Cis'],
		['convert to latin:', 'B', 'latin', 'Si'],
		['convert to latin:', 'G/B', 'latin', 'Sol', 'Si'],
		['convert to latin:', 'Gb/Bb', 'latin', 'Solb', 'Sib'],
		['convert to latin:', 'A#/C#', 'latin', 'La#', 'Do#'],
	])('%s: %s', (title, input, notationSystem, outputRoot, outputBass) => {
		let testName = `should be converted to ${outputRoot}`;
		if (outputBass) testName += `/${outputBass}`;

		test(testName, () => {
			const parseChord = chordParserFactory();
			const parsed = parseChord(input);

			const converted = convertNotationSystem(notationSystem, parsed);

			expect(converted.formatted.rootNote).toBe(outputRoot);
			expect(converted.formatted.bassNote).toBe(outputBass);
		});
	});

	test('return null if given notation system is unknown', () => {
		const parseChord = chordParserFactory();
		const parsed = parseChord('C');

		const converted = convertNotationSystem('japanese', parsed);

		expect(converted).toBeNull();
	});
});
