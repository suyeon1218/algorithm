process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
	const n = data.split(' ');
	const a = Number(n[0]),
		b = Number(n[1]);

	console.log(
		[...new Array(b)].map((_) => new Array(a).fill('*').join('')).join('\n'),
	);
});
