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

const sortedList = sortList(animals, "desc");
console.log(sortedList);
//Sorts from A-Z, if you wanna reverse it change < to > or return -1 to 1 and 1 to -1
//Now done with closure. Closure = function within a function
function sortList(listToSort, dir) {
  let sortDir;
  if (dir === "asc") {
    sortDir = 1;
  } else {
    sortDir = -1;
  }
  listToSort = listToSort.sort(compareName);

  function compareName(a, b) {
    if (a.name < b.name) {
      return -1 * sortDir;
    } else {
      return 1 * sortDir;
    }
  }
  return listToSort;
}

//console.log("Before sort:", animals);
//animals.sort(compareName);
//console.log("After sort:", animals);
