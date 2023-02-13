import React from 'react';

const SimplifyConfig = ({ simplify, setSimplify }) => {
	const handleChange = (e) => {
		setSimplify(e.target.value);
	};

	return (
		<div className={'ui-RendererConfigItem_Container '}>
			Simplify:{' '}
			<input
				checked={simplify === 'none'}
				className={'ui-RendererConfig_Radio'}
				id={'none'}
				name={'simplify'}
				onChange={handleChange}
				type={'radio'}
				value={'none'}
			/>
			<label className={'ui-RendererConfig_RadioLabel'} htmlFor={'none'}>
				None
			</label>
			<input
				checked={simplify === 'core'}
				className={'ui-RendererConfig_Radio'}
				id={'core'}
				name={'simplify'}
				onChange={handleChange}
				type={'radio'}
				value={'core'}
			/>
			<label className={'ui-RendererConfig_RadioLabel'} htmlFor={'core'}>
				Core
			</label>
			<input
				checked={simplify === 'max'}
				className={'ui-RendererConfig_Radio'}
				id={'max'}
				name={'simplify'}
				onChange={handleChange}
				type={'radio'}
				value={'max'}
			/>
			<label htmlFor={'max'}>Max</label>
		</div>
	);
};

export default SimplifyConfig;
