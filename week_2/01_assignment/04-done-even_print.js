function printEvenSeries(start, end) {
  let actualStart = start % 2 ? start + 1 : start;
  let actualEnd = end;

  if (start > end) {
    actualStart = end;
    actualEnd = start;
  }

  let evenNumbers = '';

  for (let term = actualStart; term <= actualEnd; term += 2)
    evenNumbers = evenNumbers + term + ' ';
  return evenNumbers;
}

function testEvenSeries(start, end, expectedValue) {
  const valueWeGot = printEvenSeries(start, end);

  const isWorking =
    valueWeGot === expectedValue ? '✅' : '❌';
  const message = "value we expected " +
    expectedValue + " and we got " +
    valueWeGot + ' ' + isWorking;

  console.log(message);

}

function runTest() {
  testEvenSeries(1, 10, '2 4 6 8 10 ');
  testEvenSeries(1, 10, '2 4 6 8 10 ');
  testEvenSeries(3, 10, '4 6 8 10 ');
  testEvenSeries(-4, -12, '-12 -10 -8 -6 -4 ');
  testEvenSeries(-4, -2, '-4 -2 ');
}

runTest();