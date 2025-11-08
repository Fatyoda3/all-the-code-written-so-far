const square = 626;

let side1 = 10;
let side2 = square / side1;

let precision = 6;

let n = 0;

while (n < precision) {
  side1 = 1 / 2 * (side1 + side2);
  side2 = square / side1;
  n++;
}

console.log(side1, side2);