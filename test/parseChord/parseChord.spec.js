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


describe('Descriptor / parsable descriptor', () => {
	describe.each([

		[ 'A' ],
		[ 'Am', 				'm', 					'm' ],
		[ 'A(add9)', 			'(add9)', 				'(add9)' ],
		[ 'A(add9,11)', 		'(add9,11)', 			'(add9,add11)' ],
		[ 'A(add 9,11)', 		'(add 9,11)', 			'(add9,add11)' ],
		[ 'A( add 9, add 11)', 	'( add 9, add 11)', 	'(add9,add11)' ],
		[ 'A(add9,omit3)', 		'(add9,omit3)', 		'(add9,omit3)' ],
		[ 'A(omit3,5)', 		'(omit3,5)',	 		'(omit3,omit5)' ],
		[ 'A(no3,5)', 			'(no3,5)',	 			'(no3,no5)' ],
		[ 'A(no3,5,add#11)', 	'(no3,5,add#11)',		'(no3,no5,add#11)' ],

		[ 'A(no3,5)(add#11,b13)', 	'(no3,5)(add#11,b13)',	'(no3,no5)(add#11,addb13)' ],
		[ 'Am(no3,5)7(add#11,b13)', 'm(no3,5)7(add#11,b13)','m(no3,no5)7(add#11,addb13)' ],

	])('%s', (input, descriptor, parsableDescriptor) => {
		test('should transfrom descriptor into ' + parsableDescriptor, () => {
			const parsed = parseChord(input);
			expect(parsed.descriptor).toBe(descriptor);
			expect(parsed.parsableDescriptor).toBe(parsableDescriptor);
		});
	});

});
