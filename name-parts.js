/*const fullName = "Siff Mille Helbo";

const [firstName, middleName, lastName] = fullName.split(" ");

console.log(firstName, middleName, lastName);
*/

/*const fullName = "Siff Mille Helbo";

const [firstName, middleName, lastName] = fullName.split(" ");
getNameParts(firstName, middleName, lastName);
function getNameParts(firstName, middleName, lastName) {
  console.log(
    `My name is ${firstName}, and middlename is ${middleName}, and lastname is ${lastName}`
  );
}
*/

function fullName(lastName, firstName, middleName) {
  /* if (arguments === 2) {
    console.log(firstName, lastName);
  } else {
    console.log(firstName, middleName, lastName);
  } */
  if (middleName) {
    return `${firstName} ${middleName} ${lastName}`;
  }
  return `${firstName} ${lastName}`;
  //return firstName + " " + middleName + " " + lastName;
}

//const result = fullName("harry ", "potter", "james");
//Two below same result
//console.log(result);
console.log(fullName("potter", "harry"));
console.log(fullName("potter", "harry", "james"));

//For the other assignemtn we did prior
//fullName("Potter", "Harry");
//fullName("Harry", "Potter");
//fullName("Potter", "Harry", "James");
