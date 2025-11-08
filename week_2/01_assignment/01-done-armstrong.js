function getNumberOfDigits(number) {
  let digitCount = 0;
  while (number) {
    const remainder = (number % 10);
    number = (number - remainder) / 10;
    digitCount = digitCount + 1;
  }
  return digitCount;
}

function isArmstrong(armstrongCandidate) {
  let x = armstrongCandidate;
  const power = getNumberOfDigits(x);
  let sumOfDigitCubes = 0;

  for (let term = 0; term < power; term++) {
    const remainder = (x % 10);
    sumOfDigitCubes = sumOfDigitCubes + remainder ** power;
    x = (x - remainder) / 10;
  }
  return sumOfDigitCubes === armstrongCandidate;
}
function testArmstrong(input, valueWeGot, expectedValue) {
  const message = input + " was and value we expected " + expectedValue + " and we got " + valueWeGot;
  console.log(message);
}
function testAll() {
  testArmstrong(1, isArmstrong(1), 1);
  testArmstrong(2, isArmstrong(2), 2);
  testArmstrong(3, isArmstrong(3), 3);
  testArmstrong(153, isArmstrong(153), 153);
  testArmstrong(9474, isArmstrong(9474), 9474);
}

testAll();