/*
  Assign every lowercase letter a value, from 1 for a to 26 for z.
  Given a string of lowercase letters, find the sum of the values of the letters in the string.
*/

const lettervalue = function(char) {
  let value = 0;
  if (char === "a") {
    value = 1;
  } else if (char === "b") {
    value = 2;
  } else if (char === "c") {
    value = 3;
  } else if (char === "d") {
    value = 4;
  } else if (char === "e") {
    value = 5;
  } else if (char === "f") {
    value = 6;
  } else if (char === "g") {
    value = 7;
  } else if (char === "h") {
    value = 8;
  } else if (char === "i") {
    value = 9;
  } else if (char === "j") {
    value = 10;
  } else if (char === "k") {
    value = 11;
  } else if (char === "l") {
    value = 12;
  } else if (char === "m") {
    value = 13;
  } else if (char === "n") {
    value = 14;
  } else if (char === "o") {
    value = 15;
  } else if (char === "p") {
    value = 16;
  } else if (char === "q") {
    value = 17;
  } else if (char === "r") {
    value = 18;
  } else if (char === "s") {
    value = 19;
  } else if (char === "t") {
    value = 20;
  } else if (char === "u") {
    value = 21;
  } else if (char === "v") {
    value = 22;
  } else if (char === "w") {
    value = 23;
  } else if (char === "x") {
    value = 24;
  } else if (char === "y") {
    value = 25;
  } else if (char === "z") {
    value = 26;
  } else {
    return value;
  }
  return value;
}

const lettersum = function(str) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    total += lettervalue(str.charAt(i));
  }
  return total;
}

console.log(lettersum("")); // => 0
console.log(lettersum("a")); // => 1
console.log(lettersum("z")); // => 26
console.log(lettersum("cab")); // => 6
console.log(lettersum("excellent")); // => 100
console.log(lettersum("microspectrophotometries")); // => 317