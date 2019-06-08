# Contributing guidelines

Many thanks for reading this and considering contributing to this project, this is fantastic!

Any kind of pull requests (PR) is very much welcome: new feature, bugfixes, typos, documentation, etc.

To make it easier for contributors to respect coding guidelines and standards, a build pipeline has been 
setup. It enforces:
- respect of lint rules
- a fully working unit test suite
- code coverage threshold (100%, no less)
- anti-library bloat with `size-limit` monitoring
- auto update of the demo site
- auto update of Readme TOC and API documentation

# In practice

- create atomic PR. 1 PR equals 1 feature/bugfix/change.
- once you are done with your changes, make sure the build pass:
```
npm run-script build
```
If it fails on any other stage than the last two steps, please fix it before submitting the PR for review.

The unit test suite takes a long time to run (> 2 minutes on my Macbook pro). 
During development, you can use the short suite that does not generate symbol variations:
```
npm run-script test-short
```

Thanks a lot!

Christophe
