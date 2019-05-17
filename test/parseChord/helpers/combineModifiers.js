import getPermutations from 'get-permutations';
import cartesian from 'cartesian';

export default function combineModifiers() {
	return getPermutations([...arguments])
		.map(permutation => cartesian(permutation))
		.map(permutationProducts => permutationProducts.map(product => product.join('')))
		.flat()
		.map(modifier => (['b', '♭', '#', '♯'].includes(modifier[0]) ? `(${modifier})` : modifier))
		.sort();
}
