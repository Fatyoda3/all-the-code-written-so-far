function maxSequence(string) {
  if (string === '') {
    return '0';
  }

  let count = 1;
  let frequency = 0;

  let currentLetter = '';
  let lastLetter = '';

  for (let index = 0; index < string.length; index++) {
    let delta = 1;

    if (currentLetter !== string[index]) {

      if (frequency < count) {
        frequency = count;
        lastLetter = currentLetter;

        count = 1;
      }

      currentLetter = string[index];
      delta = 0;
    }

    count += delta;
  }

  const frag = (lastLetter !== '') ? lastLetter : currentLetter;

  return Math.max(frequency, count) + frag;
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