# chord-symbol



## Why parse chords symbols?
Being able to parse chord symbol can serve a number of different purposes. For example, you may want to:
1. Check if a given string can be considered as a valid chord naming
1. Transpose a chord
1. Simplify a chord
1. Convert from one notation system to the other (`english`, `latin`, `german`, `Nashville`)

Those first goals require that the parser gets only a basic understanding of the chord. This is quite easy to achieve.
The next goals, on the other hand, require a full "musical" understanding of the chord, which is much more challenging for complex shapes.
It's also much more rewarding, as this will enable you to:

1. Normalize chord naming
1. Display the chord fingering on a instrument
1. Playback the chord on a computer
1. etc.

This library aims to make all this possible by converting chord symbols into a suite of intervals, which can then be named and printed, or passed as an input of other libraries.

A very common use case of this library would be to use it to render [Chords Charts](https://en.wikipedia.org/wiki/Chord_chart).
I actually wrote it first because I could not find any suitable library for ChordMark, a new way of writing Chords Charts that aims to solve a number of issues with currents formats.

## Guiding principles

### Clearly defined scope

The objective of `chord-symbol` is to be able to parse correctly most chords symbols used to describe Pop/Rock/Jazz music.
This objective will be considered to be met if the library can fully understand all chords definitions of symbols present in:
- `The New Real Book` series (`p.6` of `Volmume 1`)
- Mark Harrison's `Contemporary Music Theory` book series

That's more than 110 distinct chords symbols, from the basic `C` to the uncommon `C7(b9,#9,#11,b13)`. 
Of course, `chord-symbol` does not limit itself to this list and is able to recognize a much greater amount of chords symbols.

### Universality

`chord-symbol` should be able to parse the largest possible amount of chords symbols. In order to achieve this goal, it should:
- recognize most popular note naming schemes: `english`, `german` or `latin`;
- recognize all kind of syntax of chords modifiers: `Major7` should work as well as `Δ7`;
- recognize modifiers independently of the order they are written: `Cm7(#11)` should yield the same result than `C(#11)7m`, even if the latest is very unlikely to be written that way;
- recognize modifiers in parenthesis (`C(add#9)`), and multiple comma-separated alterations (`C7(b9,#9,#11,b13)`)

### Efficiency

To produce a specific chord, it should always be possible to use the shortest possible and unambiguous notation.

### Reference-based

Interpretation of chords modifiers, as well of normalized rendering of chords symbols, are based on information gathered in Mark Harrison's `Contemporary Music Theory` books series.

Rendering guidelines are very close - though with some differences - to the principles found in `Standardized Chord Symbol Notation: A Uniform System for the Music Profession (1976)` by Carl Brandt and Clinton Roemer.

### Flexibility over musical constrains

For now, `chord-symbol` does not care if the chord you are writing makes any kind of "musical" sense. Feel free to write `Csusb55#567` if you feel like it, and the parser will yield the corresponding interval list.
Don't expect it to sound good, though, nor to be recognized by a chord fingering library ;-)

## Non functional requirements

- `TDD` first. To meet the guiding principle of `Universality`, `chord-symbol` has a *massive* unit test suite with generated test cases to ensure correct parsing of all possible chords symbols variations.
- Low barriers to entry for community contributors: plain Javascript, little to no dependencies, in-line documentation, 100% code coverage, and contributor guide.

# Contributor guide

- 


# Lexicon

- **Symbol**: the whole group of characters used to describe a given chord. Ex: `C9(#11)/F`
- **Root Note**: first part of the symbol (1 or 2 characters). Ex: `C`, `Bb`
- **Bass Note**: note after the last `/` of the symbol, if present. Ex: `F` 
- **Descriptor**: what's between the root and bass note. It is the part that describe which intervals are used in the chord. Ex: `9(#11)`
- **Modifier**: a modification to the intervals of the chord. A modifier can either affect a single interval (`#11`, `add9`...) 
or multiple intervals (`9`, for `dominant9th`, means that both `b7` and `9` should be added to the chord)
- **Modifier symbol**: different ways of writing the same modifier. A suspended chord can be written `Csus`, `Csus4`,`Csuspended`, `Csuspended4`. 
All those symbols will yield the same intervals list because they all refers to the same modifier.
