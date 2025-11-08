function sumOfAP(a, d, n) {
  if (n === 0) {
    return 0;
  }
  //a + d is literally passing the nth term in the sumOfAP 
  // until we exhaust the n variable
  return a + sumOfAP(a + d, d, n - 1);
}

function testSumOfAP(a, d, nthTerm, expected) {
  const actual = sumOfAP(a, d, nthTerm);
  const isPass = actual === expected;
  const icon = isPass ? "✅" : "❌";
  let message = `\t${icon} \n`;

  message += isPass ? "" : `\t   | Input    : ${nthTerm}, ${a}, ${d} ,\n`;
  message += isPass ? "" : `\t   | Actual   : ${actual}\n`;
  message += isPass ? "" : `\t   | Expected : ${expected}\n`;

  console.log(message, actual);
}

function testAllTestCases() {
  testSumOfAP(1, 0, 1, 1);
  testSumOfAP(1, 0, 10, 10);
  testSumOfAP(1, 1, 10, 55);
  testSumOfAP(1, 1, 100, 5050);
  testSumOfAP(2, 2, 10, 110);

}

testAllTestCases();