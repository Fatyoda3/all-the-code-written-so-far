function decimalToBinary(decimalNum) {
  if (decimalNum <= 0)
    return decimalNum + '';

  let str = '';

  while (decimalNum > 0) {
    const remainder = decimalNum % 2;
    decimalNum = (decimalNum - remainder) / 2;
    str = str + remainder;
  }
  return str;
  
}

function testDecimalToBinary(value, expectedValue) {
  const valueWeGot = decimalToBinary(value);
  const isWorking =
    valueWeGot === expectedValue ? '✅' : '❌';
  const message = "value we expected " +
    expectedValue + " and we got " +
    valueWeGot + ' ' + isWorking;
  console.log(message);

}
function testCases() {
  testDecimalToBinary(12, '0011');
  testDecimalToBinary(8, '0001');
  testDecimalToBinary(4, '001');
  testDecimalToBinary(65, '1000001');
  testDecimalToBinary(21, '10101');
}

function testAll() {
  testCases();
}

testAll();