# Changelog

## v2.1.0 (19/01/2021)

#### Enhancements:

- Detail alterations yielded by the "alt" modifier in the `normalized.alterations` array [#392](https://github.com/no-chris/chord-symbol/pull/392)

#### Bug Fixes:

- Update types to reflect 2.0.0 changes [#393](https://github.com/no-chris/chord-symbol/pull/393)
- Always consider #11 and b13 as alterations [#387](https://github.com/no-chris/chord-symbol/pull/387)

---

## v2.0.0 (02/01/2021)

#### Enhancements:

- BREAKING: change altIntervals configuration API [#369](https://github.com/no-chris/chord-symbol/pull/369)
- Render to specified notation system [#367](https://github.com/no-chris/chord-symbol/pull/367)
- Configure the notation systems to be used by the parser [#366](https://github.com/no-chris/chord-symbol/pull/366)
- BREAKING: return an error property with an explanation on why the parsing failed [#360](https://github.com/no-chris/chord-symbol/pull/360)

#### Documentation:

- Generate CHANGELOG.md with gren [#361](https://github.com/no-chris/chord-symbol/pull/361)

#### Bug Fixes:

- Correct "input" property in raw printer with specific notation systems selected during parsing [#368](https://github.com/no-chris/chord-symbol/pull/368)

---

## v1.2.0 (28/11/2020)

#### Enhancements:

- Handle b6 modifier [#335](https://github.com/no-chris/chord-symbol/pull/335)
- Add the detected modifiers to the "input" object [#333](https://github.com/no-chris/chord-symbol/pull/333)
- Add iReal Pro chords symbols to the unit test suite [#322](https://github.com/no-chris/chord-symbol/pull/322)

#### Bug Fixes:

- Fix parsing of ^ and Δ [#334](https://github.com/no-chris/chord-symbol/pull/334)

---

## v1.1.1 (26/10/2020)

#### Bug Fixes:

- ship types with npm [#294](https://github.com/no-chris/chord-symbol/pull/294)

---

## v1.1.0 (26/10/2020)

#### Enhancements:

- Handle user filters to customise the parsing and the rendering [#292](https://github.com/no-chris/chord-symbol/pull/292)
- Format code with prettier [#282](https://github.com/no-chris/chord-symbol/pull/282)
- Add Typescript types [#278](https://github.com/no-chris/chord-symbol/pull/278)

#### Bug Fixes:

- parser config in Chord Object should have type ParserConfiguration [#283](https://github.com/no-chris/chord-symbol/pull/283)
- Fix symbols that were not properly parsed [#285](https://github.com/no-chris/chord-symbol/pull/285)

---

## v1.0.0 (17/10/2020)

#### Enhancements:

- Add raw printer to get back the chord object after rendering [#270](https://github.com/no-chris/chord-symbol/pull/270)
- BREAKING: Add parsing filter to check intervals consistency [#258](https://github.com/no-chris/chord-symbol/pull/258)
- BREAKING: Add factory to allow parser configuration [#237](https://github.com/no-chris/chord-symbol/pull/237)
- Add parsing filter to name individual chord notes [#265](https://github.com/no-chris/chord-symbol/pull/265)
- Handle "alt" modifier [#253](https://github.com/no-chris/chord-symbol/pull/253)
- Add ESM bundle to allow direct usage in browser [#239](https://github.com/no-chris/chord-symbol/pull/239)

#### Documentation:

- Add migration guide to v1.0.0 [#238](https://github.com/no-chris/chord-symbol/pull/238)

---

## v0.5.1 (22/06/2020)
*No changelog for this release.*

---

## v0.5.0 (22/06/2020)
*No changelog for this release.*

---

## v0.4.2 (15/06/2019)
*No changelog for this release.*

---

## v0.4.1 (15/06/2019)

#### Enhancements:

- Add stryker for mutation testing [#8](https://github.com/no-chris/chord-symbol/pull/8)

---

## v0.4.0 (09/06/2019)

#### Enhancements:

- Add simplify rendering filter [#5](https://github.com/no-chris/chord-symbol/pull/5)
- Add transpose rendering filter [#6](https://github.com/no-chris/chord-symbol/pull/6)

---

## v0.3.0 (08/06/2019)
*No changelog for this release.*

---

## v0.2.1 (08/06/2019)
*No changelog for this release.*

---

## v0.2.0 (08/06/2019)
*No changelog for this release.*
