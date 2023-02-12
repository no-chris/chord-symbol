import './Renderer.scss';

import React from 'react';

import RendererConfig from './rendererConfig/RendererConfig';
import Rendered from './rendered/Rendered';

const Renderer = ({
	harmonizeAccidentals,
	simplify,
	transposeValue,
	notationSystem,
	useFlats,
	useShortNamings,
	setHarmonizeAccidentals,
	setSimplify,
	setTransposeValue,
	setNotationSystem,
	setUseFlats,
	setUseShortNamings,
	renderedChordTxt,
	renderedChordRaw,
}) => {
	return (
		<div>
			<h3>Renderer</h3>
			<div className={'Renderer_Container'}>
				<RendererConfig
					harmonizeAccidentals={harmonizeAccidentals}
					simplify={simplify}
					transposeValue={transposeValue}
					useFlats={useFlats}
					useShortNamings={useShortNamings}
					notationSystem={notationSystem}
					setHarmonizeAccidentals={setHarmonizeAccidentals}
					setSimplify={setSimplify}
					setTransposeValue={setTransposeValue}
					setUseFlats={setUseFlats}
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
