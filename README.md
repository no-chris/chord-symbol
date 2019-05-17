## Guiding principles (functional)

### Universality

`chord-symbol` should be able to parse the largest possible amount of chords symbols. In order to achieve this goal, it should:
- recognize most popular note naming schemes: `english`, `german` or `latin`;
- recognize all kind of syntax of chords modifiers: `Major7` should work as well as `Δ7`;
- recognize modifiers independently of the order they are written: `Cm7(#11)` should yield the same result than `C(#11)7m`, even if the latest is very unlikely to be written that way;
- allow any combination of modifiers as long as they produce a valid suite of intervals (and even if the results might sound horrible).

### Efficiency

To produce a specific chord, it should always be possible to use the shortest possible and unambiguous notation.

### Reference-based

Interpretation of chords modifiers, as well of normalized rendering of chords symbols, are based on information gathered in Mark Harrison's `Contemporary Music Theory` books series.

Rendering guidelines are very close - though with some differences - to the principles found in `Standardized Chord Symbol Notation: A Uniform System for the Music Profession (1976)` by Carl Brandt and Clinton Roemer.

### Exactitude



## Guiding principles (non-functional)

- `TDD`first. `chord-symbol` has a *massive* test suite with generated test cases to ensure maximum coverage of all possible chords variations.
- Low barriers entry for community contribution: plain Javascript, little to no dependencies, in-line documentation and 100% code coverage.
