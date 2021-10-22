/*  Given three integers between 0 and 255, corresponding to the red, green, and blue channel values of a color, find the hex string for that color.
    You may use anything built into your programming language, such as for base conversion, but you can also do it manually.

    hexcolor(255, 99, 71) => "#FF6347"  (Tomato)
    hexcolor(184, 134, 11) => "#B8860B"  (DarkGoldenrod)
    hexcolor(189, 183, 107) => "#BDB76B"  (DarkKhaki)
    hexcolor(0, 0, 205) => "#0000CD"  (MediumBlue)
*/

const hexcolor = function (redDec, greenDec, blueDec) {
  let redHex = redDec.toString(16);
  if (redDec < 16) {
    redHex = "0" + redHex;
  }
  redHex = redHex.toUpperCase();
  let greenHex = greenDec.toString(16);
  if (greenDec < 16) {
    greenHex = "0" + greenHex;
  }
  greenHex = greenHex.toUpperCase();
  let blueHex = blueDec.toString(16);
  if (blueDec < 16) {
    blueHex = "0" + blueHex;
  }
  blueHex = blueHex.toUpperCase();
  return "#" + redHex + greenHex + blueHex;
}

console.log(hexcolor(255, 99, 71)); // => "#FF6347"  (Tomato)
console.log(hexcolor(184, 134, 11)); // => "#B8860B"  (DarkGoldenrod)
console.log(hexcolor(189, 183, 107)); // => "#BDB76B"  (DarkKhaki)
console.log(hexcolor(0, 0, 205)); // => "#0000CD"  (MediumBlue)