import chain from '../../helpers/chain';

/**
 * Prepare whatever string has been identified as a descriptor so it is parsable by the next filter
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
export default function getParsableDescriptor(chord) {
	const allFilters = [
		toLowerCaseExceptMajorM,
		removeSpaces,
		addDisambiguators,
		addMissingVerbs,
	];

	if (chord.input.descriptor) {
		chord.input.parsableDescriptor = chain(
			allFilters,
			chord.input.descriptor
		);
	}
	return chord;
}

function toLowerCaseExceptMajorM(descriptor) {
	return descriptor
		.replace(/[A-LN-Za-z]+/g, (match) => match.toLowerCase())
		.replace('oMit', 'omit')
		.replace('diM', 'dim')
		.replace('augMented', 'augmented');
}

function removeSpaces(descriptor) {
	return descriptor.replace(/ /g, '');
}

function addDisambiguators(descriptor) {
	return descriptor
		.replace(/(7?dim)(alt|add)/g, '$1 $2')
		.replace(/([m|M])(alt|add)/g, '$1 $2')
		.replace(/i(no[35])/g, 'i $1')
		.replace(/([b♭#♯]9)6/g, '$1 6')
		.replace(/(9\/?6)/g, ' $1');
}

function addMissingVerbs(descriptor) {
	let allTokensWithVerbs;
	let currentVerb;
	let hasVerb;

	return descriptor.replace(/\((.*?)\)/g, (match, parenthesis) => {
		allTokensWithVerbs = [];
		currentVerb = '';

		parenthesis.split(',').forEach((token) => {
			hasVerb = true;
			if (token.startsWith('add')) {
				currentVerb = 'add';
			} else if (token.startsWith('omit')) {
				currentVerb = 'omit';
			} else if (token.startsWith('no')) {
				currentVerb = 'no';
			} else {
				hasVerb = false;
			}
			if (hasVerb) {
				allTokensWithVerbs.push(token);
			} else {
				allTokensWithVerbs.push(currentVerb + token);
			}
		});
		return ' ' + allTokensWithVerbs.join(' ') + ' ';
	});
}
