const isVowel = letter => 'aeiou'.includes(letter);

function leastDistance(string) {
  let isLastVowel = false;
  let lastVowelIdx = 0;
  let distance = string.length;

  for (let index = 0; index < string.length; index++) {
    const isCurrentVowel = isVowel(string[index]);

    if (isCurrentVowel && isLastVowel) {
      distance = Math.min(distance, index - lastVowelIdx);
    }
    if (isCurrentVowel) {
      isLastVowel = isCurrentVowel;
      lastVowelIdx = index;
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

function testLeastDistance(string, expectedValue) {

  const valueWeGot = leastDistance(string);
  const checkIfWorks = valueWeGot === expectedValue ? '✅' : '❌';
  const message = composeMessage(string, expectedValue, valueWeGot);

  console.log(checkIfWorks, message);

}

function testAll() {
  testLeastDistance('hello', 3);
  testLeastDistance('shellfish', 4);

  testLeastDistance('heo', 1);
  testLeastDistance('beautiful', 1);
  testLeastDistance('aaaa', 1);

  testLeastDistance('strength', -1);
  testLeastDistance('bcd', -1);
  testLeastDistance('abyss', -1);
}

testAll();
