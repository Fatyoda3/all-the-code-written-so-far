const endsWith = (string, substring) => {

  const from = string.length - substring.length;

  if (from < 0) {
    return false;
  }

  for (let index = 0; index < substring.length; index++) {

    if (string[from + index] !== substring[index]) {
      return false;
    }
  }
  return true;
}


function testEndsWith(string, substring, expectedValue) {
  const valueWeGot = endsWith(string, substring);
  const isWorking = valueWeGot === expectedValue ? ' ✅' : ' ❌';
  const inputs = '|' + string + '|' + substring;
  const expectationPart = expectedValue + " and we got " + valueWeGot;
  const message = inputs + isWorking + " value we expected " + expectationPart;

  console.log(message);
}

function testAll() {

  testEndsWith('hello world', 'ld', true);
  testEndsWith('hello world', 'wor', false);
  testEndsWith('hello world', 'hello', false);

  testEndsWith('1', '1', true);
  testEndsWith('1', '12', false);
  testEndsWith('12', '12', true);
  testEndsWith('2111', '111', true);

  testEndsWith('hello is bad', 'is bad', true);
  testEndsWith('hello is bad', 'hello gustavo is bad', false);
  testEndsWith('red is blue', 'lue', true);
  testEndsWith('red is blue ', ' ', true);

}

testAll();