function isVowel(letter) {
  const vowels = 'aeEiouAIOU';

  for (let index = 0; index < vowels.length; index++) {
    if (vowels[index] === letter) {
      return true;
    }
  }
  return false;
}

function countVowels(sentence) {
  let count = 0;

  for (let index = 0; index < sentence.length; index++) {
    const isLetterVowel = isVowel(sentence[index]);
    count = isLetterVowel ? count + 1 : count;
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