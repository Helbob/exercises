"use strict";

//Anon func
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("event", event);
  console.log("MORE");
});

//Could use arrow function for anon function
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("event", event);
  console.log("MORE");
});
