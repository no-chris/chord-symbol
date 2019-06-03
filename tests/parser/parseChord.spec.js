import parseChord from '../../src/parser/parseChord';



describe('invalid chords', () => {
	describe.each([

		[ 'I' ],
		[ 'I/A' ],
		[ 'Im' ],
		[ 'A6/Z' ],
		[ 'Ame' ],
		[ 'Amad7' ],
		[ 'America' ],
		[ 'A(' ],
		[ 'A((' ],
		[ 'A()(' ],
		[ 'A/' ],
		[ 'A(,,)' ],
		[ 'A,,' ],
		[ 'A..' ],
		[ 'Am..' ],
		[ 'A..m' ],
		[ 'A7.mb5' ],
		[ 'A7/mb5/G' ],
		[ 'A,b97' ],
		[ 'A7,mb5/G' ],
		[ 'Domit3' ], // this is actually valid as "D omit3" but fails as "Do mit3".
		[ 'Fadd9' ], // Same problem here. We might as well disable "latin" names by default and have them as an option
		[ 'Esus' ], // Again, more problematic, with german names

	])('%s', (symbol) => {
		test('should return null', () => {
			const parsed = parseChord(symbol);
			expect(parsed).toBeNull();
		});
	});
});

