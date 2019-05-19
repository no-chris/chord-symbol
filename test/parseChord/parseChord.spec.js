import parseChord from '../../src/parseChord';
import degreesToIntervals from '../../src/intervalsToSemitones';


describe('Basic parsing', () => {
	describe.each([

		[ 'A', 			'A' ],
		[ 'Am', 		'A', 'm' ],
		[ 'Am7', 		'A', 'm7' ],
		[ 'A/F#', 		'A', undefined, 'F#' ],
		[ 'Am7/F#', 	'A', 'm7', 'F#' ],
		[ 'A6/9', 		'A', '6/9' ],
		[ 'A6/9/G', 	'A', '6/9', 'G' ],
		[ 'A/',			'A', '/' ],
		[ 'A6/Z', 		'A', '6/Z' ],
		[ 'A(add 9)', 	'A', '(add 9)' ],
		[ 'Adim.', 		'A', 'dim.' ],
		[ 'A° add ma7', 'A', '° add ma7' ],

	])('%s', (input, rootNote, descriptor, bassNote) => {
		test('should correctly parse root note and modifier', () => {
			const parsed = parseChord(input);
			expect(parsed.rootNote).toBe(rootNote);
			expect(parsed.descriptor).toBe(descriptor);
			expect(parsed.bassNote).toBe(bassNote);
		});
	});

	describe.each([

		[ 'I' ],
		[ 'I/A' ],
		[ 'Im' ],

	])('%s', (input) => {
		test('should return null', () => {
			const parsed = parseChord(input);
			expect(parsed).toBeNull();
		});
	});


});

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

describe.skip('parenthesis and comma', () => {
	describe.each([
		[ 'Cm(add13)', ['0', 'b3', '5', '13'] ],
		[ 'C7(b9,#9,#11,b13)', ['0', '3', '5', 'b7', 'b9', '#9', '#11', 'b13'] ],
	])('%s', (input, degrees) => {
		test('should correctly parse input string', () => {
			const parsed = parseChord(input);
			expect(parsed.intervals).toEqual(degrees.map(degree => degreesToIntervals[degree]));
		});
	});
});
