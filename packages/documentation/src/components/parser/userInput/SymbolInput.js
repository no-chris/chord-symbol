import React from 'react';

const SymbolInput = ({
	userChordSymbol,
	setUserChordSymbol,
	parsingErrors,
}) => {
	const handleSymbolChange = (e) => {
		const symbol = (e.target.value || '').trim();
		setUserChordSymbol(symbol);
	};

	const classNames = ['ui-SymbolInput_Container'];
	if (userChordSymbol !== '') {
		if (!parsingErrors) {
			classNames.push('ui-SymbolInput_Container-isValid');
		} else {
			const isInvalid = parsingErrors.some(
				(error) => error.type !== 'NoSymbolFound'
			);
			if (isInvalid) {
				classNames.push('ui-SymbolInput_Container-isInvalid');
			}
		}
	}

	return (
		<div className={classNames.join(' ')}>
			<input
				type={'text'}
				className={'ui-SymbolInput_Input'}
				value={userChordSymbol}
				onChange={handleSymbolChange}
				placeholder={'Type here'}
			/>
		</div>
	);
};

export default SymbolInput;
