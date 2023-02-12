import _cloneDeep from 'lodash/cloneDeep';

import chordParserFactory from '../../src/parser/chordParserFactory';
import chordRendererFactory from '../../src/renderer/chordRendererFactory';

describe('Module', () => {
	test('Should expose a function', () => {
		expect(chordRendererFactory).toBeInstanceOf(Function);
	});
	test('Factory should return a function', () => {
		const renderChord = chordRendererFactory();
		expect(renderChord).toBeInstanceOf(Function);
	});
});

describe('Immutability', () => {
	test('Should not modify chord representation given as an input', () => {
		const parseChord = chordParserFactory();
		const renderChord = chordRendererFactory({
			transposeValue: 5,
			useShortNamings: true,
			simplify: 'core',
		});

		const parsed = Object.freeze(parseChord('Ch(#11,b13)'));
		const parsedCopy = _cloneDeep(parsed);

		renderChord(parsed);

		expect(parsed).toEqual(parsedCopy);
	});
});

describe('No filter', () => {
	describe.each([
		['Cm7', 'Cmi7'],
		['C7sus', 'C7sus'],
	])('%s', (input, expected) => {
		test('is rendered: ' + expected, () => {
			const parseChord = chordParserFactory();
			const renderChord = chordRendererFactory();
			const chord = Object.freeze(parseChord(input));
			expect(renderChord(chord)).toBe(expected);
		});
	});
});

describe('all filters', () => {
	describe.each([['C#m11/G', 'Labm']])('%s', (input, expected) => {
		test('is rendered: ' + expected, () => {
			const parseChord = chordParserFactory();
			const renderChord = chordRendererFactory({
				useShortNamings: true,
				transposeValue: 7,
				accidental: 'flat',
				simplify: 'max',
				notationSystem: 'latin',
			});
			const chord = Object.freeze(parseChord(input));
			expect(renderChord(chord)).toBe(expected);
		});
	});
});

describe('useShortNamings', () => {
	describe.each([
		['C(add9)', 'C2'],
		['Cdim', 'C°'],
		['Cma7', 'CM7'],
		['Cmi', 'Cm'],
		['Cmi7(omit3)', 'Cm7(no3)'],
		['Cdim7(add ma7)', 'C°7(addM7)'],
	])('%s', (input, expected) => {
		test('is rendered: ' + expected, () => {
			const parseChord = chordParserFactory();
			const renderChord = chordRendererFactory({ useShortNamings: true });
			const chord = parseChord(input);
			expect(renderChord(chord)).toBe(expected);
		});
	});
});

describe('Transpose', () => {
	describe.each([
		// transposeValue !== 0

		['+3, defaults to sharp', 'C/E', 3, 'original', 'D#/G'],
		['+3, sharp', 'C/E', 3, 'sharp', 'D#/G'],
		['+3, flat', 'C/E', 3, 'flat', 'Eb/G'],
		['-4, defaults to sharp', 'C/E', -4, 'original', 'G#/C'],
		['-4, sharp', 'C/E', -4, 'sharp', 'G#/C'],
		['-4, flat', 'C/E', -4, 'flat', 'Ab/C'],

		// transposeValue === 0

		['0, sharp input, original', 'G#', 0, 'original', 'G#'],
		['0, sharp input, sharp', 'G#', 0, 'sharp', 'G#'],
		['0, sharp input, flat', 'G#', 0, 'flat', 'Ab'],

		['0, flat input, original', 'Ab', 0, 'original', 'Ab'],
		['0, flat input, sharp', 'Ab', 0, 'sharp', 'G#'],
		['0, flat input, flat', 'Ab', 0, 'flat', 'Ab'],
	])('%s', (title, input, transposeValue, accidental, transposed) => {
		test(input + 'is transposed: ' + transposed, () => {
			const parseChord = chordParserFactory();
			const renderChord = chordRendererFactory({
				transposeValue,
				accidental,
			});
			const chord = parseChord(input);
			expect(renderChord(chord)).toBe(transposed);
		});
	});
});

describe('Printers', () => {
	const parseChord = chordParserFactory();
	const chordC = parseChord('C');

	describe.each([
		['text printer', 'text', 'C'],
		['raw printer', 'raw', chordC],
		['unknown printer, defaults to text', 'idontexist', 'C'],
	])('%s', (title, printer, expected) => {
		test(title, () => {
			const renderChord = chordRendererFactory({ printer });
			const rendered = renderChord(chordC);
			expect(rendered).toEqual(expected);
		});
	});
});

describe('Notation system', () => {
	describe.each([
		['default to english', undefined, 'C', 'C'],
		['default to english', undefined, 'H', 'B'],
		['default to english', undefined, 'La', 'A'],
		['convert', 'german', 'B', 'H'],
		['convert', 'latin', 'A', 'La'],
		['convert to input system', 'auto', 'H', 'H'],
		['convert to input system', 'auto', 'La', 'La'],
		['Harmonized acc. / sharp', 'english', 'La#/Reb', 'A#/C#', 'sharp'],
		['Harmonized acc. / sharp', 'german', 'La#/Reb', 'Ais/Cis', 'sharp'],
		['Harmonized acc. / sharp', 'latin', 'La#/Reb', 'La#/Do#', 'sharp'],
		['Harmonized acc. / sharp', 'auto', 'La#/Reb', 'La#/Do#', 'sharp'],
		['Harmonized acc. / flats', 'english', 'La#/Reb', 'Bb/Db', 'flat'],
		['Harmonized acc. / flats', 'german', 'La#/Reb', 'Hes/Des', 'flat'],
		['Harmonized acc. / flats', 'latin', 'La#/Reb', 'Sib/Reb', 'flat'],
		['Harmonized acc. / flats', 'auto', 'La#/Reb', 'Sib/Reb', 'flat'],
	])('%s (%s): %s', (title, notationSystem, input, output, accidental) => {
		test(`should be converted to ${output}`, () => {
			const parseChord = chordParserFactory();
			const parsed = parseChord(input);

			const renderChord = chordRendererFactory({
				notationSystem,
				accidental,
			});
			const rendered = renderChord(parsed);
			expect(rendered).toEqual(output);
		});
	});

	test(`returns null with an invalid notation system`, () => {
		const parseChord = chordParserFactory();
		const parsed = parseChord('C');

		const renderChord = chordRendererFactory({
			notationSystem: 'japanese',
		});
		const rendered = renderChord(parsed);
		expect(rendered).toBeNull();
	});
});

describe('invalid options values', () => {
	describe.each([
		['invalid simplify value', 'Cm7', 'Cmi7', { simplify: false }],
		[
			'invalid simplify value, suspended chord',
			'C7sus',
			'C7sus',
			{ simplify: false },
		],
	])('%s', (title, input, expected, options) => {
		test(input + ' is rendered: ' + expected, () => {
			const parseChord = chordParserFactory();
			const renderChord = chordRendererFactory(options);
			const chord = Object.freeze(parseChord(input));
			expect(renderChord(chord)).toBe(expected);
		});
	});
});

describe('invalid parsed chord', () => {
	const parseChord = chordParserFactory();
	const invalidChord = parseChord('Amis');

	describe.each([
		['undefined'],
		['null', null],
		['string', 'myChord'],
		['number', 0],
		['object', { test: 'test' }],
		['invalidChord', invalidChord],
	])('%s', (title, parsedChord) => {
		test('should return null if given chord is invalid', () => {
			const renderChord = chordRendererFactory({ printer: 'raw' });
			expect(renderChord(parsedChord)).toBeNull();
		});
	});
});

describe('apply user filters', () => {
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

	test('should apply user filters', () => {
		const customFilters = [myFilter1, myFilter2, myFilter3];
		const parseChord = chordParserFactory();
		const parsed = parseChord('Cm7');

		const renderChord = chordRendererFactory({
			customFilters,
			printer: 'raw',
		});
		const rendered = renderChord(parsed);

		expect(rendered).toHaveProperty('myFilter1');
		expect(rendered).toHaveProperty('myFilter2');
		expect(rendered).toHaveProperty('myFilter3');
		expect(rendered.myFilter1).toEqual(true);
		expect(rendered.myFilter2).toEqual({ applied: true });
		expect(rendered.myFilter3).toEqual('myFilter3 has been applied');
	});

	test('should apply user filters on the raw chord object', () => {
		const customFilters = [myFilter1, myFilter2, myFilter3];
		const parseChord = chordParserFactory();
		const parsed = parseChord('Cm7');

		const renderChordRaw = chordRendererFactory({ printer: 'raw' });
		const renderChord = chordRendererFactory({
			customFilters,
			printer: 'raw',
		});

		const renderedRaw = renderChordRaw(parsed);
		const rendered = renderChord(parsed);

		const expected = {
			...renderedRaw,
			myFilter1: true,
			myFilter2: { applied: true },
			myFilter3: 'myFilter3 has been applied',
		};
		expect(rendered).toEqual(expected);
	});

	test('render function should return null if a user filter returns null', () => {
		const customFilters = [myFilter1, myFilter2, myFilter3, myNullFilter];
		const parseChord = chordParserFactory({ customFilters });
		const parsed = parseChord('Cm7');
		const renderChord = chordRendererFactory({ customFilters });

		expect(renderChord(parsed)).toBeNull();
	});
});
