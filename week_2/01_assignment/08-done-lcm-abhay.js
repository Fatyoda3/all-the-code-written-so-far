const a = 0;
const b = 1;

function getLCM(num1, num2) {
  if (num1 <= 0 || num2 <= 0) return 0;
  let LCMFound = false;

  let assumedLCM = num1 > num2 ? num1 : num2;
  const divisor = num2 > num1 ? num1 : num2;
  const incrementBy = assumedLCM;
  
  let check = (assumedLCM % divisor !== 0);

  while (check) {
    check = (assumedLCM % divisor !== 0);
    if (check) {
      assumedLCM = assumedLCM + incrementBy;
    }
  }
  return assumedLCM;
}

function testLCM(value, expectedValue) {
  const exp = value === expectedValue ? '✅' : '❌';
  const message = exp === '✅' ? 'it works' : 'it fails';
  console.log(message, exp, value, ':', expectedValue);
}

function testAll() {
  testLCM(getLCM(2, -2), 0);
  testLCM(getLCM(-12, -2), 0);
  testLCM(getLCM(12, -24), 0);
  testLCM(getLCM(11, 12), 132);
  testLCM(getLCM(16, 12), 48);
}

testAll();