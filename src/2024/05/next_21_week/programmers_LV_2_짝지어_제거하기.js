function solution(s) {
  const stack = [];

  for (let curr = 0; curr < s.length; curr++) {
    const prev = stack.pop();

    if (!prev) stack.push(s[curr]);
    else if (prev !== s[curr]) {
      stack.push(prev);
      stack.push(s[curr]);
    }
  }

  return stack.length > 0 ? 0 : 1;
}
