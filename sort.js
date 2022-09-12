"use strict";

//First example, A-Z sort
/*const people = ["Harry", "Ron", "Hermione", "Neville"];
people.sort();

console.log(people);
*/

const animals = [
  {
    name: "Mandu",
    type: "Cat",
  },
  {
    name: "Mia",
    type: "Cat",
  },
  {
    name: "LeeLoo",
    type: "Dog",
  },
  {
    name: "ScoobyDoo",
    type: "Dog",
  },
];

//Sorts from A-Z, if you wanna reverse it change < to > or return -1 to 1 and 1 to -1
function compareName(a, b) {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
}

console.log("Before sort:", animals);
animals.sort(compareName);
console.log("After sort:", animals);
