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
let [r, g, b] = hexString.substring(0, parseInt(hexString, 16));

convert(r, g, b);
function convert() {
  console.log(r, g, b);
}
