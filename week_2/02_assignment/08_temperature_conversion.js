/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/


function isNotValid(val) {
  return !(val === "C" || val === "K" || val === "F");
}

function convert(from, to, value) {
  let willConvert = value - 0;
  const fCConstant = 9 / 5;
  const cFConstant = 5 / 9;
  const delta = 273.15;

  if (isNotValid(from) || isNotValid(to))
    return "NaN";

  switch (true) {
    case from === 'C' && to === 'K':
      return willConvert + delta;

    case from === 'K' && to === "C":
      return willConvert - delta;

    case from === 'F' && to === 'C':
      return cFConstant * (willConvert - 32);

    case from === 'C' && to === 'F':
      return (fCConstant * willConvert) + 32;

    case from === "F" && to === "K":
      return cFConstant * (willConvert - 32) + delta;

    case from === "K" && to === "F":
      return (fCConstant * (willConvert - delta)) + 32;

  }


  return willConvert;
}

function isApprox(a, b) {
  const delta = a - b;
  return delta < 0.05 && delta > -0.05;
}

function testTempConversion(from, to, value, expectedValue) {

  const valueWeGot = convert(from, to, value);
  const approxCheck = isApprox(valueWeGot, expectedValue);
  const equalCheck = valueWeGot === expectedValue;
  const isWorking = equalCheck || approxCheck ? '✅' : '❌';
  const part1 = isWorking + " value we expected ";
  const part2 = expectedValue + " and we got " + valueWeGot;
  const message = part1 + part2;

  console.log(message);
}

function testAll() {

  const C = 'C';
  const F = 'F';
  const K = 'K';

  testTempConversion(C, K, 100, 373.15);
  testTempConversion(K, C, 100, -173.15);
  testTempConversion(F, C, -40, -40);
  testTempConversion('C', 'K', 0, 273.15);
  testTempConversion('C', 'F', 37, 98.6);
  testTempConversion('C', 'F', '37', 98.6);
  testTempConversion('F', 'K', 98.6, 310.15);
  testTempConversion('K', 'F', 310.15, 98.6);
  testTempConversion('K', 'F', '310.15', 98.6);
  testTempConversion('K', 'K', '310.15', 310.15);
  testTempConversion('C', 'K', '0', 273.15);
}

testAll();