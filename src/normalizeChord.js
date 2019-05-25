import _clone from 'lodash/clone';
import _find from 'lodash/find';
import _remove from 'lodash/remove';
import _isArray from 'lodash/isArray';

import allModifiers from '../src/allModifiers';
import intervalsToSemitones from '../src/intervalsToSemitones';

const allQualities = {
	ma: 'ma',
	ma6: 'ma6',
	ma69: 'ma69',
	ma7: 'ma7',
	dom7: 'dom7',
	aug: 'aug',

	mi: 'mi',
	mi6: 'mi6',
	mi69: 'mi69',
	mi7: 'mi7',
	miMa7: 'miMa7',
	dim: 'dim',
	dim7: 'dim7',

	sus: 'sus',
	susMa7: 'susMa7',
	susDom7: 'susDom7',
	// 6sus??
};

const qualityToDescriptor = {
	[allQualities.ma]: '',
	[allQualities.ma6]: '6',
	[allQualities.ma69]: '69',
	[allQualities.ma7]: 'ma{EXT}',
	[allQualities.dom7]: '{EXT}',
	[allQualities.aug]: '+',

	[allQualities.mi]: 'mi',
	[allQualities.mi6]: 'mi6',
	[allQualities.mi69]: 'mi69',
	[allQualities.mi7]: 'mi{EXT}',
	[allQualities.miMa7]: 'miMa{EXT}',
	[allQualities.dim]: 'dim',
	[allQualities.dim7]: 'dim7',

	[allQualities.sus]: 'sus',
	[allQualities.susMa7]: 'ma{EXT}sus',
	[allQualities.susDom7]: '{EXT}sus',
};


const miscDescriptors = {
	power: '5',
	bass: ' bass',
	omit: 'no',
	add: 'add'
};

const intervalsToQualities = [

	{ intervals: [ '3' ],				id: allQualities.ma },
	{ intervals: [ '3', '6' ],			id: allQualities.ma6 },
	{ intervals: [ '3', '6', '9' ],		id: allQualities.ma69 },
	{ intervals: [ '3', '7' ],			id: allQualities.ma7 },
	{ intervals: [ '3', 'b7' ],			id: allQualities.dom7 },
	{ intervals: [ '3', '#5' ],			id: allQualities.aug },

	{ intervals: [ 'b3' ],				id: allQualities.mi },
	{ intervals: [ 'b3', '6' ],			id: allQualities.mi6 },
	{ intervals: [ 'b3', '6', '9' ],	id: allQualities.mi69 },
	{ intervals: [ 'b3', '7' ],			id: allQualities.miMa7 },
	{ intervals: [ 'b3', 'b7' ],		id: allQualities.mi7 },
	{ intervals: [ 'b3', 'b5' ],		id: allQualities.dim },
	{ intervals: [ 'b3', 'b5', 'bb7' ],	id: allQualities.dim7 },

	{ intervals: [ '4' ],				id: allQualities.sus },
	{ intervals: [ '4', '7' ],			id: allQualities.susMa7 },
	{ intervals: [ '4', 'b7' ],			id: allQualities.susDom7 },

	//todo: if quality not found??

].sort((a, b) => (b.intervals.length - a.intervals.length));




export default function normalizeChord(parsed) {
	let normalized = parsed.rootNote;
	let chordIntervals = _clone(parsed.intervals);
	let alterations = [];
	let addeds = [];
	let omitteds = [];

	/**
	 * This will contain the "straight" version of the chord, ie intervals WITHOUT adds, alterations & omitted intervals
	 * It be useful to distinguish later between addeds/accidentals
	 */
	let baseIntervals = ['1'];


	if (isPowerChord(chordIntervals)) {
		normalized += miscDescriptors.power;

	} else if (isBass(chordIntervals)) {
		normalized += miscDescriptors.bass;

	} else {
		omitteds = getOmitted(chordIntervals);

		restaureChordQuality();

		const quality = getChordQuality(chordIntervals);
		const extensions = getExtensions(chordIntervals, quality.id);
		baseIntervals.push(...quality.intervals, ...extensions);

		detectAddedsAndAlterations(quality.id);

		const parenthesis = getParenthesis(addeds, alterations, omitteds);

		normalized += getNormalizedDescriptor(quality.id, extensions);
		if (parenthesis.length) {
			normalized += '(' + parenthesis.join(',') + ')';
		}
	}

	if (parsed.bassNote) {
		normalized += '/' + parsed.bassNote;
	}
	return normalized;


	/**
	 * Use of "omit" and "add" in chord symbol can makes it difficult to identify chord quality, especially if the 3rd is missing
	 * We try here to "rebuild" the chord quality for the following cases:
	 * - chord created with the "omit3" modifier
	 * - if both 3 and 4 are present, we assume the chord has been created with an "add3" modifier
	 */
	function restaureChordQuality() {
		if (has(omitteds, '3')) {
			if (parsed.modifiers.includes(allModifiers.mi)) {
				chordIntervals.push('b3');
			} else {
				chordIntervals.push('3');
			}
		}
		if (hasAll(chordIntervals, ['3', '4'])) {
			addeds.push('3');
			_remove(chordIntervals, o => o === '3');
		}
	}

	function detectAddedsAndAlterations(quality) {
		chordIntervals
			.filter(interval => interval !== '5')
			.forEach(interval => {
				if (!baseIntervals.includes(interval)) {
					if (isAlteration(quality, interval)) {
						alterations.push(interval);

					} else {
						addeds.push(interval);
					}
				}
			});
	}
}

function isPowerChord(intervals) {
	return intervals.length === 2 && intervals[0] === '1' && intervals[1] === '5';
}

function isBass(intervals) {
	return intervals.length === 1 && intervals[0] === '1';
}

function getOmitted(intervals) {
	const omittedLocal = [];
	if (hasNoneOf(intervals, ['b3', '3', '4'])) {
		omittedLocal.push('3');
	}
	if (hasNoneOf(intervals, ['b5', '5', '#5', 'b13'])) {
		omittedLocal.push('5');
	}
	return omittedLocal;
}

function getChordQuality(allIntervals) {
	return _find(intervalsToQualities, o => hasAll(allIntervals, o.intervals));
}

function getExtensions(allIntervals, quality) {
	const canHave11th = ([allQualities.mi7, allQualities.miMa7].includes(quality));

	if (canBeExtended(quality))
		return (canHave11th)
			? getExtensionsWith11th(allIntervals)
			: getExtensionsWithout11th(allIntervals);
	return [];
}

function canBeExtended(quality) {
	return [
		allQualities.ma7,
		allQualities.dom7,
		allQualities.mi7,
		allQualities.miMa7,
		allQualities.susMa7,
		allQualities.susDom7
	].includes(quality);
}

function getExtensionsWith11th(allIntervals) {
	const _hasOneOf = hasOneOf.bind(null, allIntervals);
	const extensions = [];

	if (_hasOneOf('13') && _hasOneOf(['11', '#11']) && _hasOneOf(['b9', '9', '#9'])) {
		extensions.push('9', '11', '13');

	} else if (_hasOneOf('11') && _hasOneOf(['b9', '9', '#9'])) {
		extensions.push('9', '11');

	} else if (_hasOneOf('9')) {
		extensions.push('9');
	}
	return extensions;
}

function getExtensionsWithout11th(allIntervals) {
	const _hasOneOf = hasOneOf.bind(null, allIntervals);
	const extensions = [];

	if (_hasOneOf('13') && _hasOneOf(['b9', '9', '#9'])) {
		extensions.push('9', '13');

	} else if (_hasOneOf('9')) {
		extensions.push('9');
	}
	return extensions;
}

function getHighestExtension(extensions) {
	const highestExtension = extensions[extensions.length - 1];
	return highestExtension || '7';
}

function getNormalizedDescriptor(quality, extensions) {
	return qualityToDescriptor[quality].replace('{EXT}', getHighestExtension(extensions));
}

function isAlteration(quality, interval) {
	const qualityAlterations = {
		[allQualities.ma]: 		['b5', '#5', '#11'],
		[allQualities.ma6]: 	['b5', '#5', '#11'],
		[allQualities.ma69]: 	['b5', '#5', '#11'],
		[allQualities.ma7]: 	['b5', '#5', '#11'],
		[allQualities.dom7]: 	['b5', '#5', 'b9', '#9', '#11', 'b13'],
		[allQualities.aug]: 	[],

		[allQualities.mi]: 		['b5', '#5', 'b13'],
		[allQualities.mi6]: 	['b5', '#5', 'b13'],
		[allQualities.mi69]: 	['b5', '#5', 'b13'],
		[allQualities.mi7]: 	['b5', '#5', 'b13'],
		[allQualities.miMa7]: 	['b5', '#5', 'b13'],
		[allQualities.dim]: 	[],
		[allQualities.dim7]:	[],

		[allQualities.sus]: 	['b5', '#5'],
		[allQualities.susMa7]: 	['b5', '#5', '#11'],
		[allQualities.susDom7]: ['b5', '#5', 'b9', '#9', '#11', 'b13'],
	};

	return qualityAlterations[quality].includes(interval);
}

function getParenthesis(addeds, alterations, omitteds) {
	const formattedOmitteds = formatOmitteds(omitteds);
	const formattedAddeds = formatAddeds(addeds);

	return [
		...sortAddedsAndAlterations(formattedAddeds, alterations),
		...formattedOmitteds
	];
}

function formatAddeds(addeds) {
	return addeds.map((add, index) => {
		let formatted = '';
		if (index === 0) {
			formatted += miscDescriptors.add;
			if (['b', '#'].includes(add[0])) {
				formatted += ' ';
			}
		}
		formatted += (add === '7') ? 'Ma7' : add;
		return formatted;
	});
}

function sortAddedsAndAlterations(addeds, alterations) {
	return [...alterations, ...addeds].sort((a, b) => {
		return getSortableInterval(a) - getSortableInterval(b);
	});
}

function getSortableInterval(interval) {
	let sortable = interval.replace(/[^0-9b#]/g, '');
	return intervalsToSemitones[sortable];
}

function formatOmitteds(omitteds) {
	return omitteds.map(o => miscDescriptors.omit + o);
}


function hasOneOf(allIntervals, search) {
	return has(allIntervals, search, 'oneOf');
}
function hasAll(allIntervals, search) {
	return has(allIntervals, search, 'all');
}
function hasNoneOf(allIntervals, search) {
	return has(allIntervals, search, 'none');
}
function has(allIntervals, search, require = 'all') {
	const arraySearch = (_isArray(search)) ? search : [search];

	const lookupMethod = (require === 'oneOf') ? 'some' : 'every';

	return arraySearch[lookupMethod](interval => {
		return (require === 'none')
			? !allIntervals.includes(interval)
			: allIntervals.includes(interval);
	});
}
