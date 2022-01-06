const checkCustomFilters = (customFilters) => {
	if (!Array.isArray(customFilters)) {
		throw new TypeError('customFilters should be given as an array');
	}
	if (customFilters.some((filter) => typeof filter !== 'function')) {
		throw new TypeError(`The given filter is not a function`);
	}
	return true;
};

export default checkCustomFilters;
