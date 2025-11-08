function checkIfLeapYear(year) {
  const check1 = year % 4 === 0;
  const check2 = year % 100 === 0;
  const check3 = year % 400 === 0;
  const isLeapYear = check2 ? check3 : check1;
  return isLeapYear
}

function testLeapYearFunction(value, expectedValue) {
  const valueWeGot = checkIfLeapYear(value);
  const exp = valueWeGot === expectedValue ? '✅' : '❌';
  const message = valueWeGot ? 'it is leap year' : 'it fails';
  console.log(message, exp, value, valueWeGot, ':', expectedValue);
}

function testAll() {
  testLeapYearFunction(2000, true);
  testLeapYearFunction(1994, false);
  testLeapYearFunction(1600, true);
  testLeapYearFunction(1900, false);
  testLeapYearFunction(2025, false);
  testLeapYearFunction(100, false);

}
testAll();