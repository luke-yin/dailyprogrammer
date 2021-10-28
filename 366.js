/*  Given two strings of letters, determine whether the second can be made from the first by removing one letter. The remaining letters must stay in the same order.

    funnel("leave", "eave") => true
    funnel("reset", "rest") => true
    funnel("dragoon", "dragon") => true
    funnel("eave", "leave") => false
    funnel("sleet", "lets") => false
    funnel("skiff", "ski") => false
*/

const funnel = function(before, after) {
  for (let i = 0; i < before.length; i++) {
    let tempBefore = before.split("");
    // console.log("tempBefore " + tempBefore);
    tempBefore.splice(i - 1, 1);
    let temp = tempBefore.join("");
    // console.log("temp " + temp);
    if (temp === after) {
      return true;
    }
  }
  return false;
}

console.log(funnel("leave", "eave")); // => true
console.log(funnel("reset", "rest")); // => true
console.log(funnel("dragoon", "dragon")); // => true
console.log(funnel("eave", "leave")); // => false
console.log(funnel("sleet", "lets")); // => false
console.log(funnel("skiff", "ski")); // => false