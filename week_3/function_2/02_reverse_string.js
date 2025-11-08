function reverseString(sentence) {
  let reversed = '';

  for (let index = sentence.length - 1; index >= 0; index--) {
    reversed += sentence[index];
  }

  return reversed;
}

function testRevString(string, expectedValue) {
  const valueWeGot = reverseString(string);
  const isWorking = valueWeGot === expectedValue ? ' ✅' : ' ❌';
  const inputs = '|' + string + '|';
  const expectationPart = expectedValue + " and we got " + valueWeGot;
  const message = inputs + isWorking + " value we expected " + expectationPart;

  console.log(message);
}

function testAll() {
  testRevString('hello', 'olleh');
  testRevString('121', '121');
  testRevString('', '');
}

testAll();
