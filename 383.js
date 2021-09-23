/*  Imagine a necklace with lettered beads that can slide along the string. In this example,
    you could take the N off NICOLE and slide it around to the other end to make ICOLEN. Do
    it again to get COLENI, and so on. For the purpose of today's challenge, we'll say that
    the strings "nicole", "icolen", and "coleni" describe the same necklace.

    Generally, two strings describe the same necklace if you can remove some number of letters
    from the beginning of one, attach them to the end in their original ordering, and get the
    other string. Reordering the letters in some other way does not, in general, produce a
    string that describes the same necklace.

    Write a function that returns whether two strings describe the same necklace.

    same_necklace("nicole", "icolen") => true
    same_necklace("nicole", "lenico") => true
    same_necklace("nicole", "coneli") => false
    same_necklace("aabaaaaabaab", "aabaabaabaaa") => true
    same_necklace("abc", "cba") => false
    same_necklace("xxyyy", "xxxyy") => false
    same_necklace("xyxxz", "xxyxz") => false
    same_necklace("x", "x") => true
    same_necklace("x", "xx") => false
    same_necklace("x", "") => false
    same_necklace("", "") => true
*/

const reorder = function(str) {
  let moveChar = str.charAt(0);
  let newString = str;
  newString = newString.slice(1);
  newString += moveChar;
  return newString;
}

const same_necklace = function(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1 === str2) {
        return true;
      } else {
        str2 = reorder(str2);
      }
    }
    str1 = reorder(str1);
  }

  if ((str1 === "") && (str2 === "")) {
    return true;
  }
  
  return false;
}

console.log(same_necklace("nicole", "icolen")); // => true
console.log(same_necklace("nicole", "lenico")); // => true
console.log(same_necklace("nicole", "coneli")); // => false
console.log(same_necklace("aabaaaaabaab", "aabaabaabaaa")); // => true
console.log(same_necklace("abc", "cba")); // => false
console.log(same_necklace("xxyyy", "xxxyy")); // => false
console.log(same_necklace("xyxxz", "xxyxz")); // => false
console.log(same_necklace("x", "x")); // => true
console.log(same_necklace("x", "xx")); // => false
console.log(same_necklace("x", "")); // => false
console.log(same_necklace("", "")); // => true