function isUpperCase(letter) {
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let index = 0; index < upperCase.length; index++) {
    if (letter === upperCase[index]) {
      return true;
    }
  }
  return false;
}

function changeCase(letter, isLowerCase) {
  if (!isLowerCase) return letter;

  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let index = 0; index < upperCase.length; index++) {

    if (letter === upperCase[index]) {
      return upperCase[index];
    }

  }
  return '*';
}
function snakeCase(string) {

  if (string.length <= 1) return string;

  let edited = '';
  let underscoreFound = false;
  let wordBuffer = '';

  for (let index = 0; index < string.length; index++) {

    const isUnderScore = string[index] === '_';

    if (!isUnderScore) {

      if (underscoreFound) {
        const letterCase = isUpperCase(string[index]);
        console.log(letterCase);
        wordBuffer += changeCase(string[index], letterCase);
        underscoreFound = false;

      } else {
        wordBuffer += string[index];
      }
    }

    if (isUnderScore || index === string.length - 1) {
      edited += wordBuffer;
      wordBuffer = '';
      underscoreFound = true;
    }
  }
  return edited;
}


function composeMessage(equalCheck, expectedValue, valueWeGot) {
  const isWorking = equalCheck ? '✅' : '❌';
  const working = isWorking + " value we expected ";
  const comparison = expectedValue + " and we got " + valueWeGot;

  return working + comparison;
}

function testSnakeCase(string, expectedValue) {

  const valueWeGot = snakeCase(string);
  const equalCheck = valueWeGot === expectedValue;

  const message = composeMessage(equalCheck, expectedValue, valueWeGot);

  console.log(message);
}

function testAll() {

  testSnakeCase('', '');
  testSnakeCase('a', 'a');
  testSnakeCase('hello', 'hello');
  testSnakeCase('hello_world', 'helloWorld');
  testSnakeCase('aa_a', 'aaA');

  testSnakeCase('a_a', 'aA');
  testSnakeCase('aa_bb', 'aaBb');

}

testAll();