import parseChord from '../../src/parseChord';


describe('Root and bass notes', () => {
	const allCases = [];
	const allNotes = ['Ab', 'A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#'];

	allNotes.forEach(rootNote => {
		let chordSymbol = rootNote;
		let expectedResult = {
			string: chordSymbol,
			rootNote,
		};
		allCases.push([chordSymbol, expectedResult]);

		allNotes
			.filter(bassNote => bassNote !== rootNote)
			.forEach(bassNote => {
				chordSymbol = rootNote + '/' + bassNote;
				expectedResult = {
					string: chordSymbol,
					rootNote,
					bassNote,
				};
				allCases.push([chordSymbol, expectedResult]);
			});
	});

	let parsed;
	describe.each(allCases)('%s', (input, expected) => {
		test('should detect correct root/bass note', () => {
			parsed = parseChord(input);
			expect(parsed.rootNote).toBe(expected.rootNote);
			expect(parsed.bassNote).toBe(expected.bassNote);
		});
	});
});
