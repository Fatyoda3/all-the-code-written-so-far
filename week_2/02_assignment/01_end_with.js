/* function isSameChar(string, substring, index, start) {
  return string[index] === substring[index - start];
} */
function endsWith(string, substring) {

  const start = string.length - substring.length;
  
  if (start < 0) return false;

  for (let index = start; index < string.length; index++) {
    if (string[index] !== substring[index - start]) {
      return false;
    }
  }
  return true;
}

/* 
function endsWith(string, substring) {
  if (substring.length > string.length) {
    return false;
  }

  let strIndex = string.length - 1;
  const end = substring.length - 1;

  for (let index = end; index >= 0; index--) {
    if (string[strIndex + index - end] !== substring[index]) {
      //index - end is like strIndex -=1
      return false;
    }
  }
  return true;
} */

function testEndsWith(string, substring, expectedValue) {
  const valueWeGot = endsWith(string, substring);
  const isWorking = valueWeGot === expectedValue ? ' ✅' : ' ❌';
  const inputs = '|' + string + '|' + substring;
  const expectationPart = expectedValue + " and we got " + valueWeGot;
  const message = inputs + isWorking + " value we expected " + expectationPart;

  console.log(message);
}

function testAll() {

  testEndsWith('hello world', 'ld', true);
  testEndsWith('hello world', 'wor', false);
  testEndsWith('hello world', 'hello', false);

  testEndsWith('1', '1', true);
  testEndsWith('1', '12', false);
  testEndsWith('12', '12', true);
  testEndsWith('2111', '111', true);

  testEndsWith('hello is bad', 'is bad', true);
  testEndsWith('hello is bad', 'hello gustavo is bad', false);
  testEndsWith('red is blue', 'lue', true);
  testEndsWith('red is blue ', ' ', true);

}

testAll();