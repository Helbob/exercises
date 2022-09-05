"use strict";
/*
const rgbString = "(192, 13, 1)";
const front = "rgb";
const [r, g, b] = rgbString.split(" ");

function convert() {
  console.log(front + r + g + b);
}
convert();
*/
let testo = 255;
let hexString = "bada55";
let [r, g, b] = hexString.substring(0);
r = parseInt(hexString, 16);
g = parseInt(hexString, 16);
b = parseInt(hexString, 16);

convert(r, g, b);
function convert() {
  g = parseInt(hexString, 16);
  console.log(r, g, b);
}
