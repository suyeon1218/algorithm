function solution(survey, choices) {
	const personalityMap = ['RT', 'CF', 'JM', 'AN'];
	const mySurvey = {};
	const result = [];

	survey.forEach((type, i) => {
		const [disagreeType, agreeType] = type;

		if (mySurvey[disagreeType] === undefined) {
			mySurvey[disagreeType] = 0;
		}
		if (mySurvey[agreeType] === undefined) {
			mySurvey[agreeType] = 0;
		}

		if (choices[i] < 4) {
			mySurvey[disagreeType] += Math.abs(choices[i] - 4);
		} else if (choices[i] > 4) {
			mySurvey[agreeType] += Math.abs(choices[i] - 4);
		}
	});

	for (let group in personalityMap) {
		const [type1, type2] = personalityMap[group];

		if (mySurvey[type1] === undefined || mySurvey[type1] >= mySurvey[type2]) {
			result.push(type1);
			continue;
		}

		result.push(type2);
	}

	return personalityMap
		.map(([a, b]) => (mySurvey[a] >= mySurvey[b] ? a : b))
		.join('');
}

// ! 이걸 이렇게 간단하게 풀수 있다니 재능이다........
function solution(survey, choices) {
	const MBTI = {};
	const types = ['RT', 'CF', 'JM', 'AN'];

	types.forEach((type) => type.split('').forEach((char) => (MBTI[char] = 0)));

	choices.forEach((choice, index) => {
		const [disagree, agree] = survey[index];

		MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
	});

	return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join('');
}
