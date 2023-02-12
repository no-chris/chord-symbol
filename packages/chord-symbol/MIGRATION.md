# Migration guides

<!-- toc -->

-   [From v3.x.x to v4.0.0](#from-v3xx-to-v400)
-   [From v2.x.x to v3.0.0](#from-v2xx-to-v300)
-   [From v1.x.x to v2.0.0](#from-v1xx-to-v200)
    -   [Error handling (API change)](#error-handling-api-change)
    -   [altIntervals configuration (API change)](#altintervals-configuration-api-change)
-   [From v0.5.1 to v1.0.0](#from-v051-to-v100)
    -   [Intervals consistency](#intervals-consistency)
    -   [Parser API change](#parser-api-change)

<!-- tocstop -->

## From v3.x.x to v4.0.0

### Unbundled by default

Using `ChordSymbol`'s default import now requires a bundler. If that does not work for you, you need to explicitely import the bundled version.

To use the bundled version, instead of:

```javascript
import { chordPaserFactory } from 'chord-symbol';
```

Do:

```javascript
import { chordPaserFactory } from 'chord-symbol/lib/chord-symbol.js';
```

### Accidental API

The API to set which accidental to use has been simplified to a single parameter instead of two.

Instead of:

```javascript
const renderChord = chordRendererFactory({
	harmonizeAccidentals: false,
	useFlats: false,
});

const renderChordWithSharp = chordRendererFactory({
	harmonizeAccidentals: true,
	useFlats: false,
});

const renderChordWithFlat = chordRendererFactory({
	harmonizeAccidentals: true,
	useFlats: true,
});
```

do:

```javascript
const renderChord = chordRendererFactory({
	accidental: 'original',
});

const renderChordWithSharp = chordRendererFactory({
	accidental: 'sharp',
});

const renderChordWithFlat = chordRendererFactory({
	accidental: 'flat',
});
```

## From v2.x.x to v3.0.0

If you don't use custom filters, then you are not concerned by this breaking change.

The logic to assemble the formatted chord (eg. putting together the `chord.formatted` pieces) now happens _before_ the custom filters.
This has an impact only for the `text` printer, and if your custom filter used to change any of the `chord.formatted` properties and expected `ChordSymbol` to glue them together.
In that case, you will now need to assemble the pieces yourself in the `chord.formatted.symbol` property of the `Chord` object, or directly process this new `symbol` property to apply your changes.
This change was introduced to give more flexibility to custom filters, that might not agree with `ChordSymbol` default way of assembling chord parts.

## From v1.x.x to v2.0.0

`v2.0.0` contains 1 breaking change:

### Error handling (API change)

The parser function does not return `null` anymore in case of a parsing failure, but an object with an error property.
You need to test the returned object to know if the parsing succeeded or not.

Instead of:

```javascript
const chord = parseChord('C7M7');
if (chord) {
	const rendered = renderChord(chord);
	console.log(rendered);
} else {
	console.log('The parsing failed!');
}
```

do:

```javascript
const chord = parseChord('C7M7');
if (!chord.error) {
	const rendered = renderChord(chord);
	console.log(rendered);
} else {
	// Error handling...
}
```

### altIntervals configuration (API change)

`altIntervals` configuration was a bit cumbersome and verbose. It has been simplified for consistency with the `notationSystem` configuration:
to declare the list of intervals that the `alt` modifier should use, just pass an array with those intervals (for ex: `['b5', '#5]`).
An empty array (`[]`) will disable everything, while not specifying anything will result in all possible intervals to be affected, as before.

Instead of:

```javascript
const parseChord = chordParserConfiguration({
	altIntervals: {
		ninthFlat: false,
		ninthSharp: false,
		eleventhSharp: false,
		thirteenthFlat: false,
	},
});
```

do:

```javascript
const parseChord = chordParserConfiguration({
	altIntervals: ['b5', '#5'],
});
```

## From v0.5.1 to v1.0.0

`v1.0.0` contains 2 breaking changes:

### Intervals consistency

`ChordSymbol` used to parse any valid combinations of modifiers without considering if the resulting interval list would contain invalid intervals combinations.
A new filter has been added ([checkIntervalsConsistency](https://github.com/no-chris/chord-symbol/blob/master/src/parser/filters/checkIntervalsConsistency.js)) to spot most basic mistakes and reject obviously invalid symbols, like `Cm(add3)` or `C(b9)add9`.
As a result, some symbols that would have previously been considered as valid are now rejected and the parser will return `null`.

### Parser API change

You now need to create a parser by using the `chordParserFactory` instead of importing the parser directly.
This allows greater flexibility by offering the possibility to configure the parser.

In short, instead of:

```javascript
import { parseChord } from 'chord-symbol';

const chord = parseChord('C9sus');
```

do:

```javascript
import { chordPaserFactory } from 'chord-symbol';

const parseChord = chordParserFactory();
const chord = parseChord('C9sus');
```
