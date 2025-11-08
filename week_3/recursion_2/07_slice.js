function slice(text, start, end) {
  if (start > end) {
    return '';
  }
  return sliceString(text, '', start, end);
}
function sliceString(text, target, start, end) {
  if (start > end) {
    return target;
  }
  return sliceString(text, target + text[start], start + 1, end);
}
function testSlice(string, start, end, expected) {
  const actual = slice(string, start, end);
  const isPass = actual === expected;
  const icon = isPass ? "✅" : "❌";
  let message = `\t${icon} \n`;

  message += isPass ? "" : `\t   | Input    : ${string},\n`;
  message += isPass ? "" : `\t   | Actual   : ${actual}|\n`;
  message += isPass ? "" : `\t   | Expected : ${expected}\n`;

  console.log(message, actual);
}

function testAllTestCases() {
  testSlice('12 ', 0, 1, '12');
  testSlice('hello ', 2, 4, 'llo');

}

testAllTestCases();