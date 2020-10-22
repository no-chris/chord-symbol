import checkUserFilters from '../../src/helpers/checkUserFilters';

describe('module', () => {
	test('should expose a function', () => {
		expect(checkUserFilters).toBeInstanceOf(Function);
	});

	const myFilter = () => 'filtered';

	describe.each([
		['empty array', []],
		['1 filter', [myFilter]],
		['2 filters', [myFilter, myFilter]],
	])('%s', (title, allUserFilters) => {
		test('should return true if given valid allUserFilters parameter', () => {
			expect(checkUserFilters(allUserFilters)).toBe(true);
		});
	});

	describe.each([
		['not an array: null', null, 'allUserFilters should be given as an array'],
		['not an array: undefined', undefined, 'allUserFilters should be given as an array'],
		['array, item 0 not a function', ['string'], 'The given filter is not a function'],
		['array, item 0 not a function', [2], 'The given filter is not a function'],
		['array, item 0 not a function', [{}], 'The given filter is not a function'],
		['array, item 1 not a function', [myFilter, 'string'], 'The given filter is not a function'],
		['array, item 1 not a function', [myFilter, 3], 'The given filter is not a function'],
		['array, item 1 not a function', [myFilter, {}], 'The given filter is not a function'],
	])('%s', (title, allUserFilters, errorMsg) => {
		test('should throw TypeError if allUserFilters is not a valid array', () => {
			const shouldThrow = () => checkUserFilters(allUserFilters);

			expect(shouldThrow).toThrow(TypeError);
			expect(shouldThrow).toThrow(errorMsg);
		});
	});
});
