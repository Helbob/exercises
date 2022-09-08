//EXAMPLE IN CLASS, SLIDE 18 FUNCTION CALLBACKS

const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};

const person4 = {
  firstName: "Fred",
  lastName: "Weasly",
  hired: false,
};

//Fire and hire function, are global functions.
//Persons hired will change to true, if u also do whats one line 59. Or if u do whats below the new function
function hire(person) {
  person.hired = true;
}

//Persons hired will change to false, if u also do whats one line 59. Or if u do whats below the new function
function fire(person) {
  person.fire = false;
}

//hire(person3); hire(person4);
//console.log("Person3/4", person3/4.hired) with or without hired.

//Could make another function fireOrHire
function fireOrHire(action, person) {
  action(person);
}

fireOrHire(fire, person4);
fireOrHire(hire, person3);
//console.log(person4);
//console.log(person3);

//console.log(fireOrHire, person3.hired);
//console.log(fireOrHire, person4.hired);
