/*  A palindrome is a whole number that's the same when read backward in base 10, such as 12321 or 9449.

    Given a positive whole number, find the smallest palindrome greater than the given number.

    nextpal(808) => 818
    nextpal(999) => 1001
    nextpal(2133) => 2222
    For large inputs, your solution must be much more efficient than incrementing and checking each subsequent number to see if it's a palindrome. Find nextpal(339) before posting your
    solution. Depending on your programming language, it should take a fraction of a second.
*/

const pal = function (num) {
  let str = num.toString();
  if (str.length % 2 === 0) {
    let halfLength = str.length / 2;
    for (let i = 0; i < halfLength; i++) {
      for (let j = str.length - 1; j >= halfLength; j--) {
        if (str[i] !== str[j]) {
          return false;
        }
      }
    }
  } else if (str.length % 2 === 1) {
    let halfLength = (str.length - 1) / 2;
    for (let i = 0; i < halfLength; i++) {
      for (let j = str.length - 1; j >= halfLength; j--) {
        if (str[i] !== str[j]) {
          return false;
        }
      }
    }
  }
}

const nextpal = function (num) {

}