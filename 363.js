/*  "I before E except after C" is perhaps the most famous English spelling rule. For the purpose of this challenge, the rule says:

    if "ei" appears in a word, it must immediately follow "c".

    If "ie" appears in a word, it must not immediately follow "c".

    A word also follows the rule if neither "ei" nor "ie" appears anywhere in the word. Examples of words that follow this rule are:

    fiery hierarchy hieroglyphic
    ceiling inconceivable receipt
    daily programmer one two three
    There are many exceptions that don't follow this rule, such as:

    sleigh stein fahrenheit
    deifies either nuclei reimburse
    ancient juicier societies

    Write a function that tells you whether or not a given word follows the "I before E except after C" rule.

    check("a") => true
    check("zombie") => true
    check("transceiver") => true
    check("veil") => false
    check("icier") => false
*/

const check = function(str) {
  let ei = false;
  let ie = false;
  let cei = true;
  let xie = true;
  let result = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "e" && str[i + 1] === "i") {
      ei = true;
      if (str[i - 1] !== "c") {
        cei = false;
      }
    }
    if (str[i] === "i" && str[i + 1] === "e") {
      ie = true;
      if (str[i - 1] === "c") {
        xie = false;
      }
    }
  }
  if (cei && xie) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(check("a")); // => true
console.log(check("zombie")); // => true
console.log(check("transceiver")); // => true
console.log(check("veil")); // => false
console.log(check("icier")); // => false