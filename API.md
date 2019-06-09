## Modules

<dl>
<dt><a href="#parseChord
Expose the parseChord_new functionmodule_">parseChord
Expose the parseChord() function</a></dt>
<dd></dd>
<dt><a href="#chordRendererFactory
Expose the chordRendererFactory_new functionmodule_">chordRendererFactory
Expose the chordRendererFactory() function</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#parseChord">parseChord(symbol)</a> ⇒ <code><a href="#Chord">Chord</a></code> | <code>Null</code></dt>
<dd><p>Convert an input string into an abstract chord structure</p>
</dd>
<dt><a href="#chordRendererFactory">chordRendererFactory(useShortNamings, simplify)</a> ⇒ <code>function</code></dt>
<dd><p>Create a pre-configured chord rendering function</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Chord">Chord</a> : <code>Object</code></dt>
<dd><p>A data object representing a chord. It is the result of the parsing operation and can be used for rendering.</p>
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
Expose the parseChord_new functionmodule_"></a>

## parseChord
Expose the parseChord() function
<a name="chordRendererFactory
Expose the chordRendererFactory_new functionmodule_"></a>

## chordRendererFactory
Expose the chordRendererFactory() function
<a name="parseChord"></a>

## parseChord(symbol) ⇒ [<code>Chord</code>](#Chord) \| <code>Null</code>
Convert an input string into an abstract chord structure

**Kind**: global function  
**Returns**: [<code>Chord</code>](#Chord) \| <code>Null</code> - A chord object if the given string is successfully parsed. Null otherwise.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>symbol</td><td><code>String</code></td><td><p>the chord symbol candidate</p>
</td>
    </tr>  </tbody>
</table>

<a name="chordRendererFactory"></a>

## chordRendererFactory(useShortNamings, simplify) ⇒ <code>function</code>
Create a pre-configured chord rendering function

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>useShortNamings</td><td><code>Boolean</code></td><td><p>if true, use short namings instead of the &quot;academic&quot; ones</p>
</td>
    </tr><tr>
    <td>simplify</td><td><code>&#x27;none&#x27;</code> | <code>&#x27;max&#x27;</code> | <code>&#x27;core&#x27;</code></td><td><p>The level of simplification. <code>max</code> will basically remove everything but minor 3rd,
<code>core</code> will try to keep only the chord core characteristics, leaving out suspensions, extensions, alterations, adds and omits.</p>
</td>
    </tr>  </tbody>
</table>

<a name="chordRendererFactory..renderChord"></a>

### chordRendererFactory~renderChord(chord) ⇒ <code>String</code> \| <code>\*</code>
Render a chord structure

**Kind**: inner method of [<code>chordRendererFactory</code>](#chordRendererFactory)  
**Returns**: <code>String</code> \| <code>\*</code> - output might depends on the selected printer  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>chord</td><td><code><a href="#Chord">Chord</a></code></td><td><p>the chord structure to render</p>
</td>
    </tr>  </tbody>
</table>

<a name="Chord"></a>

## Chord : <code>Object</code>
A data object representing a chord. It is the result of the parsing operation and can be used for rendering.

**Kind**: global typedef  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code><a href="#ChordInput">ChordInput</a></code></td><td><p>information derived from the symbol given as an input.
If you need to trace what has generated a given chord, you&#39;ll find it here.</p>
</td>
    </tr><tr>
    <td>normalized</td><td><code><a href="#NormalizedChord">NormalizedChord</a></code></td><td><p>abstract representation of the chord based on its intervals.</p>
</td>
    </tr><tr>
    <td>formatted</td><td><code><a href="#FormattedChord">FormattedChord</a></code></td><td><p>pre-rendering of the normalized chord</p>
</td>
    </tr>  </tbody>
</table>

<a name="ChordInput"></a>

## ChordInput : <code>Object</code>
The source from which the chord structure has been built

**Kind**: global typedef  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>symbol</td><td><code>String</code></td><td><p>the exact string used as a source for parsing. Ex: <code>Cm7b5/Gb</code></p>
</td>
    </tr><tr>
    <td>rootNote</td><td><code>String</code></td><td><p>the root note from the input string. Ex: <code>C</code></p>
</td>
    </tr><tr>
    <td>bassNote</td><td><code>String</code></td><td><p>the bass note from the input string. Ex: <code>Gb</code></p>
</td>
    </tr><tr>
    <td>descriptor</td><td><code>String</code></td><td><p>the string between the root note and the bass note. Ex: <code>m7b5</code></p>
</td>
    </tr><tr>
    <td>parsableDescriptor</td><td><code>String</code></td><td><p>the modified descriptor such as parsing is possible.
Ex: <code>m add9</code> for <code>Cmadd9</code>, a space is added for disambiguation between <code>m + add</code> and <code>ma + dd</code>.</p>
</td>
    </tr>  </tbody>
</table>

<a name="NormalizedChord"></a>

## NormalizedChord : <code>Object</code>
Abstract representation of the chord based on its intervals

**Kind**: global typedef  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>rootNote</td><td><code>String</code></td><td><p>the normalized root note in english notation. Ex: <code>C</code></p>
</td>
    </tr><tr>
    <td>bassNote</td><td><code>String</code></td><td><p>the normalized bass note in english notation. Ex: <code>Gb</code></p>
</td>
    </tr><tr>
    <td>intervals</td><td><code>Array.&lt;String&gt;</code></td><td><p>list of intervals composing the chord. Ex: <code>[&#39;1&#39;, &#39;b3&#39;, &#39;b5&#39;, &#39;b7&#39;]</code> for <code>Cm7b5/Gb</code></p>
</td>
    </tr><tr>
    <td>semitones</td><td><code>Array.&lt;Number&gt;</code></td><td><p>intervals converted to semitones. Ex: <code>[0, 3, 6, 10]</code></p>
</td>
    </tr><tr>
    <td>intents</td><td><code>Object</code></td><td><p>keep track of intents that are part of the symbol but cannot be conveyed by the interval list only</p>
</td>
    </tr><tr>
    <td>intents.major</td><td><code>Boolean</code></td><td><p>whether the chord has a major quality or not. Especially useful to find the source quality of suspended chords</p>
</td>
    </tr><tr>
    <td>intents.eleventh</td><td><code>Boolean</code></td><td><p>for edge cases ; allows to differentiate between <code>C9sus</code> and <code>C11</code></p>
</td>
    </tr><tr>
    <td>quality</td><td><code>String</code></td><td><p>&quot;Vertical quality&quot; of the chord, its core characteristics,
usually conveyed by the 3rd and the 7th, and sometimes the 5th. Ex: <code>major</code>, <code>minor7</code>, <code>minorMajor7</code>...</p>
</td>
    </tr><tr>
    <td>isSuspended</td><td><code>Boolean</code></td><td><p>whether the chord has a suspended 3rd or not</p>
</td>
    </tr><tr>
    <td>extensions</td><td><code>Array.&lt;String&gt;</code></td><td><p>upper extensions of the base chord, can be one or more of <code>9</code>, <code>11</code> &amp; <code>13</code>.
Ex: <code>[&#39;9&#39;, &#39;11&#39;, &#39;13&#39;]</code> for <code>Cm13</code></p>
</td>
    </tr><tr>
    <td>alterations</td><td><code>Array.&lt;String&gt;</code></td><td><p>notes that are part of the chord or its extensions, but either flattened or sharpened.
Ex: <code>[&#39;b5&#39;]</code> for <code>Cm7b5/Gb</code></p>
</td>
    </tr><tr>
    <td>adds</td><td><code>Array.&lt;String&gt;</code></td><td><p>added notes that are neither extensions nor alterations.
Ex: <code>[&#39;9&#39;]</code> for <code>C(add9,omit3)</code></p>
</td>
    </tr><tr>
    <td>omits</td><td><code>Array.&lt;String&gt;</code></td><td><p>removed notes from chord
Ex: <code>[&#39;3&#39;]</code> for <code>C(add9,omit3)</code></p>
</td>
    </tr>  </tbody>
</table>

<a name="FormattedChord"></a>

## FormattedChord : <code>Object</code>
Pre-rendered version of the chord with the main "vertical quality" and the chord changes.
Intended to be used as building blocks of a rendered chord

**Kind**: global typedef  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>rootNote</td><td><code>String</code></td><td><p>formatted root note</p>
</td>
    </tr><tr>
    <td>bassNote</td><td><code>String</code></td><td><p>formatted bass note</p>
</td>
    </tr><tr>
    <td>descriptor</td><td><code>String</code></td><td><p>the descriptor, gives the vertical quality of the chords and its extensions</p>
</td>
    </tr><tr>
    <td>chordChanges</td><td><code>Array.&lt;String&gt;</code></td><td><p>sorted and prefixed list of changes, whether altered, added or omitted notes.
Changes are given in the following order: alterations and added, sorted by interval, then omitted.
If multiple added/omits are present, the <code>add/omit</code> symbol is only printed once: <code>A+(add b9,#9)</code></p>
</td>
    </tr>  </tbody>
</table>

