import './ParserConfig.scss';

import React from 'react';

import NotationSystemsConfigList from './NotationSystemsConfigList';
import AltIntervalConfigList from './AltIntervalConfigList';
import KeyConfigList from './KeyConfigList';

const ParserConfig = ({
	parsedChord,
	altIntervals,
	setAltIntervals,
	notationSystems,
	setNotationSystems,
	contextKey,
	setContextKey,
}) => {
	return (
		<div className={'parserConfig_Container'}>
			<strong>Parser configuration:</strong>
			<table className={'configuration_Table'}>
				<tbody>
					<NotationSystemsConfigList
						notationSystems={notationSystems}
						setNotationSystems={setNotationSystems}
					/>
					<KeyConfigList
						contextKey={contextKey}
						setContextKey={setContextKey}
					/>
					<AltIntervalConfigList
						parsedChord={parsedChord}
						altIntervals={altIntervals}
						setAltIntervals={setAltIntervals}
					/>
				</tbody>
			</table>
		</div>
	);
};

export default ParserConfig;
