import _ from 'lodash';
import symbolsToModifiers from '../../../src/symbolsToModifiers';

export default function getAllSymbolModifiers(modifier) {
	return _.chain(symbolsToModifiers)
		.pickBy(v => v === modifier)
		.keys()
		.value();
}
