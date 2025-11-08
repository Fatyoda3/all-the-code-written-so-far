const isVowel = (letter) => 'aeEiouAIOU'.includes(letter);

function countVowels(sentence) {
  let count = 0;

  for (let index = 0; index < sentence.length; index++) {
    if (isVowel(sentence[index])) {
      count += 1;
    }
  }

  return count;
}

function testCountVowels(string, expectedValue) {
  const valueWeGot = countVowels(string);
  const isWorking = valueWeGot === expectedValue ? ' ✅' : ' ❌';
  const input = '|' + string;
  const expectationPart = expectedValue + " and we got " + valueWeGot;
  const message = input + isWorking + " value we expected " + expectationPart;

  console.log(message);
}

function testAll() {
  testCountVowels('hello world', 3);
  testCountVowels('hEllo wOrld', 3);
  testCountVowels('red is blue ', 4);
  testCountVowels('ccc', 0);
  testCountVowels('', 0);
  testCountVowels('AEIoU', 5);
}

testAll();