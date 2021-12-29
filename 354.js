/*  Given a number A, find the smallest possible value of B+C, if B*C = A. Here A, B, and C must all be positive integers. It's okay to use brute
    force by checking every possible value of B and C. You don't need to handle inputs larger than six digits. Post the return value for A = 345678
    along with your solution.

    For instance, given A = 12345 you should return 838. Here's why. There are four different ways to represent 12345 as the product of two positive
    integers:

    12345 = 1*12345
    12345 = 3*4115
    12345 = 5*2469
    12345 = 15*823
    The sum of the two factors in each case is:

    1*12345 => 1+12345 = 12346
    3*4115 => 3+4115 = 4118
    5*2469 => 5+2469 = 2474
    15*823 => 15+823 = 838
    The smallest sum of a pair of factors in this case is 838.

    Examples
    12 => 7
    456 => 43
    4567 => 4568
    12345 => 838
    The corresponding products are 12 = 3*4, 456 = 19*24, 4567 = 1*4567, and 12345 = 15*823.
*/

const findFactors = function (num) {
  let allFactors = [];
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      allFactors.push([i, (num / i)]);
    }
  }
  return allFactors;
}

const sumFactors = function (array) {
  let allSums = [];
  for (let i = 0; i < array.length; i++) {
    allSums.push(array[i][0] + array[i][1]);
  }
  return allSums;
}

const smallestSum = function (num) {
  let factors = findFactors(num);
  let sums = sumFactors(factors);
  return Math.min(...sums);
}

console.log(smallestSum(12)); // => 7
console.log(smallestSum(456)); // => 43
console.log(smallestSum(4567)); // => 4568
console.log(smallestSum(12345)); // => 838