"use strict";

const bool = true;
const num = 41;
const str = "Peter";
const obj = {
  cats: 2,
  cats: 1,
};

const nothing = null;
let undf;
const sym = Symbol("symbol");
//console.log(num);
//console.log(bool);
//console.log(str);
//console.log(obj);
//console.log(nothing);
//console.log(sym);

const n1 = 1;
const n2 = 2;
console.log(n1 + n2);

const s1 = "1";
const s2 = "2";
console.log(s1 + s2);
console.log(n1 + s2);
console.log(s1 + n2);

console.log("" + 1 + 0);

const value = " ";
if (value) {
  console.log("truely");
} else {
  console.log("falsy");
}

const passW = "jonny123";
let passStr = "";
passStr = passStr.padEnd(passW.length, "*");
console.log(passStr);
