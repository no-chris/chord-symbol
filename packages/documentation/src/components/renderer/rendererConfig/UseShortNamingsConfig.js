import React from 'react';

const UseShortNamingsConfig = ({ useShortNamings, setUseShortNamings }) => {
	const handleChange = (e) => {
		setUseShortNamings(e.target.value === 'true');
	};

	return (
		<div className={'ui-RendererConfigItem_Container '}>
			Use short namings:{' '}
			<input
				checked={useShortNamings === true}
				className={'ui-RendererConfig_Radio'}
				id={'option-true'}
				name={'useShortNamings'}
				onChange={handleChange}
				type={'radio'}
				value={'true'}
			/>
			<label
				className={'ui-RendererConfig_RadioLabel'}
				htmlFor={'option-true'}
			>
				True
			</label>
			<input
				checked={useShortNamings === false}
				className={'ui-RendererConfig_Radio'}
				id={'option-false'}
				name={'useShortNamings'}
				onChange={handleChange}
				type={'radio'}
				value={'false'}
			/>
			<label
				className={'ui-RendererConfig_RadioLabel'}
				htmlFor={'option-false'}
			>
				False
			</label>
		</div>
	);
};

export default UseShortNamingsConfig;
