+ check for invalid chars
+ change edge case replacement functions
+ Cmisus Cmisus4 (fig 1.31)
+ have 11 instead of 4 (no?)
- create "light" and "heavy" test suites
- complete dom7 with mi7, dom9 with mi9...: really?
- handle 7 6 chord as 13 or add 13
- add chords in CMT glossary
- demo site

Render functionality:
Middlewares:
- simplify
- transpose
- system converter
- normalizer => optionnel ou non ?

- normalize with profile(academic / web / ) profile = combination of parameters (short mi/ma, sus2 vs add9no3, etc.)
- simplify
- transpose
- change notation system (latin / etc)
- render to react component
- render to "Realbook markup"

A renderer could hold the state of the wanted rendering:
rendererFactory()
    .simplify()
    .transpose()

