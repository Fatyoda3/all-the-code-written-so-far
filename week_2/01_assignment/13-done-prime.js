function isDivisible(n, i) {
  return n % i === 0
}
function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (isDivisible(n, i))
      return false;
  }
  return true;
}


function testPrimeRange(value, expectedValue) {
  const valueWeGot = isPrime(value);
  const exp = valueWeGot === expectedValue ? '✅' : '❌';
  const message = valueWeGot ? 'it works' : 'it fails';
  console.log(message, exp, value, valueWeGot, ':', expectedValue);

}
function testAll() {
  testPrimeRange(11, true);
  testPrimeRange(12, false);
  testPrimeRange(5, true);
  testPrimeRange(2, true);
  testPrimeRange(0, false);
  testPrimeRange(102, false);
  testPrimeRange(100, false);

}

testAll();