import { variantsToNotes, allVariants } from '../../src/allNotes';

import parseChord from '../../src/parseChord';

const TEST_SUITE = process.env.TEST_SUITE;

describe('Root and bass notes', () => {
	const allCases = [];
	let chordSymbol;

	allVariants.forEach(rootNote => {
		allCases.push([rootNote, variantsToNotes[rootNote]]);

		allVariants
			.filter(bassNote => bassNote !== rootNote)
			.forEach(bassNote => {
				chordSymbol = rootNote + '/' + bassNote;
				if (TEST_SUITE !== 'short') {
					allCases.push([chordSymbol, variantsToNotes[rootNote], variantsToNotes[bassNote]]);
				}
			});
	});

	let parsed;
	describe.each(allCases)('%s', (input, rootNote, bassNote) => {
		test(`rootNote: '${rootNote}', bassNote: '${bassNote}'`, () => {
			parsed = parseChord(input);
			expect(parsed.rootNote).toBe(rootNote);
			expect(parsed.bassNote).toBe(bassNote);
		});
	});
});
