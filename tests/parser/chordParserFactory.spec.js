import chordParserFactory from '../../src/parser/chordParserFactory';
import chordRendererFactory from '../../src/renderer/chordRendererFactory';

import { allVariants as allNotesVariants } from '../../src/dictionaries/notes';
import { allVariants as allModifiersVariants } from '../../src/dictionaries/modifiers';

describe('Module', () => {
	test('Should expose a function', () => {
		expect(chordParserFactory).toBeInstanceOf(Function);
	});
	test('Factory should return a function', () => {
		const parseChord = chordParserFactory();
		expect(parseChord).toBeInstanceOf(Function);
	});
});

describe('ambiguous rootNote', () => {
	const allCases = [];

	let modifierFirstLetter;
	let noteConflict;
	let symbol;

	allNotesVariants.forEach((noteVariant) => {
		allModifiersVariants.forEach((modifierVariant) => {
			modifierFirstLetter = modifierVariant[0];
			noteConflict = noteVariant + modifierFirstLetter;

			if (
				!['♭', 'b', '♯', '#'].includes(modifierFirstLetter) &&
				allNotesVariants.includes(noteConflict)
			) {
				symbol = noteVariant + modifierVariant;
				allCases.push([
					symbol + ' conflict with: ' + noteConflict,
					symbol,
					noteVariant,
					modifierVariant,
				]);
			}
		});
	});

	describe.each(allCases)('%s', (title, input, rootNote, descriptor) => {
		test('is  parsed ' + rootNote + ' + ' + descriptor, () => {
			const parseChord = chordParserFactory();
			const chord = parseChord(input);
			expect(chord.input.rootNote).toBe(rootNote);
			expect(chord.input.descriptor).toBe(descriptor);
		});
	});
});

describe('parsing errors', () => {
	describe.each([
		['Amis', 'InvalidModifier', 'InvalidModifier', 'NoSymbolFound'],
		['Lamis', 'NoSymbolFound', 'NoSymbolFound', 'InvalidModifier'],
		['NotAChord', 'NoSymbolFound', 'NoSymbolFound', 'NoSymbolFound'],
		['B6b6', 'InvalidIntervals', 'NoSymbolFound', 'NoSymbolFound'],
		['H6b6', 'NoSymbolFound', 'InvalidIntervals', 'NoSymbolFound'],
		['Si6b6', 'NoSymbolFound', 'NoSymbolFound', 'InvalidIntervals'],
	])('%s', (symbol, englishError, germanError, latinError) => {
		test('should return a distinct error for each naming variant', () => {
			const parseChord = chordParserFactory();
			const parsed = parseChord(symbol);

			expect(parsed.error).toBeDefined();
			expect(Array.isArray(parsed.error)).toBe(true);

			expect(parsed.error.length).toBe(3);

			expect(parsed.error[0].notationSystem).toBe('english');
			expect(parsed.error[0].type).toBe(englishError);

			expect(parsed.error[1].notationSystem).toBe('german');
			expect(parsed.error[1].type).toBe(germanError);

			expect(parsed.error[2].notationSystem).toBe('latin');
			expect(parsed.error[2].type).toBe(latinError);
		});
	});

	describe.each([
		['undefined'],
		['null', null],
		['integer', 2],
		['decimal', 6.9],
		['NaN', NaN],
		['object', {}],
		['empty string', ''],
	])('%s', (title, symbol) => {
		test('invalid symbol input should produce a InvalidInputError', () => {
			const parseChord = chordParserFactory();
			const parsed = parseChord(symbol);

			expect(parsed.error).toBeDefined();
			expect(Array.isArray(parsed.error)).toBe(true);
			expect(parsed.error.length).toBe(1);
			expect(parsed.error[0].type).toBe('InvalidInput');
			expect(parsed.error[0].message).toBe(
				`The given symbol is not a valid string`
			);
		});
	});

	describe.each([
		['I'],
		['I/A'],
		['Im'],
		['Loop'],
		['Weird'],
		['Shine'],
		['Puppet'],
	])('%s', (symbol) => {
		test('strings that cannot be confused with a chord should produce a NoSymbolFoundError', () => {
			const parseChord = chordParserFactory();
			const parsed = parseChord(symbol);

			expect(parsed.error).toBeDefined();
			expect(Array.isArray(parsed.error)).toBe(true);
			expect(parsed.error.length).toBe(3);
			expect(parsed.error[0].type).toBe('NoSymbolFound');
			expect(parsed.error[0].message).toBe(
				`"${symbol}" does not seems to be a chord`
			);
			expect(parsed.error[0].chord).toBeDefined();
			expect(parsed.error[0].chord.input.symbol).toBe(symbol);
		});
	});

	describe.each([
		['A('],
		['A(('],
		['A()('],
		['A/'],
		['A(,,)'],
		['A,,'],
		['A..'],
		['All'],
		['Art'],
		['Aperture'],
	])('%s', (symbol) => {
		test('strings that could be a chord but have NO SINGLE known modifiers should produce NoSymbolFoundError', () => {
			const parseChord = chordParserFactory();
			const parsed = parseChord(symbol);

			expect(parsed.error).toBeDefined();
			expect(Array.isArray(parsed.error)).toBe(true);
			expect(parsed.error.length).toBe(3);
			expect(parsed.error[0].message).toBe(
				`"${symbol}" does not seems to be a chord`
			);
			expect(parsed.error[0].type).toBe('NoSymbolFound');
			expect(parsed.error[0].chord).toBeDefined();
			expect(parsed.error[0].chord.input.symbol).toBe(symbol);
		});
	});

	describe.each([
		['A6/Z', '6/Z', '/z'],
		['Ame', 'me', 'e'],
		['Amm', 'mm', 'm'],
		['A77', '77', '7'],
		['Amad7', 'mad7', 'd'],
		['AMERICA', 'MERICA', 'erica'],
		['Am..', 'm..', '..'],
		['A..m', '..m', '..'],
		['A7.mb5', '7.mb5', '.'],
		['A7/mb5/G', '7/mb5', '/'],
		['A,b97', ',b97', ','],
		['A7,mb5/G', '7,mb5', ','],
	])('%s', (symbol, descriptor, remainingChars) => {
		test('strings that could be a chord but have SOME unknown modifiers should produce ChordParsingError', () => {
			const parseChord = chordParserFactory();
			const parsed = parseChord(symbol);

			expect(parsed.error).toBeDefined();
			expect(Array.isArray(parsed.error)).toBe(true);
			expect(parsed.error.length).toBe(3);
			expect(parsed.error[0].type).toBe('InvalidModifier');
			expect(parsed.error[0].message).toBe(
				`The chord descriptor "${descriptor}" contains unknown or duplicated modifiers: "${remainingChars}"`
			);
			expect(parsed.error[0].chord).toBeDefined();
			expect(parsed.error[0].chord.input.symbol).toBe(symbol);
		});
	});

	describe.each([
		['Cm(add3)', '3 and b3'],
		['C11sus4', '4 and 11'],
		['C7M7', '7 and b7'],
		['C(b9)(add9)', '9 and b9'],
		['C(#9)(add9)', '9 and #9'],
		['C(#11)(add11)', '11 and #11'],
		['C(b13)(add13)', '13 and b13'],
	])('%s', (symbol, intervals) => {
		test('symbols yielding invalid intervals combos should produce an InvalidIntervalsError', () => {
			const parseChord = chordParserFactory();
			const parsed = parseChord(symbol);

			expect(parsed.error).toBeDefined();
			expect(Array.isArray(parsed.error)).toBe(true);
			expect(parsed.error.length).toBe(3);
			expect(parsed.error[0].type).toBe('InvalidIntervals');
			expect(parsed.error[0].message).toBe(
				`"${symbol}" describes a chord with an invalid intervals combo: ${intervals}`
			);
			expect(parsed.error[0].chord).toBeDefined();
			expect(parsed.error[0].chord.input.symbol).toBe(symbol);
		});
	});
});

describe('parserConfiguration: notationSystems', () => {
	describe.each([
		['Do', 'C', ['latin']],
		['Do', 'Ddim', ['english']],
		['Do', 'Ddim', ['german']],
		['Ré', 'D', ['latin']],
		['His', 'C', ['german']],
		['As', 'Ab', ['german']],
	])('%s', (symbol, rendered, notationSystems) => {
		test('should be correctly parsed in ' + notationSystems[0], () => {
			expect(notationSystems.length).toBe(1);

			const parseChord = chordParserFactory({
				notationSystems,
			});
			const parsed = parseChord(symbol);
			expect(parsed.error).not.toBeDefined();

			const renderChord = chordRendererFactory();
			expect(renderChord(parsed)).toBe(rendered);
		});
	});

	describe.each([
		['Bb', 1, ['german']],
		['Bb', 1, ['latin']],
		['Bb', 2, ['german', 'latin']],
		['His', 1, ['english']],
		['His', 1, ['latin']],
		['His', 2, ['english', 'latin']],
		['La', 1, ['english']],
		['La', 1, ['german']],
		['La', 2, ['english', 'german']],
	])('%s', (symbol, numOfErrors, notationSystems) => {
		test('should not be parsed in ' + notationSystems.join(', '), () => {
			const parseChord = chordParserFactory({
				notationSystems,
			});
			const parsed = parseChord(symbol);
			expect(parsed.error).toBeDefined();
			expect(Array.isArray(parsed.error)).toBe(true);
			expect(parsed.error.length).toBe(numOfErrors);
		});
	});

	describe.each([
		['null', null, "'notationSystems' should be an array"],
		['string', 'string', "'notationSystems' should be an array"],
		['number', 0, "'notationSystems' should be an array"],
		['object', {}, "'notationSystems' should be an array"],
		[
			'empty array',
			[],
			'You need to select at least one notation system for the parser',
		],
		[
			'unknown system',
			['japanese'],
			"'japanese' is not a valid notation system",
		],
	])('%s', (title, notationSystems, errorMsg) => {
		test('factory should throw an error', () => {
			const shouldThrow = () => {
				chordParserFactory({
					notationSystems,
				});
			};
			expect(shouldThrow).toThrow(TypeError);
			expect(shouldThrow).toThrow(errorMsg);
		});
	});
});

describe('parserConfiguration: altIntervals', () => {
	describe.each([
		['b5', { fifthFlat: true }, ['1', '3', 'b5', 'b7']],
		['#5', { fifthSharp: true }, ['1', '3', '#5', 'b7']],
		['b9', { ninthFlat: true }, ['1', '3', '5', 'b7', 'b9']],
		['#9', { ninthSharp: true }, ['1', '3', '5', 'b7', '#9']],
		['#11', { eleventhSharp: true }, ['1', '3', '5', 'b7', '#11']],
		['b13', { thirteenthFlat: true }, ['1', '3', '5', 'b7', 'b13']],
		[
			'all',
			{
				fifthFlat: true,
				fifthSharp: true,
				ninthFlat: true,
				ninthSharp: true,
				eleventhSharp: true,
				thirteenthFlat: true,
			},
			['1', '3', 'b5', '#5', 'b7', 'b9', '#9', '#11', 'b13'],
		],
	])('%s', (title, altIntervals, intervals) => {
		test('alt should yield ' + intervals.join(' '), () => {
			const noAltIntervals = {
				fifthFlat: false,
				fifthSharp: false,
				ninthFlat: false,
				ninthSharp: false,
				eleventhSharp: false,
				thirteenthFlat: false,
			};
			const allAltIntervals = Object.assign(
				{},
				noAltIntervals,
				altIntervals
			);
			const parseChord = chordParserFactory({
				altIntervals: allAltIntervals,
			});
			const parsed = parseChord('Calt');

			expect(parsed.normalized.intervals).toEqual(intervals);
			expect(parsed.normalized.intents.alt).toEqual(true);
		});
	});

	describe('rendering of alt modifier should short-circuit other modifiers', () => {
		describe.each([
			['Chalt', 'C7alt'],
			['C7#9alt', 'C7alt'],
			['C7b13alt', 'C7alt'],
			['Cm7alt', 'C7alt'],
		])('%s', (chord, rendered) => {
			test(chord + ' => ' + rendered, () => {
				const parseChord = chordParserFactory();
				const renderChord = chordRendererFactory();
				const parsed = parseChord(chord);

				expect(renderChord(parsed)).toEqual(rendered);
			});
		});
	});
});

describe('ParserConfiguration', () => {
	test('Should save parser configuration in chord definition', () => {
		const parseChord = chordParserFactory({
			altIntervals: {
				ninthFlat: true,
				eleventhSharp: true,
			},
			notationSystems: ['english', 'latin'],
		});
		const parsed = parseChord('C');

		const expected = {
			altIntervals: {
				ninthFlat: true,
				eleventhSharp: true,
			},
			notationSystems: ['english', 'latin'],
		};

		expect(parsed.parserConfiguration).toEqual(expected);
	});

	test('Should create the parserConfiguration property', () => {
		const parseChord = chordParserFactory();
		const parsed = parseChord('C');

		expect(parsed).toHaveProperty('parserConfiguration');
	});
});

describe('parserConfiguration: custom filters', () => {
	const myFilter1 = (chord) => {
		chord.myFilter1 = true;
		return chord;
	};
	const myFilter2 = (chord) => {
		chord.myFilter2 = { applied: true };
		return chord;
	};
	const myFilter3 = (chord) => {
		chord.myFilter3 = 'myFilter3 has been applied';
		return chord;
	};
	const myNullFilter = () => null;

	const myThrowFilter = () => {
		throw new TypeError('User filter error');
	};

	test('should apply custom filters', () => {
		const customFilters = [myFilter1, myFilter2, myFilter3];
		const parseChord = chordParserFactory({ customFilters });
		const parsed = parseChord('Cm7');

		expect(parsed).toHaveProperty('myFilter1');
		expect(parsed).toHaveProperty('myFilter2');
		expect(parsed).toHaveProperty('myFilter3');
		expect(parsed.myFilter1).toEqual(true);
		expect(parsed.myFilter2).toEqual({ applied: true });
		expect(parsed.myFilter3).toEqual('myFilter3 has been applied');
	});

	test('should apply custom filters on the raw chord object', () => {
		const customFilters = [myFilter1, myFilter2, myFilter3];
		const parseChordRaw = chordParserFactory();
		const parseChord = chordParserFactory({ customFilters });

		const parsedRaw = parseChordRaw('Cm7');
		const parsed = parseChord('Cm7');

		const expected = {
			...parsedRaw,
			myFilter1: true,
			myFilter2: { applied: true },
			myFilter3: 'myFilter3 has been applied',
			parserConfiguration: {
				customFilters,
			},
		};
		expect(parsed).toEqual(expected);
	});

	test('parser function should produce an UnexpectedError if a custom filter returns null', () => {
		const customFilters = [myFilter1, myFilter2, myFilter3, myNullFilter];
		const parseChord = chordParserFactory({ customFilters });
		const parsed = parseChord('Do'); // "Do" is the only (?) symbol that is valid in all 3 notation systems

		expect(parsed).toHaveProperty('error');
		expect(Array.isArray(parsed.error)).toBe(true);
		expect(parsed.error.length).toBe(3);

		expect(parsed.error[0].type).toBe('UnexpectedError');
		expect(parsed.error[0].message).toBe(
			'An unexpected error happened. Maybe a custom filter returned null instead of throwing an exception?'
		);
		expect(parsed.error[0].notationSystem).toBe('english');

		expect(parsed.error[1].type).toBe('UnexpectedError');
		expect(parsed.error[1].message).toBe(
			'An unexpected error happened. Maybe a custom filter returned null instead of throwing an exception?'
		);
		expect(parsed.error[1].notationSystem).toBe('german');

		expect(parsed.error[2].type).toBe('UnexpectedError');
		expect(parsed.error[2].message).toBe(
			'An unexpected error happened. Maybe a custom filter returned null instead of throwing an exception?'
		);
		expect(parsed.error[2].notationSystem).toBe('latin');
	});

	test('parser function should log a custom filter exception in the error object', () => {
		const customFilters = [myFilter1, myFilter2, myFilter3, myThrowFilter];
		const parseChord = chordParserFactory({ customFilters });
		const parsed = parseChord('Do'); // "Do" is the only (?) symbol that is valid in all 3 notation systems

		expect(parsed).toHaveProperty('error');
		expect(Array.isArray(parsed.error)).toBe(true);
		expect(parsed.error.length).toBe(3);

		expect(parsed.error[0].type).toBe('TypeError');
		expect(parsed.error[0].message).toBe('User filter error');
		expect(parsed.error[0].notationSystem).toBe('english');

		expect(parsed.error[1].type).toBe('TypeError');
		expect(parsed.error[1].message).toBe('User filter error');
		expect(parsed.error[1].notationSystem).toBe('german');

		expect(parsed.error[2].type).toBe('TypeError');
		expect(parsed.error[2].message).toBe('User filter error');
		expect(parsed.error[2].notationSystem).toBe('latin');
	});
});

describe('Save the notation system in the `input` property of the parsed chord', () => {
	describe.each([
		['C', 'C', undefined, 'english'],
		['H', 'B', undefined, 'german'],
		['Fa', 'F', undefined, 'latin'],
		['Do', 'C', ['latin'], 'latin'],
		['C', 'C', ['german'], 'german'],
	])(
		'%s',
		(symbol, expectedSymbol, notationSystems, expectedNotationSystem) => {
			const parseChord = chordParserFactory({ notationSystems });
			const renderChord = chordRendererFactory();
			const parsed = parseChord(symbol);

			expect(renderChord(parsed)).toBe(expectedSymbol);
			expect(parsed.input.notationSystem).toBe(expectedNotationSystem);
		}
	);
});
