function factorial(n) {
  let product = 1;
  for (let currentN = n; currentN > 1; currentN--)
    product = product * currentN;

  return product;
}

function testFactorial(x, expectedValue) {
  const emoji = factorial(x) === expectedValue ? '✅' : '❌';
  const message = emoji === '✅' ? 'it works' : 'it fails';
  console.log(message, emoji, factorial(x), ':', expectedValue);
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