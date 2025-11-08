const removeAdjacentDuplicateSpaces = (sentence) => {
  if (sentence === '') {
    return '';
  }
  const edited = [];
  let isPrevLetter = true;

  for (let index = 0; index < sentence.length; index++) {



  }

  return edited.join('');
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