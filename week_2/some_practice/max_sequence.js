function maxSequence(string) {
  if (string === '') {
    return '0';
  }

  let count = 0;
  let frequency = 0;

  let lastLetter = string[0];

  for (let index = 0; index < string.length; index++) {
    let delta = 1;

    const isSame = lastLetter === string[index];

    if (isSame) {
      count += 1;
    }
    if (frequency < count && !isSame) {
      frequency = count;
      count = 0;

    }

    lastLetter = string[index];
  }

  const frag = (lastLetter !== '') ? lastLetter : FrequentChar;

  return Math.max(frequency) + frag;
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
  console.log('INP', string);
  console.log(message);
}

function testAll() {

  // testMaxSequence('', '0');
  // testMaxSequence('a', '1a');
  // testMaxSequence('aaa', '3a');

  // testMaxSequence('aaaa', '4a');
  testMaxSequence('aabb', '2a');

  testMaxSequence('abba', '2b');
  testMaxSequence('hello', '2b');
  testMaxSequence('abba---abba', '3-');
  testMaxSequence('abcde', '1e');

}

testAll();