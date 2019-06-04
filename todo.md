+ check for invalid chars
+ change edge case replacement functions
+ Cmisus Cmisus4 (fig 1.31)
+ have 11 instead of 4 (no?)
+ create "light" and "heavy" test suites
+ demo site
+ change parsing strategy: remove ma7, ma9... for atomic modifiers
+ handle 7 + 6 chord as 13 or add 13
+ Cm13(#11) =>  Cm13(add #11) => OK
+ Domit3 => let's accept that as a known issue
+ Cm+ => C+(add b3) : WTF?!
+ rendering of D9(b13) vs D(b13) => add or not?
+ parse 11 to 11 instead of 4 ? add C11 to shortNamings
+ do not allow multiple times the same modifier

+ question: suspended vs add4?
    weird rendering: Cadd11, C4
- add symbols from https://raw.githubusercontent.com/felixroos/jazzband/master/scripts/sheets.json
- option to disable latin name parsing, have test failing ambiguous Fadd or other Esus: or start with english, if null try parsing in other systems
- add run chain
- avoid concurrent qualities?

Render functionality:
Filters:
- simplify (level1: keep bass and 7th, level2: keep min and maj triad)
- transpose
- system converter (latin / etc)
+ normalizer 
+ normalizer "simplifier" (!)
- chord notes

Printers:
+ text
+ raw
- html
- react component
- "Realbook markup"



https://opensource.guide/
