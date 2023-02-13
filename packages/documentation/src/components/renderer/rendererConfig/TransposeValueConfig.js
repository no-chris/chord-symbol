import React from 'react';

const TransposeValueConfig = ({ transposeValue, setTransposeValue }) => {
	const increaseTransposeValue = () => {
		if (transposeValue < 12) {
			setTransposeValue(transposeValue + 1);
		}
	};
	const decreaseTransposeValue = () => {
		if (transposeValue > -12) {
			setTransposeValue(transposeValue - 1);
		}
	};

	return (
		<div className={'ui-RendererConfigItem_Container '}>
			Transpose value: <button onClick={decreaseTransposeValue}>-</button>{' '}
			{transposeValue} <button onClick={increaseTransposeValue}>+</button>
		</div>
	);
};

export default TransposeValueConfig;
