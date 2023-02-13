import React from 'react';

import NotationSystemConfig from './NotationSystemConfig';

const NotationSystemsConfigList = ({ setNotationSystems, notationSystems }) => {
	const notationSystemsList = [
		{ id: 'english', label: 'English', description: 'C, D, E, F, G, A, B' },
		{ id: 'german', label: 'German', description: 'C, D, E, F, G, A, H' },
		{
			id: 'latin',
			label: 'Latin',
			description: 'Do, Ré, Mi, Fa, Sol, La, Si',
		},
	];

	return (
		<tr>
			<td colSpan={2}>
				<div className={'parserConfigItem_Container'}>
					<div className={'pc-CheckboxList_Label'}>
						Notation systems:
					</div>
					{notationSystemsList.map((notationSystem) => (
						<NotationSystemConfig
							key={'NotationSystemConfig' + notationSystem.id}
							setNotationSystems={setNotationSystems}
							notationSystems={notationSystems}
							id={notationSystem.id}
							label={notationSystem.label}
							description={notationSystem.description}
						/>
					))}
				</div>
			</td>
		</tr>
	);
};

export default NotationSystemsConfigList;
