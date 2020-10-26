import checkCustomFilters from '../../src/helpers/checkCustomFilters';

describe('module', () => {
	test('should expose a function', () => {
		expect(checkCustomFilters).toBeInstanceOf(Function);
	});

	const myFilter = () => 'filtered';

	describe.each([
		['empty array', []],
		['1 filter', [myFilter]],
		['2 filters', [myFilter, myFilter]],
	])('%s', (title, allUserFilters) => {
		test('should return true if given valid customFilters parameter', () => {
			expect(checkCustomFilters(allUserFilters)).toBe(true);
		});
	});

	// prettier-ignore
	describe.each([
		['not an array: null', null, 'customFilters should be given as an array'],
		['not an array: undefined', undefined, 'customFilters should be given as an array'],
		['array, item 0 not a function', ['string'], 'The given filter is not a function'],
		['array, item 0 not a function', [2], 'The given filter is not a function'],
		['array, item 0 not a function', [{}], 'The given filter is not a function'],
		['array, item 1 not a function', [myFilter, 'string'], 'The given filter is not a function'],
		['array, item 1 not a function', [myFilter, 3], 'The given filter is not a function'],
		['array, item 1 not a function', [myFilter, {}], 'The given filter is not a function'],
	])('%s', (title, allUserFilters, errorMsg) => {
		test('should throw TypeError if customFilters is not a valid array', () => {
			const shouldThrow = () => checkCustomFilters(allUserFilters);

			expect(shouldThrow).toThrow(TypeError);
			expect(shouldThrow).toThrow(errorMsg);
		});
	});
});
