/*  For the purpose of this challenge, Morse code represents every letter as a sequence of 1-4 characters,
    each of which is either . (dot) or - (dash). The code for the letter a is .-, for b is -..., etc. The 
    codes for each letter a through z are:

    a .- 
    b -...
    c -.-.
    d -..
    e . 
    f ..-. 
    g --. 
    h .... 
    i .. 
    j .--- 
    k -.- 
    l .-.. 
    m -- 
    n -. 
    o --- 
    p .--. 
    q --.- 
    r .-. 
    s ... 
    t - 
    u ..- 
    v ...- 
    w .-- 
    x -..- 
    y -.-- 
    z --..

    Normally, you would indicate where one letter ends and the next begins, for instance with a space between 
    the letters' codes, but for this challenge, just smoosh all the coded letters together into a single string 
    consisting of only dashes and dots.

    smorse("sos") => "...---..."
    smorse("daily") => "-...-...-..-.--"
    smorse("programmer") => ".--..-.-----..-..-----..-."
    smorse("bits") => "-.....-..."
    smorse("three") => "-.....-..."

    An obvious problem with this system is that decoding is ambiguous. For instance, both bits and three encode 
    to the same string, so you can't tell which one you would decode to without more information.
*/

const smorse = function (str) {
  let morseStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      morseStr += ".-";
    } else if (str[i] === "b") {
      morseStr += "-...";
    } else if (str[i] === "c") {
      morseStr += "-.-.";
    } else if (str[i] === "d") {
      morseStr += "-..";
    } else if (str[i] === "e") {
      morseStr += ".";
    } else if (str[i] === "f") {
      morseStr += "..-.";
    } else if (str[i] === "g") {
      morseStr += "--.";
    } else if (str[i] === "h") {
      morseStr += "....";
    } else if (str[i] === "i") {
      morseStr += "..";
    } else if (str[i] === "j") {
      morseStr += ".---";
    } else if (str[i] === "k") {
      morseStr += "-.-";
    } else if (str[i] === "l") {
      morseStr += ".-..";
    } else if (str[i] === "m") {
      morseStr += "--";
    } else if (str[i] === "n") {
      morseStr += "-.";
    } else if (str[i] === "o") {
      morseStr += "---";
    } else if (str[i] === "p") {
      morseStr += ".--.";
    } else if (str[i] === "q") {
      morseStr += "--.-";
    } else if (str[i] === "r") {
      morseStr += ".-.";
    } else if (str[i] === "s") {
      morseStr += "...";
    } else if (str[i] === "t") {
      morseStr += "-";
    } else if (str[i] === "u") {
      morseStr += "..-";
    } else if (str[i] === "v") {
      morseStr += "...-";
    } else if (str[i] === "w") {
      morseStr += ".--";
    } else if (str[i] === "x") {
      morseStr += "-..-";
    } else if (str[i] === "y") {
      morseStr += "-.--";
    } else if (str[i] === "z") {
      morseStr += "--.."
    }
  }
  return morseStr;
}

console.log(smorse("sos")); // => "...---..."
console.log(smorse("daily")); // => "-...-...-..-.--"
console.log(smorse("programmer")); // => ".--..-.-----..-..-----..-."
console.log(smorse("bits")); // => "-.....-..."
console.log(smorse("three")); // => "-.....-..."