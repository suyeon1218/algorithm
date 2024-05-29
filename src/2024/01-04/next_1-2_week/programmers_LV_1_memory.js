function solution(names, yearning, photos) {
	const missingRecord = {};

	names.forEach((name, index) => {
		missingRecord[name] = yearning[index];
	});

	return photos.map((photo) => {
		return photo.reduce((prevScore, name) => {
			const missingScore =
				missingRecord[name] === undefined ? 0 : missingRecord[name];

			return prevScore + missingScore;
		}, 0);
	});
}
