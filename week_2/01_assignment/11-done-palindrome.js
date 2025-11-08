const isPalindrome = (number) => {

  let digits = number;
  let reversed = 0;

  while (digits) {
    const extractedDigit = digits % 10;
    reversed = reversed * 10 + extractedDigit;
    digits = (digits - extractedDigit) / 10;
  }

  return number === reversed;
}


function testIsPrime(value, expectedValue) {
  const valueWeGot = isPalindrome(value);
  const exp = valueWeGot === expectedValue ? '✅' : '❌';
  const message = valueWeGot ? 'it works' : 'it fails';
  console.log(message, exp, value, valueWeGot, ':', expectedValue);

}

function testAll() {
  testIsPrime(121, true);
  testIsPrime(1331, true);
  testIsPrime(5, true);
  testIsPrime(2, true);
  testIsPrime(0, true);
  testIsPrime(101, true);
  testIsPrime(1011, false);
  testIsPrime(121011, false);

}

testAll();
