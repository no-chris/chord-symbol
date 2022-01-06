# ChordSymbolUltimateGuitar

Modify the `ChordSymbol` output to be closer with the chord symbols accepted by the Ultimate Guitar website.
If you use `ChordSymbol` to generate chord charts to be submitted on this website, you definitely want to use this filter.

## Usage

```javascript
import { chordParserFactory, chordRendererFactory } from 'chord-symbol';
import chordSymbolUltimateGuitar from '../src/chordSymbolUltimateGuitar';

const parsed = chordParserFactory()('C7(#9)');
const rendered = chordRendererFactory({
	customFilters: [chordSymbolUltimateGuitar()],
	useShortNamings: true,
})(parsed);

// C7#9
```
