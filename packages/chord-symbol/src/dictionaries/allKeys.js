import { notes } from './notes';

export const allKeys = [
	...Object.values(notes),
	...Object.values(notes).map((key) => key + 'm'),
];
