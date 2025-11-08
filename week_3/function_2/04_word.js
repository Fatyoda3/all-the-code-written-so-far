const isSpace = char => (' ' === char);
function countWords(sentence) {
  let count = 0;

  let letterFound = false;
  let isLastSpace = false;

  for (let index = 0; index < sentence.length; index++) {
    const letter = sentence[index];
    const res = isSpace(letter);

    if (!res) {
      letterFound = true;
      isLastSpace = false;
    }
    if (letterFound && res && !isLastSpace) {
      isLastSpace = true;
      count += 1;
    }
  }
  return count;
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
  testCountWords(' red is ', 2);
  testCountWords(' red is blue  ', 3);
  testCountWords(' red is   blue  ', 3);
  testCountWords(' red    is blue  ', 3);
}

testAll();