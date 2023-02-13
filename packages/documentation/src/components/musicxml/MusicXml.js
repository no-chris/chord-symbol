import './MusicXml.scss';

import React from 'react';

import Rendered from './rendered/Rendered';

const MusicXml = ({ renderedChordMusicXml }) => {
	return (
		<div>
			<h3>MusicXml renderer</h3>
			<div className={'MusicXmlRenderer_Container'}>
				Uses the{' '}
				<a href={'https://github.com/no-chris/chord-symbol-musicxml'}>
					chord-symbol-musicxml
				</a>{' '}
				filter.
				<Rendered renderedChordMusicXml={renderedChordMusicXml} />
			</div>
		</div>
	);
};

export default MusicXml;
