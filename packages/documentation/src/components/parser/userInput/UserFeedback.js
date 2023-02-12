import React from 'react';

const UserFeedback = ({ parsingErrors }) => {
	const allFeedbackMsg = [];

	if (!parsingErrors) {
		allFeedbackMsg.push('Well done! This looks like a valid chord');
	} else {
		parsingErrors.forEach((e) => {
			switch (e.type) {
				case 'InvalidInput':
					allFeedbackMsg.push("I'm ready, please give me a symbol!");
					break;
				case 'NoSymbolFound':
					allFeedbackMsg.push(
						`${e.message} in ${e.notationSystem} notation`
					);
					break;
				default:
					allFeedbackMsg.push(
						`In ${e.notationSystem} notation, ${e.message}`
					);
					break;
			}
		});
	}

	return (
		<div className={'ui-UserFeedback_Container'}>
			{allFeedbackMsg
				.map((e, i) => <span key={'userFeedback' + i}>{e}</span>)
				.reduce((prev, curr, i) => {
					return prev === null
						? [curr]
						: [...prev, <br key={i} />, curr];
				}, null)}
		</div>
	);
};

export default UserFeedback;
