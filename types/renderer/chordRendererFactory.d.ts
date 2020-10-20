export default chordRendererFactory;
/**
 * Create a pre-configured chord rendering function
 * @param {Object} [RendererConfiguration]
 * @param {Boolean} [RendererConfiguration.useShortNamings] - if true, use short namings instead of the "academic" ones
 * @param {('none'|'max'|'core')} [RendererConfiguration.simplify] - The level of simplification.
 * `max` will basically remove everything but minor 3rd,
 * `core` will try to keep only the chord core characteristics, leaving out suspensions, extensions, alterations, adds and omits.
 * @param {Number} [RendererConfiguration.transposeValue] - positive or negative semitones value
 * @param {Boolean} [RendererConfiguration.harmonizeAccidentals] - convert accidentals to either sharp or flats
 * @param {Boolean} [RendererConfiguration.useFlats] - prefer flats for transposition/harmonization
 * @param {('text'|'raw')} [RendererConfiguration.printer] - the printer to use for the rendering.
 * 'text' returns a string, 'raw' the processed chord object.
 * @returns {function(Chord): String}
 */
declare function chordRendererFactory({ useShortNamings, simplify, transposeValue, harmonizeAccidentals, useFlats, printer }?: {
    useShortNamings: boolean;
    simplify: ('none' | 'max' | 'core');
    transposeValue: number;
    harmonizeAccidentals: boolean;
    useFlats: boolean;
    printer: ('text' | 'raw');
}): (arg0: Chord) => string;
