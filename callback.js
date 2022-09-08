"use strict";

const people = ["Harry", "Ron", "Hermione", "Neville"];

function testParms(person, i, arr) {
  console.log(`person: ${person}, index: ${i}, array: ${arr}`);
}

people.forEach(testParms);
