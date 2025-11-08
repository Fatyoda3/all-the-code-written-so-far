function repeat(string, n) {
  if (n === 0) {
    return string;
  }
  return string + repeat('' + string, n - 1);
}

function testRepeat(string, n, expected) {
  const actual = repeat(string, n);
  const isPass = actual === expected;
  const icon = isPass ? "✅" : "❌";
  let message = `\t${icon} \n`;

  message += isPass ? "" : `\t   | Input    : ${string},\n`;
  message += isPass ? "" : `\t   | Actual   : ${actual}\n`;
  message += isPass ? "" : `\t   | Expected : ${expected}\n`;

  console.log(message, actual);
}

function testAllTestCases() {
  testRepeat('1_', 4, '1_1_1_1_1_');
  testRepeat('12 ', 3, '12 12 12 12 ');
  testRepeat('', 10, '');
  testRepeat('_', 2, '___');
  testRepeat('hello ', 4, 'hello hello hello hello hello ');

}

testAllTestCases();