/*
  * explain
  Given array that contains object arr1, arr2, return joinedArray that merge arr1 and arr2
  
  * joinedArray
    - joinedArray should be ascending sort by id.
    - if id in both arr1, arr2 it should be override arr2's element
*/

// ! My solution
 var join = function(arr1, arr2) {
  const joinedArray = {};

  // 1. arr1 로 joinedArray 만들기 
  for (let obj of arr1) {
    const keys = Object.keys(obj);
    let id = null;

    for (let key of keys) {
      const value = obj[key];

      if (key === 'id') {
        id = value;
        joinedArray[id] = {};
        continue;
      }
      joinedArray[id][key] = value;
    }
  }

  // 2. joinedArray 에 arr2 덮어씌우기 
  for (let obj of arr2) {
    const keys = Object.keys(obj);
    let id = null;

    for (let key of keys) {
      const value = obj[key];

      if (key === 'id') {
        id = value;
        if (joinedArray[id] !== undefined) {
          continue;
        }
        joinedArray[id] = {};
        continue;
      }
      joinedArray[id][key] = value;
    }
  }

  // 3. 재정렬 해주기
  const result = [];
  const idKeys = Object.keys(joinedArray).sort((a, b) => a - b);

  for (let id of idKeys) {
    const newObj = {};
    const valueKeys = Object.keys(joinedArray[id]);
    newObj.id = Number(id);

    for (let valueKey of valueKeys) {
      newObj[valueKey] = joinedArray[id][valueKey];
    }

    result.push(newObj);
  }

  return result;
};

// ! the other person solution
var join = function(arr1, arr2) {
  const arr = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr[i].id < arr2[j].id) {
      arr.push(arr1[i]);
      i += 1;
    }
    else if (arr[i].id > arr2[j].id) {
      arr.push(arr2[j]);
      j += 1;
    }
    else {
      const tmp = arr1[i]; // ! to prevent conversion of the original array in arr1
      Object.assign(tmp, arr2[j]);
      arr.push(tmp);
      i += 1;
      j += 1;
    }
  }

  while (i < arr1.length) {
    arr.push(arr1[i]);
    i += 1;
  }

  while (j < arr2.length) {
    arr.push(arr2[j]);
    j += 1;
  }

  return arr;
}

const arr1 = [
  {"id": 1, "x": 2, "y": 3},
  {"id": 2, "x": 3, "y": 6}
]; 
const arr2 = [
  {"id": 2, "x": 10, "y": 20},
  {"id": 3, "x": 0, "y": 0}
]

join(arr1, arr);