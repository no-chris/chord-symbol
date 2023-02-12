import React from 'react';

const HarmonizeAccidentalsConfig = ({
	harmonizeAccidentals,
	setHarmonizeAccidentals,
}) => {
	const handleChange = (e) => {
		setHarmonizeAccidentals(e.target.checked);
	};

	return (
		<div className={'ui-RendererConfigItem_Container '}>
			<input
				type={'checkbox'}
				value={harmonizeAccidentals}
				onChange={handleChange}
				id={'harmonizeAccidentals'}
				checked={harmonizeAccidentals}
				className={'ui-RendererConfig_Checkbox'}
			/>
			<label htmlFor={'harmonizeAccidentals'}>
				{' '}
				Harmonize accidentals
			</label>
		</div>
	);
};

export default HarmonizeAccidentalsConfig;
