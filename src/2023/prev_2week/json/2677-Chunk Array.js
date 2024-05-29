/*
  * explain
  Given an array arr and a chunck size size, return a chunked array.
*/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  const result = [];
  let room = Math.floor(arr.length / size);
  let arrIndex = 0;

  if (room === 0) {
    // Exception
    if (arr.length === 0) return result;
    result.push(arr);
    return result;
  }

  while (arrIndex < arr.length) {
    // Login
    const currRoom = [];

    for (let i = arrIndex; i < size + arrIndex; i++) {
      if (i >= arr.length) break;
      currRoom.push(arr[i]);
    }
    arrIndex += size;
    result.push(currRoom);
  }

  return result;
};

// ! 이게 좋다! 
var chunk = function (arr, size) {
  const result = [];
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);

    if (tempArr.length == size) {
      result.push(temp);
      temp = [];
    }
  }

  if (tempArr.length > 0) {
    resArr.push(tempArr);
  }

  return resArr;
};
