/*  A number is input in computer then a new no should get printed by adding one to each of its digit. If you encounter a 9, insert a 10 (don't carry over, just shift things around).

    For example, 998 becomes 10109.
*/

const addOne = function (num) {
  let strNum = String(num);
  let numArray = strNum.split('');
  for (let i = 0; i < numArray.length; i++) {
    numArray[i] *= 1;
    numArray[i] += 1;
  }
  let joinedStr = numArray.join('');
  return joinedStr;
}

console.log(addOne(998)); // 10109