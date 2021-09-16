/*
  The ABACABA sequence is defined as follows: the first iteration is the first letter of the alphabet (a).
  To form the second iteration, you take the second letter (b) and put the first iteration (just a in this
  case) before and after it, to get aba. For each subsequent iteration, place a copy of the previous
  iteration on either side of the next letter of the alphabet.

  Here are the first 5 iterations of the sequence:
  a
  aba
  abacaba
  abacabadabacaba
  abacabadabacabaeabacabadabacaba

  The 26th and final iteration (i.e. the one that adds the z) is 67,108,863 characters long. If you use one
  byte for each character, this takes up just under 64 megabytes of space.

  Write a program to print the 26th iteration of the ABACABA sequence.

  If it's easier for you, it's also fine to print one character per line, instead of all the characters on a
  single line.

  Just printing the output can take a few minutes, depending on your setup. Feel free to test it out on
  something smaller instead, like the 20th iteration, which is only about 1 megabyte.
*/

const abacaba = function(n) {
  if (n === 1) {
    return "a";
  }

  return abacaba(n - 1) + String.fromCharCode(n + 96) + abacaba(n - 1);

}

console.log(abacaba(1));
console.log(abacaba(2));
console.log(abacaba(3));
console.log(abacaba(4));
console.log(abacaba(5));
console.log(abacaba(20));