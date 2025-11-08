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
const primeNotFound = (term) => !isPrime(term);
function getPrimeAbove(prime) {

  let term = prime + 1;
  while (primeNotFound(term)) {
    term += 1;
  }

  return term;
}

function testGetPrimeAbove(value, expectedValue) {
  const valueWeGot = getPrimeAbove(value);
  const works = valueWeGot === expectedValue
  const exp = works ? '✅' : '❌';
  const message = works ? 'it works' : 'it fails';

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