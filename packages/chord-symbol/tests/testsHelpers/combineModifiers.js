import getPermutations from 'get-permutations';
import cartesian from 'cartesian';

/**
 * https://www.npmjs.com/package/get-permutations
 *
 * getPermutations(['a','b'])
 * => [['b','a'],['a','b']]
 *
 *
 * https://www.npmjs.com/package/cartesian
 *
 * cartesian([
 * 	['A', 'B', 'C'],
 * 	['M'],
 * 	['X', 'Y'],
 * 	'Z'
 * ]);
 * =>
 * [
 *   [ 'A', 'M', 'X', 'Z' ],
 *   [ 'A', 'M', 'Y', 'Z' ],
 *   [ 'B', 'M', 'X', 'Z' ],
 *   [ 'B', 'M', 'Y', 'Z' ],
 *   [ 'C', 'M', 'X', 'Z' ],
 *   [ 'C', 'M', 'Y', 'Z' ]
 * ]
 */

export default function combineModifiers() {
	return getPermutations([...arguments])
		.map((permutation) => cartesian(permutation))
		.map((permutationProducts) => {
			return permutationProducts.map((product) => {
				product[0] = product[0].replace(/^[b♭#♯].*/, '($&)');
				return product;
			});
		})
		.map((permutationProducts) =>
			permutationProducts.map((product) => product.join(''))
		)
		.flat()
		.sort();
}
