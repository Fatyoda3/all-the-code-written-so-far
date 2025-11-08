const isSpace = (char) => (['-', '\n', '\t'].includes(char));

function trim(text = '') {
  let front = 0;
  let rear = text.length - 1;
  let isFSpace = isSpace(text[front]);
  let isRSpace = isSpace(text[rear]);

  while (isFSpace || isRSpace) {

    isFSpace = isSpace(text[front]);
    isRSpace = isSpace(text[rear]);
    if (isFSpace) {
      front++;
    }
    if (isRSpace) {
      rear--;
    }

  }

  return text.slice(front, rear + 1);
}

function testRevString(input, expectedValue) {
  const valueWeGot = trim(input);
  const isWorking = valueWeGot === expectedValue ? ' ✅' : ' ❌';
  const inputs = '|' + input;
  const expectedPart = expectedValue + " and we got|" + valueWeGot + '|';
  const message = inputs + " value we expected " + expectedPart + isWorking;

  console.log(message);
}

function testAll() {
  testRevString('hello is\t', 'hello is');
  testRevString('-red\t is blue', 'red\t is blue');
  testRevString('----red is blue---', 'red is blue');
  testRevString('----', '');
  testRevString('-', '');
  testRevString('-he', 'he');
}

testAll();