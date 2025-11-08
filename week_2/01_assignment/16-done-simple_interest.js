function interest(principal, rate, totalTerms) {
  return principal * rate * totalTerms / 100;
}

function testGetSimpleInterest(p, r, t, expectedValue) {
  const valueWeGot = interest(p, r, t);
  const works = valueWeGot === expectedValue;
  const exp = works ? '✅' : '❌';
  const message = works ? 'it works' : 'it fails';

  console.log(message, exp, valueWeGot, ':', expectedValue);
}

function testAll() {
  testGetSimpleInterest(100, 10, 4, 40);
  testGetSimpleInterest(12, 12, 1, 1.44);
  testGetSimpleInterest(5, 7, 2, 0.7);
  testGetSimpleInterest(2, 3, 10, 0.6);
  testGetSimpleInterest(1000, 12, 5, 600);
  testGetSimpleInterest(102, 100, 2, 204);
  testGetSimpleInterest(75, 30, 10, 225);
}

testAll();