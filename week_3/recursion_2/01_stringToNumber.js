function stringToNumber(string) {
  const isNegative = string[0] === '-';
  const convertedValue = convertType(string, 2, (isNegative ? 1 : 0), 0);

  return isNegative ? (0 - convertedValue) : convertedValue;
}

function convertType(digitString, digitShift, index, result) {

  if (index >= digitString.length) {
    return result;
  }

  const placeValue = (result * digitShift) + (numeric(digitString[index], 0));

  return convertType(digitString, 10, index + 1, placeValue);
}

function numeric(digit, index = 0) {
  const digits = '0123456789';

  if (digits[index] === digit) {
    return index;
  }

  return numeric(digit, index + 1);
}

function testStringToNumber(string, expected) {
  const actual = stringToNumber(string);
  const isPass = actual === expected;
  const icon = isPass ? "✅" : "❌";
  let message = `\t${icon} \n`;

  message += isPass ? "" : `\t   | Input    : ${string} ,\n`;
  message += isPass ? "" : `\t   | Actual   : ${actual}\n`;
  message += isPass ? "" : `\t   | Expected : ${expected}\n`;

  console.log(message, actual);
}

function testAllTestCases() {
  // testStringToNumber('1', 1);
  // testStringToNumber('10', 10);
  // testStringToNumber('123', 123);
  testStringToNumber('1231', 1231);
  testStringToNumber('1000', 1000);
  // testStringToNumber('0', 0);
  // testStringToNumber('00', 0);
  testStringToNumber('-1231', -1231);
}

testAllTestCases();