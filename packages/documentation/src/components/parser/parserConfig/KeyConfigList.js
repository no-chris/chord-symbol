import React from 'react';

const KeyConfigList = ({ setKey, key }) => {
	const allNotesSharp = 'A,A#,B,C,C#,D,D#,E,F,F#,G,G#'.split(',');
	const allFlats = 'Ab,Bb,Db,Eb,Gb'.split(',');
	const allNotes = [...allNotesSharp, ...allFlats];
	const allKeys = [...allNotes, ...allNotes.map((note) => note + 'm')];
	allKeys.sort();

	const keyDesc = 'used to build the roman numeral symbol for the chord.';

	return (
		<tr>
			<td>
				<div className={'parserConfigItem_Container'}>
					<div className={'pc-CheckboxList_Label'}>Key:</div>
					<select>
						{allKeys.map((keyFromList) => (
							<option
								key={'KeyConfig' + keyFromList}
								selected={key === keyFromList}
							>
								{keyFromList}
							</option>
						))}
					</select>
				</div>
			</td>
			<td
				className={'configuration_Desc'}
				dangerouslySetInnerHTML={{
					__html: keyDesc,
				}}
			></td>
		</tr>
	);
};

export default KeyConfigList;
