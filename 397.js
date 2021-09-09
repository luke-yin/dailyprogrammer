/*
  For the purpose of today's challenge, a Roman numeral is a non-empty string of the characters
  M, D, C, L, X, V, and I, each of which has the value 1000, 500, 100, 50, 10, 5, and 1.
  The characters are arranged in descending order, and the total value of the numeral is the
  sum of the values of its characters. For example, the numeral MDCCXXVIIII has the value
  1000 + 500 + 2x100 + 2x10 + 5 + 4x1 = 1729.

  This challenge uses only additive notation for roman numerals. There's also subtractive notation,
  where 9 would be written as IX. You don't need to handle subtractive notation(but you can if
  you want to, as an optional bonus).

  Given two Roman numerals, return whether the first one is less than the second one:

  numcompare("I", "I") => false
  numcompare("I", "II") => true
  numcompare("II", "I") => false
  numcompare("V", "IIII") => false
  numcompare("MDCLXV", "MDCLXVI") => true
  numcompare("MM", "MDCCCCLXXXXVIIII") => false

  You only need to correctly handle the case where there are at most 1 each of D, L, and V, and
  at most 4 each of C, X, and I. You don't need to validate the input, but you can if you want.
  Any behavior for invalid inputs like numcompare("V", "IIIIIIIIII") is fine - true, false, or error.

  Try to complete the challenge without actually determining the numerical values of the inputs.
*/

const numconvert = function(num) {
  let total = 0;
  for (let i = num.length; i >= 0; i--) {
    if (num.charAt(i) === "I") {
      total += 1;
    } else if (num.charAt(i) === "V") {
      total += 5;
    } else if (num.charAt(i) === "X") {
      total += 10;
    } else if (num.charAt(i) === "L") {
      total += 50;
    } else if (num.charAt(i) === "C") {
      total += 100;
    } else if (num.charAt(i) === "D") {
      total += 500;
    } else if (num.charAt(i) === "M") {
      total += 1000;
    }
  }
  return total;
}

const numcompare = function(num1, num2) {
  if (numconvert(num1) < numconvert(num2)) {
    return true;
  } else {
    return false;
  }
}

console.log(numcompare("I", "I")); // => false
console.log(numcompare("I", "II")); // => true
console.log(numcompare("II", "I")); // => false
console.log(numcompare("V", "IIII")); // => false
console.log(numcompare("MDCLXV", "MDCLXVI")); // => true
console.log(numcompare("MM", "MDCCCCLXXXXVIIII")); // => false