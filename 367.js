/*  Most everyone who programs is familiar with the factorial - n! - of a number, the product of the series from n to 1. One interesting aspect of the factorial operation
    is that it's also the number of permutations of a set of n objects.

    Today we'll look at the subfactorial, defined as the derangement of a set of n objects, or a permutation of the elements of a set, such that no element appears in its
    original position. We denote it as !n.

    Some basic definitions:

    !1 -> 0 because you always have {1}, meaning 1 is always in it's position.

    !2 -> 1 because you have {2,1}.

    !3 -> 2 because you have {2,3,1} and {3,1,2}.

    And so forth.

    Today's challenge is to write a subfactorial program. Given an input n, can your program calculate the correct value for n?

    Input Description
    You'll be given inputs as one integer per line. Example:

    5
    Output Description
    Your program should yield the subfactorial result. From our example:

    44

    Challenge Input
    6
    9
    14
    Challenge Output
    !6 -> 265
    !9 -> 133496
    !14 -> 32071101049
*/

const subfactorial = function (n) {
  let nFactorial = factorial(n);
  let total = sum(n);
  return nFactorial * total;
}

const factorial = function (n) {
  let total = 1;
  let num = n;
  while (num > 0) {
    total = total * num;
    num--;
  }
  return total;
}

const sum = function(n) {
  let num = n;
  let nFactorial = factorial(num);
  let sum = 0;
  while (num > 0) {
    sum += (((-1)^num) / nFactorial);
    num--;
  }
  return sum;
}

// console.log(factorial(5));
// console.log(sum(5));

console.log(subfactorial(5)); // -> 44
console.log(subfactorial(6)); // -> 265
console.log(subfactorial(9)); // -> 133496
// console.log(subfactorial(14)); // -> 32071101049