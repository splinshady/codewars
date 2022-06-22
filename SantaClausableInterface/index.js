function isSantaClausable(obj) {
	let count = 0;
	for (key in obj) {
		if (typeof obj[key] !== 'function') continue;
		switch (key) {
				case 'goDownTheChimney':
				case 'distributeGifts':
				case 'sayHoHoHo': count++;
				break;
		}
	}
	return count === 3;
}
