function getHCF(dividend1, dividend2) {

  if (Math.min(dividend1, dividend2) === 0) {
    return Math.max(dividend1, dividend2);
  }

  let a = dividend1;
  let b = dividend2;

  while (a !== 0 && b !== 0) {
    let delta = a;

    if (a > b) {
      a -= b;
      delta = 0;
    }
    b -= delta;

  }

  return a;
}

function testHCF(n1, n2, expectedValue) {
  const valueWeGot = getHCF(n1, n2);

  const symbol = valueWeGot === expectedValue ? '✅' : '❌';
  const message = symbol === '✅' ? 'it works' : 'it fails';

  console.log(message, symbol, valueWeGot, ':', expectedValue);
}


function testAll() {
  testHCF(10, 100, 10);
  testHCF(100, 10, 10);
  testHCF(100, 100, 100);
  testHCF(50, 100, 50);
  testHCF(20, 100, 20);
  testHCF(40, 100, 20);
  testHCF(0, 100, 100);

}

testAll();