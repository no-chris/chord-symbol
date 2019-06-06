import { allVariantsToNotes, englishVariants, latinVariants, germanVariants } from '../src/dictionaries/notes';

import parseChord from '../src/parser/parseChord';

const TEST_SUITE = process.env.TEST_SUITE;

describe('Root and bass notes', () => {
	const allCases = [];
	let chordSymbol;

	[englishVariants, latinVariants, germanVariants].forEach(variants => {
		variants.forEach(rootNote => {
			if (rootNote !== 'Do') { // edge case, "Do" is "Ddim" in english notation)
				allCases.push([rootNote, allVariantsToNotes[rootNote]]);
			}

			variants
				.filter(bassNote => bassNote !== rootNote)
				.forEach(bassNote => {
					chordSymbol = rootNote + '/' + bassNote;
					if (TEST_SUITE !== 'short') {
						allCases.push([chordSymbol, allVariantsToNotes[rootNote], allVariantsToNotes[bassNote]]);
					}
				});
		});
	});


	let parsed;
	describe.each(allCases)('%s', (input, rootNote, bassNote) => {
		test(`rootNote: '${rootNote}', bassNote: '${bassNote}'`, () => {
			parsed = parseChord(input);
			expect(parsed.normalized.rootNote).toBe(rootNote);
			expect(parsed.normalized.bassNote).toBe(bassNote);
		});
	});
});
