function solution(s) {
	return (
		(s.length === 4 || s.length === 6) && s.split('').every((el) => !isNaN(el))
	);
}

// ! Number(s) 는 앞에 부호가 붙어있으면 그것까지 숫자로 바꿔버림..
