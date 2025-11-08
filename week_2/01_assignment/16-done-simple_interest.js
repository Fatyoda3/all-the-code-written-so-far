function getSimpleInterest(p, r, t) {
  return p * r * t / 100;
}

function testGetSimpleInterest(p, r, t, expectedValue) {
  const valueWeGot = getSimpleInterest(p, r, t);
  const exp = valueWeGot === expectedValue ? '✅' : '❌';
  const message = valueWeGot ? 'it works' : 'it fails';

  console.log(message, exp, valueWeGot, ':', expectedValue);
}

function testAll() {
  testGetSimpleInterest(100 , 10 , 4 , 40);
  testGetSimpleInterest(12, 12 , 1 , 1.44);
  testGetSimpleInterest(5, 7 , 2 , 0.7);
  testGetSimpleInterest(2, 3 , 10 , 0.6);
  testGetSimpleInterest(1000, 12 , 5 , 600);
  testGetSimpleInterest(102, 100 , 2 ,204);
  testGetSimpleInterest(75 , 30 , 10 , 225);
}

testAll();