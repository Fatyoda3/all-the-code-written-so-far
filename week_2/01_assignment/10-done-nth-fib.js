function fibonacciAt(n) {
  let currentTerm = 0;
  let nextTerm = 1;
  let futureTerm = 0;

  for (let term = 1; term < n; term++) {
    futureTerm = currentTerm + nextTerm;

    currentTerm = nextTerm;
    nextTerm = futureTerm;
  }
  return currentTerm;
}

function testFibonacciAt(value, expected) {
  const output = fibonacciAt(value);
  const works = output === expected
  const exp = works ? '✅' : '❌';
  const message = works ? 'it works' : 'it fails';
  console.log(message, exp, 'OUT', output, ':', expected);

}

function testAll() {
  testFibonacciAt(1, 0);
  testFibonacciAt(0, 0);
  testFibonacciAt(5, 3);
  testFibonacciAt(2, 1);
  testFibonacciAt(10, 34);
}

testAll();
