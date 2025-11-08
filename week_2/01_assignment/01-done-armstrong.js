const digitCounter = (number) => {
  let digits = number;
  if (digits === 0) return 1;
  let digitCount = 0;

  while (digits > 0) {
    const remainder = (digits % 10);
    digits = (digits - remainder) / 10;
    digitCount += 1;
  }

  return digitCount;
}

const isArmstrong = (armstrongCandidate) => {
  let x = armstrongCandidate;
  const power = digitCounter(x);
  let sumOfCubes = 0;

  for (let term = 0; term < power; term++) {
    const remainder = x % 10;
    sumOfCubes += (remainder ** power);
    x = (x - remainder) / 10;
  }

  return sumOfCubes === armstrongCandidate;
}
function testArmstrong(input, output, expected) {
  if (output !== expected) {
    console.log(input + "|EXP" + expected + "|OUT " + output);
    return;
  }

  console.log('All good', output);
}
function testAll() {
  testArmstrong(1, isArmstrong(1), true);
  testArmstrong(2, isArmstrong(2), true);
  testArmstrong(3, isArmstrong(3), true);
  testArmstrong(153, isArmstrong(153), true);
  testArmstrong(9474, isArmstrong(9474), true);
  testArmstrong(123, isArmstrong(123), false);
}

testAll();