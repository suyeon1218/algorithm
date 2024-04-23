const solution = (ingredients) => {
	const receipt = '1231';
	const stack = [];
	let bugger = 0;

	for (const ingredient of ingredients) {
		if (stack.length < 4) {
			stack.push(ingredient);
		}
		if (stack.length >= 4 && ingredient === 1) {
			const lastFood = stack.slice(stack.length - 4).join('');

			if (lastFood === receipt) {
				bugger += 1;
			}
		}
	}

	return bugger;
};
