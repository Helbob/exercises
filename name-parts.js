/*const fullName = "Siff Mille Helbo";

const [firstName, middleName, lastName] = fullName.split(" ");

console.log(firstName, middleName, lastName);
*/

const fullName = "Siff Mille Helbo";

const [firstName, middleName, lastName] = fullName.split(" ");
getNameParts(firstName, middleName, lastName);
function getNameParts(firstName, middleName, lastName) {
  console.log(
    `My name is ${firstName}, and middlename is ${middleName}, and lastname is ${lastName}`
  );
}
