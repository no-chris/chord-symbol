[![Build Status](https://travis-ci.com/no-chris/chord-symbol.svg?branch=master)](https://travis-ci.com/no-chris/chord-symbol)
[![Coverage Status](https://coveralls.io/repos/github/no-chris/chord-symbol/badge.svg?branch=master)](https://coveralls.io/github/no-chris/chord-symbol?branch=master)
[![codebeat badge](https://codebeat.co/badges/00adfedf-2b24-4be2-aabc-8d34354c4ec3)](https://codebeat.co/projects/github-com-no-chris-chord-symbol-master)

# ChordSymbol

`ChordSymbol` is the definitive chord symbol parser and renderer for Javascript/NodeJS.

While most chord parsing libraries expect you to write chord symbols in a specific way, `ChordSymbol` can handle whatever chord syntax you throw at him, or almost. Currently, the unit test suite contains more than 37 000 distinct chord symbols!

`ChordSymbol` will transform a string representing a chord (`Cm7`, for example) into a suite of intervals (`1, b3, 5, b7`) and individual notes (`C, Eb, G, Bb`). It will also normalize the chord symbol, such as it doesn't matter if the original input was `Cm7`, `CMINOR7`, `C7min`, or `C7mi`: `ChordSymbol` will consistently render it as `Cmi7`. And if you prefer a different kind of normalization, `ChordSymbol` allows you to configure the rendering to your taste.

See it in action on the [demo site](https://chord-symbol.netlify.app/)!

<!-- toc -->

-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Migration guides](#migration-guides)
    -   [From v0.5.1 to v1.0.0](#from-v051-to-v100)
        -   [Intervals consistency](#intervals-consistency)
        -   [Parser API change](#parser-api-change)
    -   [From v1.2.0 to v2.0.0](#from-v120-to-v200)
        -   [Error handling (API change)](#error-handling-api-change)
        -   [altIntervals configuration (API change)](#altintervals-configuration-api-change)
-   [Unit tests](#unit-tests)
-   [API Documentation](#api-documentation)
-   [Error handling](#error-handling)
-   [Background information](#background-information)
    -   [Why parse chords symbols?](#why-parse-chords-symbols)
    -   [Guiding principles](#guiding-principles)
        -   [Chords definition](#chords-definition)
        -   [Symbol parsing](#symbol-parsing)
        -   [Rendering and normalization](#rendering-and-normalization)
-   [Limitations](#limitations)
    -   [Intervals consistency](#intervals-consistency-1)
    -   [Support for different notation systems](#support-for-different-notation-systems)
    -   [Musical scope](#musical-scope)
-   [Lexicon](#lexicon)

<!-- tocstop -->

## Features

-   recognize root note and bass note
-   identify the chord "vertical quality" (`major`, `major7`, `minor`, `diminished`, `diminished7`...)
-   recognize extensions, alterations, added and omitted notes
-   detect the chord intervals
-   detect individual chord notes
-   check intervals consistency to reject invalid chords
-   normalize the chord naming (two options: `academic` and `short`)
-   simplify a chord
-   transpose a chord
-   recognize a vast number of chords (unit test suite contains more than 37 000 variations!)
-   basic support for notes written in `english`, `latin` or `german` notation system (see limitations below)
-   "pipe-and-filters" architecture: customize the parsing and the rendering with your own processing filters
-   Typescript types

Check the [backlog](https://github.com/no-chris/chord-symbol/projects/2) for upcoming features; feel free to [submit ideas or report any bug](https://github.com/no-chris/chord-symbol/issues).

## Installation

```shell
npm install --save chord-symbol
```

## Usage

```javascript
import { chordPaserFactory, chordRendererFactory } from 'chord-symbol';

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

## Background information

### Why parse chords symbols?

Parsing chord symbols can serve many purposes. For example, you may want to:

1. Check if a given string is a valid chord naming
1. Transpose a chord
1. Convert from one notation system to the other (`english`, `latin`, `german`...)

Those first goals require that the parser gets only a basic understanding of the chord, which is quite easy to achieve. On the other hand, the next goals require a full "musical" understanding of the chord, which is much more challenging for complex shapes. It's also much more rewarding, as it will enable you to:

1. Normalize chord naming: `CM7`, `CMaj7`, `CΔ7`, `Cmajor7` will all be consistently rendered `Cma7` (for example)
1. Simplify a chord: `Cm7(b9,#9)` will automatically be simplified into `Cm`
1. Display the chord fingering for guitar, ukulele, etc.
1. Playback the chord on a computer
1. Or feed the chord intervals to any other piece of software that expects to receive a chord as an input

This library aims to make all this possible by converting chord symbols into a suite of intervals, which can then be named, printed, or passed as an input of other libraries.

A widespread use case of this library would be to use it to render [Chords Charts](https://en.wikipedia.org/wiki/Chord_chart). I wrote it first because I could not find any suitable library for ChordMark, a new way of writing Chords Charts that aims to solve several issues with currents formats.

### Guiding principles

Chord symbols can be defined as "_a musical language [that must] be kept as succinct and free for variants as possible_".

This definition comes from the landmark book `Standardized Chord Symbol Notation: A Uniform System for the Music Profession` by Carl Brandt and Clinton Roemer, in 1976.

Ultimately, the same book later admits that, as the symbols get more and more complex, the process of building chord symbols "_becomes self-defeating. Musical shorthand ceases to exist, and the goal of INSTANT CHORD RECOGNITION AND ANALYSIS is never achieved. While the possible number of chromatically altered chordal functions is finite, [...], it is unreasonable to ask the player to have all of theses combinations stored away for instant read-out._"

Chord symbols also leave a lot of room for interpretation. Depending on who you ask, people will have different ideas on what notes should be played for a given symbol. Most probably, they will also disagree on the correct way to write a given chord name or to name a given set of notes.

For all those reasons, any library for chord parsing and rendering is by design opinionated.

The following explains the rationale behind the choices that have been made in the writing of `ChordSymbol`. Of course, they are all questionable, and I'm happy to discuss those to improve this lib.

#### Chords definition

Definitions of chords intervals and "_vertical qualities_" is based, as closely as possible, on Mark Harrison's `Contemporary Music Theory` [book series](https://www.harrisonmusic.com). Please report any mistakes or inconsistencies.

#### Symbol parsing

The goal has been for set `ChordSymbol` to be able to recognize correctly:

-   all the chords symbols present in Mark Harrison's `Contemporary Music Theory` books series
-   all the chords symbols present in `The New Real Book` series (`p.6` of `Volume 1`, for example)
-   all the chords symbols present in the `iReal Pro` format

That's already close to 280 distinct chord symbols.
If you know any other good references that could be added to this list, feel free to suggest them. This goal has been reached and is enforced by the extensive unit test suite.

To support a broader range of use-cases, `ChordSymbol` also has built-in support for a myriad of variations in chord namings. `Cma7` could as well be written `CM7`, `C7M`, `C7major`, `Cmajor7`, `CMa7`, `CMAJOR7`, `CM7`, `C7Δ`, `C^7`, `C7^`... just to name a few of the possible variations. The unit test suite automatically generates all chords variants for a given set of modifiers, bringing the number of recognized chords to over 37 000!

More than 100 different modifiers are available for you to use as chord descriptors. Among those: `M`, `Maj`, `m`, `minor`, `Δ`, `^`, `b5`, `o`, `-`, `ø`, `#9`, `b13`, `+`, `dim`, `69`, `add11`, `omit3`, etc.  
You can check [the full list](https://github.com/no-chris/chord-symbol/blob/master/src/dictionaries/modifiers.js). Hopefully, this should allow `ChordSymbol` to work out-of-the-box with most available chord charts.

#### Rendering and normalization

Again, the primary source for chord rendering comes from the rules defined by Mark Harrison in his `Contemporary Music Theory` book series. The book `Standardized Chord Symbol Notation` has also been extensively used.

Those rules, however, are sometimes quite academic and does not reflect real-world usage of chords symbols, especially in chords charts available online (but that is true for printed material as well). Who writes the "theoretically" correct `C(add9,omit3)` instead of the incorrect, but widely used, `Csus2`?

For this reason, `ChordSymbol` offer a `shortNamings` option for chord rendering, which is supposed to better reflect current usages. The main differences are:

| Default ("academic") | Short namings |
| -------------------- | ------------- |
| Cma7                 | CM7           |
| Cmi                  | Cm            |
| CmiMa13              | CmM13         |
| C(add9)              | C2            |
| C(add9,omit3)        | Csus2         |
| Cdim                 | C°            |
| Cdim7                | C°7           |
| C(omit5)             | C(no5)        |
| C7(omit3)            | C7(no3)       |

## Limitations

### Intervals consistency

`ChordSymbol` will check intervals consistency to spot most basics errors, like writing a chord symbol that would result in mixing a `b3` with a `3` (`Cm(add3)`, for example).
The enforced rules are very basic, though, so there is no absolute guarantee that `ChordSymbol` will reject all symbols that would be considered "musically incorrect".

### Support for different notation systems

`ChordSymbol` can recognize notes written in `english`, `latin` and `german` systems.
By default, `ChordSymbol` will try all the notation systems one after the other until he properly detects a chord (or not).
This works well in the vast majority of cases, with a notable exception:

-   the Latin `Do` (`C`) conflict with the English `D` and the `o` modifier, which is widely used in some popular software to describe a diminished chord. Given the prevalence of this modifier, priority has been given to it.
    Thus, by default, it is not possible to use the `Do` symbol to describe a `C` chord.
-   if you know for sure the chords that you want to parse are written in the `latin` notation system, you can disable `english` and `german` when configuring the parser (see the [API documentation](https://github.com/no-chris/chord-symbol/blob/master/API.md)).
    This will allows you to parse a `Do` (`C`) chord.

### Musical scope

`ChordSymbol` is built with Pop/Rock/Jazz music in mind. It does not recognize [polychords](https://en.wikipedia.org/wiki/Polychord).

## Lexicon

Some helpful vocabulary, should you decide to dig into the source code of this library...

-   **Symbol**: the whole group of characters used to describe a given chord. Ex: `C9(#11)/F`
-   **Root Note**: the first part of the symbol (1 or 2 characters). Ex: `C`, `Bb`
-   **Bass Note**: the note after the last `/` of the symbol, if present. Ex: `F`
-   **Descriptor**: what's between the root and bass note. It is the part that describes which intervals are used in the chord. Ex: `9(#11)`
-   **Modifier**: a modification to the intervals of the chord. A modifier can either affect a single interval (`#11`, `add9`...) or multiple intervals (`9`, for `dominant9th`, means that both `b7` and `9` should be added to the chord)
-   **Modifier symbol**: different ways of writing the same modifier. A suspended chord can be written `Csus`, `Csus4`,`Csuspended`, `Csuspended4`. All those symbols will yield the same intervals list because they all refer to the same modifier.
-   **Changes**: a generic term to group all kinds of changes that can be made to the intervals defined by the chord "vertical quality": extensions, alterations, added and omitted notes.
