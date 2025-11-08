function multiply(multiplier, multiplicand) {
  if (multiplicand === 0) {
    return 0;
  }
  return multiplier + multiply(multiplier, multiplicand - 1);
}

function testMultiply(multiplier, multiplicand, expected) {
  const result = multiply(multiplier, multiplicand);
  const symbol = result === expected ? "✅" : "❌";
  composeMessage(symbol, multiplier, multiplicand, result, expected);
}

function composeMessage(symbol, multiplier, multiplicand, result, expected) {
  let message = symbol + "";
  message += "[" + multiplier, multiplicand + "]" + "The result is: ";
  message += result + " Expected was:" + expected;
  console.log(message);
}

function testAll() {
  testMultiply(2, 3, 6);
  testMultiply(0, 3, 0);
  testMultiply(3, 0, 0);
  testMultiply(0, 0, 0);
}

testAll();