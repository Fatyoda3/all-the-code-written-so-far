const fibonacciOf = (n) => {
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

function tester(value, expected) {
  const output = fibonacciOf(value);
  const works = output === expected
  const exp = works ? '✅' : '❌';
  const message = works ? 'it works' : 'it fails';
  console.log(message, exp, 'OUT', output, ':', expected);

}

function testAll() {
  tester(1, 0);
  tester(0, 0);
  tester(5, 3);
  tester(2, 1);
  tester(10, 34);
}

testAll();
