const getHCF = (number1, number2) => {
  if (Math.min(number1, number2) === 0) {
    return Math.max(number1, number2);
  }

  let hcf = number1;
  let dividend = number2;

  while (hcf !== 0 && dividend !== 0) {
    let delta = hcf;

    if (hcf > dividend) {
      hcf -= dividend;
      delta = 0;
    }

    dividend -= delta;
  }

  return hcf;
}

function testHCF(n1, n2, expectedValue) {
  const valueWeGot = getHCF(n1, n2);

  const symbol = valueWeGot === expectedValue ? '✅' : '❌';
  const message = symbol === '✅' ? 'it works' : 'it fails';

  console.log(message, symbol, valueWeGot, ':', expectedValue);
}


function testAll() {
  testHCF(10, 100, 10);
  testHCF(100, 10, 10);
  testHCF(100, 100, 100);
  testHCF(50, 100, 50);
  testHCF(20, 100, 20);
  testHCF(40, 100, 20);
  testHCF(0, 100, 100);

}

testAll();