
const fibsUpto = (n) => {

  let currentFib = 0;
  let nextFib = 1;
  let futureFib = 0;

  const fibs = [];

  for (let term = 0; term < n; term++) {
    fibs.push(currentFib);
    futureFib = currentFib + nextFib;
    currentFib = nextFib;
    nextFib = futureFib;
  }

  return fibs.join(' ');
}

function testFibs(n, expectedValue) {
  const valueWeGot = fibsUpto(n);

  const symbol = valueWeGot === expectedValue ? '✅' : '❌';
  const message = symbol === '✅' ? 'it works' : 'it fails';

  console.log(message, symbol, valueWeGot, ':', expectedValue);
}

function testAll() {
  // testFibs(0, '0');//not valid test case considering
  //  that we 1st fib is 0 and 0th fib is not defined
  testFibs(1, '0');
  testFibs(2, '0 1');
  testFibs(3, '0 1 1');
  testFibs(10, '0 1 1 2 3 5 8 13 21 34');
}

testAll();