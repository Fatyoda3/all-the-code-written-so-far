function isVowel(letter) {

  switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
  }
  return false;
}

function minimumDistance(string) {
  let secondVowel = false;
  let lastVowelPos = 0;
  let distance = string.length;

  for (let index = 0; index < string.length; index++) {

    const isCurrentVowel = isVowel(string[index]);

    if (isCurrentVowel) {

      const difference = index - lastVowelPos;
      const isMinDistance = distance > difference;

      distance = isMinDistance && secondVowel ? difference : distance;

      lastVowelPos = index;
      secondVowel = true;

    }
  }

  return distance === string.length ? -1 : distance;
}


function composeMessage(string, expectedValue, valueWeGot) {
  const inputFragment = " input->" + string;
  const expectedFragment = " expected->" + expectedValue;
  const outputFragment = " output->" + valueWeGot;

  return inputFragment + expectedFragment + '|' + outputFragment;
}

function testMinimumDistance(string, expectedValue) {

  const valueWeGot = minimumDistance(string);
  const checkIfWorks = valueWeGot === expectedValue ? '✅' : '❌';
  const message = composeMessage(string, expectedValue, valueWeGot);

  console.log(checkIfWorks, message);

}

function testAll() {
  testMinimumDistance('hello', 3);
  testMinimumDistance('shellfish', 4);

  testMinimumDistance('heo', 1);
  testMinimumDistance('beautiful', 1);
  testMinimumDistance('aaaa', 1);

  testMinimumDistance('strength', -1);
  testMinimumDistance('bcd', -1);
  testMinimumDistance('abyss', -1);
  testMinimumDistance('abyss beneath', 1);
}

testAll();
