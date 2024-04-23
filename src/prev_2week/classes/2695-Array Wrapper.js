/*
  * explain
    create a class ArrayWrapper that accepts an array of intergers in its constructor. 
    This class should have two features.

  * +
    When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
  
  * String
    When the String() function is called on the instance, it will return a comma seperated string surrounded by brackets. 
*/

// ! What's happen........to me.............. sibal...fuck...sibal....

class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() { // override
    return this.nums.reduce((a, b) => a + b, 0);
  }

  toString() { // overrid
    return `[${this.nums.join(',')}]`
  }

}

class test {
  constructor(nums) {
    this.nums = nums;
  }
}

const obj1 = new ArrayWrapper([1,2]);
console.log(obj1);
const obj2 = new ArrayWrapper([3,4]);
console.log(obj1 + obj2);
console.log(String(obj1));

const obj3 = new test([1, 2]);
const obj4 = new test([3, 4]);

console.log(obj3.valueOf());
console.log(obj3.toString(obj3));