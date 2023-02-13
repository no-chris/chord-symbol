import React from 'react';

const SymbolPreset = ({ setUserChordSymbol, preset }) => {
	const handleClick = () => {
		setUserChordSymbol(preset);
	};

	return (
		<button className={'ui-SymbolPreset_Button'} onClick={handleClick}>
			{preset}
		</button>
	);
};

export default SymbolPreset;
