const n = 3;

function fibonacciSeries(n) {
  n = (n === 0) ? 1 : n;

  let a = 0;
  let b = 1;
  let nextFib = 0;
  let fibString = '';

  for (let current = 1; current <= n; current++) {
    nextFib = a + b;
    fibString = fibString + a + ' ';
    a = b;
    b = nextFib;
  }
  
  return fibString;
}

function testFibonacciSeries(n, expectedValue) {
  const valueWeGot = fibonacciSeries(n);

  const symbol = valueWeGot === expectedValue ? '✅' : '❌';
  const message = symbol === '✅' ? 'it works' : 'it fails';

  console.log(message, symbol, valueWeGot, ':', expectedValue);
}

function testAll()
{
testFibonacciSeries(0, '0 ');
testFibonacciSeries(1, '0 ');
testFibonacciSeries(2, '0 1 ');
testFibonacciSeries(3, '0 1 1 ');
testFibonacciSeries(10, '0 1 1 2 3 5 8 13 21 34 ');
}

testAll();