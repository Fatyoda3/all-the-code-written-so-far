function fibonacciAt(n) {
  let a = 0;
  let b = 1;
  let c = 0;

  for (let i = 1; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return a;
}

function testFibonacciAt(value, expectedValue) {
  const valueWeGot = fibonacciAt(value);
  const exp = valueWeGot === expectedValue ? '✅' : '❌';
  const message = valueWeGot ? 'it works' : 'it fails';
  console.log(message, exp, valueWeGot, ':', expectedValue);

}

function testAll() {
  testFibonacciAt(1, 0);
  testFibonacciAt(0, 0);
  testFibonacciAt(5, 3);
  testFibonacciAt(2, 1);
  testFibonacciAt(10, 34);
}

testAll();
