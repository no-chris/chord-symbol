import chain from '../../src/helpers/chain';

describe('chain', () => {
	test('should chain functions calls, feeding the return value to the next function', () => {
		expect.assertions(4);

		const input = 'input';

		const fn1 = (fnInput) => {
			expect(fnInput).toBe(input);
			return fnInput + 'fn1';
		};
		const fn2 = (fnInput) => {
			expect(fnInput).toBe(input + 'fn1');
			return fnInput + 'fn2';
		};
		const fn3 = (fnInput) => {
			expect(fnInput).toBe(input + 'fn1' + 'fn2');
			return fnInput + 'fn3';
		};

		const allFunctions = [fn1, fn2, fn3 ];

		const result = chain(allFunctions, input);
		expect(result).toBe(input + 'fn1' + 'fn2' + 'fn3');
	});

	test('should stop chaining if function returns null', () => {
		expect.assertions(3);

		const input = 'input';

		const fn1 = (fnInput) => {
			expect(fnInput).toBe(input);
			return fnInput + 'fn1';
		};
		const fn2 = (fnInput) => {
			expect(fnInput).toBe(input + 'fn1');
			return null;
		};
		const fn3 = () => {
			expect(true).toBe(false);
		};

		const allFunctions = [fn1, fn2, fn3 ];

		const result = chain(allFunctions, input);
		expect(result).toBeNull();
	});
});
