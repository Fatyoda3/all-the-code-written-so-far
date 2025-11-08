const findInitial = (text = '') => text.indexOf('_');
const isChar_ = char => char === '_';
function toCamelCase(sentence = '') {
  const indexOfInitial = findInitial(sentence);

  if (indexOfInitial === - 1) {
    return '';
  }

  const camelText = [sentence[indexOfInitial].toLowerCase()];
  let isLastLetter = camelText;

  for (let index = indexOfInitial + 1; index < sentence.length; index++) {
    const char = sentence[index];
    const isLetter = !isChar_(char);

    if (!isLastLetter && isLetter) {
      camelText.push(char.toUpperCase());
    }
    else if (isLastLetter && isLetter) {
      camelText.push(char.toLowerCase());
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