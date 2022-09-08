"use strict";

const firstName = "Mille";
const animalType = "dog";
const animalName = "Baloo";
presentPet(firstName, animalType, animalName);
function presentPet(firstName, animalType, animalName) {
  console.log(
    `My name is ${firstName}, I have a ${animalType} called ${animalName}`
  );
}
