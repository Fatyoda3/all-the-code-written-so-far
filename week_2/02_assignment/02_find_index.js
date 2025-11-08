function findIndex(text, target) {
  for (let index = 0; index < text.length; index++) {
    if (text[current] === target) {
      return index;
    }
  }

  return -1;
}

function testFindIndex(text, target, expectedValue) {

  const valueWeGot = findIndex(text, target);
  const isWorking = valueWeGot === expectedValue ? '✅' : '❌';
  const expectationPart = expectedValue + " and we got " + valueWeGot;
  const message = isWorking + " value we expected " + expectationPart;

  console.log(message);
}

function testAll() {

  testFindIndex('hello world', 'o', 4);
  testFindIndex('repeating iiiiiiii', 'i', 6);

  testFindIndex('not found', 'z', -1);
  testFindIndex('hello world', '1', -1);

  testFindIndex('hello world', 'l', 2);
  testFindIndex('hello world', ' ', 5);

  testFindIndex('1', '1', 0);
  testFindIndex('1', '1', 0);
  testFindIndex('12', '2', 1);
  testFindIndex('2111', '1', 1);

  testFindIndex('hello is bad', 'i', 6);
  testFindIndex('red is blue', 'Z', -1);

}

testAll();