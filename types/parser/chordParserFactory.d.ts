export default chordParserFactory;
/**
 * Create a chord parser function
 * @param {Object} [ParserConfiguration]
 * @param {AltIntervals} [ParserConfiguration.altIntervals] - user selection of intervals affected by the "alt" modifier (all by default).
 * Since using the "C7alt" symbol is a way to leave some room for interpretation by the player, Chord-symbol offer the possibility
 * some level of flexibility when parsing an "alt" chord symbol.
 * If you would like "alt" to consistently yield a specific set of intervals, you can specify those here.
 * @returns {function(String): Chord|Null}
 */
declare function chordParserFactory({ altIntervals }?: {
    altIntervals: AltIntervals;
}): (arg0: string) => Chord | null;
