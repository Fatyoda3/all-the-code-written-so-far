function trimString(text) {
  const string = text;

  let trimmedString = '';
  let letterFound = false;

  for (let index = 0; index < string.length; index++) {
    if (string[index] !== ' ') {
      letterFound = true;
    }

    if (letterFound) {
      if (string[index] === ' ' && string[index + 1] === ' ') {
        return trimmedString;
      }
      trimmedString += string[index];
    }
  }
  return trimmedString
}



function composeMessage(equalCheck, expectedValue, valueWeGot) {
  const isWorking = equalCheck ? '✅' : '❌';
  const working = isWorking + " value we expected ";
  const comparison = expectedValue + " and we got " + valueWeGot;

  return working + comparison;
}

function testTrimString(string, expectedValue) {

  const valueWeGot = trimString(string);
  const equalCheck = valueWeGot === expectedValue;

  const message = composeMessage(equalCheck, expectedValue, valueWeGot);

  console.log(message);
}

function testAll() {

  testTrimString('', '');
  testTrimString('a', 'a');
  testTrimString('  aaa  ', 'aaa');

  testTrimString('aaaa  ', 'aaaa');
  testTrimString('  hello', 'hello');
  testTrimString('aabb', 'aabb');

}

testAll();