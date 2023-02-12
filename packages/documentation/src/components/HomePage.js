import '../../scss/styles.scss';

import React, { useState } from 'react';

import { chordParserFactory, chordRendererFactory } from 'chord-symbol';
import { musicXmlRenderer } from 'chord-symbol-musicxml/src';

import Parser from './parser/Parser';
import Intro from './Intro';
import Renderer from './renderer/Renderer';
import MusicXml from './musicxml/MusicXml';

const defaultUserSymbol = 'Ab7(b9,#9)';
const defaultNotationSystems = ['english', 'german', 'latin'];
const defaultAltIntervals = ['b5', '#5', 'b9', '#9', '#11', 'b13'];

export default function HomePage() {
	const [userChordSymbol, setUserChordSymbol] = useState(defaultUserSymbol);
	const [simplify, setSimplify] = useState('none');
	const [useShortNamings, setUseShortNamings] = useState(false);
	const [transposeValue, setTransposeValue] = useState(0);
	const [harmonizeAccidentals, setHarmonizeAccidentals] = useState(false);
	const [useFlats, setUseFlats] = useState(false);
	const [rendererNotationSystem, setRendererNotationSystem] =
		useState('english');
	const [parserNotationSystems, setParserNotationSystems] = useState(
		defaultNotationSystems
	);
	const [altIntervals, setAltIntervals] = useState(defaultAltIntervals);
	const [contextKey, setContextKey] = useState('C');

	const parseChord = chordParserFactory({
		notationSystems: parserNotationSystems,
		altIntervals,
		key: contextKey,
	});
	const parsedChord = parseChord(userChordSymbol);

	let parsingErrors;
	if (parsedChord.error) {
		parsingErrors = parsedChord.error;
	}

	const rendererConfig = {
		useShortNamings,
		transposeValue,
		harmonizeAccidentals,
		useFlats,
		simplify,
		notationSystem: rendererNotationSystem,
	};
	const renderDefault = chordRendererFactory();
	const renderedChordDefault = renderDefault(parsedChord);
	const renderChordTxt = chordRendererFactory(rendererConfig);
	rendererConfig.printer = 'raw';
	const renderChordRaw = chordRendererFactory(rendererConfig);
	rendererConfig.customFilters = [musicXmlRenderer];
	const renderChordMusicXml = chordRendererFactory(rendererConfig);

	const renderedChordTxt = renderChordTxt(parsedChord);
	const renderedChordRaw = renderChordRaw(parsedChord);
	const renderedChordMusicXml = renderChordMusicXml(parsedChord);

	return (
		<div className={'main'}>
			<Intro />
			<h2>Demo</h2>
			<Parser
				notationSystems={parserNotationSystems}
				setNotationSystems={setParserNotationSystems}
				altIntervals={altIntervals}
				userChordSymbol={userChordSymbol}
				setAltIntervals={setAltIntervals}
				setUserChordSymbol={setUserChordSymbol}
				parsedChord={parsedChord}
				renderedChordDefault={renderedChordDefault}
				parsingErrors={parsingErrors}
				contextKey={contextKey}
				setContextKey={setContextKey}
			/>
			<Renderer
				useFlats={useFlats}
				transposeValue={transposeValue}
				harmonizeAccidentals={harmonizeAccidentals}
				notationSystem={rendererNotationSystem}
				simplify={simplify}
				useShortNamings={useShortNamings}
				setUseShortNamings={setUseShortNamings}
				setSimplify={setSimplify}
				setTransposeValue={setTransposeValue}
				setHarmonizeAccidentals={setHarmonizeAccidentals}
				setNotationSystem={setRendererNotationSystem}
				setUseFlats={setUseFlats}
				renderedChordTxt={renderedChordTxt}
				renderedChordRaw={renderedChordRaw}
			/>
			<MusicXml renderedChordMusicXml={renderedChordMusicXml} />
			<br />
		</div>
	);
}
