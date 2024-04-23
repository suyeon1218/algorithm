function solution(id_list, reports, k) {
	const reportMap = {};
	const mailMap = {};

	reports.forEach((report) => {
		const [reporter, reported] = report.split(' ');

		if (reportMap[reported] === undefined) {
			reportMap[reported] = new Set();
		}

		reportMap[reported].add(reporter);
	});

	id_list.forEach((person) => {
		if (reportMap[person] && reportMap[person].size >= k) {
			reportMap[person].forEach((reporter) => {
				if (mailMap[reporter] === undefined) {
					mailMap[reporter] = 0;
				}

				mailMap[reporter] += 1;
			});
		}
	});

	return id_list.map((person) => (mailMap[person] ? mailMap[person] : 0));
}
