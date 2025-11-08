const isFactor = (divisor, dividend) => dividend % divisor === 0;
const isLeap = (year) =>
  isFactor(100, year) ? isFactor(400, year) : isFactor(4, year);


function testLeapYearFunction(value, expectedValue) {
  const valueWeGot = isLeap(value);
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