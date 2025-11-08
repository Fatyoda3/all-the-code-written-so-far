function apSum(firstTerm, difference, numberOfTerms) {
  let sum = 0;
  let sumOfDifference = 0;
  for (let term = 0; term < numberOfTerms; term++) {
    sum = sum + firstTerm + sumOfDifference;
    sumOfDifference = sumOfDifference + difference;
  }
  return sum;
}

function testApSum(firstTerm, difference, numberOfTerms, expectedValue) {
  const valueWeGot = apSum(firstTerm, difference, numberOfTerms)
  const isWorking = valueWeGot === expectedValue ? '✅' : '❌';

  const message = isWorking + " value we expected " + expectedValue + " and we got " + valueWeGot;
  console.log(message);
}

function testAll() {

  testApSum(1, 1, 10, 55);
  testApSum(1, 1, 100, 5050);
  testApSum(4, 1, 10, 85);
  testApSum(1, 1, 10, 55);
}

testAll();