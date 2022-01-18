/*  You own a nice tiny mini-market that sells candies to children. You need to know if you'll be able to give the change back to those little cute creatures and it happens you
    don't know basic math because when you were a child you were always eating candies and did not study very well. So you need some help from a little tool that tell you if you can.

    Input Description
    On the line beginning "Input:" be given a single number that tells you how much change to produce, and then a list of coins you own. The next line, beginning with "Output:",
    tells you the number of coins to give back to achieve the change you need to give back (bounded by the number of coins you have). Here's one that says "give the customer 3 or
    fewer coins". Example:

    Input: 10 5 5 2 2 1
    Output: n <= 3
    Output Description
    Your progam should emit the coins you would give back to yield the correct value of change, if possible. Multiple solutions may be possible. If no solution is possible, state
    that. Example:

    5 5
    Challenge Input
    Input: 150 100 50 50 50 50 
    Output: n < 5

    Input: 130 100 20 18 12 5 5 
    Output: n < 6

    Input: 200 50 50 20 20 10 
    Output: n >= 5
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.question('Input: ', function (inputStr) {
  let arr = inputStr.split(' '); // split string on comma space
  for (let i = 0; i < arr.length; i++) {
    input.push(Number(arr[i]));
  }
  console.log(input);
  rl.close();
});