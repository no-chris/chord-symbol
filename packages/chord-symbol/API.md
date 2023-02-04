## Modules

<dl>
<dt><a href="#chordParserFactory
Expose the chordParserFactory_new functionmodule_">chordParserFactory
Expose the chordParserFactory() function</a></dt>
<dd></dd>
<dt><a href="#chordRendererFactory
Expose the chordRendererFactory_new functionmodule_">chordRendererFactory
Expose the chordRendererFactory() function</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#chordParserFactory">chordParserFactory([parserConfiguration])</a> ⇒ <code>function</code></dt>
<dd><p>Create a chord parser function</p>
</dd>
<dt><a href="#chordRendererFactory">chordRendererFactory([rendererConfiguration])</a> ⇒ <code>function</code></dt>
<dd><p>Create a pre-configured chord rendering function</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#MaybeChord">MaybeChord</a> : <code><a href="#Chord">Chord</a></code> | <code><a href="#ChordParseFailure">ChordParseFailure</a></code></dt>
<dd><p>An object that may be a chord data object or a chord parsing failure object.</p>
</dd>
<dt><a href="#Chord">Chord</a> : <code>Object</code></dt>
<dd><p>A data object representing a chord. It is the result of a successful parsing operation and can be used for rendering.</p>
</dd>
<dt><a href="#ChordParseFailure">ChordParseFailure</a> : <code>Object</code></dt>
<dd><p>An error object for a chord that could not be parsed.</p>
</dd>
<dt><a href="#ChordInput">ChordInput</a> : <code>Object</code></dt>
<dd><p>The source from which the chord structure has been built</p>
</dd>
<dt><a href="#NormalizedChord">NormalizedChord</a> : <code>Object</code></dt>
<dd><p>Abstract representation of the chord based on its intervals</p>
</dd>
<dt><a href="#FormattedChord">FormattedChord</a> : <code>Object</code></dt>
<dd><p>Pre-rendered version of the chord with the main &quot;vertical quality&quot; and the chord changes.
Intended to be used as building blocks of a rendered chord
The <code>symbol</code> property contains the default assembled rendering</p>
</dd>
<dt><a href="#NumeralChord">NumeralChord</a> : <code>Object</code></dt>
<dd><p>Roman numeral symbol of the chord, both rendered in a single string and also decomposed in its sub-parts.
The detection of the degree is based on the key given to the parser configuration.
The used approach is very naive and only based on whether the chord is diatonic to the given key or borrowed to its parallel major/minor scale
As such, it is only suitable for very basic harmonic analysis and a lot of chords will render as &quot;?&quot; because they won&#39;t fit
either scenario.
Having the symbol decomposed in its part will allow an external tool to easily override the detected degree
and reconstruct the symbol if needed.</p>
</dd>
<dt><a href="#ParserConfiguration">ParserConfiguration</a> : <code>Object</code></dt>
<dd><p>Configuration of the chord parser</p>
</dd>
<dt><a href="#ChordSymbolError">ChordSymbolError</a> : <code>Object</code></dt>
<dd><p>Description of an error that occurred during the parsing.</p>
</dd>
<dt><a href="#RendererConfiguration">RendererConfiguration</a> : <code>Object</code></dt>
<dd><p>Configuration of the chord renderer</p>
</dd>
<dt><a href="#CustomFilter">CustomFilter</a> ⇒ <code><a href="#Chord">Chord</a></code> | <code>Null</code></dt>
<dd><p>Custom filter applied during processing or rendering. Custom filters will be applied at the end of the processing pipe,
after all built-in filters have been applied.</p>
<p><strong>Parsing filters</strong></p>
<ul>
<li>We recommend that you do not delete any property of the Chord object, because some rendering filters might rely on them.
For maximum compatibility, your best bet is to always rely on the existing chord object structure.</li>
<li>To fail the parsing, throw an exception and it will use the Error API.
If you want to be able to filter your exception in error handling, or to pass the chord object in its current state, use
<a href="https://github.com/no-chris/chord-symbol/blob/master/src/helpers/ChordParsingError.js">custom error types</a></li>
</ul>
<p><strong>Rendering filter</strong></p>
<ul>
<li>If the purpose of your rendering filter is to change the text output of <code>ChordSymbol</code>,
then use the <code>text</code> printer and override the <code>.formatted.symbol</code> property.</li>
<li>If the purpose is to enrich the chord symbol object with some new information or data structure,
then use the <code>raw</code> printer and modify the <code>Chord</code> object accordingly.</li>
<li>To fail the rendering, simply return <code>null</code>.
Warning: if you throw an exception in a rendering filter, <code>ChordSymbol</code> will not catch it and the client code will need to handle it.
Don&#39;t do that!</li>
</ul>
</dd>
</dl>

<a name="chordParserFactory
Expose the chordParserFactory_new functionmodule_"></a>

## chordParserFactory
Expose the chordParserFactory() function
<a name="chordRendererFactory
Expose the chordRendererFactory_new functionmodule_"></a>

## chordRendererFactory
Expose the chordRendererFactory() function
<a name="chordParserFactory"></a>

## chordParserFactory([parserConfiguration]) ⇒ <code>function</code>
Create a chord parser function

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[parserConfiguration]</td><td><code><a href="#ParserConfiguration">ParserConfiguration</a></code></td>
    </tr>  </tbody>
</table>

<a name="chordParserFactory..parseChord"></a>

### chordParserFactory~parseChord(symbol) ⇒ [<code>MaybeChord</code>](#MaybeChord)
Convert an input string into an abstract chord structure

**Kind**: inner method of [<code>chordParserFactory</code>](#chordParserFactory)  
**Returns**: [<code>MaybeChord</code>](#MaybeChord) - A chord data object if the given string is successfully parsed.
  A chord parse failure object with an `error` property otherwise.  
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

## chordRendererFactory([rendererConfiguration]) ⇒ <code>function</code>
Create a pre-configured chord rendering function

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[rendererConfiguration]</td><td><code><a href="#RendererConfiguration">RendererConfiguration</a></code></td>
    </tr>  </tbody>
</table>

<a name="chordRendererFactory..renderChord"></a>

### chordRendererFactory~renderChord(chord) ⇒ <code>String</code> \| [<code>Chord</code>](#Chord)
Render a chord structure

**Kind**: inner method of [<code>chordRendererFactory</code>](#chordRendererFactory)  
**Returns**: <code>String</code> \| [<code>Chord</code>](#Chord) - output depends on the selected printer: string for text printer (default), Chord for raw printer  
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

<a name="MaybeChord"></a>

## MaybeChord : [<code>Chord</code>](#Chord) \| [<code>ChordParseFailure</code>](#ChordParseFailure)
An object that may be a chord data object or a chord parsing failure object.

**Kind**: global typedef  
<a name="Chord"></a>

## Chord : <code>Object</code>
A data object representing a chord. It is the result of a successful parsing operation and can be used for rendering.

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
    <td>formatted</td><td><code><a href="#FormattedChord">FormattedChord</a></code></td><td><p>pre-rendering of the normalized chord.</p>
</td>
    </tr><tr>
    <td>numeral</td><td><code><a href="#NumeralChord">NumeralChord</a></code></td><td><p>chord in the roman numeral notation.</p>
</td>
    </tr><tr>
    <td>parserConfiguration</td><td><code><a href="#ParserConfiguration">ParserConfiguration</a></code></td><td><p>configuration passed to the parser on chord creation.</p>
</td>
    </tr>  </tbody>
</table>

<a name="ChordParseFailure"></a>

## ChordParseFailure : <code>Object</code>
An error object for a chord that could not be parsed.

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
    <td>error</td><td><code><a href="#ChordSymbolError">Array.&lt;ChordSymbolError&gt;</a></code></td><td><p>the reason(s) why the parsing failed.</p>
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
    </tr><tr>
    <td>modifiers</td><td><code>String</code></td><td><p>the detected modifiers during parsing</p>
</td>
    </tr><tr>
    <td>notationSystem</td><td><code>&#x27;english&#x27;</code> | <code>&#x27;german&#x27;</code> | <code>&#x27;latin&#x27;</code></td><td><p>notation system in which the symbol was parsed</p>
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
    <td>notes</td><td><code>Array.&lt;String&gt;</code></td><td><p>list of notes composing the chord. Ex: <code>[&#39;C&#39;, &#39;Eb&#39;, &#39;Gb&#39;, &#39;Bb&#39;]</code> for <code>Cm7b5/Gb</code></p>
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
    <td>intents.alt</td><td><code>Boolean</code></td><td><p>if the chord was specified as altered</p>
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
The `symbol` property contains the default assembled rendering

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
    <td>symbol</td><td><code>String</code></td><td><p>full rendering of the chord</p>
</td>
    </tr><tr>
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

<a name="NumeralChord"></a>

## NumeralChord : <code>Object</code>
Roman numeral symbol of the chord, both rendered in a single string and also decomposed in its sub-parts.
The detection of the degree is based on the key given to the parser configuration.
The used approach is very naive and only based on whether the chord is diatonic to the given key or borrowed to its parallel major/minor scale
As such, it is only suitable for very basic harmonic analysis and a lot of chords will render as "?" because they won't fit
either scenario.
Having the symbol decomposed in its part will allow an external tool to easily override the detected degree
and reconstruct the symbol if needed.

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
    <td>symbol</td><td><code>String</code></td><td><p>concatenation of the <code>degree</code>, the <code>descriptor</code> and the <code>inversion</code> properties</p>
</td>
    </tr><tr>
    <td>degree</td><td><code>String</code></td><td><p>degree of the chord in the scale, or &quot;?&quot; if it cannot be determined.
If the <code>key</code> property is not given to the parser configuration, the degree will be either &quot;I&quot;, &quot;i&quot; or &quot;?&quot;</p>
</td>
    </tr><tr>
    <td>descriptor</td><td><code>String</code></td><td><p>quality of the chord (e.g. seventh, major seventh, diminished, etc.)</p>
</td>
    </tr><tr>
    <td>inversion</td><td><code>String</code></td><td><p>inversion notation in the roman numeral format (e.g. ⁶₄, ⁶₅, etc.)</p>
</td>
    </tr><tr>
    <td>thirdQuality</td><td><code>&#x27;minor&#x27;</code> | <code>&#x27;major&#x27;</code></td><td><p>quality of the third of the chord, either &quot;minor&quot; or &quot;major&quot;</p>
</td>
    </tr><tr>
    <td>type</td><td><code>&#x27;diatonic&#x27;</code> | <code>&#x27;borrowed&#x27;</code> | <code>&#x27;unknown&#x27;</code></td><td><p>Either &quot;diatonic&quot; if the degree is part of the key scale,
&quot;borrowed&quot; if it is part of the parallel minor or major scale, &quot;unknown&quot; otherwise.</p>
</td>
    </tr>  </tbody>
</table>

<a name="ParserConfiguration"></a>

## ParserConfiguration : <code>Object</code>
Configuration of the chord parser

**Kind**: global typedef  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[notationSystems]</td><td><code>Array.&lt;(&#x27;english&#x27;|&#x27;german&#x27;|&#x27;latin&#x27;)&gt;</code></td><td><code>[&#x27;english&#x27;,&#x27;german&#x27;,&#x27;latin&#x27;]</code></td><td><p>Notation systems that should be used to try parsing a symbol. All by default.</p>
</td>
    </tr><tr>
    <td>[altIntervals]</td><td><code>Array.&lt;(&#x27;b5&#x27;|&#x27;#5&#x27;|&#x27;b9&#x27;|&#x27;#9&#x27;|&#x27;#11&#x27;|&#x27;b13&#x27;)&gt;</code></td><td><code>[&#x27;b5&#x27;,&#x27;#5&#x27;,&#x27;b9&#x27;,&#x27;#9&#x27;,&#x27;#11&#x27;,&#x27;b13&#x27;]</code></td><td><p>user selection of intervals affected by the <code>alt</code> modifier (all by default).
Since using the <code>C7alt</code> symbol is a way to leave some room for interpretation by the player, Chord-symbol offer the possibility to declare what are
the intervals that the <code>alt</code> modifier should yield
If you would like <code>alt</code> to consistently yield a specific set of intervals, you can specify those here.</p>
</td>
    </tr><tr>
    <td>[customFilters]</td><td><code><a href="#CustomFilter">Array.&lt;CustomFilter&gt;</a></code></td><td><code>[]</code></td><td><p>custom filters applied during parsing</p>
</td>
    </tr><tr>
    <td>[key]</td><td><code>String</code></td><td><code>&#x27;&#x27;</code></td><td><p>key on which to base the rendering of the numeral symbol.
The key needs to be given in english notation with a maximum of 3 characters using non-unicode accidentals.
E.g. <code>C</code>, <code>C#m</code> or <code>Ab</code> are all valid keys, while <code>B♭</code> and <code>C7</code> are not.
If not given, the parser will not be able to detect the degree of the chord.</p>
</td>
    </tr>  </tbody>
</table>

<a name="ChordSymbolError"></a>

## ChordSymbolError : <code>Object</code>
Description of an error that occurred during the parsing.

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
    <td>type</td><td><code>&#x27;InvalidIntervals&#x27;</code> | <code>&#x27;InvalidInput&#x27;</code> | <code>&#x27;InvalidModifier&#x27;</code> | <code>&#x27;NoSymbolFound&#x27;</code> | <code>&#x27;UnexpectedError&#x27;</code></td><td><p>error code,
or exception type in custom filters</p>
</td>
    </tr><tr>
    <td>message</td><td><code>String</code></td><td><p>error description, or the exception message in custom filters</p>
</td>
    </tr><tr>
    <td>[chord]</td><td><code><a href="#Chord">Chord</a></code></td><td><p>the chord object, in the state that it was when the error occurred</p>
</td>
    </tr><tr>
    <td>[notationSystem]</td><td><code>&#x27;english&#x27;</code> | <code>&#x27;german&#x27;</code> | <code>&#x27;latin&#x27;</code></td><td><p>the notation system context in which the error occurred</p>
</td>
    </tr>  </tbody>
</table>

<a name="RendererConfiguration"></a>

## RendererConfiguration : <code>Object</code>
Configuration of the chord renderer

**Kind**: global typedef  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[useShortNamings]</td><td><code>Boolean</code></td><td><code>false</code></td><td><p>if true, use short namings instead of the &quot;academic&quot; ones</p>
</td>
    </tr><tr>
    <td>[simplify]</td><td><code>&#x27;none&#x27;</code> | <code>&#x27;max&#x27;</code> | <code>&#x27;core&#x27;</code></td><td><code>&#x27;none&#x27;</code></td><td><p>The level of simplification.
<code>max</code> will basically remove everything but minor 3rd,
<code>core</code> will try to keep only the chord core characteristics, leaving out suspensions, extensions, alterations, adds and omits.</p>
</td>
    </tr><tr>
    <td>[transposeValue]</td><td><code>Number</code></td><td><code>0</code></td><td><p>positive or negative semitones value</p>
</td>
    </tr><tr>
    <td>[accidental]</td><td><code>&#x27;original&#x27;</code> | <code>&#x27;flat&#x27;</code> | <code>&#x27;sharp&#x27;</code></td><td><code>&#x27;original&#x27;</code></td><td><p>accidental to use when rendering a chord.
&#39;original&#39; keeps the current one, if any. If transposeValue !== 0, sharp will be used
&#39;flat&#39; render with flats
&#39;sharp&#39; render with sharps</p>
</td>
    </tr><tr>
    <td>[printer]</td><td><code>&#x27;text&#x27;</code> | <code>&#x27;raw&#x27;</code></td><td><code>&#x27;text&#x27;</code></td><td><p>the printer to use for the rendering. <code>text</code> returns a string, <code>raw</code> the processed chord object.</p>
</td>
    </tr><tr>
    <td>[notationSystem]</td><td><code>&#x27;auto&#x27;</code> | <code>&#x27;english&#x27;</code> | <code>&#x27;german&#x27;</code> | <code>&#x27;latin&#x27;</code></td><td><code>&#x27;english&#x27;</code></td><td><p>the notation system to use when rendering the chord.
    <code>auto</code> will use the same system in which the symbol was originally parsed.</p>
</td>
    </tr><tr>
    <td>[customFilters]</td><td><code><a href="#CustomFilter">Array.&lt;CustomFilter&gt;</a></code></td><td><code>[]</code></td><td><p>custom filters applied during rendering</p>
</td>
    </tr>  </tbody>
</table>

<a name="CustomFilter"></a>

## CustomFilter ⇒ [<code>Chord</code>](#Chord) \| <code>Null</code>
Custom filter applied during processing or rendering. Custom filters will be applied at the end of the processing pipe,
after all built-in filters have been applied.

**Parsing filters**
- We recommend that you do not delete any property of the Chord object, because some rendering filters might rely on them.
For maximum compatibility, your best bet is to always rely on the existing chord object structure.
- To fail the parsing, throw an exception and it will use the Error API.
If you want to be able to filter your exception in error handling, or to pass the chord object in its current state, use
[custom error types](https://github.com/no-chris/chord-symbol/blob/master/src/helpers/ChordParsingError.js)

**Rendering filter**
- If the purpose of your rendering filter is to change the text output of `ChordSymbol`,
then use the `text` printer and override the `.formatted.symbol` property.
- If the purpose is to enrich the chord symbol object with some new information or data structure,
then use the `raw` printer and modify the `Chord` object accordingly.
- To fail the rendering, simply return `null`.
Warning: if you throw an exception in a rendering filter, `ChordSymbol` will not catch it and the client code will need to handle it.
Don't do that!

**Kind**: global typedef  
**Returns**: [<code>Chord</code>](#Chord) \| <code>Null</code> - - Either the modified chord object, or `null` to cancel the processing and skip the remaining filters.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>chord</td><td><code><a href="#Chord">Chord</a></code></td><td><p>The chord object will be passed to the filter as the only parameter</p>
</td>
    </tr>  </tbody>
</table>

