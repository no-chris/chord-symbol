import React from 'react';

const AccidentalConfig = ({ accidental, setAccidental, id, label }) => {
	const handleChange = () => {
		setAccidental(id);
	};
	return (
		<>
			<input
				checked={accidental === id}
				className={'ui-RendererConfig_Radio'}
				id={'accidental' + id}
				name={'accidental'}
				onChange={handleChange}
				type={'radio'}
				value={id}
			/>
			<label
				className={'ui-RendererConfig_RadioLabel'}
				htmlFor={'accidental' + id}
			>
				{label}
			</label>
		</>
	);
};

export default AccidentalConfig;
