import _isArray from 'lodash/isArray';
import _isEqual from 'lodash/isEqual';

function hasExactly(allIntervals, search) {
	const arraySearch = _isArray(search) ? search : [search];
	return _isEqual(allIntervals, arraySearch);
}

function hasOneOf(allIntervals, search) {
	return has(allIntervals, search, 'oneOf');
}

function hasAll(allIntervals, search) {
	return has(allIntervals, search, 'all');
}

function hasNoneOf(allIntervals, search) {
	return has(allIntervals, search, 'none');
}

function has(allIntervals, search, require) {
	const arraySearch = _isArray(search) ? search : [search];

	const lookupMethod = require === 'oneOf' ? 'some' : 'every';

	return arraySearch[lookupMethod]((interval) => {
		return require === 'none'
			? !allIntervals.includes(interval)
			: allIntervals.includes(interval);
	});
}

export { hasExactly, hasOneOf, hasAll, hasNoneOf };
