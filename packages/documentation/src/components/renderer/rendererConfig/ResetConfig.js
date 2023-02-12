import React from 'react';

const ResetConfig = ({
	setTransposeValue,
	setAccidental,
	setSimplify,
	setUseShortNamings,
}) => {
	const handleClick = () => {
		setTransposeValue(0);
		setAccidental('original');
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
