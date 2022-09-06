/*
function fullName(lastName, firstName, middleName) {
  if (middleName) {
    return `${firstName} ${middleName} ${lastName}`;
  }
  return `${firstName} ${lastName}`;
}

console.log(fullName("potter", "harry"));
console.log(fullName("potter", "harry", "james"));

function cap() {}
*/

function capitalize(str) {
  //First letter caps
  return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
}
function getNameParts(fullName) {
  const firstName = capitalize(fullName.substring(0, fullName.indexOf(" ")));
  let middleName;
  if (fullName.indexOf(" ") !== fullName.lastIndexOf(" ")) {
    middleName = fullName.substring(
      fullName.indexOf(" ") + 1,
      fullName.lastIndexOf(" ")
    );
    const middleNameList = middleName.split(" ");
    if (middleNameList.length > 1) {
      middleNameList.forEach((name, i, arr) => {
        arr[i] = capitalize(name);
      });
      middleName = middleNameList.join(" ");
    } else {
      middleName = capitalize(middleName);
    }
  }
}
