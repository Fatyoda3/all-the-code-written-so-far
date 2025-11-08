const isDivisible = (dividend, divisor) => dividend % divisor === 0;

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

function primeRange(start, end) {

  const primes = [];

  for (let term = start; term <= end; term++) {
    if (isPrime(term) && term > 1) {
      primes.push(term);
    }
  }
  return primes.join(' ');
}



function testPrimeRange(start, end, expected) {
  const output = primeRange(start, end);
  const works = output === expected
  const exp = works ? '✅' : '❌';
  const message = works ? 'it works' : 'it fails';

  console.log(message, exp, 'OUT', output, ': exp', expected);
}
function testAll() {
  testPrimeRange(1, 10, '2 3 5 7');
  testPrimeRange(12, 30, '13 17 19 23 29');
  testPrimeRange(5, 5, '5');
  testPrimeRange(2, 25, '2 3 5 7 11 13 17 19 23');
  testPrimeRange(0, 5, '2 3 5');
  testPrimeRange(101, 110, '101 103 107 109');
}

testAll();