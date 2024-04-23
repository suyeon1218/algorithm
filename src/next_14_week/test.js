const arr = [
  [1, 2, 3],
  [4, 5, 6],
];

const newArr = [];

for (const e of arr) {
  newArr.push(...e);
}
const set = new Set(newArr);
console.log(set);
