function getSquareRoot(a) {
  return a ** 0.5;
}

function isApprox(value, expectedValue) {
  const delta = value - expectedValue;
  if (delta < 0.1 && delta > -0.1) {
    return true;
  }
  return false;
}

function testGetSquareRoot(value, expectedValue) {
  const valueWeGot = getSquareRoot(value);
  const exp = isApprox(valueWeGot, expectedValue) ? '✅' : '❌';
  const message = valueWeGot ? 'it works' : 'it fails';

  console.log(message, exp, value, valueWeGot, ':', expectedValue);
}

function testAll() {
  testGetSquareRoot(100, 10);
  testGetSquareRoot(2, 1.414);
  testGetSquareRoot(3, 1.72);
  testGetSquareRoot(2, 1.4);
  testGetSquareRoot(0, 0);
  testGetSquareRoot(8, 2 * 1.414);
  testGetSquareRoot(200, 1.414 * 10);

}

testAll();