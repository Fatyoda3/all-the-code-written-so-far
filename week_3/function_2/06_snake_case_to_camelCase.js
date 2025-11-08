function mapValue(letter, source, target) {
  for (let position = 0; position < 26; position++) {
    if (letter === source[position]) {
      return target[position];
    }
  }
  return letter;
}

function toUpperCase(letter) {
  const capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseLetter = 'abcdefghijklmnopqrstuvwxyz';
  return mapValue(letter, lowerCaseLetter, capitalLetter)
}

function toLowerCase(letter) {
  const capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseLetter = 'abcdefghijklmnopqrstuvwxyz';
  return mapValue(letter, capitalLetter, lowerCaseLetter)
}

function findInitial(sentence) {
  for (let charIndex = 0; charIndex < sentence.length; charIndex++) {
    if (sentence[charIndex] !== '_') {
      return charIndex;
    }
  }
  return -1;
}

function isChar_(character) {
  return character !== '_';
}

function toCamelCase(sentence) {
  const indexOfInitial = findInitial(sentence);

  if (indexOfInitial === - 1) {
    return '';
  }

  let camelText = toLowerCase(sentence[indexOfInitial]);
  let isLastLetter = camelText;

  for (let index = indexOfInitial + 1; index < sentence.length; index++) {
    const char = sentence[index];
    const isLetter = isChar_(char);

    if (!isLastLetter && isLetter) {
      camelText += toUpperCase(char);
    }
    else if (isLastLetter && isLetter) {
      camelText += toLowerCase(char);
    }
    isLastLetter = isLetter;
  }

  return camelText;
}

function testCamelCase(input, expectedValue) {
  const valueWeGot = toCamelCase(input);
  const isWorking = valueWeGot === expectedValue ? ' ✅' : ' ❌';
  const inputs = '|' + input;
  const expectedPart = expectedValue + " and we got|" + valueWeGot + '|';
  const message = inputs + isWorking + " value we expected " + expectedPart;

  console.log(message);
}

function testAll() {
  testCamelCase('___a___', 'a');
  testCamelCase('', '');
  testCamelCase('______', '');
  testCamelCase('C', 'c');
  testCamelCase('a', 'a');

  testCamelCase('_iS_____U_', 'isU');
  testCamelCase('_IS_U', 'isU');
  testCamelCase('IS_U', 'isU');

}

testAll();