function solution(people, limit) {
  let answer = 0;
  let left = 0;
  let right = people.length - 1;
  people.sort((a, b) => b - a);

  while (left < right) {
    let sum = people[left] + people[right];
    if (sum > limit) {
      left += 1;
    } else {
      left += 1;
      right -= 1;
    }
    answer += 1;
  }
  if (left === right) answer += 1;

  return answer;
}
