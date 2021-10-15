/*  Today's challenge is to calculate the additive persistence of a number, defined as how many loops you have to do summing its digits until you get a single digit number.
    Take an integer N:

    Add its digits

    Repeat until the result has 1 digit

    The total number of iterations is the additive persistence of N.

    Your challenge today is to implement a function that calculates the additive persistence of a number.

    13 -> 1
    1234 -> 2
    9876 -> 2
    199 -> 3
*/

const addPersistence = function (num) {
  let count = 0;
  let strNum = num.toString();
  if (strNum.length === 1) {
    return count;
  } else {
    let nextNum = 0;
    for (let i = 0; i < strNum.length; i++) {
      let tempNum = strNum[i] * 1;
      nextNum += tempNum;
      // console.log(nextNum);
    }
    count++;
    return count + addPersistence(nextNum);
  }
}

console.log(addPersistence(13)); // -> 1
console.log(addPersistence(1234)); // -> 2
console.log(addPersistence(9876)); // -> 2
console.log(addPersistence(199)); // -> 3