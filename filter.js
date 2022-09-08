"use strict";

const animals = [
  {
    name: "Manu",
    type: "cat",
  },
  {
    name: "Mia",
    type: "cat",
  },
  {
    name: "LeeLoo",
    type: "dog",
  },
  {
    name: "ScoobyDoo",
    type: "dog",
  },
];

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

function isDog(animal) {
  if (animal.type === "dog") {
    return true;
  } else {
    return false;
  }
}

//CATS
//animals.filter(isCat);
//console.log(animals.filter(isCat));

//DOGS
//animals.filter(isDog);
//console.log(animals.filter(isDog));

function all(animal) {
  return true;
}

function none(animal) {
  return false;
}
animals.filter(all);
animals.filter(none);
//console.log(animals.filter(all));
//console.log(animals.filter(none));

const onlyCats = animals.filter(isCat);
console.log(onlyCats);

const onlyDogs = animals.filter(isDog);
console.log(animals.filter(isDog));
