const factorial = (n) => {
  let product = 1;

  for (let term = 1; term < n + 1; term++) {
    product *= term;
  }

  return product;
}

function testFactorial(x, expectedValue) {
  const symbol = factorial(x) === expectedValue ? '✅' : '❌';
  const message = symbol === '✅' ? 'it works' : 'it fails';
  console.log(message, symbol, factorial(x), ':', expectedValue);
}
function testAll() {
  testFactorial(5, 120);
  testFactorial(6, 720);
  testFactorial(4, 24);
  testFactorial(2, 2);
  testFactorial(1, 1);
  testFactorial(0, 1);
}

testAll();