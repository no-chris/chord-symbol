import _pickBy from 'lodash/pickBy';
import symbolsToModifiers from './symbolsToModifiers';

export default function getAllSymbolModifiers(modifier) {
	const allSymbols = _pickBy(symbolsToModifiers, v => v === modifier);

	return Object.keys(allSymbols);
}
