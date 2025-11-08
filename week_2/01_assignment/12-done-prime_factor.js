function findPrimeFactors(n) {

  let possibleComposite = n;
  let divisor = 2;
  let factors = '';

  while (possibleComposite > 1) {
    const remainder = (possibleComposite % divisor);
    if (remainder === 0) {
      factors = factors + divisor + ' ';
      possibleComposite = possibleComposite / divisor;
    } else {
      divisor = divisor + 1;
    }
  }

  return factors;
}

function testPrimeRange(value, expectedValue) {
  const valueWeGot = findPrimeFactors(value);
  const exp = valueWeGot === expectedValue ? '✅' : '❌';
  const message = valueWeGot ? 'it works' : 'it fails';
  console.log(message, exp, value, valueWeGot, ':', expectedValue);

}

function testAll() {
  testPrimeRange(121, '11 11 ');
  testPrimeRange(12, '2 2 3 ');
  testPrimeRange(5, '5 ');
  testPrimeRange(2, '2 ');
  testPrimeRange(0, '');
  testPrimeRange(102, '2 3 17 ');
  testPrimeRange(100, '2 2 5 5 ');
}

testAll();