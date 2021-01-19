import _clone from 'lodash/clone';
import _find from 'lodash/find';
import _uniq from 'lodash/uniq';
import _without from 'lodash/without';

import chain from '../../helpers/chain';

import {
	hasOneOf,
	hasAll,
	hasNoneOf,
	hasExactly,
} from '../../helpers/hasElement';

import { qualities } from '../../dictionaries/qualities';

/**
 * Detect chord quality and changes (extensions, alterations, adds and omits)
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
export default function normalizeDescriptor(chord) {
	let chordIntervals = _clone(chord.normalized.intervals);

	let normalized = {
		quality: '',
		isSuspended: false,
		extensions: [],
		alterations: [],
		adds: [],
		omits: [],
	};

	if (isPowerChord(chordIntervals)) {
		normalized.quality = qualities.power;
	} else if (isBass(chordIntervals)) {
		normalized.quality = qualities.bass;
	} else {
		const omits = getOmits(chordIntervals, chord.normalized.intents.major);

		const isSuspended = getIsSuspended(
			chordIntervals,
			chord.normalized.intents.major
		);

		const { qualityIntervals, quality } = getChordQuality(
			chordIntervals,
			chord,
			isSuspended,
			omits
		);

		const extensions = getExtensions(chordIntervals, quality);

		// to be able to detect adds and alterations, we build the "straight" version of the chord,
		// ie. the chord as if no alterations/adds/omits where present.
		// we will compare this to the actual intervals later on
		const baseIntervals = ['1', ...qualityIntervals, ...extensions];

		const { adds, alterations } = getAddsAndAlterations(
			chordIntervals,
			baseIntervals,
			quality
		);

		normalized = {
			...normalized,
			quality,
			isSuspended,
			extensions,
			alterations,
			adds,
			omits,
		};
	}

	return {
		...chord,
		normalized: {
			...chord.normalized,
			...normalized,
		},
	};
}

function isPowerChord(intervals) {
	return hasExactly(intervals, ['1', '5']);
}

function isBass(intervals) {
	return hasExactly(intervals, ['1']);
}

function getIsSuspended(intervals, hasMajorIntent) {
	return (
		intervals.includes('4') ||
		(intervals.includes('11') && hasMajorIntent && !intervals.includes('3'))
	);
}

function getOmits(intervals, hasMajorIntent) {
	const omits = [];

	if (
		hasNoneOf(intervals, ['b3', '3', '4', '11']) ||
		(!hasMajorIntent && hasNoneOf(intervals, ['b3', '4']))
	) {
		omits.push(hasMajorIntent ? '3' : 'b3');
	}

	if (hasNoneOf(intervals, ['b5', '5', '#5', 'b13'])) {
		omits.push('5');
	}
	return omits;
}

function getChordQuality(allIntervals, chord, isSuspended, omits) {
	const intervalsForQualityDetection = getIntervalsForQualityDetection(
		allIntervals,
		chord,
		isSuspended,
		omits
	);

	const intervalsToQualities = [
		// !!! do not change order without a good reason
		{ qualityIntervals: ['b3'], quality: qualities.mi },
		{ qualityIntervals: ['b3', '6'], quality: qualities.mi6 },
		{ qualityIntervals: ['b3', '7'], quality: qualities.miMa7 },
		{ qualityIntervals: ['b3', 'b7'], quality: qualities.mi7 },

		{ qualityIntervals: ['3'], quality: qualities.ma },
		{ qualityIntervals: ['3', '6'], quality: qualities.ma6 },
		{ qualityIntervals: ['3', '7'], quality: qualities.ma7 },
		{ qualityIntervals: ['3', 'b7'], quality: qualities.dom7 },

		{ qualityIntervals: ['3', '#5'], quality: qualities.aug },
		{ qualityIntervals: ['b3', 'b5'], quality: qualities.dim },
		{ qualityIntervals: ['b3', 'b5', 'bb7'], quality: qualities.dim7 },
	].sort((a, b) => b.qualityIntervals.length - a.qualityIntervals.length);

	return _find(intervalsToQualities, (o) =>
		hasAll(intervalsForQualityDetection, o.qualityIntervals)
	);
}

// To properly detect the chord quality, we need a "straight" version of the chord,
// meaning with a third interval (= un-suspended, no omit3)
function getIntervalsForQualityDetection(
	allIntervals,
	chord,
	isSuspended,
	omits
) {
	const allFilters = [
		undoOmit3.bind(null, omits),
		undoSuspension.bind(null, isSuspended, chord.normalized.intents.major),
		undoAlt5.bind(null, chord.normalized.intents.alt),
		_uniq,
	];

	return chain(allFilters, _clone(allIntervals));
}

function undoOmit3(omits, allIntervals) {
	const with3rd = _clone(allIntervals);

	if (omits.includes('3')) {
		with3rd.push('3');
	} else if (omits.includes('b3')) {
		with3rd.push('b3');
	}
	return with3rd;
}

function undoSuspension(isSuspended, hasMajorIntent, allIntervals) {
	if (isSuspended) {
		const unSuspended = _without(allIntervals, '4');
		unSuspended.push(hasMajorIntent ? '3' : 'b3');
		return unSuspended;
	}
	return allIntervals;
}

function undoAlt5(isAlt, allIntervals) {
	if (isAlt) {
		const unaltered = _without(allIntervals, 'b5', '#5');
		unaltered.push('5');
		return unaltered;
	}
	return allIntervals;
}

function getExtensions(allIntervals, quality) {
	const extensions = [];

	if (canBeExtended(quality)) {
		if (isMinorExtended13th(allIntervals, quality)) {
			extensions.push('9', '11', '13');
		} else if (isMajorExtended13th(allIntervals, quality)) {
			extensions.push('9', '13');
		} else if (isExtended11th(allIntervals)) {
			extensions.push('9', '11');
		} else if (isExtended9th(allIntervals)) {
			extensions.push('9');
		}
	}
	return extensions;
}

function canBeExtended(quality) {
	return [
		qualities.ma7,
		qualities.dom7,
		qualities.mi7,
		qualities.miMa7,
	].includes(quality);
}

function canHave11th(quality) {
	return [qualities.mi7, qualities.miMa7].includes(quality);
}

function isMinorExtended13th(allIntervals, quality) {
	return (
		canHave11th(quality) &&
		hasOneOf(allIntervals, '13') &&
		hasOneOf(allIntervals, ['11', '#11']) &&
		hasOneOf(allIntervals, ['b9', '9', '#9'])
	);
}

function isMajorExtended13th(allIntervals, quality) {
	return (
		!canHave11th(quality) &&
		hasOneOf(allIntervals, '13') &&
		hasOneOf(allIntervals, ['b9', '9', '#9'])
	);
}

function isExtended11th(allIntervals) {
	return (
		hasOneOf(allIntervals, '11') &&
		hasOneOf(allIntervals, ['b9', '9', '#9'])
	);
}

function isExtended9th(allIntervals) {
	return allIntervals.includes('9');
}

function getAddsAndAlterations(chordIntervals, baseIntervals, quality) {
	const adds = [];
	const alterations = [];

	chordIntervals
		.filter((interval) => interval !== '5' && interval !== '4')
		.forEach((interval) => {
			if (!baseIntervals.includes(interval)) {
				if (isAlteration(quality, interval)) {
					alterations.push(interval);
				} else {
					adds.push(interval);
				}
			}
		});

	if (hasAdd3(chordIntervals)) {
		adds.push('3');
	}

	return {
		adds: sortIntervals(adds),
		alterations: sortIntervals(alterations),
	};
}

function isAlteration(quality, interval) {
	const qualityAlterations = {
		[qualities.ma]: ['b5', '#5', '#11', 'b13'],
		[qualities.ma6]: ['b5', '#5', '#11', 'b13'],
		[qualities.ma7]: ['b5', '#5', '#11', 'b13'],
		[qualities.dom7]: ['b5', '#5', 'b9', '#9', '#11', 'b13'],

		[qualities.mi]: ['b5', '#5', '#11', 'b13'],
		[qualities.mi6]: ['b5', '#5', '#11', 'b13'],
		[qualities.mi7]: ['b5', '#5', '#11', 'b13'],
		[qualities.miMa7]: ['b5', '#5', '#11', 'b13'],

		[qualities.aug]: [],
		[qualities.dim]: [],
		[qualities.dim7]: [],
	};

	return qualityAlterations[quality].includes(interval);
}

function hasAdd3(allIntervals) {
	return hasAll(allIntervals, ['3', '4']);
}

function sortIntervals(intervals) {
	return intervals.sort((a, b) => {
		const sortableA = Number.parseInt(a.replace(/[b#]/, ''));
		const sortableB = Number.parseInt(b.replace(/[b#]/, ''));
		return sortableA - sortableB;
	});
}
