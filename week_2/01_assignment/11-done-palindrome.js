function palindromeChecker(n) {

  let palindrome = n;
  let reverse = 0;

  while (palindrome) {
    const remainder = palindrome % 10;
    reverse = reverse * 10 + remainder;
    palindrome = (palindrome - remainder) / 10;
  }

  return n === reverse;
}


function testIsPrime(value, expectedValue) {
  const valueWeGot = palindromeChecker(value);
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
