function lcmOf(num1, num2) {
  if (num1 <= 0 || num2 <= 0) {
    return 0;
  }

  let lcm = Math.max(num1, num2);
  const divisor = Math.min(num2, num1);
  const factor = lcm;

  while ((lcm % divisor) !== 0) {
    lcm += factor;
  }

  return lcm;
}

function testLCM(value, expectedValue) {
  const exp = value === expectedValue ? '✅' : '❌';
  const message = exp === '✅' ? 'it works' : 'it fails';
  console.log(message, exp, value, ':', expectedValue);
}

function testAll(fn) {
  testLCM(fn(2, -2), 0);
  testLCM(fn(-12, -2), 0);
  testLCM(fn(12, -24), 0);
  testLCM(fn(11, 12), 132);
  testLCM(fn(16, 12), 48);
}

testAll(lcmOf);