import _uniq from 'lodash/uniq';
import {
	InvalidModifierError,
	NoSymbolFoundError,
} from '../../helpers/ChordParsingError';

import m from '../../dictionaries/modifiers';
import { allSymbols, allVariants } from '../../dictionaries/modifiers';
import intervalsToSemitones from '../../dictionaries/intervalsToSemitones';
import { hasNoneOf, hasOneOf } from '../../helpers/hasElement';

/**
 * Convert the descriptor into a suite of intervals, semitones and intents
 *
 * @param {Array<('b5'|'#5'|'b9'|'#9'|'#11'|'b13')>} altIntervals
 * @param {Chord} chord
 * @returns {Chord|Null}
 */
export default function parseDescriptor(altIntervals, chord) {
	let allModifiers = [];

	if (chord.input.parsableDescriptor) {
		allModifiers = getModifiers(chord);
	}

	chord.input.modifiers = allModifiers;
	chord.normalized.intervals = getIntervals(allModifiers, altIntervals);
	chord.normalized.semitones = getSemitones(chord.normalized.intervals);
	chord.normalized.intents = getIntents(allModifiers);

	return chord;
}

function getModifiers(chord) {
	const { parsableDescriptor } = chord.input;
	const modifiers = [];

	const descriptorRegex = new RegExp(
		allVariants.map(escapeRegex).join('|'),
		'g'
	);
	const descriptorMatches = parsableDescriptor.match(descriptorRegex);

	let remainingChars = parsableDescriptor;
	let allModifiersId;

	if (descriptorMatches) {
		descriptorMatches.forEach((match) => {
			allModifiersId = allSymbols[match];

			if (!Array.isArray(allModifiersId)) {
				allModifiersId = [allModifiersId];
			}

			allModifiersId.forEach((modifierId) => {
				if (modifiers.includes(modifierId)) {
					return;
				}
				modifiers.push(modifierId);

				remainingChars = remainingChars.replace(match, '');
			});
		});
	}

	if (modifiers.length === 0) {
		throw new NoSymbolFoundError(chord);
	}
	if (remainingChars.trim().length > 0) {
		throw new InvalidModifierError(chord, remainingChars);
	}

	return modifiers;
}

function getIntervals(allModifiers, altIntervals) {
	if (allModifiers.includes(m.power)) {
		return ['1', '5'];
	} else if (allModifiers.includes(m.bass)) {
		return ['1'];
	}

	return _uniq([
		'1',
		...getThird(allModifiers),
		...getFourth(allModifiers),
		...getFifths(allModifiers, altIntervals),
		...getSixth(allModifiers),
		...getSevenths(allModifiers),
		...getNinths(allModifiers, altIntervals),
		...getElevenths(allModifiers, altIntervals),
		...getThirteenths(allModifiers, altIntervals),
	]).sort((a, b) => intervalsToSemitones[a] - intervalsToSemitones[b]);
}

function getThird(allModifiers) {
	const third = [];
	if (allModifiers.includes(m.omit3)) {
		return [];
	}
	if (!hasOneOf(allModifiers, [m.sus, m.sus2])) {
		if (!hasMajorIntent(allModifiers)) {
			third.push('b3');
		} else if (!allModifiers.includes(m.eleventh)) {
			third.push('3');
		}
	}
	if (allModifiers.includes(m.add3)) {
		third.push('3');
	}
	return third;
}

function getFourth(allModifiers) {
	const fourth = [];
	if (hasOneOf(allModifiers, [m.sus, m.add4])) {
		fourth.push('4');
	}
	return fourth;
}

function getFifths(allModifiers, altIntervals) {
	const fifths = [];
	if (allModifiers.includes(m.omit5)) {
		return [];
	}
	if (
		hasOneOf(allModifiers, [m.dim, m.halfDim, m.fifthFlat]) ||
		shouldAlter(allModifiers, altIntervals, 'b5')
	) {
		fifths.push('b5');
	}
	if (
		hasOneOf(allModifiers, [m.aug, m.fifthSharp]) ||
		shouldAlter(allModifiers, altIntervals, '#5')
	) {
		fifths.push('#5');
	}
	if (!fifths.length && !allModifiers.includes(m.thirteenthFlat)) {
		fifths.push('5');
	}
	return fifths;
}

function getSixth(allModifiers) {
	const sixth = [];
	if (hasOneOf(allModifiers, [m.addb6])) {
		sixth.push('b6');
	}
	if (
		hasOneOf(allModifiers, [m.add6, m.add69]) &&
		!isExtended(allModifiers) &&
		!hasOneOf(allModifiers, [m.halfDim])
	) {
		sixth.push('6');
	}
	return sixth;
}

function getSevenths(allModifiers) {
	const sevenths = [];
	if (hasOneOf(allModifiers, [m.alt])) {
		sevenths.push('b7');
	}
	if (hasOneOf(allModifiers, [m.seventh, m.halfDim])) {
		if (allModifiers.includes(m.dim)) {
			sevenths.push('bb7');
		} else if (allModifiers.includes(m.halfDim)) {
			sevenths.push('b7');
		} else {
			sevenths.push(getMinorOrMajorSeventh(allModifiers));
		}
	} else if (hasOneOf(allModifiers, [m.ninth, m.eleventh, m.thirteenth])) {
		sevenths.push(getMinorOrMajorSeventh(allModifiers));
	}
	if (allModifiers.includes(m.add7)) {
		sevenths.push('7');
	}
	return sevenths;
}

function getMinorOrMajorSeventh(allModifiers) {
	return allModifiers.includes(m.ma) ? '7' : 'b7';
}

function getNinths(allModifiers, altIntervals) {
	const ninth = [];
	if (
		hasOneOf(allModifiers, [m.add69, m.ninth, m.eleventh, m.thirteenth]) &&
		hasNoneOf(allModifiers, [m.ninthFlat, m.ninthSharp])
	) {
		ninth.push('9');
	}
	if (hasOneOf(allModifiers, [m.sus2, m.add9])) {
		ninth.push('9');
	}
	if (
		hasOneOf(allModifiers, [m.ninthFlat]) ||
		shouldAlter(allModifiers, altIntervals, 'b9')
	) {
		ninth.push('b9');
	}
	if (
		hasOneOf(allModifiers, [m.ninthSharp]) ||
		shouldAlter(allModifiers, altIntervals, '#9')
	) {
		ninth.push('#9');
	}
	return ninth;
}

function getElevenths(allModifiers, altIntervals) {
	const elevenths = [];
	if (
		hasOneOf(allModifiers, [m.thirteenth]) &&
		!hasMajorIntent(allModifiers)
	) {
		elevenths.push('11');
	} else if (hasOneOf(allModifiers, [m.eleventh, m.add11])) {
		elevenths.push('11');
	}
	if (
		hasOneOf(allModifiers, [m.eleventhSharp]) ||
		shouldAlter(allModifiers, altIntervals, '#11')
	) {
		elevenths.push('#11');
	}
	return elevenths;
}

function getThirteenths(allModifiers, altIntervals) {
	const thirteenths = [];
	if (
		hasOneOf(allModifiers, [m.add13, m.thirteenth]) ||
		(hasOneOf(allModifiers, [m.add6, m.add69]) &&
			isExtended(allModifiers)) ||
		(hasOneOf(allModifiers, [m.add6, m.add69]) &&
			hasOneOf(allModifiers, [m.halfDim]))
	) {
		thirteenths.push('13');
	}
	if (
		hasOneOf(allModifiers, [m.thirteenthFlat]) ||
		shouldAlter(allModifiers, altIntervals, 'b13')
	) {
		thirteenths.push('b13');
	}
	return thirteenths;
}

function shouldAlter(allModifiers, altIntervals, interval) {
	return allModifiers.includes(m.alt) && altIntervals.includes(interval);
}

function hasMajorIntent(allModifiers) {
	return hasNoneOf(allModifiers, [m.mi, m.dim, m.dim7, m.halfDim]);
}

function isExtended(allModifiers) {
	return hasOneOf(allModifiers, [
		m.seventh,
		m.ninth,
		m.eleventh,
		m.thirteenth,
	]);
}

// Based on https://stackoverflow.com/a/6969486
function escapeRegex(string) {
	return string.replace(/[.\-*+?^${}()|[\]\\]/g, '\\$&');
}

function getSemitones(allIntervals) {
	return allIntervals
		.map((interval) => intervalsToSemitones[interval])
		.sort((a, b) => a - b);
}

// intents will be used later at formatting for disambiguation of some potentially confusing cases
function getIntents(allModifiers) {
	return {
		major: hasMajorIntent(allModifiers),
		eleventh: allModifiers.includes(m.eleventh),
		alt: allModifiers.includes(m.alt),
	};
}
