// Do not rename a or b, use them as input for your program.
// While testing we will change their values.
// a and b will be always 0 or greater.
const a = 0;
const b = 1;

// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let LCMFound = false;

if (a === 0 || b === 0) {
  console.log(0);
  LCMFound = true;
}

let assumedLCM = a > b ? a : b;

while (!LCMFound) {
  if (assumedLCM % a === 0 && assumedLCM % b === 0) {
    console.log(assumedLCM);
    LCMFound = true;
  }

  assumedLCM += 1;
}
