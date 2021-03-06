/*  The game of Yahtzee is played by rolling five 6-sided dice, and scoring the results in a number of ways.
    You are given a Yahtzee dice roll, represented as a sorted list of 5 integers, each of which is between 1
    and 6 inclusive. Your task is to find the maximum possible score for this roll in the upper section of the
    Yahtzee score card. Here's what that means.

    For the purpose of this challenge, the upper section of Yahtzee gives you six possible ways to score a
    roll. 1 times the number of 1's in the roll, 2 times the number of 2's, 3 times the number of 3's, and so
    on up to 6 times the number of 6's. For instance, consider the roll [2, 3, 5, 5, 6]. If you scored this as
    1's, the score would be 0, since there are no 1's in the roll. If you scored it as 2's, the score would be
    2, since there's one 2 in the roll. Scoring the roll in each of the six ways gives you the six possible
    scores:

    0 2 3 0 10 6

    The maximum here is 10 (2x5), so your result should be 10.

    yahtzee_upper([2, 3, 5, 5, 6]) => 10
    yahtzee_upper([1, 1, 1, 1, 3]) => 4
    yahtzee_upper([1, 1, 1, 3, 3]) => 6
    yahtzee_upper([1, 2, 3, 4, 5]) => 5
    yahtzee_upper([6, 6, 6, 6, 6]) => 30
*/

const sumDice = function (arr) {
  let sumArray = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      sumArray[0] += 1;
    } else if (arr[i] === 2) {
      sumArray[1] += 2;
    } else if (arr[i] === 3) {
      sumArray[2] += 3;
    } else if (arr[i] === 4) {
      sumArray[3] += 4;
    } else if (arr[i] === 5) {
      sumArray[4] += 5;
    } else if (arr[i] === 6) {
      sumArray[5] += 6;
    }
  }
  return sumArray;
}

const yahtzee_upper = function (arr) {
  let sumArray = sumDice(arr);
  let max = Math.max(...sumArray);
  // console.log(max);
  return max;
}

// console.log(sumDice([2, 3, 5, 5, 6]));

console.log(yahtzee_upper([2, 3, 5, 5, 6])); // => 10
console.log(yahtzee_upper([1, 1, 1, 1, 3])); // => 4
console.log(yahtzee_upper([1, 1, 1, 3, 3])); // => 6
console.log(yahtzee_upper([1, 2, 3, 4, 5])); // => 5
console.log(yahtzee_upper([6, 6, 6, 6, 6])); // => 30