import React from 'react';
import AccidentalConfig from './AccidentalConfig';

const AccidentalConfigList = ({ accidental, setAccidental }) => {
	const allOptions = [
		{ id: 'original', label: 'Original' },
		{ id: 'flat', label: 'Flat' },
		{ id: 'sharp', label: 'Sharp' },
	];

	return (
		<div className={'ui-RendererConfigItem_Container '}>
			Accidental:{' '}
			{allOptions.map((option) => (
				<AccidentalConfig
					accidental={accidental}
					setAccidental={setAccidental}
					key={'AccidentalConfig-' + option.id}
					id={option.id}
					label={option.label}
				/>
			))}
		</div>
	);
};

export default AccidentalConfigList;
