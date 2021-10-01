/*  The nation of Examplania has the following income tax brackets:

    income cap      marginal tax rate
      ¤10,000           0.00 (0%)
      ¤30,000           0.10 (10%)
      ¤100,000          0.25 (25%)
        --              0.40 (40%)

    If you're not familiar with how tax brackets work, see the section below for an explanation.

    Given a whole-number income amount up to ¤100,000,000, find the amount of tax owed in Examplania. Round down to a whole number of ¤.

    tax(0) => 0
    tax(10000) => 0
    tax(10009) => 0
    tax(10010) => 1
    tax(12000) => 200
    tax(56789) => 8697
    tax(1234567) => 473326
*/

const tax = function(income) {
  let num = income;
  let totalTax = 0;
  let amountAbove100k = 0;
  let amountAbove30k = 0;
  let amountAbove10k = 0;
  // console.log(num + " original");
  if (num > 100000) {
    amountAbove100k = num - 100000;
    if (amountAbove100k > 0) {
      num = num - amountAbove100k;
    }
  }
  // console.log(num + " minus above 100k");
  if (num >= 30000) {
    amountAbove30k = num - 30000;
    if (amountAbove30k > 0) {
      num = num - amountAbove30k;
    }
  }
  // console.log(num + " minus above 30k");
  if (num >= 10000) {
    amountAbove10k = num - 10000;
    if (amountAbove10k > 0) {
      num = num - amountAbove10k;
    }
  }
  // console.log(num + " minus above 10k");
  totalTax = (0.4 * amountAbove100k) + (0.25 * amountAbove30k) + (0.1 * amountAbove10k);
  return Math.floor(totalTax);
}

console.log(tax(0)); // => 0
console.log(tax(10000)); // => 0
console.log(tax(10009)); // => 0
console.log(tax(10010)); // => 1
console.log(tax(12000)); // => 200
console.log(tax(56789)); // => 8697
console.log(tax(1234567)); // => 473326