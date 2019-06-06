import _pickBy from 'lodash/pickBy';
import { allSymbols } from '../../../src/dictionaries/modifiers';

export default function getAllSymbolModifiers(modifier) {
	const allSymbolsForModifier = _pickBy(allSymbols, v => v === modifier);

	return Object.keys(allSymbolsForModifier);
}
