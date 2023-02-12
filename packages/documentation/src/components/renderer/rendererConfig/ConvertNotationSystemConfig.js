import React from 'react';

const ConvertNotationSystemConfig = ({
	notationSystem,
	setNotationSystem,
	id,
	label,
}) => {
	const handleChange = (e) => {
		setNotationSystem(e.target.value);
	};
	return (
		<>
			<input
				checked={notationSystem === id}
				className={'ui-RendererConfig_Radio'}
				id={'rendererNotationSystem' + id}
				name={'notationSystem'}
				onChange={handleChange}
				type={'radio'}
				value={id}
			/>
			<label
				className={'ui-RendererConfig_RadioLabel'}
				htmlFor={'rendererNotationSystem' + id}
			>
				{label}
			</label>
		</>
	);
};

export default ConvertNotationSystemConfig;
