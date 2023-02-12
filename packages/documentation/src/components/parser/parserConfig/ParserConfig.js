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
	key,
	setKey,
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
					<KeyConfigList key={key} setKey={setKey} />
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
