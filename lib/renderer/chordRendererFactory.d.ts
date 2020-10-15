export default chordRendererFactory;
/**
 * Create a pre-configured chord rendering function
 * @param {Boolean} useShortNamings - if true, use short namings instead of the "academic" ones
 * @param {('none'|'max'|'core')} simplify - The level of simplification. `max` will basically remove everything but minor 3rd,
 * `core` will try to keep only the chord core characteristics, leaving out suspensions, extensions, alterations, adds and omits.
 * @param {Number} transposeValue - positive or negative semitones value
 * @param {Boolean} harmonizeAccidentals - convert accidentals to either sharp or flats
 * @param {Boolean} useFlats - prefer flats for transposition/harmonization
 * @returns {function(Chord): String}
 */
declare function chordRendererFactory({ useShortNamings, simplify, transposeValue, harmonizeAccidentals, useFlats, }?: boolean): (arg0: any) => string;
