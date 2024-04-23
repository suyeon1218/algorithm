function solution(phoneNumber) {
	const phoneLen = phoneNumber.length;
	const last4Digits = phoneNumber.slice(-4);

	return last4Digits.padStart(phoneLen, '*');
}
