function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimeAbove(n) {
  let term = n + 1;

  while (!isPrime(term))
    term = term + 1;

  return term;
}

function testGetPrimeAbove(value, expectedValue) {
  const valueWeGot = getPrimeAbove(value);
  const exp = valueWeGot === expectedValue ? '✅' : '❌';
  const message = valueWeGot ? 'it works' : 'it fails';

  console.log(message, exp, value, valueWeGot, ':', expectedValue);
}

function testAll() {
  testGetPrimeAbove(11, 13);
  testGetPrimeAbove(12, 13);
  testGetPrimeAbove(5, 7);
  testGetPrimeAbove(2, 3);
  testGetPrimeAbove(0, 2);
  testGetPrimeAbove(102, 103);
  testGetPrimeAbove(100, 101);
}

testAll();