[![Build Status](https://travis-ci.com/no-chris/chord-symbol.svg?branch=master)](https://travis-ci.com/no-chris/chord-symbol)
[![Coverage Status](https://coveralls.io/repos/github/no-chris/chord-symbol/badge.svg?branch=master)](https://coveralls.io/github/no-chris/chord-symbol?branch=master)
[![codebeat badge](https://codebeat.co/badges/00adfedf-2b24-4be2-aabc-8d34354c4ec3)](https://codebeat.co/projects/github-com-no-chris-chord-symbol-master)

# ChordSymbol

`ChordSymbol` is a parser and renderer for chord symbols. It transforms a string that represent a chord (`Cm7`, for example), into a suite
of intervals: `1, b3, 5, b7`. It also normalize the chord characteristics by isolating its quality, 
extensions, alterations, added and omitted notes. This later allow to render the chords in a normalized way.

I wrote it because I could not find anything both accurate and flexible enough for my needs among available libraries.

See the [demo site](https://no-chris.github.io/chord-symbol).

<!-- toc -->

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Unit tests](#unit-tests)
- [API Documentation](#api-documentation)
- [Background information](#background-information)
  * [Why parse chords symbols?](#why-parse-chords-symbols)
  * [Guiding principles](#guiding-principles)
    + [Chords definition](#chords-definition)
    + [Symbol parsing](#symbol-parsing)
    + [Rendering and normalization](#rendering-and-normalization)
- [Limitations](#limitations)
  * [No constrains](#no-constrains)
  * [Support for different notation systems](#support-for-different-notation-systems)
  * [Musical scope](#musical-scope)
- [Lexicon](#lexicon)

<!-- tocstop -->

## Features

- [x] recognize root note and bass note
- [x] recognize chord "vertical quality" (`major`, `major7`, `minor`, `diminished`, `diminished7`...)
- [x] recognize extensions, alterations, added and omitted notes
- [x] convert chord symbol into a list of intervals
- [x] normalize the chord naming (two options: `academic` and `short`)
- [x] recognize a huge number of chords (unit test suite contains more than 65 000 variations!)
- [x] basic support for notes written in `english`, `latin` or `german` notation system (see limitations below)
- [x] transpose chord
- [x] simplify chord

Coming soon:
- [ ] select notation system for rendering (`english`, `latin`, `german`)
- [ ] render to Nashville notation system
- [ ] find chord individual notes
- [ ] allow custom processing. `ChordSymbol` use a pipe-and-filters architecture for both parsing and rendering.
The plan is to allow for custom filters to be added if such capability is needed 
(add extra information on parsing, define custom rendering rules, etc.)

## Installation

```
npm install --save chord-symbol
```

## Usage

```
import { parseChord, chordRendererFactory } from 'chord-symbol';

const chord = parseChord('C9sus');

const renderChord = chordRendererFactory({ useShortNamings: true });

console.log(renderChord(chord));
// -> C11
```

## Unit tests

`ChordSymbol` has a **massive** unit test suite of ~70 000 tests!

```
npm test
```

It also has a "light" suite, much faster, which does not generate all chords variations (>1200 tests "only"):
```
npm run-script test-short
```

## API Documentation

[See this file](https://github.com/no-chris/chord-symbol/blob/master/API.md)

## Background information

### Why parse chords symbols?
Parsing chord symbol can serve a number of different purposes. For example, you may want to:
1. Check if a given string can be considered as a valid chord naming
1. Transpose a chord
1. Convert from one notation system to the other (`english`, `latin`, `german`...)

Those first goals require that the parser gets only a basic understanding of the chord.
This is quite easy to achieve. The next goals, on the other hand, require a full "musical" 
understanding of the chord, which is much more challenging for complex shapes.
It's also much more rewarding, as it will enable you to:

1. Normalize chord naming: `CM7`, `CMaj7`, `CΔ7`, `Cmajor7` will all be consistently rendered `Cma7` (for example)
1. Simplify a chord: `Cm7(b9,#9)` will automatically be simplified into `Cm`
1. Display the chord fingering for guitar, ukulele, etc.
1. Playback the chord on a computer
1. Or feed the chord intervals to any other piece of software that expects to receive a chord as an input

This library aims to make all this possible by converting chord symbols into a suite of intervals, 
which can then be named, printed, or passed as an input of other libraries.

A very common use case of this library would be to use it to render [Chords Charts](https://en.wikipedia.org/wiki/Chord_chart).
I actually wrote it first because I could not find any suitable library for ChordMark, a new way of writing Chords Charts 
that aims to solve a number of issues with currents formats.

### Guiding principles

Chord symbols can be defined as "_a musical language [that must] be kept as succinct and free for variants as possible_". 
This definition is taken from the landmark book `Standardized Chord Symbol Notation: A Uniform System for the Music Profession` 
by Carl Brandt and Clinton Roemer, in 1976.

Ultimately, the same book later admits that, as the symbols get more and more complex, the process of building chord symbols
"_becomes self-defeating. Musical shorthand ceases to exist, and the goal of INSTANT CHORD RECOGNITION AND ANALYSIS
is never achieved. While the possible number of chromatically altered chordal functions is finite, [...] 
it is unreasonable to ask the player to have all of theses combinations stored away for instant read-out._"

Chord symbols also leaves a lot of room for interpretation. Depending on who you ask, people will have
different ideas on what notes should be played for a given symbol. 
Most probably, they will also disagree on what is the correct way to write a given chord name, 
or on the way to name a given set of notes.

For all those reasons, any chord parsing and rendering library is by design opinionated. 

The following explain the rationale behind the choices that have been made in the writing of `chord-symbols`.
Of course they are all questionable and I'm happy to discuss those in order to improve this lib.

#### Chords definition

Definitions of chords intervals and "_vertical qualities_" is based, as closely as possible, on Mark Harrison's 
`Contemporary Music Theory` [book series](https://www.harrisonmusic.com).
Please report any mistake or inconsistencies.

#### Symbol parsing

Goal has been for set `ChordSymbol` to be able to correctly recognize:
- all the chords symbols present in Mark Harrison's `Contemporary Music Theory` books series
- all the chords symbols present in `The New Real Book` series (`p.6` of `Volume 1`, for example)

That's already close to 200 distinct chord symbols. 
If you know any other good references that could be added to this list, feel free to suggest them.
This goal has been reached and is enforced by the extensive unit test suite.

In order to adapt for a wider range of use-cases, `ChordSymbol` also has built-in support for a myriad of variations in chord namings.
For example, `Cma7` could as well be written `CM7`, `C7M`, `C7major`, `Cmajor7`, `CMa7`, `CMAJOR7`, `CM7`, `C7Δ`, `C^7`, `C7^`
... just to name a few of the possible variations.
The unit test suite automatically generate all chords variants for a given set of modifiers, bringing the number of 
recognized chords to over 65 000! 

More than 100 different modifiers are available for you to use as chord descriptors. 
Among those: `M`, `Maj`, `m`, `minor`, `Δ`, `^`, `b5`, `o`, `-`, `ø`, `#9`, `b13`, `+`, `dim`, `69`, `add11`, `omit3`, etc.   
You can check [the full list](https://github.com/no-chris/chord-symbol/blob/master/src/dictionaries/modifiers.js). Hopefully, this should allow `ChordSymbol` to work out-of-the-box with most available chord charts.

#### Rendering and normalization

Again, primary source for chord rendering is based on rules defined by Mark Harrison's `Contemporary Music Theory` book series.
The book `Standardized Chord Symbol Notation` has also been extensively used.

Those rules, however, are sometimes quite academic and does not reflect real-world usage of chords symbols, 
especially in chords charts available online (but that is true for printed material as well).
Who write the "theoretically" correct `C(add9,omit3)` instead of the incorrect, but widely used, `Csus2`?

For this reason, `ChordSymbol` offer a `shortNamings` option for chord rendering, which is supposed to better
reflect current usages. Main differences are:

| Default ("academic") | Short namings |
|----------------------|---------------|
| Cma7                 | CM7           |
| Cmi                  | Cm            |
| C(add9)              | C2            |
| C(add9,omit3)        | Csus2         |
| C7(#5)               | C7+           |
| Cdim                 | C°            |
| Cdim7                | C°7           |
| C(omit5)             | C(no5)        |
| C9sus                | C11           |
| C7(omit3)            | C7(no3)       |


## Limitations

### No constrains

`ChordSymbol` will do its best to infer the correct intervals from the symbol that you are writing, but will not prevent
you from describing weird chords that makes little to no musical sense. 
For example, you can write `Cmi(add3)` and it will yield `1-b3-3-5`, which correctly translate the intent 
behind the symbol, even though the musical intent is questionable at best.
Deciding what should be "_musically correct_" or not, however, is a vast topic that is way beyond the scope 
of the current library. 

### Support for different notation systems

`ChordSymbol` can recognize notes written in `english`, `latin` and `german` system with the following limits:
- the latin `Do` (`C`) conflict with the english `D` and the `o` modifier, which is widely used in some popular software 
to describe a diminished chord. Given the prevalence of this modifier, priority has been given to it.
For this reason, it is not possible to use the `Do` symbol to describe a `C` chord.
- because of the way disambiguation is achieved for this type of conflicts, notation systems cannot be mixed in the same symbol.
As far as `ChordSymbol` is concerned (and most sane people too, btw), `Sol/B` is not a valid chord, and neither is `Hes/Re`.

### Musical scope

`ChordSymbol` is built with Pop/Rock/Jazz music in mind. It does not recognize [polychords](https://en.wikipedia.org/wiki/Polychord).

## Lexicon

Some helpful vocabulary, should you decide to dig into the source code of this library...

- **Symbol**: the whole group of characters used to describe a given chord. Ex: `C9(#11)/F`
- **Root Note**: first part of the symbol (1 or 2 characters). Ex: `C`, `Bb`
- **Bass Note**: note after the last `/` of the symbol, if present. Ex: `F` 
- **Descriptor**: what's between the root and bass note. It is the part that describe which intervals are used in the chord. Ex: `9(#11)`
- **Modifier**: a modification to the intervals of the chord. A modifier can either affect a single interval (`#11`, `add9`...) 
or multiple intervals (`9`, for `dominant9th`, means that both `b7` and `9` should be added to the chord)
- **Modifier symbol**: different ways of writing the same modifier. A suspended chord can be written `Csus`, `Csus4`,`Csuspended`, `Csuspended4`. 
All those symbols will yield the same intervals list because they all refers to the same modifier.
- **Changes**: a generic term to group all kinds of changes that can be made to the intervals defined by the chord "vertical quality":
extensions, alterations, added and omitted notes.
