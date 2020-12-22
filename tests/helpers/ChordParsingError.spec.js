import {
	NoSymbolFoundError,
	InvalidModifierError,
	InvalidIntervalsError,
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
	test('NoSymbolFoundError', () => {
		const chord = { my: 'chord' };
		const shouldThrow = () => {
			throw new NoSymbolFoundError('myMessage', chord);
		};
		expect(shouldThrow).toThrow('myMessage');
		expect(shouldThrow).toThrow(NoSymbolFoundError);

		const error = getErrorObject(shouldThrow);
		expect(error.name).toBe('NoSymbolFoundError');
		expect(error.message).toBe('myMessage');
		expect(error.chord).toBe(chord);
	});

	test('InvalidModifierError', () => {
		const chord = { my: 'chord' };
		const shouldThrow = () => {
			throw new InvalidModifierError('myMessage', chord);
		};
		expect(shouldThrow).toThrow('myMessage');
		expect(shouldThrow).toThrow(InvalidModifierError);

		const error = getErrorObject(shouldThrow);
		expect(error.name).toBe('InvalidModifierError');
		expect(error.message).toBe('myMessage');
		expect(error.chord).toBe(chord);
	});

	test('InvalidIntervalsError', () => {
		const chord = { my: 'chord' };
		const shouldThrow = () => {
			throw new InvalidIntervalsError('myMessage', chord);
		};
		expect(shouldThrow).toThrow('myMessage');
		expect(shouldThrow).toThrow(InvalidIntervalsError);

		const error = getErrorObject(shouldThrow);
		expect(error.name).toBe('InvalidIntervalsError');
		expect(error.message).toBe('myMessage');
		expect(error.chord).toBe(chord);
	});
});
