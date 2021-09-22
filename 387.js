/*  Given a lowercase letter and a number between 0 and 26, return that letter Caesar shifted by that number.
    To Caesar shift a letter by a number, advance it in the alphabet by that many steps, wrapping around from
    z back to a:
    warmup('a', 0) => 'a'
    warmup('a', 1) => 'b'
    warmup('a', 5) => 'f'
    warmup('a', 26) => 'a'
    warmup('d', 15) => 's'
    warmup('z', 1) => 'a'
    warmup('q', 22) => 'm'

    Given a string of lowercase letters and a number, return a string with each letter Caesar shifted by the given amount.
    caesar("a", 1) => "b"
    caesar("abcz", 1) => "bcda"
    caesar("irk", 13) => "vex"
    caesar("fusion", 6) => "layout"
    caesar("dailyprogrammer", 6) => "jgorevxumxgsskx"
    caesar("jgorevxumxgsskx", 20) => "dailyprogrammer"
*/

const warmup = function(char, shift) {
  let charCode = char.charCodeAt(0);
  let newCharCode = 97;
  if (charCode + shift > 122) {
    newCharCode = (charCode + shift) % 122 + 96;
  } else {
    newCharCode = charCode + shift;
  }
  return String.fromCharCode(newCharCode);
}

const caesar = function(str, shift) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    newString += warmup(str.charAt(i), shift);
  }
  return newString;
}

console.log(warmup('a', 0)); // => 'a'
console.log(warmup('a', 1)); // => 'b'
console.log(warmup('a', 5)); // => 'f'
console.log(warmup('a', 26)); // => 'a'
console.log(warmup('d', 15)); // => 's'
console.log(warmup('z', 1)); // => 'a'
console.log(warmup('q', 22)); // => 'm'

console.log(caesar("a", 1)); // => "b"
console.log(caesar("abcz", 1)); // => "bcda"
console.log(caesar("irk", 13)); // => "vex"
console.log(caesar("fusion", 6)); // => "layout"
console.log(caesar("dailyprogrammer", 6)); // => "jgorevxumxgsskx"
console.log(caesar("jgorevxumxgsskx", 20)); // => "dailyprogrammer"