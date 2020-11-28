### 1.2.0 (2020-11-28)

##### Build System / Dependencies

* **deps-dev:**
  *  bump webpack-bundle-analyzer from 3.9.0 to 4.1.0 ([634d625c](https://github.com/no-chris/chord-symbol/commit/634d625c8a4695cc53a635e95623b931c1a98729))
  *  bump eslint from 7.12.1 to 7.13.0 ([cef9d35b](https://github.com/no-chris/chord-symbol/commit/cef9d35b62cb42d2161b329d904883d8d0337199))
  *  bump webpack-cli from 4.1.0 to 4.2.0 ([6d0af42b](https://github.com/no-chris/chord-symbol/commit/6d0af42b66dabdd2661b6a2acf6bd63b7392c792))
  *  bump webpack from 5.2.0 to 5.4.0 ([50c539d2](https://github.com/no-chris/chord-symbol/commit/50c539d2cf07fa0a8a316d3a18f022dfe9e08bf5))
  *  bump babel-jest from 26.6.1 to 26.6.3 ([2c2ddf15](https://github.com/no-chris/chord-symbol/commit/2c2ddf1570a9211e4145d8bdd0fc59d04eda8d07))
  *  bump @rollup/plugin-commonjs from 15.1.0 to 16.0.0 ([8636d099](https://github.com/no-chris/chord-symbol/commit/8636d0991a4e9720e1ac08eaa2ff5b3fc83738c4))
  *  bump jest from 26.6.1 to 26.6.3 ([f2034fee](https://github.com/no-chris/chord-symbol/commit/f2034fee785d42b989aa7e36e167cf6a4bd5fcfa))
  *  bump rollup from 2.32.1 to 2.33.1 ([fa48b17b](https://github.com/no-chris/chord-symbol/commit/fa48b17b99be2ef9ac61b1bbc4fe155a6b04b307))
  *  bump @rollup/plugin-node-resolve from 9.0.0 to 10.0.0 ([4de1c845](https://github.com/no-chris/chord-symbol/commit/4de1c845a5979ef90874ec9d2fe352afa30f9930))
  *  bump eslint from 7.12.0 to 7.12.1 ([8a917dd0](https://github.com/no-chris/chord-symbol/commit/8a917dd0eba0a5bff0dccefc6f5daa8337d44efa))
  *  bump typescript from 4.0.3 to 4.0.5 ([9dd3edfa](https://github.com/no-chris/chord-symbol/commit/9dd3edfa7fbb8a2bbae1e6d12d07f3a0bb053c30))

##### Documentation Changes

*  fix short unit test suite test count ([c17e78ae](https://github.com/no-chris/chord-symbol/commit/c17e78aefdd59e155afb893ebac1ce408f521dac))
*  Add iReal Pro reference in Readme ([9e0ba8b7](https://github.com/no-chris/chord-symbol/commit/9e0ba8b762538d531116e0a9d441a1163591262c))

##### New Features

* **parser:**
  *  Recognize b6 modifier ([e75e733d](https://github.com/no-chris/chord-symbol/commit/e75e733d78727e8c7356dc613c83e325eb5127a4))
  *  Add the detected modifiers to "input" object ([b410c5e0](https://github.com/no-chris/chord-symbol/commit/b410c5e0cf3faddf2d197d2d0746836864b10b01))

##### Bug Fixes

* **parser:**
  *  sort added intervals ([a9a07534](https://github.com/no-chris/chord-symbol/commit/a9a075342fce39e86236cd54fb62de5d44675f5a))
  *  ^ and Δ now yields a Maj7 chord instead of a Maj chord ([4a3b978c](https://github.com/no-chris/chord-symbol/commit/4a3b978c325cd64503ace426907c981368bb7ae6))

##### Tests

*  adapt test cases to the new syntax ([25befd97](https://github.com/no-chris/chord-symbol/commit/25befd9755ccdd95a35be610a4298e6fb3188f27))
*  add iReal Pro chords symbols to the unit test suite ([70b74114](https://github.com/no-chris/chord-symbol/commit/70b741145ec1d6e7de5360aedb6c2606b44ca009))

#### 1.1.1 (2020-10-26)

### 1.1.0 (2020-10-26)

##### Build System / Dependencies

*  update travis node dependency ([9893a56c](https://github.com/no-chris/chord-symbol/commit/9893a56c5326e9f7880ece48475f54e4457717df))
*  lower size-limit threshold ([51380b49](https://github.com/no-chris/chord-symbol/commit/51380b49ad9a86fafc5873ec97ea125f5041f31d))
*  update dependencies ([53a76923](https://github.com/no-chris/chord-symbol/commit/53a7692354b677abb7efb4d85d018dcabb1e7260))
*  update node dependency ([736a04b3](https://github.com/no-chris/chord-symbol/commit/736a04b3b080caaef28a171b62d150046e8c838b))
* **deps-dev:**
  *  bump rollup from 2.31.0 to 2.32.0 ([e714ca7a](https://github.com/no-chris/chord-symbol/commit/e714ca7a7fa1f318d06c3aee03915da4498c4114))
  *  bump @babel/core from 7.12.1 to 7.12.3 ([37236ec7](https://github.com/no-chris/chord-symbol/commit/37236ec7354b9bd54253aa0cfa24f8099992fe00))

##### Chores

*  bundle ([8e03c1e0](https://github.com/no-chris/chord-symbol/commit/8e03c1e05cbd3cfd851cc4086d0736e9c73217b2))
*  update bundle ([33d359c9](https://github.com/no-chris/chord-symbol/commit/33d359c95e272d48958db07e7a4a04af6b9800ff))
*  remove todo ([1418b894](https://github.com/no-chris/chord-symbol/commit/1418b8948ca6afc53effbd430d4f4f86023af238))

##### Documentation Changes

*  Document the custom Filters functionality ([341cc96d](https://github.com/no-chris/chord-symbol/commit/341cc96deba30a70575c0071f369775781785f6c))
*  update API doc ([d232aaed](https://github.com/no-chris/chord-symbol/commit/d232aaedae423cbd5bee9d9c370be622dd7ecc06))
*  Fix Jsdoc declaration and move type definitions to own file ([002680b8](https://github.com/no-chris/chord-symbol/commit/002680b8b93ce63347cca5813eea24f3049a1eca))

##### New Features

* **renderer:**  Apply user filters during rendering ([415582b6](https://github.com/no-chris/chord-symbol/commit/415582b6633914173a0d49622b3bbecd8407876e))
* **parser:**  Apply user filters during parsing ([09aee727](https://github.com/no-chris/chord-symbol/commit/09aee7277c2135add27daba4af179ed7de792bda))
*  apply prettier rules to all files ([61839e4e](https://github.com/no-chris/chord-symbol/commit/61839e4e17c876ce491a4e711f35dca5e2f3bcc4))
*  add prettier and prettier config ([a9a258cc](https://github.com/no-chris/chord-symbol/commit/a9a258cc8c50a595ba128f244449caebd94cfd2b))
*  add default values and fix types definition errors ([58b03529](https://github.com/no-chris/chord-symbol/commit/58b03529f931f9a334458f39aa4f1b253372140e))
*  add explicit type exports to type definition file ([1f7a7bfa](https://github.com/no-chris/chord-symbol/commit/1f7a7bfafe1e14313986bd2b1998f0bbd6827a4a))
*  Replace auto-generated typescript files with a handcrafted one, remove typescript stage from the build ([00028677](https://github.com/no-chris/chord-symbol/commit/0002867749ccb5af75720de0087d2c9469771a4d))
*  rebuild project with types ([95f8c4da](https://github.com/no-chris/chord-symbol/commit/95f8c4da248c8c88ac0571ca6a2269270ae6f4ce))
*  Add typescript to dev dependencies ([61de068d](https://github.com/no-chris/chord-symbol/commit/61de068d75bacea1e2e26d88e28a44c3cd690ae1))

##### Bug Fixes

*  typo ([4a755208](https://github.com/no-chris/chord-symbol/commit/4a755208963b78db9e1ee518ffd35c65e0cd7cec))
* **parser:**
  *  C4 modifier now yields a Csus4 chord ([95f458e9](https://github.com/no-chris/chord-symbol/commit/95f458e967505594e138153e74cdf4bd989b216b))
  *  Add11 does not yield anymore a suspended chord ([20cfbe8e](https://github.com/no-chris/chord-symbol/commit/20cfbe8e9772bf8e5c0438a8091c4283845970af))
* **renderer:**  Fix 11th simplification without other simplified modifiers ([edc3714c](https://github.com/no-chris/chord-symbol/commit/edc3714c2cc51418f9f9bf7115e574950e892c0d))

##### Refactors

*  rename userFilters to customFilters ([869a3614](https://github.com/no-chris/chord-symbol/commit/869a3614263d31d5241939a9c52b22fdd43ee0cd))
* **parser:**  Extract getParsableDescriptor to own filter ([912c94ca](https://github.com/no-chris/chord-symbol/commit/912c94cac10f6e861537f030ced86559fc6a4acf))

##### Code Style Changes

*  reduce line length in tests ([5a4feb2b](https://github.com/no-chris/chord-symbol/commit/5a4feb2b2dc5408b69daf37d42691e3ea34615ea))

## 1.0.0 (2020-10-16)

##### Build System / Dependencies

* **deps-dev:**  bump html-webpack-plugin from 4.3.0 to 4.4.1 ([6a8b4f03](https://github.com/no-chris/chord-symbol/commit/6a8b4f03ea7a160bde1759caeebfb0a90e091b9c))
* **deps:**  bump lodash from 4.17.15 to 4.17.20 in /docs-src ([4adebc02](https://github.com/no-chris/chord-symbol/commit/4adebc02dfeac5ecb239ba519600813e135a5072))
*  Add rollup to create bundle in ES6 module format ([7bae99f6](https://github.com/no-chris/chord-symbol/commit/7bae99f651746e510afeaad5bcedae271416bc4f))

##### Chores

*  build ([53e2b9b7](https://github.com/no-chris/chord-symbol/commit/53e2b9b790e6d21590d189c345c9f3e8ff0b7231))
*  bundle ([88ad1081](https://github.com/no-chris/chord-symbol/commit/88ad1081a29a248c3da90acd56d04b446b44a845))
*  Bundle ([ba38e976](https://github.com/no-chris/chord-symbol/commit/ba38e976268b69da2857ebefb697d4ad7d5787e9))

##### Documentation Changes

*  Fix short namings documentation in README ([a1dbca37](https://github.com/no-chris/chord-symbol/commit/a1dbca379e25ca49813b2fd5c95fc45c4bb7e88b))
*  Update readme ([824495c7](https://github.com/no-chris/chord-symbol/commit/824495c7a59b070e762f66e3f26a46a1fe23a2df))
*  Add backlog and issue trackers reference to the README, update feature list ([97c7959a](https://github.com/no-chris/chord-symbol/commit/97c7959a6e3b254b6aa0fcfaa1ab70c96e1cf3a5))
*  Remove demo site from repository ([7d5b88f4](https://github.com/no-chris/chord-symbol/commit/7d5b88f4017fb404edcf6522202b4e787d54d6ce))
*  Improve documentation on alt intervals configuration. Fix typos. ([3f7164da](https://github.com/no-chris/chord-symbol/commit/3f7164da73a04798760e3ddc3dd0b5b2243228c8))
*  Update bundle and demo site ([e2f92393](https://github.com/no-chris/chord-symbol/commit/e2f923938770bb7845fda36b59db4c28792780b0))
*  Update migration guide to v1.0.0 ([4b6d7b0f](https://github.com/no-chris/chord-symbol/commit/4b6d7b0f30a17fdf71803ea00bce5fe553e328d5))
*  Update documentation on limitations to reflect the use of the new filter ([e7610164](https://github.com/no-chris/chord-symbol/commit/e76101641dfa8ca46d1c6154372077da1769e553))
*  Add missing functions signature declaration ([3bade13b](https://github.com/no-chris/chord-symbol/commit/3bade13ba57839d0c05ad265fcbe77a04159996f))
*  Document defaultAltIntervals constant ([45f8ceee](https://github.com/no-chris/chord-symbol/commit/45f8ceeef8882d95a1137c42cbd504ea8e8f9e0f))
*  Update documentation on how to configure the alt modifier ([708f37f3](https://github.com/no-chris/chord-symbol/commit/708f37f37048a990ef0883a821c808c0fbd493b4))
*  Update documentation to reflect new bundle name ([d3d39fe3](https://github.com/no-chris/chord-symbol/commit/d3d39fe3f0abee581238cc337ac59873dbc85813))
*  Add notice on the usage of rollup at the top of the rollup config file ([2c1acc96](https://github.com/no-chris/chord-symbol/commit/2c1acc9691df82ddec6c9b68b63eab54338f75df))
*  Add documentation on ESM browser usage ([03d3f716](https://github.com/no-chris/chord-symbol/commit/03d3f7165d529b2882ddf6253fa1be069352d877))
*  fix typos ([41d1664f](https://github.com/no-chris/chord-symbol/commit/41d1664f3fd7fbc3113f2df7c83787a4b49b7eee))
*  Add migration guide from 0.5.1 to 1.0.0 ([897bc468](https://github.com/no-chris/chord-symbol/commit/897bc468c883c4979c3f30eeed0413c6c98c3a6b))
* **parser:**  Update parser API documentation ([8022e379](https://github.com/no-chris/chord-symbol/commit/8022e379154357df98a45c4ab03edcbdc196af96))

##### New Features

* **demo:**
  *  add redirect to the new demo site ([f1fd159a](https://github.com/no-chris/chord-symbol/commit/f1fd159ab4d2a9a427993f6a05c66fe3cea2b211))
  *  Update parser API in demo site ([9c2f490d](https://github.com/no-chris/chord-symbol/commit/9c2f490da6abe3b04b747307f8e91203c02c3fcd))
* **renderer:**
  *  remove parenthesis around (alt) ([286d5a71](https://github.com/no-chris/chord-symbol/commit/286d5a7176dba15b33b1e7bccdbf898e550c0f14))
  *  ensure each filter update its part of the chord representation only, then ensure an holistic representation is returned - including "input" properties - by the raw filter. ([26b7c1ef](https://github.com/no-chris/chord-symbol/commit/26b7c1ef1f34f46ad9c3ed23caeb599afe44b835))
  *  ensure the raw representation of the rendered chord is consistent with the enabled filters ([920ae397](https://github.com/no-chris/chord-symbol/commit/920ae39704539d7a3ce9fa11f7d9e7043b4ca8d2))
  *  Create raw printer to retrieve the processed chord object ([f77132f1](https://github.com/no-chris/chord-symbol/commit/f77132f1be2fe845249c0f5a8c82017c614335d0))
  *  Handle alt intent in rendering filters ([daa0c068](https://github.com/no-chris/chord-symbol/commit/daa0c0681f30133e760b232262e34e354fb39b1a))
* **parser:**
  *  Enable all alterations by default with the alt modifier ([1249c0c3](https://github.com/no-chris/chord-symbol/commit/1249c0c3d10b34a5cbf03829bee984f3a6f75e7b))
  *  Save the parser configuration in the chord object to allow reparsing the chord in the raw printer ([5b911b79](https://github.com/no-chris/chord-symbol/commit/5b911b79ea61f82061e3e10ff9fbe799b1bfaccd))
  *  Add filter to name individual chord notes ([34df468a](https://github.com/no-chris/chord-symbol/commit/34df468a9b4adde58a96913907355b9088ea4993))
  *  Add more forbidden combos ([151e6f29](https://github.com/no-chris/chord-symbol/commit/151e6f29bf62d709ac63b0a6bb6f11bb062e1635))
  *  Add interval checker to the parser and add integration tests ([e44d1bdd](https://github.com/no-chris/chord-symbol/commit/e44d1bddba86e014c0089bedb06e82378ae9f3fc))
  *  Add checkIntervalsConsistency filter ([45b10ef0](https://github.com/no-chris/chord-symbol/commit/45b10ef080249a4d4d74224fd7c245f0540f22d7))
  *  Normalize alt chords and make it dominant7 by default ([cce1b077](https://github.com/no-chris/chord-symbol/commit/cce1b077de9e7826811d25ff371423d56d36d1b8))
  *  Add alt intent ([99a6fd14](https://github.com/no-chris/chord-symbol/commit/99a6fd1464ffb095fa40150a37e7529d9eece7ce))
  *  Configure intervals yield by alt modifier ([1e1cedc2](https://github.com/no-chris/chord-symbol/commit/1e1cedc22bfbdfe1d9ec81c57d9f1dc049efb23e))
  *  Expose a parser Factory instead of the parser function to allow future parser configuration ([175793a9](https://github.com/no-chris/chord-symbol/commit/175793a99463143ea792b19bb647bb98a335f24c))

##### Bug Fixes

* **parser:**  fix typos ([30c9a22f](https://github.com/no-chris/chord-symbol/commit/30c9a22f7a44044065914b77d229ec6e8ec6190b))

##### Refactors

* **renderer:**  remove unsued file ([4a6bd435](https://github.com/no-chris/chord-symbol/commit/4a6bd4350b7c3eb648cffd323216c4f44faaf9e1))
*  Extract majorQualities to dictionnairies ([136ced57](https://github.com/no-chris/chord-symbol/commit/136ced5717ab1fd7a48a0dbacae596736ba3aedb))
*  change esm bundle extension for better compatibility with Apache default configuration that do not handle *.mjs files ([7909f285](https://github.com/no-chris/chord-symbol/commit/7909f285d096bbf6da324e528ac6532d70478586))
*  use proper rollup plugin dependencies ([3312d38e](https://github.com/no-chris/chord-symbol/commit/3312d38e111b27dcea23feb43713442534a93a59))

##### Tests

* **renderer:**
  *  Ensure the parserConfiguration is passed throught the raw printer ([41f38797](https://github.com/no-chris/chord-symbol/commit/41f38797630eb185d44f97e03cb4aa312124f744))
  *  Enforce immutability of rendered paramater ([fd4b5e6e](https://github.com/no-chris/chord-symbol/commit/fd4b5e6ef2b865768b37e27e6f3b7d6b19fbfa9a))
* **parser:**  Add more unit tests for notes detection ([dc7565df](https://github.com/no-chris/chord-symbol/commit/dc7565dfc70986f55788a1666bc3dfbf1fadcc3a))
* **demo:**  Add more unit tests ([c3b8312e](https://github.com/no-chris/chord-symbol/commit/c3b8312ec031b70985adf67f825e77149049ba89))

#### 0.5.1 (2020-06-22)

##### Build System / Dependencies

* **deps:**  bump acorn from 6.3.0 to 6.4.1 in /docs-src ([ed31f126](https://github.com/no-chris/chord-symbol/commit/ed31f126317df1fa460119fd71189f53fa1731d8))

##### Other Changes

* no-chris/chord-symbol ([ec2e4f10](https://github.com/no-chris/chord-symbol/commit/ec2e4f103b0ca17a3f9b9299869492da55a1d330))

### 0.5.0 (2020-06-22)

##### Build System / Dependencies

* **deps-dev:**
  *  bump @babel/preset-env from 7.8.4 to 7.8.6 ([75412889](https://github.com/no-chris/chord-symbol/commit/7541288920a2937e0c782b0dd47bc6e91873b1f9))
  *  bump @babel/core from 7.8.4 to 7.8.6 ([53d6f972](https://github.com/no-chris/chord-symbol/commit/53d6f9721edf4166b74b79b1bdd08eeaddc0b724))
  *  bump webpack-cli from 3.3.7 to 3.3.8 ([d6541d36](https://github.com/no-chris/chord-symbol/commit/d6541d36b548c83afe3fe3f2750e98793df8a7fe))
  *  bump @size-limit/preset-small-lib from 2.1.1 to 2.1.2 ([bdf41432](https://github.com/no-chris/chord-symbol/commit/bdf4143227623b3be4869448b52058fabdb1f067))
  *  bump size-limit from 2.1.1 to 2.1.2 ([de243c74](https://github.com/no-chris/chord-symbol/commit/de243c747e508fc38b63fb6bb944d08e8c5d12cf))
  *  bump eslint from 6.2.1 to 6.3.0 ([810379db](https://github.com/no-chris/chord-symbol/commit/810379db1300984ead6a0d87f9888028c3911cba))
  *  bump jsdoc-to-markdown from 5.0.0 to 5.0.1 ([ac673057](https://github.com/no-chris/chord-symbol/commit/ac6730576178d7ade9013acc36e8c55e4e5cebe1))
  *  bump webpack from 4.39.2 to 4.39.3 ([5b540b1f](https://github.com/no-chris/chord-symbol/commit/5b540b1f127e189660c814bf6bad510f6bfc74d9))
  *  bump jest from 24.8.0 to 24.9.0 ([42df072a](https://github.com/no-chris/chord-symbol/commit/42df072a0361f464e741c0622166de1695739e72))
  *  bump size-limit from 2.0.2 to 2.1.1 ([08487e61](https://github.com/no-chris/chord-symbol/commit/08487e619756e37c5556f5eae5b97fa712d12c95))
  *  bump webpack from 4.39.1 to 4.39.2 ([9ffe8b18](https://github.com/no-chris/chord-symbol/commit/9ffe8b18fbf79b4559d0edb209a953b633186b82))
  *  bump eslint from 6.1.0 to 6.2.1 ([e8b020bc](https://github.com/no-chris/chord-symbol/commit/e8b020bc72e0f6a412fdef97b13d0dace9dc8693))
  *  bump webpack-cli from 3.3.6 to 3.3.7 ([3cea4515](https://github.com/no-chris/chord-symbol/commit/3cea4515c1dd619427e67a2904165f8d9823d465))
  *  bump babel-jest from 24.8.0 to 24.9.0 ([32ed6e9e](https://github.com/no-chris/chord-symbol/commit/32ed6e9ee5863dabb5a74d5427318e76b54cc650))
  *  bump @size-limit/preset-small-lib from 2.0.2 to 2.1.1 ([ff0a8df5](https://github.com/no-chris/chord-symbol/commit/ff0a8df5256247370499fe1216f6873624f8224a))
  *  bump coveralls from 3.0.4 to 3.0.5 ([17a9bf64](https://github.com/no-chris/chord-symbol/commit/17a9bf6403060c489341ac6fed51cd41c1c18183))
  *  bump @stryker-mutator/jest-runner from 2.0.0 to 2.0.1 ([b9dcfe4b](https://github.com/no-chris/chord-symbol/commit/b9dcfe4bda8b12bc64b0adbf749ae9a013ca59a5))
  *  bump @stryker-mutator/javascript-mutator ([21d88a87](https://github.com/no-chris/chord-symbol/commit/21d88a87930a2e87fcd57be453a2a1cf9f6381a9))
  *  bump @stryker-mutator/core from 2.0.0 to 2.0.1 ([dd514547](https://github.com/no-chris/chord-symbol/commit/dd5145473e93e0d9da4c65f32c7bc456f963da94))
  *  bump webpack from 4.35.0 to 4.35.2 ([16eba7cc](https://github.com/no-chris/chord-symbol/commit/16eba7ccc7ed5cf2442dc7193882028ba07f7806))
  *  bump generate-changelog from 1.7.1 to 1.8.0 ([819a461c](https://github.com/no-chris/chord-symbol/commit/819a461c4e1a94db55441bdfda471ffb018f689d))
  *  bump eslint from 5.16.0 to 6.0.1 ([0bd9d7fc](https://github.com/no-chris/chord-symbol/commit/0bd9d7fce0f8108e774be6bccc5282ff21672134))
  *  bump webpack-cli from 3.3.4 to 3.3.5 ([d13a3a36](https://github.com/no-chris/chord-symbol/commit/d13a3a36121af7cbaee4a40cd7f5e320099403af))
  *  bump webpack from 4.34.0 to 4.35.0 ([1831f456](https://github.com/no-chris/chord-symbol/commit/1831f456f123cf27c3ac2ea32d27711215eb59dc))
  *  bump size-limit from 1.3.6 to 1.3.7 ([b226eb7f](https://github.com/no-chris/chord-symbol/commit/b226eb7f76d10bc28c84ab51f984477b02456b1b))
* **deps:**
  *  bump custom-piano-keys from 0.0.13 to 0.0.14 ([f71921df](https://github.com/no-chris/chord-symbol/commit/f71921df58732e35444649eff5b4ced15e271f97))
  *  Update dependencies ([9ef83adf](https://github.com/no-chris/chord-symbol/commit/9ef83adf452df8932fbe4d379282e4468ff85964))
  *  bump mixin-deep from 1.3.1 to 1.3.2 in /docs-src ([5d9c2bf0](https://github.com/no-chris/chord-symbol/commit/5d9c2bf08bfd9b32e36cfe694e3d7f0a9224f078))
  *  [security] bump mixin-deep from 1.3.1 to 1.3.2 ([4f9d5fad](https://github.com/no-chris/chord-symbol/commit/4f9d5fad5ca1e7a6d876f4a5ab8923e1cdeb8066))
  *  bump lodash from 4.17.11 to 4.17.15 in /docs-src ([ecb1d3d3](https://github.com/no-chris/chord-symbol/commit/ecb1d3d305a94b59c13586739a1b02d63e34330b))
  *  bump core-js from 3.2.0 to 3.2.1 ([15b62095](https://github.com/no-chris/chord-symbol/commit/15b620952534361e846d69c1ae0bff55343f5782))
  *  [security] bump remarkable from 1.7.1 to 1.7.4 ([695f1f5e](https://github.com/no-chris/chord-symbol/commit/695f1f5eb0d8ac40f25e09f4ce34358ab174123a))
  *  bump core-js from 3.1.3 to 3.1.4 ([d190bc2c](https://github.com/no-chris/chord-symbol/commit/d190bc2c8621dbfcb6da933cc5e2013d60be4a24))

##### Documentation Changes

*  fix typos in readme ([0c019408](https://github.com/no-chris/chord-symbol/commit/0c019408fc5cb2c776e6553f22f8502dec93ff8f))

##### New Features

* **demo:**
  *  Moved Custom Piano Key integration into a dedicated Showcase section ([11ed5ef3](https://github.com/no-chris/chord-symbol/commit/11ed5ef3b9ed9f3b5605128c0594770ce14372ee))
  *  Add Google Analytics tracking code ([5c010320](https://github.com/no-chris/chord-symbol/commit/5c0103209f574f21ab4d0df8d66785b070bfa655))

##### Bug Fixes

*  Fix size limit build step ([30c7c4b1](https://github.com/no-chris/chord-symbol/commit/30c7c4b13f01dbf5abdf9bd6ab82d87df416ba93))

##### Other Changes

* no-chris/chord-symbol ([63ef827e](https://github.com/no-chris/chord-symbol/commit/63ef827e264f1e41124acfd40c7ee2889e6e5458))
* no-chris/chord-symbol ([6f2e2537](https://github.com/no-chris/chord-symbol/commit/6f2e25379e0c974b6467d206f61225803d1d10e8))

#### 0.4.2 (2019-06-15)

##### Build System / Dependencies

* **deps-dev:**  bump webpack from 4.33.0 to 4.34.0 ([d072534b](https://github.com/no-chris/chord-symbol/commit/d072534b6aafdd0bd85a6fd563e1408734d21581))

#### 0.4.1 (2019-06-15)

##### Build System / Dependencies

* **deps-dev:**  bump webpack-cli from 3.3.3 to 3.3.4 ([5c93f99d](https://github.com/no-chris/chord-symbol/commit/5c93f99db614407e94a4a8c82697b3be218bfa05))

##### Documentation Changes

*  Update feature list ([9e6c8705](https://github.com/no-chris/chord-symbol/commit/9e6c87058e8f3abcbe03362966577b0a5b35bdcc))

##### Bug Fixes

*  Do not minify bundle ([4c6d2c9c](https://github.com/no-chris/chord-symbol/commit/4c6d2c9c425f3bec436eec3c5ed07047bebfb0fd))
* **renderer:**  Fix rendering with invalid simplify value ([f98432f6](https://github.com/no-chris/chord-symbol/commit/f98432f6ce5ab9d62b2d21f4101a8fe587223719))

##### Tests

*  remove stryker from travis (too long!) ([ae5c2828](https://github.com/no-chris/chord-symbol/commit/ae5c2828fac18c06759a8b0fd8486c37ba6712bf))
*  add stryker to travis ([8e0eb826](https://github.com/no-chris/chord-symbol/commit/8e0eb826f99f1c34506c430f53823009096b019c))
*  Add stryker for mutation testing ([366142cc](https://github.com/no-chris/chord-symbol/commit/366142ccefa465e185935a7d4088421b8b380a1d))

### 0.4.0 (2019-06-09)

##### Build System / Dependencies

*  Enforce 100% coverage on build ([140bd6f7](https://github.com/no-chris/chord-symbol/commit/140bd6f79e6854e0d94b75e49b2659cbd5690d74))
*  Update node dependency in travis.yml ([ceef6e9e](https://github.com/no-chris/chord-symbol/commit/ceef6e9eb62042e324dd6754407ab3d3d85d8880))

##### Chores

*  Add bundled file to codebeatignore ([34bcecd8](https://github.com/no-chris/chord-symbol/commit/34bcecd8203c074eb29f0b4155d5f74acbf6e02f))
*  Add bundled file to codebeatignore ([2152d045](https://github.com/no-chris/chord-symbol/commit/2152d0459feca4a5bb4522c7a7f1410450acc0e2))

##### New Features

* **renderer:**
  *  Add transposing capabilities ([0f47a982](https://github.com/no-chris/chord-symbol/commit/0f47a982bdfa9de9f4434206e810f02029a155ae))
  *  Add rendering filter to simplify chords ([77b19fa4](https://github.com/no-chris/chord-symbol/commit/77b19fa4d93e21389a1f27e6d20a0e1d69aaacd6))

### 0.3.0 (2019-06-08)

##### Build System / Dependencies

*  Make the bundle version usable as a library (!) ([40497493](https://github.com/no-chris/chord-symbol/commit/40497493a6049bc982cd387d74af20b08f3bdacd))

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

