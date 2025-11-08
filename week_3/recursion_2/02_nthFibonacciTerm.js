function nthFibonacciTerm(n) {
  if (n < 2) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }

  return nthFibonacciTerm(n - 1) + nthFibonacciTerm(n - 2);
}

function testFibonacci(nthTerm, expected) {
  const actual = nthFibonacciTerm(nthTerm);
  const isPass = actual === expected;
  const icon = isPass ? "✅" : "❌";
  let message = `\t${icon} \n`;

  message += isPass ? "" : `\t   | Input    : ${nthTerm} ,\n`;
  message += isPass ? "" : `\t   | Actual   : ${actual}\n`;
  message += isPass ? "" : `\t   | Expected : ${expected}\n`;

  console.log(message);
}

function testAllTestCases() {
  testFibonacci(1, 0);
  testFibonacci(0, 0);
  testFibonacci(1, 0);
  testFibonacci(2, 1);
  testFibonacci(3, 1);
  testFibonacci(4, 2);
  testFibonacci(5, 3);
  testFibonacci(9, 21);
  testFibonacci(6, 5);
  testFibonacci(7, 8);
  testFibonacci(8, 13);
  testFibonacci(10, 34);
}

testAllTestCases();