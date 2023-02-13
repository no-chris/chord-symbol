import './Intro.scss';

import React from 'react';

const Intro = () => {
	return (
		<div className={'Intro_Container'}>
			<p>
				<code>ChordSymbol</code> is the definitive chord symbol parser
				and renderer for Javascript/NodeJS.
			</p>
			<p>
				While most chord parsing libraries expect you to write chord
				symbols in a specific way, <code>ChordSymbol</code> can handle
				whatever chord syntax you throw at him, or almost. Currently,
				the unit test suite contains more than 37 000 distinct chords
				symbols!
			</p>
			<p>
				<code>ChordSymbol</code> will transform a string representing a
				chord (<code>Cm7</code>, for example) into a suite of intervals
				(<code>1, b3, 5, b7</code>) and individual notes (
				<code>C, Eb, G, Bb</code>). It will also normalize the chord
				symbol, such as it doesn&apos;t matter if the original input was{' '}
				<code>Cm7</code>, <code>CMINOR7</code>,<code>C7min</code>, or{' '}
				<code>C7mi</code>: <code>ChordSymbol</code> will consistently
				render it as
				<code>Cmi7</code>. And if you prefer a different kind of
				normalization,
				<code>ChordSymbol</code> allows you to configure the rendering
				to your taste.
			</p>
			<p>
				<code>ChordSymbol</code> is the chord parsing engine behind{' '}
				<a href={'https://chordmark.netlify.app'}>ChordMark</a>, a new
				and powerful way to write chord charts.
			</p>
			<ul>
				<li>
					Read the full{' '}
					<a
						href={
							'https://github.com/no-chris/chord-symbol/tree/master/packages/chord-symbol#readme'
						}
					>
						README
					</a>
				</li>
				<li>
					<a
						href={
							'https://github.com/no-chris/chord-symbol/blob/master/packages/chord-symbol/API.md'
						}
					>
						API documentation
					</a>
				</li>
				<li>
					See the{' '}
					<a href={'https://github.com/no-chris/chord-symbol'}>
						Github repository
					</a>
				</li>
				<li>
					See on{' '}
					<a href={'https://www.npmjs.com/package/chord-symbol'}>
						NPM
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Intro;
