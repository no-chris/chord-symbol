import _pickBy from 'lodash/pickBy';
import allModifiersSymbols from '../../../src/dics/allModifiersSymbols';

export default function getAllSymbolModifiers(modifier) {
	const allSymbols = _pickBy(allModifiersSymbols, v => v === modifier);

	return Object.keys(allSymbols);
}
