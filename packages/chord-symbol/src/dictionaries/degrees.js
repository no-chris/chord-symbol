const u = {
	flat: `\u266D`, // ♭
	sharp: `\u266F`, // ♯
};

export const semitonesToDegree = {
	major: {
		0: `I`,
		//1: `${u.flat}II`,
		2: `II`,
		3: `${u.flat}III`,
		4: `III`,
		5: `IV`,
		//6: `${u.flat}V`,
		7: `V`,
		8: `${u.flat}VI`,
		9: `VI`,
		10: `${u.flat}VII`,
		11: `VII`,
	},
	minor: {
		0: `I`,
		//1: `${u.sharp}I`,
		2: `II`,
		3: `III`,
		4: `${u.sharp}III`,
		5: `IV`,
		//6: `${u.sharp}IV`,
		7: `V`,
		8: `VI`,
		9: `${u.sharp}VI`,
		10: `VII`,
		11: `${u.sharp}VII`,
	},
};
