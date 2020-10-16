[![Build Status](https://travis-ci.com/no-chris/chord-symbol.svg?branch=master)](https://travis-ci.com/no-chris/chord-symbol)
[![Coverage Status](https://coveralls.io/repos/github/no-chris/chord-symbol/badge.svg?branch=master)](https://coveralls.io/github/no-chris/chord-symbol?branch=master)
[![codebeat badge](https://codebeat.co/badges/00adfedf-2b24-4be2-aabc-8d34354c4ec3)](https://codebeat.co/projects/github-com-no-chris-chord-symbol-master)

# ChordSymbol

`ChordSymbol` is the definitive chord symbol parser and renderer for Javascript/NodeJS.

While most chord parsing libraries expect you to write chord symbols in a specific way, `ChordSymbol` can handle whatever chord syntax you throw at him, or almost. Currently, the unit test suite contains more than 65 000 distinct chords symbols!

`ChordSymbol` will transform a string representing a chord (`Cm7`, for example) into a suite of intervals (`1, b3, 5, b7`) and individual notes (`C, Eb, G, Bb`). It will also normalize the chord symbol, such as it doesn't matter if the original input was `Cm7`,  `CMINOR7`, `C7min`, or `C7mi`: `ChordSymbol` will consistently render it as `Cmi7`. And if you prefer a different kind of normalization, `ChordSymbol` allows you to configure the rendering to your taste.

See it in action on the [demo site](https://chord-symbol.netlify.app/)!
<!-- toc -->

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Migration guides](#migration-guides)
  * [From v0.5.1 to v1.0.0](#from-v051-to-v100)
    + [BREAKING - Intervals consistency](#breaking---intervals-consistency)
    + [BREAKING - API change](#breaking---api-change)
- [Unit tests](#unit-tests)
- [API Documentation](#api-documentation)
- [Background information](#background-information)
  * [Why parse chords symbols?](#why-parse-chords-symbols)
  * [Guiding principles](#guiding-principles)
    + [Chords definition](#chords-definition)
    + [Symbol parsing](#symbol-parsing)
    + [Rendering and normalization](#rendering-and-normalization)
- [Limitations](#limitations)
  * [Intervals consistency](#intervals-consistency)
  * [Support for different notation systems](#support-for-different-notation-systems)
  * [Musical scope](#musical-scope)
- [Lexicon](#lexicon)

<!-- tocstop -->

## Features

- recognize root note and bass note
- identify chord "vertical quality" (`major`, `major7`, `minor`, `diminished`, `diminished7`...)
- recognize extensions, alterations, added and omitted notes
- detect chord intervals
- detect individual chord notes
- check intervals consistency to reject invalid chords
- normalize the chord naming (two options: `academic` and `short`)
- simplify chord
- transpose chord
- recognize a vast number of chords (unit test suite contains more than 65 000 variations!)
- basic support for notes written in `english`, `latin` or `german` notation system (see limitations below)

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

If you want to use the library directly in the browser, you can proceed as follow:

```html
<html>
<body>
<script type="module">
	import { chordParserFactory, chordRendererFactory } from './lib/chord-symbol-esm.js';

	const parseChord = chordParserFactory();
	const renderChord = chordRendererFactory({ useShortNamings: true});

	const chord = parseChord('Cmaj7');
	console.log(renderChord(chord));
    // -> CM7
</script>
</body>
</html>
```

## Migration guides

### From v0.5.1 to v1.0.0

This version contains 2 breaking changes:

#### BREAKING - Intervals consistency

`ChordSymbol` used to parse any valid combinations of modifiers without considering if the resulting interval list would contain invalid intervals combinations.
A new filter has been added ([checkIntervalsConsistency](https://github.com/no-chris/chord-symbol/blob/master/src/parser/filters/checkIntervalsConsistency.js)) to spot most basic mistakes and reject obviously invalid symbols, like `Cm(add3)` or `C(b9)add9`.
As a result, some symbols that would have previously been considered as valid are now rejected and the parser will return `null`.

#### BREAKING - API change
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



## Unit tests

`ChordSymbol` has a **massive** unit test suite of ~70 000 tests!

```shell
npm test
```

It also has a "light" suite, much faster, which does not generate all chords variations (>1300 tests "only"):
```shell
npm run-script test-short
```

## API Documentation

[See this file](https://github.com/no-chris/chord-symbol/blob/master/API.md)

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

The following explains the rationale behind the choices that have been made in the writing of `chord-symbols`. Of course, they are all questionable, and I'm happy to discuss those to improve this lib.

#### Chords definition

Definitions of chords intervals and "_vertical qualities_" is based, as closely as possible, on Mark Harrison's `Contemporary Music Theory` [book series](https://www.harrisonmusic.com). Please report any mistakes or inconsistencies.

#### Symbol parsing

The goal has been for set `ChordSymbol` to be able to recognize correctly:
- all the chords symbols present in Mark Harrison's `Contemporary Music Theory` books series
- all the chords symbols present in `The New Real Book` series (`p.6` of `Volume 1`, for example)

That's already close to 200 distinct chord symbols. 
If you know any other good references that could be added to this list, feel free to suggest them. This goal has been reached and is enforced by the extensive unit test suite.

To support a broader range of use-cases, `ChordSymbol` also has built-in support for a myriad of variations in chord namings. `Cma7` could as well be written `CM7`, `C7M`, `C7major`, `Cmajor7`, `CMa7`, `CMAJOR7`, `CM7`, `C7Δ`, `C^7`, `C7^`... just to name a few of the possible variations. The unit test suite automatically generates all chords variants for a given set of modifiers, bringing the number of recognized chords to over 65 000! 

More than 100 different modifiers are available for you to use as chord descriptors. Among those: `M`, `Maj`, `m`, `minor`, `Δ`, `^`, `b5`, `o`, `-`, `ø`, `#9`, `b13`, `+`, `dim`, `69`, `add11`, `omit3`, etc.   
You can check [the full list](https://github.com/no-chris/chord-symbol/blob/master/src/dictionaries/modifiers.js). Hopefully, this should allow `ChordSymbol` to work out-of-the-box with most available chord charts.

#### Rendering and normalization

Again, the primary source for chord rendering comes from the rules defined by Mark Harrison in his `Contemporary Music Theory` book series. The book `Standardized Chord Symbol Notation` has also been extensively used.

Those rules, however, are sometimes quite academic and does not reflect real-world usage of chords symbols, especially in chords charts available online (but that is true for printed material as well). Who writes the "theoretically" correct `C(add9,omit3)` instead of the incorrect, but widely used, `Csus2`?

For this reason, `ChordSymbol` offer a `shortNamings` option for chord rendering, which is supposed to better reflect current usages. The main differences are:

| Default ("academic") | Short namings |
|----------------------|---------------|
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

`ChordSymbol` can recognize notes written in `english`, `latin` and `german` system with the following limits:
- the Latin `Do` (`C`) conflict with the English `D` and the `o` modifier, which is widely used in some popular software to describe a diminished chord. Given the prevalence of this modifier, priority has been given to it.
Thus, it is not possible to use the `Do` symbol to describe a `C` chord.
- because of the way disambiguation is achieved for this type of conflict, notation systems cannot be mixed in the same symbol. As far as `ChordSymbol` is concerned (and most sane people too, btw), `Sol/B` is not a valid chord, and neither is `Hes/Re`.

### Musical scope

`ChordSymbol` is built with Pop/Rock/Jazz music in mind. It does not recognize [polychords](https://en.wikipedia.org/wiki/Polychord).

## Lexicon

Some helpful vocabulary, should you decide to dig into the source code of this library...

- **Symbol**: the whole group of characters used to describe a given chord. Ex: `C9(#11)/F`
- **Root Note**: the first part of the symbol (1 or 2 characters). Ex: `C`, `Bb`
- **Bass Note**: the note after the last `/` of the symbol, if present. Ex: `F` 
- **Descriptor**: what's between the root and bass note. It is the part that describes which intervals are used in the chord. Ex: `9(#11)`
- **Modifier**: a modification to the intervals of the chord. A modifier can either affect a single interval (`#11`, `add9`...) or multiple intervals (`9`, for `dominant9th`, means that both `b7` and `9` should be added to the chord)
- **Modifier symbol**: different ways of writing the same modifier. A suspended chord can be written `Csus`, `Csus4`,`Csuspended`, `Csuspended4`. All those symbols will yield the same intervals list because they all refer to the same modifier.
- **Changes**: a generic term to group all kinds of changes that can be made to the intervals defined by the chord "vertical quality": extensions, alterations, added and omitted notes.

