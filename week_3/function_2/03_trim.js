function isWhiteSpace(char) {
  return char === ' ' || char === '\n' || char === '\t';
}

function trim(sentence) {
  let finalText = '';
  let spaceBuffer = '';

  for (let index = 0; index < sentence.length; index++) {
    const char = sentence[index];
    const isLetter = !isWhiteSpace(char);

    if (isLetter) {
      finalText += spaceBuffer + char;
      spaceBuffer = '';
    } else if (finalText !== "") {
      spaceBuffer += char;
    }
  }

  return finalText;
}

function testRevString(input, expectedValue) {
  const valueWeGot = trim(input);
  const isWorking = valueWeGot === expectedValue ? ' ✅' : ' ❌';
  const inputs = '|' + input;
  const expectedPart = expectedValue + " and we got|" + valueWeGot + '|';
  const message = inputs + " value we expected " + expectedPart + isWorking;

  console.log(message);
}

function testAll() {
  testRevString('hello is\t', 'hello is');
  testRevString(' red\t is blue', 'red\t is blue');
  testRevString('red is blue ', 'red is blue');
  testRevString('    \t\n\t\n ', '');
  testRevString(' ', '');
}

testAll();