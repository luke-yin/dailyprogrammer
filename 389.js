/* Monty Hall Problem */

const alice = "Alice";
const bob = "Bob";

const getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const montyHall = function(contestant) {
  const doors = [1, 2, 3];
  const prize = Math.ceil(Math.random() * 3);

  let choice = 1;
  let montyDoor = getRandomIntInclusive(2, 3);
  while (montyDoor === prize) {
    montyDoor = getRandomIntInclusive(2, 3);
  }

  if (contestant === "Alice") {
    choice = 1;
  } else if (contestant === "Bob") {
    for (let i = 1; i < doors.length; i++) {
      if (doors[i] !== montyDoor) {
        choice = doors[i];
      }
    }
  }

  if (choice === prize) {
    return true;
  } else {
    return false;
  }
}

let aliceCount = 0;
for (let i = 0; i < 1000; i++) {
  if (montyHall(alice) === true) {
    aliceCount++;
  }
}

let bobCount = 0;
for (let i = 0; i < 1000; i++) {
  if (montyHall(bob) === true) {
    bobCount++;
  }
}

console.log(aliceCount / 1000);
console.log(bobCount / 1000);