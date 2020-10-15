import initChord from '../../../src/parser/filters/initChord';

describe('initChord', () => {
	test('should intitialize chord structure', () => {
		const parserConfiguration = {
			parserConfig1: true,
			parserConfig2: 'string',
			parserConfig3: { subConfig1: false }
		};
		const chord = initChord(parserConfiguration, 'ChordSymbol');

		const expected = {
			input: {
				symbol: 'ChordSymbol',
			},
			normalized: {},
			formatted: {},
			parserConfiguration: {
				parserConfig1: true,
				parserConfig2: 'string',
				parserConfig3: { subConfig1: false }
			}
		};

		expect(chord).toEqual(expected);
	});

	test('should not reference the config object but create a copy', () => {
		const parserConfiguration = {
			parserConfig1: true,
			parserConfig2: 'string',
			parserConfig3: { subConfig1: false }
		};
		const chord = initChord(parserConfiguration, 'ChordSymbol');

		expect(chord.parserConfiguration).not.toBe(parserConfiguration);
	});

	test('should create an empty parameter object if none is given', () => {
		const chord = initChord(undefined, 'ChordSymbol');

		expect(chord.parserConfiguration).toEqual({});
	});
});
