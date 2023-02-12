import React from 'react';

const AltIntervalConfig = ({
	id,
	label,
	setAltIntervals,
	altIntervals,
	disabled,
}) => {
	const handleChange = (e) => {
		if (e.target.checked) {
			if (!altIntervals.includes(id)) {
				altIntervals.push(id);
			}
		} else if (altIntervals.length > 1) {
			const index = altIntervals.findIndex((el) => el === id);
			altIntervals.splice(index, 1);
		}
		setAltIntervals([...altIntervals]);
	};

	return (
		<div className={'pc-CheckboxList_Item'}>
			<input
				id={id}
				type={'checkbox'}
				value={altIntervals[id]}
				checked={altIntervals.includes(id)}
				onChange={handleChange}
				disabled={disabled}
				className={'pc-CheckboxList_Checkbox'}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
};

export default AltIntervalConfig;
