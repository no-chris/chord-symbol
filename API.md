## Modules

<dl>
<dt><a href="#parseChord
Parse a potential chord symbol given as a stringmodule_">parseChord
Parse a potential chord symbol given as a string</a></dt>
<dd></dd>
<dt><a href="#chordRendererFactory
Create the rendering function of chord structuresmodule_">chordRendererFactory
Create the rendering function of chord structures</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#parseChord">parseChord(symbol)</a> ⇒ <code><a href="#Chord">Chord</a></code> | <code>Null</code></dt>
<dd><p>Convert an input string into an abstract chord structure</p>
</dd>
<dt><a href="#chordRendererFactory">chordRendererFactory(useShortNamings)</a> ⇒ <code>function</code></dt>
<dd><p>Create a pre-configured chord rendering function</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Chord">Chord</a> : <code>Object</code></dt>
<dd><p>The chord structure returned by parseChord()</p>
</dd>
<dt><a href="#ChordInput">ChordInput</a> : <code>Object</code></dt>
<dd><p>The source from which the chord structure has been built</p>
</dd>
<dt><a href="#NormalizedChord">NormalizedChord</a> : <code>Object</code></dt>
<dd><p>Abstract representation of the chord based on its intervals</p>
</dd>
<dt><a href="#FormattedChord">FormattedChord</a> : <code>Object</code></dt>
<dd><p>Pre-rendered version of the chord with the main &quot;vertical quality&quot; and the chord changes.
Intended to be used as building blocks of a rendered chord</p>
</dd>
</dl>

<a name="parseChord
Parse a potential chord symbol given as a stringmodule_"></a>

## parseChord
Parse a potential chord symbol given as a string
<a name="chordRendererFactory
Create the rendering function of chord structuresmodule_"></a>

## chordRendererFactory
Create the rendering function of chord structures
<a name="parseChord"></a>

## parseChord(symbol) ⇒ [<code>Chord</code>](#Chord) \| <code>Null</code>
Convert an input string into an abstract chord structure

**Kind**: global function  
**Returns**: [<code>Chord</code>](#Chord) \| <code>Null</code> - A chord object if the given string is successfully parsed. Null otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>String</code> | the chord symbol candidate |

<a name="chordRendererFactory"></a>

## chordRendererFactory(useShortNamings) ⇒ <code>function</code>
Create a pre-configured chord rendering function

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| useShortNamings | <code>Boolean</code> | if true, use short rendering instead of the academic rendering of chords |

<a name="chordRendererFactory..renderChord"></a>

### chordRendererFactory~renderChord(chord) ⇒ <code>String</code> \| <code>\*</code>
Render a chord structure

**Kind**: inner method of [<code>chordRendererFactory</code>](#chordRendererFactory)  
**Returns**: <code>String</code> \| <code>\*</code> - output might depends on the selected printer  

| Param | Type | Description |
| --- | --- | --- |
| chord | [<code>Chord</code>](#Chord) | the chord structure to render |

<a name="Chord"></a>

## Chord : <code>Object</code>
The chord structure returned by parseChord()

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| input | [<code>ChordInput</code>](#ChordInput) | everything derived from the string given as a parameter to parseChord() |
| normalized | [<code>NormalizedChord</code>](#NormalizedChord) | abstract representation of the chord based on its intervals |
| formatted | [<code>FormattedChord</code>](#FormattedChord) | pre-rendering of the normalized chord |

<a name="ChordInput"></a>

## ChordInput : <code>Object</code>
The source from which the chord structure has been built

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| symbol | <code>String</code> | the exact string given as an input to the parseChord() function |
| rootNote | <code>String</code> | the root note from the input string |
| [bassNote] | <code>String</code> | the bass note from the input string |
| [descriptor] | <code>String</code> | the string between the root note and the bass note |
| parsableDescriptor | <code>String</code> | the modified descriptor such as parsing is possible |

<a name="NormalizedChord"></a>

## NormalizedChord : <code>Object</code>
Abstract representation of the chord based on its intervals

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| rootNote | <code>String</code> | the normalized root note in english notation |
| [bassNote] | <code>String</code> | the normalized bass note in english notation |
| intervals | <code>Array.&lt;String&gt;</code> | list of intervals composing the chord. Ex: \['1', 'b3', '5', 'b7'\] for Cmi7 |
| semitones | <code>Array.&lt;Number&gt;</code> | intervals converted to semitones. Ex: \[0, 3, 7, 10\] |
| intents | <code>Object</code> | keep track of intents that are part of the symbol but cannot be conveyed by the interval list only |
| intents.major | <code>Boolean</code> | whether the chord has a major quality or not. Especially useful to find the source quality of suspended chords |
| intents.eleventh | <code>Boolean</code> | for edge cases ; allows to differentiate between C9sus and C11 |
| quality | <code>String</code> | "Vertical quality" of the chord, its core characteristics, usually conveyed by the 3rd and the 7th, and sometimes the 5th |
| isSuspended | <code>Boolean</code> | whether the chord has a suspended 3rd or not |
| extensions | <code>Array.&lt;String&gt;</code> | upper extensions of the base chord, can be one or more of '9', '11' & '13' |
| alterations | <code>Array.&lt;String&gt;</code> | notes that are part of the chord or its extensions, but either flattened or sharpened |
| adds | <code>Array.&lt;String&gt;</code> | added notes that are neither extensions nor alterations |
| omits | <code>Array.&lt;String&gt;</code> | removed notes from chord |

<a name="FormattedChord"></a>

## FormattedChord : <code>Object</code>
Pre-rendered version of the chord with the main "vertical quality" and the chord changes.
Intended to be used as building blocks of a rendered chord

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| rootNote | <code>String</code> | formatted root note |
| [bassNote] | <code>String</code> | formatted bass note |
| descriptor | <code>String</code> | the descriptor, gives the vertical quality of the chords and its extensions |
| chordChanges | <code>Array.&lt;String&gt;</code> | sorted and prefixed list of changes, whether altered, added or omitted notes. |

