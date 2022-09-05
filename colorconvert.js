"use strict";

function convert(hexString) {
  let r = parseInt(hexString.substring(1, 3), 16);
  let g = parseInt(hexString.substring(3, 5), 16);
  let b = parseInt(hexString.substring(5, 7), 16);

  console.log(r, g, b);
}

convert("#bada55");
convert("#facade");
convert("#c0ffee");
convert("#f00b42");
convert("#c0de25");
