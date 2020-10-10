import { hasAll } from '../../../src/helpers/hasElement';
import chain from '../../../src/helpers/chain';
import { englishVariants } from '../../../src/dictionaries/notes';

import checkIntervalsConsistency from '../../../src/parser/filters/checkIntervalsConsistency';

import initChord from '../../../src/parser/filters/initChord';
import parseBase from '../../../src/parser/filters/parseBase';
import parseDescriptor from '../../../src/parser/filters/parseDescriptor';

function parseChord(symbol) {
	const filters = [
		initChord,
		parseBase.bind(null, englishVariants),
		parseDescriptor,
	];
	return chain(filters, symbol);
}

describe('checkIntervalsConsistency', () => {
	describe.each([
		/**/

		['3 + b3',				'Cm(add3)',			['3', 'b3'], ],
		['3 + 4',				'C4(add3)',			['3', '4'], ],
		//['5 + b5',				'C5(b5)',		['5',  'b5'], ], // impossible to create?
		//['5 + #5',				'C5(#5)',		['5',  '#5'], ], // impossible to create?
		//['b7 + bb7',			'C7°alt',		['b7', 'bb7'], ], //todo: uncomment when alt PR is merged
		['7 + bb7',				'C7°M7',			['7',  'bb7'], ],
		['7 + b7',				'C7M7',				['7',  'b7'], ],
		['9 + b9',				'C(b9)(add9)',		['9',  'b9'], ],
		['9 + #9',				'C(#9)(add9)',		['9',  '#9'], ],
		['11 + #11',			'C(#11)(add11)',	['11', '#11'], ],
		['13 + b13',			'C(b13)(add13)',	['13', 'b13'], ],

		/**/
	])('%s: %s', (title, symbol, forbiddenCombo) => {
		test('yields invalid intervals: ' + forbiddenCombo.join(', '), () => {
			const chord = parseChord(symbol);
			expect(hasAll(chord.normalized.intervals, forbiddenCombo)).toBe(true);

			const checked = checkIntervalsConsistency(chord);
			expect(checked).toBeNull();
		});
	});

});
