import './Parser.scss';

import React from 'react';

import UserInput from './userInput/UserInput';
import ParserConfig from './parserConfig/ParserConfig';
import Parsed from './parsed/Parsed';

const Parser = ({
	altIntervals,
	setAltIntervals,
	setUserChordSymbol,
	userChordSymbol,
	parsedChord,
	parsingErrors,
	renderedChordDefault,
	notationSystems,
	setNotationSystems,
	key,
	setKey,
}) => {
	return (
		<div>
			<h3>Parser</h3>
			<div className={'Parser_Container'}>
				<UserInput
					userChordSymbol={userChordSymbol}
					setUserChordSymbol={setUserChordSymbol}
					parsingErrors={parsingErrors}
				/>
				<ParserConfig
					parsedChord={parsedChord}
					notationSystems={notationSystems}
					setNotationSystems={setNotationSystems}
					altIntervals={altIntervals}
					setAltIntervals={setAltIntervals}
					key={key}
					setKey={setKey}
				/>
				<Parsed
					parsedChord={parsedChord}
					renderedChordTxt={renderedChordDefault}
				/>
			</div>
		</div>
	);
};

export default Parser;
