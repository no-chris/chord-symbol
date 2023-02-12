import React from 'react';

const UseFlatsConfig = ({ useFlats, setUseFlats, harmonizeAccidentals }) => {
	const isDisabled = !harmonizeAccidentals;
	const handleChange = (e) => {
		setUseFlats(e.target.checked);
	};

	return (
		<div className={'ui-RendererConfigItem_Container '}>
			<input
				type={'checkbox'}
				value={useFlats}
				onChange={handleChange}
				id={'useFlats'}
				disabled={isDisabled}
				checked={useFlats}
				className={'ui-RendererConfig_Checkbox'}
			/>
			<label htmlFor={'useFlats'}> Use flats</label>
		</div>
	);
};

export default UseFlatsConfig;
