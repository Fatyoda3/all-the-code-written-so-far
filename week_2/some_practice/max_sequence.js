function maxSequence(string) {
  if (string === '') {
    return '0';
  }

  let currentCount = 1;
  let frequency = 0;

  let lastLetter = '';
  let hfLetter = '';

  for (let index = 0; index < string.length; index++) {
    if (lastLetter !== string[index]) {

      if (frequency < currentCount) {
        frequency = currentCount;
        hfLetter = lastLetter;

        currentCount = 1;

      }
      lastLetter = string[index];

    }
    else {
      currentCount = currentCount + 1;
    }
  }

  if (frequency < currentCount) {
    frequency = currentCount;
    currentCount = 1;
  }

  return frequency + (hfLetter ? hfLetter : lastLetter);
}

function composeMessage(equalCheck, expectedValue, valueWeGot) {
  const isWorking = equalCheck ? '✅' : '❌';
  const working = isWorking + " value we expected ";
  const comparison = expectedValue + " and we got " + valueWeGot;

  return working + comparison;
}

function testMaxSequence(string, expectedValue) {

  const valueWeGot = maxSequence(string);
  const equalCheck = valueWeGot === expectedValue;

  const message = composeMessage(equalCheck, expectedValue, valueWeGot);

  console.log(message);
}

function testAll() {

  testMaxSequence('', '0');
  testMaxSequence('a', '1a');
  testMaxSequence('aaa', '3a');

  testMaxSequence('aaaa', '4a');
  testMaxSequence('aaaa', '4a');
  testMaxSequence('aabb', '2a');

  testMaxSequence('abba', '2b');
  testMaxSequence('abba---abba', '3-');
  testMaxSequence('abcde', '1e');

}

testAll();