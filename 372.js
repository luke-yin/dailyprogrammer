/*  Given a string containing only the characters x and y, find whether there are the same number of xs and ys.

    balanced("xxxyyy") => true
    balanced("yyyxxx") => true
    balanced("xxxyyyy") => false
    balanced("yyxyxxyxxyyyyxxxyxyx") => true
    balanced("xyxxxxyyyxyxxyxxyy") => false
    balanced("") => true
    balanced("x") => false
*/

const balanced = function (str) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      x++;
    } else if (str[i] === "y") {
      y++;
    }
  }
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

console.log(balanced("xxxyyy")); // => true
console.log(balanced("yyyxxx")); // => true
console.log(balanced("xxxyyyy")); // => false
console.log(balanced("yyxyxxyxxyyyyxxxyxyx")); // => true
console.log(balanced("xyxxxxyyyxyxxyxxyy")); // => false
console.log(balanced("")); // => true
console.log(balanced("x")); // => false