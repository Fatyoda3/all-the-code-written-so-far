function isWhiteSpace(char) {
  return char === ' ' || char === '\n' || char === '\t';
}

function countWords(sentence) {
  let count = 0;
  let currentWord = '';

  for (let index = 0; index < sentence.length; index++) {
    const letter = sentence[index];
    const isChar = !isWhiteSpace(letter);

    if (isChar) {
      currentWord += letter;
    } else if (currentWord !== '') {
      count += 1;
      currentWord = '';
    }
  }
  return currentWord !== '' ? count + 1 : count;
}

function testCountWords(input, expectedValue) {
  const valueWeGot = countWords(input);
  const isWorking = valueWeGot === expectedValue ? ' ✅' : ' ❌';
  const inputs = '|' + input;
  const expectedPart = expectedValue + " and we got||" + valueWeGot;
  const message = inputs + isWorking + " value we expected " + expectedPart;

  console.log(message);
}

function testAll() {
  testCountWords(' red is blue', 3);
  testCountWords(' red is blue  ', 3);
}

testAll();