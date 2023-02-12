import React from 'react';
import ConvertNotationSystemConfig from './ConvertNotationSystemConfig';

const ConvertNotationSystemConfigList = ({
	notationSystem,
	setNotationSystem,
}) => {
	const allOptions = [
		{ id: 'english', label: 'English' },
		{ id: 'german', label: 'German' },
		{ id: 'latin', label: 'Latin' },
		{ id: 'auto', label: 'Auto' },
	];

	return (
		<div className={'ui-RendererConfigItem_Container '}>
			Render to:{' '}
			{allOptions.map((option) => (
				<ConvertNotationSystemConfig
					notationSystem={notationSystem}
					setNotationSystem={setNotationSystem}
					key={'ConvertNotationSystemConfig-' + option.id}
					id={option.id}
					label={option.label}
				/>
			))}
		</div>
	);
};

export default ConvertNotationSystemConfigList;
