import './Renderer.scss';

import React from 'react';

import RendererConfig from './rendererConfig/RendererConfig';
import Rendered from './rendered/Rendered';

const Renderer = ({
	accidental,
	simplify,
	transposeValue,
	notationSystem,
	useShortNamings,
	setAccidental,
	setSimplify,
	setTransposeValue,
	setNotationSystem,
	setUseShortNamings,
	renderedChordTxt,
	renderedChordRaw,
}) => {
	return (
		<div>
			<h3>Renderer</h3>
			<div className={'Renderer_Container'}>
				<RendererConfig
					accidental={accidental}
					simplify={simplify}
					transposeValue={transposeValue}
					useShortNamings={useShortNamings}
					notationSystem={notationSystem}
					setAccidental={setAccidental}
					setSimplify={setSimplify}
					setTransposeValue={setTransposeValue}
					setUseShortNamings={setUseShortNamings}
					setNotationSystem={setNotationSystem}
				/>
				<Rendered
					renderedChordTxt={renderedChordTxt}
					renderedChordRaw={renderedChordRaw}
				/>
			</div>
		</div>
	);
};

export default Renderer;
