import React from 'react';
import SymbolPreset from './SymbolPreset';

import allSymbols from './allSymbols';

const SymbolPresetList = ({ setUserChordSymbol }) => {
	const presets = [
		'G7/B',
		'Cm7b5',
		'Fish',
		'Bbalt.',
		'C#5',
		'F#/Bb',
		'Asus2',
		'RéΔ7mi',
	];

	const handleClick = () => {
		const rand = Math.floor(Math.random() * allSymbols.length);
		setUserChordSymbol(allSymbols[rand]);
	};

	return (
		<div className={'ui-SymbolPresetList_Container'}>
			{presets.map((preset, i) => (
				<SymbolPreset
					key={i}
					preset={preset}
					setUserChordSymbol={setUserChordSymbol}
				/>
			))}
			<button
				className={
					'ui-SymbolPreset_Button ui-SymbolPreset_Button-random'
				}
				onClick={handleClick}
			>
				<strong>Random</strong>
			</button>
		</div>
	);
};

export default SymbolPresetList;
