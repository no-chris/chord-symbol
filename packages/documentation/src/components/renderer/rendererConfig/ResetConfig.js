import React from 'react';

const ResetConfig = ({
	setTransposeValue,
	setHarmonizeAccidentals,
	setUseFlats,
	setSimplify,
	setUseShortNamings,
}) => {
	const handleClick = () => {
		setTransposeValue(0);
		setHarmonizeAccidentals(false);
		setUseFlats(false);
		setSimplify('none');
		setUseShortNamings(false);
	};

	return (
		<div className={'ui-RendererConfigItem_Container '}>
			<button onClick={handleClick}>Reset</button>
		</div>
	);
};

export default ResetConfig;
