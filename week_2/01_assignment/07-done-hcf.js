function isInvalid ( firstNumber, secondNumber)
{
  if (firstNumber === 0 || secondNumber === 0) {
    return firstNumber === 0 ? secondNumber : firstNumber;
  }
}

function getHCF(firstNumber, secondNumber) {
  if(isInvalid(firstNumber , secondNumber)) 
    return isInvalid(firstNumber , secondNumber);
  let a = firstNumber;
  let b = secondNumber;

  while (a && b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}

function testHCF(n1, n2, expectedValue) {
  const valueWeGot = getHCF(n1, n2);

  const symbol = valueWeGot === expectedValue ? '✅' : '❌';
  const message = symbol === '✅' ? 'it works' : 'it fails';

  console.log(message, symbol, valueWeGot, ':', expectedValue);
}


function testAll() {
  testHCF(10, 100, 10);
  testHCF(100, 100, 100);
  testHCF(50, 100, 50);
  testHCF(20, 100, 20);
  testHCF(40, 100, 20);
  testHCF(0, 100, 100);

}

testAll();