# ChordSymbol

`ChordSymbol` is the definitive chord symbol parser and renderer for Javascript/NodeJS.

See it in action on the [demo site](https://chord-symbol.netlify.app/) or in [ChordMark](https://chordmark.netlify.app), the newest chord charts format!

## Installation

```shell
npm install --save chord-symbol
```

## Usage

```javascript
import { chordParserFactory, chordRendererFactory } from 'chord-symbol';

const parseChord = chordParserFactory();
const renderChord = chordRendererFactory({ useShortNamings: true });

const chord = parseChord('Cmaj7');

console.log(renderChord(chord));
// -> CM7
```

If you want to use the library directly in the browser, you can proceed as follows:

```html
<html>
	<body>
		<script type="module">
			import {
				chordParserFactory,
				chordRendererFactory,
			} from './lib/chord-symbol-esm.js';

			const parseChord = chordParserFactory();
			const renderChord = chordRendererFactory({ useShortNamings: true });

			const chord = parseChord('Cmaj7');
			console.log(renderChord(chord));
			// -> CM7
		</script>
	</body>
</html>
```

## Migration guides

### From v0.5.1 to v1.0.0

`v1.0.0` contains 2 breaking changes:

#### Intervals consistency

`ChordSymbol` used to parse any valid combinations of modifiers without considering if the resulting interval list would contain invalid intervals combinations.
A new filter has been added ([checkIntervalsConsistency](https://github.com/no-chris/chord-symbol/blob/master/src/parser/filters/checkIntervalsConsistency.js)) to spot most basic mistakes and reject obviously invalid symbols, like `Cm(add3)` or `C(b9)add9`.
As a result, some symbols that would have previously been considered as valid are now rejected and the parser will return `null`.

#### Parser API change

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

### From v1.2.0 to v2.0.0

`v2.0.0` contains 1 breaking change:

#### Error handling (API change)

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

#### altIntervals configuration (API change)

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

## Unit tests

`ChordSymbol` has a **massive** unit test suite of ~117 000 tests!

```shell
npm test
```

It also has a "light" suite, much faster, which does not generate all chords variations (~1600 tests "only"):

```shell
npm run-script test-short
```

## API Documentation

[See this file](https://github.com/no-chris/chord-symbol/blob/master/API.md)

## Error handling

By default, `ChordSymbol` tries to parse a symbol three times, each time with the root and bass notes written in a different notation system:
`english` first, then `german` and finally `latin`. You can fine-tune this behavior by configuring the parser to use only selected notation systems
(see the [API documentation](https://github.com/no-chris/chord-symbol/blob/master/API.md)).
If any of those attempts succeed, then the given string is considered as a valid chord, and the parser returns a `Chord` object.
If all of them fails, then `ChordSymbol` returns an object with an `error` property.

This `error` property contains an array of all errors that occurred during the parsing.
Each error is at least described by a `type` and a `message`
(see the [API documentation](https://github.com/no-chris/chord-symbol/blob/master/API.md)).
When the error appears in the context of a specific notation system, then the given system is specified
in the `notationSystem` property of each error object.

Here is a description of all the error types:

| Error type         | Reason                                                                                                                                                                                | Example              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `InvalidInput`     | The parser was not given a valid string to parse                                                                                                                                      | `parseChord(null)`   |
| `NoSymbolFound`    | The given string cannot be confused with a chord symbol in the current notation system                                                                                                | `parseChord('Ape')`  |
| `InvalidModifier`  | The given string looks like a chord symbol, but `ChordSymbol` does not understand its descriptor. It can be either because of a typo, or just because the given word is not a symbol. | `parseChord('Amid')` |
| `InvalidIntervals` | The given string is a chord symbol, but the resulting interval list is not valid                                                                                                      | `parseChord('A7M7')` |
| `UnexpectedError`  | This error is very unlikely to happen. If it does, it is probably in the context of a custom filter that returns `null` instead of throwing an exception.                             | `-`                  |

A given string will yield different errors depending on the notation system used during the parsing attempt.
For example, `H7M7` will produce:

-   a `NoSymbolFound` error in the `english` notation system;
-   an `InvalidIntervals` error in the `german` notation system;
-   a `NoSymbolFound` error in the `latin` notation system.

In that example, the `error` property of the object returned by the parser will be an array with 3 entries.

Regarding the rendering function, any error will produce a `null` value.
The client code should then thoroughly test the renderer output to avoid throwing errors (especially when using the `raw` printer).

## Lexicon

Some helpful vocabulary, should you decide to dig into the source code of this library...

-   **Symbol**: the whole group of characters used to describe a given chord. Ex: `C9(#11)/F`
-   **Root Note**: the first part of the symbol (1 or 2 characters). Ex: `C`, `Bb`
-   **Bass Note**: the note after the last `/` of the symbol, if present. Ex: `F`
-   **Descriptor**: what's between the root and bass note. It is the part that describes which intervals are used in the chord. Ex: `9(#11)`
-   **Modifier**: a modification to the intervals of the chord. A modifier can either affect a single interval (`#11`, `add9`...) or multiple intervals (`9`, for `dominant9th`, means that both `b7` and `9` should be added to the chord)
-   **Modifier symbol**: different ways of writing the same modifier. A suspended chord can be written `Csus`, `Csus4`,`Csuspended`, `Csuspended4`. All those symbols will yield the same intervals list because they all refer to the same modifier.
-   **Changes**: a generic term to group all kinds of changes that can be made to the intervals defined by the chord "vertical quality": extensions, alterations, added and omitted notes.
