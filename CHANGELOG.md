#### 0.2.1 (2019-06-08)

##### Build System / Dependencies

*  Add github links to package.json ([9711b730](https://github.com/no-chris/chord-symbol/commit/9711b7308871446f00d4fa32e787b21c318165ec))

##### Documentation Changes

*  Fix API documentation link on NPM ([ba9b7dbb](https://github.com/no-chris/chord-symbol/commit/ba9b7dbb68e858d7f3f4df5ffdc84314d5a868c9))

### 0.2.0 (2019-06-08)

##### Build System / Dependencies

*  prepare package.json for release, prepare auto changelog (f36e18f7)
*  add codebeatignore badge (0c2d3349)
*  add codebeatignore file (29db3fc7)
*  Add Travis and Coveralls (d2724815)
*  Add size limit check to build pipeline (8eff2e60)
*  Build (290de2c6)
*  Add build pipeline and fix unit tests (ec4f4eb1)

##### Chores

*  Add Travis and Coveralls Badges (9b5ea391)
*  Complete documentation (5143089a)
*  Add documentation (ccdd79e1)
*  rewrite README and CONTRIBUTING guidelines (c3ca36dd)
*  Add contributors guide and code of conduct (1e1975dd)
*  Clearly defined objectives and scope in Readme (815f9f3a)
*  Clearly defined objectives and scope in Readme (0d7c4821)
*  Clearly defined objectives and scope in Readme (6836a8d7)
*  Add editor files (4597a5ce)

##### New Features

* **demo:**
  *  Improve demo site with nicer CSS and less details (c838d841)
  *  Display of root and bass note (e124ef78)
  *  Add demo site (df3591bd)
* **parser:**
  *  Allow disambiguation of some rootNotes + descriptors (d0d66836)
  *  Handle add4 properly (51e2913a)
  *  6 is now parsed 13 if 7th is present (8719f05b)
  *  Handle notes variants and notation systems (93d773ee)
  *  Add more edge case handling and invalid chord detection (31ecf658)
  *  Add 96 and 9/6 modifiers, refactor tests (d3c6509d)
  *  All chords from Contemporary Music Theory recognized (b0c6789c)
  *  Start Refactor. All Real book chords are recognized (d0e2c97e)
  *  Add tests on chord validity (dfcece4b)
  *  Add basic parser with tests (f3f3ec79)
* **renderer:**
  *  More edge cases handling (b0dffbe7)
  *  Add chordRendererFactory, implement useShortNamings (add0f830)
  *  First version of chord printer (7e425f3d)
*  Add lodash dependency (b231e69f)

##### Bug Fixes

* **parser:**
  *  recognize properly Bmi(add3) and Cm+ (a2203f38)
  *  Add disambiguators for edge cases of modifiers combinations (1b0273cf)

##### Refactors

*  Rename dictionaries (5a0306f1)
*  fix inspections (e2314127)
*  Add chain helper (d032492f)
*  Rename test folder (ee252002)
* **parser:**
  *  clean up code and increase coverage (9ec9a1d0)
  *  change the parsing method for a pipe-and-filter algorithm (e6771573)
  *  Change the parsing algorithm for more flexibility (1e2f492f)
  *  New algorithm much more performant (347cd684)
* **demo:**  Add specific package.json for demo app (73c071ef)

##### Tests

*  restore 100% coverage (ede95391)
*  Add env variable to create 2 different test suites (562bb23a)
* **parser:**  Refactor and add new tests for combined modifiers (988c90ff)

