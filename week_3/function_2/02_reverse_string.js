function reverseString(sentence) {
  const reversed = [];

  for (let index = sentence.length - 1; index > -1; index--) {
    reversed.push(sentence[index]);
  }

  return reversed.join('');
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
