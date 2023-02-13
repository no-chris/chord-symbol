import React from 'react';

const NotationSystemConfig = ({
	id,
	label,
	description,
	notationSystems,
	setNotationSystems,
}) => {
	const handleChange = (e) => {
		if (e.target.checked) {
			if (!notationSystems.includes(id)) {
				notationSystems.push(id);
			}
		} else if (notationSystems.length > 1) {
			const index = notationSystems.findIndex((el) => el === id);
			notationSystems.splice(index, 1);
		}
		setNotationSystems([...notationSystems]);
	};

	const isTheLastCheckedOne =
		notationSystems.includes(id) && notationSystems.length === 1;

	return (
		<div className={'pc-CheckboxList_Item'}>
			<input
				disabled={isTheLastCheckedOne}
				id={'parserNotationSystem' + id}
				type={'checkbox'}
				value={id}
				checked={notationSystems.includes(id)}
				onChange={handleChange}
				className={'pc-CheckboxList_Checkbox'}
			/>
			<label htmlFor={'parserNotationSystem' + id}>
				{label}{' '}
				<span className={'pc-CheckboxList_ItemDescription'}>
					({description})
				</span>
			</label>
		</div>
	);
};

export default NotationSystemConfig;
