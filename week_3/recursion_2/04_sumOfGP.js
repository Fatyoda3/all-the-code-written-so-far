function multiply(a, times) {
  if (times === 1) {
    return a;
  }
  return a + multiply(a, times - 1);
}

function sumOfGP(a, r, n) {
  if (r === 0 || a === 0) {
    return 0;
  }
  if (n === 1) {
    return a;
  }
  return a + sumOfGP(multiply(a, r), r, n - 1);
}


function testSumOfGP(a, r, nthTerm, expected) {
  const actual = sumOfGP(a, r, nthTerm);
  const isPass = actual === expected;
  const icon = isPass ? "✅" : "❌";
  let message = `\t${icon} \n`;

  message += isPass ? "" : `\t   | Input    : ${nthTerm}, ${a}, ${r} ,\n`;
  message += isPass ? "" : `\t   | Actual   : ${actual}\n`;
  message += isPass ? "" : `\t   | Expected : ${expected}\n`;

  console.log(message, actual);
}

function testAllTestCases() {
  testSumOfGP(2, 2, 3, 14);
  testSumOfGP(2, 2, 4, 30);
}

testAllTestCases();