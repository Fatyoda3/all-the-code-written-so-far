
const lcmOf = (num1, num2) => {
  const a = Math.abs(num1);
  const b = Math.abs(num2);

  let lcm = Math.max(a, b);
  const divisor = Math.min(a, b);

  const factor = lcm;

  while ((lcm % divisor) !== 0) {
    lcm += factor;
  }

  return lcm;
}

function testLCM(output, expected) {
  const exp = output === expected ? '✅' : '❌';
  const message = exp === '✅' ? 'it works' : 'it fails';
  console.log(message, exp, 'OUT', output, ':EXP', expected);
}

function testAll(fn) {
  testLCM(fn(2, -2), 2);
  testLCM(fn(-12, -2), 12);
  testLCM(fn(12, -24), 24);
  testLCM(fn(11, 12), 132);
  testLCM(fn(16, 12), 48);
}

testAll(lcmOf);