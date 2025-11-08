const isDivisible = (n, i) => n % i === 0;

const isPrime = (assumedPrime) => {
  if (assumedPrime < 2) {
    return false;
  }
  const root = Math.sqrt(assumedPrime);

  for (let divisor = 2; divisor <= root; divisor++) {

    if (isDivisible(assumedPrime, divisor)) {
      return false;
    }
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