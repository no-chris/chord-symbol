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

		//['2 + 3',				'C(add2)',			['2', '3'], ], // impossible to create? ("2" modifier yields a ninth and not a second)
		//['2 + 9',				'C9(add2)',			['2', '9'], ], // same
		['3 + b3',				'Cm(add3)',			['3', 'b3'], ],
		['4 + 11',				'C11sus4',			['4', '11'], ],
		//['5 + b5',			'C5(b5)',			['5',  'b5'], ], // impossible to create?
		//['5 + #5',			'C5(#5)',			['5',  '#5'], ], // impossible to create?
		//['6 + 13',			'C613',				['6',  '13'], ], // impossible to create?
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
