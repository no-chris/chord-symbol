const checkUserFilters = (allUserFilters) => {
	if (!Array.isArray(allUserFilters)) {
		throw new TypeError('allUserFilters should be given as an array');
	}
	if (allUserFilters.some((filter) => typeof filter !== 'function')) {
		throw new TypeError(`The given filter is not a function`);
	}
	return true;
};

export default checkUserFilters;
