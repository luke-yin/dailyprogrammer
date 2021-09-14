/*
  A binary array is an array consisting of only the values 0 and 1. Given a binary array of any length, return an array of
  positive integers that represent the lengths of the sets of consecutive 1's in the input array, in order from left to right.

  nonogramrow([]) => []
  nonogramrow([0,0,0,0,0]) => []
  nonogramrow([1,1,1,1,1]) => [5]
  nonogramrow([0,1,1,1,1,1,0,1,1,1,1]) => [5,4]
  nonogramrow([1,1,0,1,0,0,1,1,1,0,0]) => [2,1,3]
  nonogramrow([0,0,0,0,1,1,0,0,1,0,1,1,1]) => [2,1,3]
  nonogramrow([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]) => [1,1,1,1,1,1,1,1]

  As a special case, nonogram puzzles usually represent the empty output ([]) as [0]. If you prefer to do it this way, that's
  fine, but 0 should not appear in the output in any other case.
*/

const nonogramrow = function(arr) {
  let newArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
    }
    if ((arr[i + 1] !== 1) && (count !== 0)) {
      newArr.push(count);
      count = 0;
    }
  }
  return newArr;
}

console.log(nonogramrow([])); // => []
console.log(nonogramrow([0,0,0,0,0])); // => []
console.log(nonogramrow([1,1,1,1,1])); // => [5]
console.log(nonogramrow([0,1,1,1,1,1,0,1,1,1,1])); // => [5,4]
console.log(nonogramrow([1,1,0,1,0,0,1,1,1,0,0])); // => [2,1,3]
console.log(nonogramrow([0,0,0,0,1,1,0,0,1,0,1,1,1])); // => [2,1,3]
console.log(nonogramrow([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1])); // => [1,1,1,1,1,1,1,1])