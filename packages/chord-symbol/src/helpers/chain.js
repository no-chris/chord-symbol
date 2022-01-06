/**
 * Execute given functions in sequence, feeding the result of one as an input to the next.
 *
 * @param {Function[]} allFunctions
 * @param {*} input - parameter given to the first function
 * @returns {*} return value of the last function
 */
export default function chain(allFunctions, input) {
	return allFunctions.reduce((value, fn) => {
		return value ? fn(value) : null;
	}, input);
}
