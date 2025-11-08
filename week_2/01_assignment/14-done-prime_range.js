function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function primeRange(start, end) {

  let primeString = '';
  for (let currentNumber = start; currentNumber <= end; currentNumber++) {
    if (isPrime(currentNumber) && currentNumber > 1) {
      primeString = primeString + currentNumber + ' ';
    }
  }
  return primeString;
}



function testPrimeRange(start, end, expectedValue) {
  const valueWeGot = primeRange(start, end);
  const exp = valueWeGot === expectedValue ? '✅' : '❌';
  const message = valueWeGot ? 'it works' : 'it fails';

  console.log(message, exp, valueWeGot, ':', expectedValue);
}
function testAll() {
  testPrimeRange(1, 10, '2 3 5 7 ');
  testPrimeRange(12, 30, '13 17 19 23 29 ');
  testPrimeRange(5, 5, '5 ');
  testPrimeRange(2, 25, '2 3 5 7 11 13 17 19 23 ');
  testPrimeRange(0, 5, '2 3 5 ');
  testPrimeRange(101, 110,'101 103 107 109 ');
}

testAll();