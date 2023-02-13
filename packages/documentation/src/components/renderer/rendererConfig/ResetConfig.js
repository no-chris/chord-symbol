import React from 'react';

const ResetConfig = ({
	setTransposeValue,
	setAccidental,
	setSimplify,
	setUseShortNamings,
	setNotationSystem,
}) => {
	const handleClick = () => {
		setTransposeValue(0);
		setAccidental('original');
		setSimplify('none');
		setUseShortNamings(false);
		setNotationSystem('english');
	};

	return (
		<div className={'ui-RendererConfigItem_Container '}>
			<button onClick={handleClick}>Reset</button>
		</div>
	);
};

export default ResetConfig;
