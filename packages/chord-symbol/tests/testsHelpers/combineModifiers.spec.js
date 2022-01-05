import combineModifiers from './combineModifiers';

describe('combineModifiers()', () => {
	test('Should create all possible combinations of given modifiers', () => {
		const combined = combineModifiers(
			['sus', 'sus4'],
			['M7', 'Maj7'],
			['2', 'add2']
		);
		const expected = [
			'susM72',
			'susM7add2',
			'susMaj72',
			'susMaj7add2',
			'sus4M72',
			'sus4M7add2',
			'sus4Maj72',
			'sus4Maj7add2',

			'sus2M7',
			'susadd2M7',
			'sus2Maj7',
			'susadd2Maj7',
			'sus42M7',
			'sus4add2M7',
			'sus42Maj7',
			'sus4add2Maj7',

			'M7sus2',
			'M7susadd2',
			'M7sus42',
			'M7sus4add2',
			'Maj7sus2',
			'Maj7susadd2',
			'Maj7sus42',
			'Maj7sus4add2',

			'M72sus',
			'M72sus4',
			'M7add2sus',
			'M7add2sus4',
			'Maj72sus',
			'Maj72sus4',
			'Maj7add2sus',
			'Maj7add2sus4',

			'2M7sus',
			'2M7sus4',
			'2Maj7sus',
			'2Maj7sus4',
			'add2M7sus',
			'add2M7sus4',
			'add2Maj7sus',
			'add2Maj7sus4',

			'2susM7',
			'2susMaj7',
			'2sus4M7',
			'2sus4Maj7',
			'add2susM7',
			'add2susMaj7',
			'add2sus4M7',
			'add2sus4Maj7',
		].sort();

		expect(combined).toEqual(expected);
	});

	test('should wrap first modifier in parenthesis if it starts with an accidental', () => {
		const combined = combineModifiers(['b9', '♭9'], ['#11', '♯11']);
		const expected = [
			'(b9)#11',
			'(b9)♯11',
			'(♭9)#11',
			'(♭9)♯11',
			'(#11)b9',
			'(#11)♭9',
			'(♯11)b9',
			'(♯11)♭9',
		].sort();

		expect(combined).toEqual(expected);
	});
});
