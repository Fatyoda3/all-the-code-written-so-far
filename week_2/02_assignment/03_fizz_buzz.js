function isDivisible(number, divisor) {
  return (number % divisor === 0);
}

function fizzBuzz(number) {
  const f = 'fizz';
  const b = 'buzz';
  const fb = f + b;
  let count = 0;

  count = isDivisible(number, 3) ? count + 1 : count;
  count = isDivisible(number, 5) ? count + 2 : count;

  switch (count) {
    case 0:
      return number + '';
    case 1:
      return f;
    case 2:
      return b;
    case 3:
      return fb;
  }

}

function testFizzBuzz(string, expectedValue) {

  const valueWeGot = fizzBuzz(string);
  const isWorking = valueWeGot === expectedValue ? '✅' : '❌';
  const part2 = expectedValue + " and we got " + valueWeGot;
  const message = isWorking + " value we expected " + part2;

  console.log(message);
}

function testAll() {
  const fZ = 'fizzbuzz';
  const f = 'fizz';
  const b = 'buzz';

  testFizzBuzz(15, fZ);
  testFizzBuzz(3, f);
  testFizzBuzz(2111, '2111');
  testFizzBuzz(1235, b);
  testFizzBuzz(35, b);
  testFizzBuzz(999, f);
  testFizzBuzz(1232, '1232');
  testFizzBuzz(121, '121');
  testFizzBuzz(0, fZ);
}

testAll();
