/*
  The country of Examplania has coins that are worth 1, 5, 10, 25, 100, and 500 currency units.
  At the Zeroth Bank of Examplania, you are trained to make various amounts of money by using as
  many ¤500 coins as possible,then as many ¤100 coins as possible, and so on down.

  For instance, if you want to give someone ¤468, you would give them four ¤100 coins, two ¤25 coins,
  one ¤10 coin, one ¤5 coin, and three ¤1 coins, for a total of 11 coins.

  Write a function to return the number of coins you use to make a given amount of change.

  change(0) => 0
  change(12) => 3
  change(468) => 11
  change(123456) => 254
*/

const change = function(num) {
  let count = 0;
  let temp = num;
  // let hundreds = 0;
  // let twentyfives = 0;
  // let tens = 0;
  // let fives = 0;
  // let ones = 0;
  if (temp >= 500) {
    let fiveHundredsMod = temp % 500;
    let numFiveHundreds = (temp - fiveHundredsMod) / 500;
    // console.log(numFiveHundreds);
    count += numFiveHundreds;
    temp = fiveHundredsMod;
  }
  if ((temp < 500) && (temp >= 100)) {
    let hundredsMod = temp % 100;
    let numHundreds = (temp - hundredsMod) / 100;
    // console.log(numHundreds);
    count += numHundreds;
    temp = hundredsMod;
    // console.log(temp);
  }
  if ((temp < 100) && (temp >= 25)) {
    let twentyFivesMod = temp % 25;
    let numTwentyFives = (temp - twentyFivesMod) / 25;
    // console.log(numTwentyFives);
    count += numTwentyFives;
    temp = twentyFivesMod;
    // console.log(temp);
  }
  if ((temp < 25) && (temp >= 10)) {
    let tensMod = temp % 10;
    let numTens = (temp - tensMod) / 10;
    // console.log(numTens);
    count += numTens;
    temp = tensMod;
    // console.log(temp);
  }
  if ((temp < 10) && (temp >= 5)) {
    let fivesMod = temp % 5;
    let numFives = (temp - fivesMod) / 5;
    // console.log(numFives);
    count += numFives;
    temp = fivesMod;
    // console.log(temp);
  }
  if ((temp < 5) && (temp >= 1)) {
    // console.log(temp);
    count += temp;
    temp = 0;
  }
  return count;
}

console.log(change(0)); // => 0
console.log(change(12)); // => 3
console.log(change(468)); // => 11
console.log(change(123456)); // => 254)