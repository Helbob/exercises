"use strict";
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
function randomColor() {
  return { r, g, b };
}

function rgbToCSS() {
  let string = `rgb(${r}, ${g}, ${b})`;
  return string;
}

function randomBackground() {
  document.querySelector("body").style.backgroundColor = rgbToCSS();
}

randomBackground();
