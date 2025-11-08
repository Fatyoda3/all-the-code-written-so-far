function isWhiteSpace(letter) { }

function removeAdjacentDuplicateSpaces(sentence) {
  if (sentence === '') {
    return '';
  }

  let edited = '';
  let isLastLetter = false;

  for (let index = 0; index < sentence.length; index++) {
    const letter = sentence[index];
    const isLetter = letter !== ' ';
    if (isLetter) {
      edited += letter;
    } else if (isLastLetter) {
      edited += ' ';
    }
    isLastLetter = letter;
  }

  return edited;
}

function testRemove(input, expectedValue) {
  const valueWeGot = removeAdjacentDuplicateSpaces(input);
  const isWorking = valueWeGot === expectedValue ? ' ✅' : ' ❌';
  const inputs = 'INPUT|' + input + '\n';
  const expectedPart = expectedValue + "|and we got|" + valueWeGot + '|';
  const message = inputs + '|' + "expected |" + expectedPart + isWorking;

  console.log(message);
}

function testAll() {
  testRemove('hello\t)', 'hello\t)');
  testRemove('red\t a', 'red\t a');
  testRemove('   red is blue ', ' red is blue ');
}

testAll();