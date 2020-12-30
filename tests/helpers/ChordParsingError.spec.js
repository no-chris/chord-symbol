import {
	InvalidModifierError,
	InvalidInputError,
	InvalidIntervalsError,
	NoSymbolFoundError,
	ParserConfigurationError,
	UnexpectedError,
} from '../../src/helpers/ChordParsingError';

const getErrorObject = (shouldThrow) => {
	let error;
	try {
		shouldThrow();
	} catch (err) {
		error = err;
	}
	return error;
};

describe('Custom error types', () => {
	test('UnexpectedError', () => {
		const shouldThrow = () => {
			throw new UnexpectedError();
		};
		expect(shouldThrow).toThrow(
			'An unexpected error happened. Maybe a custom filter returned null instead of throwing an exception?'
		);
		expect(shouldThrow).toThrow(UnexpectedError);

		const error = getErrorObject(shouldThrow);
		expect(error.name).toBe('UnexpectedError');
		expect(error.message).toBe(
			'An unexpected error happened. Maybe a custom filter returned null instead of throwing an exception?'
		);
	});

	test('InvalidInputError', () => {
		const shouldThrow = () => {
			throw new InvalidInputError();
		};
		expect(shouldThrow).toThrow('The given symbol is not a valid string');
		expect(shouldThrow).toThrow(InvalidInputError);

		const error = getErrorObject(shouldThrow);
		expect(error.name).toBe('InvalidInput');
		expect(error.message).toBe('The given symbol is not a valid string');
	});

	test('ConfigurationError', () => {
		const shouldThrow = () => {
			throw new ParserConfigurationError('myMessage');
		};
		expect(shouldThrow).toThrow('myMessage');
		expect(shouldThrow).toThrow(ParserConfigurationError);

		const error = getErrorObject(shouldThrow);
		expect(error.name).toBe('ParserConfigurationError');
		expect(error.message).toBe('myMessage');
	});

	test('NoSymbolFoundError', () => {
		const chord = { input: { symbol: 'mySymbol' } };
		const shouldThrow = () => {
			throw new NoSymbolFoundError(chord);
		};
		expect(shouldThrow).toThrow(`"mySymbol" does not seems to be a chord`);
		expect(shouldThrow).toThrow(NoSymbolFoundError);

		const error = getErrorObject(shouldThrow);
		expect(error.name).toBe('NoSymbolFound');
		expect(error.message).toBe(`"mySymbol" does not seems to be a chord`);
		expect(error.chord).toBe(chord);
	});

	test('InvalidModifierError', () => {
		const chord = { input: { descriptor: 'abcdef' } };
		const shouldThrow = () => {
			throw new InvalidModifierError(chord, 'def');
		};
		expect(shouldThrow).toThrow(
			`The chord descriptor "abcdef" contains unknown or duplicated modifiers: "def"`
		);
		expect(shouldThrow).toThrow(InvalidModifierError);

		const error = getErrorObject(shouldThrow);
		expect(error.name).toBe('InvalidModifier');
		expect(error.message).toBe(
			`The chord descriptor "abcdef" contains unknown or duplicated modifiers: "def"`
		);
		expect(error.chord).toBe(chord);
	});

	test('InvalidIntervalsError', () => {
		const chord = { input: { symbol: 'mySymbol' } };
		const shouldThrow = () => {
			throw new InvalidIntervalsError(chord, ['b3', '3']);
		};
		expect(shouldThrow).toThrow(
			`"mySymbol" describes a chord with an invalid intervals combo: b3 and 3`
		);
		expect(shouldThrow).toThrow(InvalidIntervalsError);

		const error = getErrorObject(shouldThrow);
		expect(error.name).toBe('InvalidIntervals');
		expect(error.message).toBe(
			`"mySymbol" describes a chord with an invalid intervals combo: b3 and 3`
		);
		expect(error.chord).toBe(chord);
	});
});
