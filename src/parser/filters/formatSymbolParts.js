import { qualities } from '../../dictionaries/qualities';
import { hasNoneOf } from '../../helpers/hasElement';

const qualityToDescriptor = {
	[qualities.ma]: () => '',
	[qualities.ma6]: (chord) =>
		chord.normalized.intervals.includes('9') ? '69' : '6',
	[qualities.ma7]: (chord) => 'ma' + getHighestExtension(chord),
	[qualities.dom7]: (chord) =>
		chord.normalized.intents.alt ? '7alt' : getHighestExtension(chord),

	[qualities.mi]: () => 'mi',
	[qualities.mi6]: (chord) =>
		chord.normalized.intervals.includes('9') ? 'mi69' : 'mi6',
	[qualities.mi7]: (chord) => 'mi' + getHighestExtension(chord),
	[qualities.miMa7]: (chord) => 'miMa' + getHighestExtension(chord),

	[qualities.aug]: () => '+',
	[qualities.dim]: () => 'dim',
	[qualities.dim7]: () => 'dim7',

	[qualities.power]: () => '5',
	[qualities.bass]: () => ' bass',
};

const chordChangesDescriptors = {
	add: 'add',
	add7: 'Ma7',
	omit: 'omit',
	sus: 'sus',
};

/**
 * Pre-render the chord by formatting all his components: root and bass notes, descriptor and changes
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
export default function formatSymbolParts(chord) {
	chord.formatted = {
		rootNote: chord.normalized.rootNote,
		bassNote: chord.normalized.bassNote,
		descriptor: getDescriptor(chord),
		chordChanges: getChordChanges(chord),
	};
	return chord;
}

function getDescriptor(chord) {
	let descriptor = qualityToDescriptor[chord.normalized.quality](chord);
	if (chord.normalized.isSuspended) {
		descriptor += chordChangesDescriptors.sus;
	}
	return descriptor;
}

function getHighestExtension(chord) {
	const extensions = chord.normalized.extensions;

	let highestExtension = extensions[extensions.length - 1];

	if (highestExtension === '11' && chord.normalized.intents.major) {
		highestExtension = hasNoneOf(chord.normalized.alterations, ['b9', '#9'])
			? '9'
			: '7';
	}
	return highestExtension || '7';
}

function getChordChanges(chord) {
	const formattedOmits = formatOmits(chord.normalized.omits);

	if (isAltered(chord)) {
		return formattedOmits;
	}

	const formattedAdds = formatAdds(
		chord.normalized.quality,
		chord.normalized.adds
	);

	return [
		...chord.normalized.alterations,
		...formattedAdds,
		...formattedOmits,
	];
}

function isAltered(chord) {
	return (
		chord.normalized.intents.alt &&
		chord.normalized.quality === qualities.dom7
	);
}

function formatAdds(quality, adds) {
	return adds
		.filter((add) => {
			return !(
				[qualities.ma6, qualities.mi6].includes(quality) && add === '9'
			);
		})
		.map((add, index) => {
			let formatted = '';
			if (index === 0) {
				formatted += chordChangesDescriptors.add;
				if (['b', '#'].includes(add[0])) {
					formatted += ' ';
				}
			}
			formatted += add === '7' ? chordChangesDescriptors.add7 : add;
			return formatted;
		});
}

function formatOmits(omits) {
	return omits.map((omitted, index) => {
		let formatted = '';
		if (index === 0) {
			formatted += chordChangesDescriptors.omit;
		}
		formatted += omitted === 'b3' ? '3' : omitted;
		return formatted;
	});
}
