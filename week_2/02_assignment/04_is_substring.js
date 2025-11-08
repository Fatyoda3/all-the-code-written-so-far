function isSubstring(string, subString) {
  if (!subString || !string) {
    return false;
  }

  for (let current = 0; current < string.length; current++) {
    if (match(string, current, subString)) {
      return true;
    }
  }

  return false;
}

function match(string, index, subString) {
  for (let current = 0; current < subString.length; current++) {
    if (string[current + index] !== subString[current]) {
      return false;
    }
  }
  return true;
}

function testIsSubstring(string, substring, expectedValue) {

  const valueWeGot = isSubstring(string, substring);
  const isWorking = valueWeGot === expectedValue ? ' ✅' : ' ❌';
  const part1 = string + " | " + substring;
  const part2 = expectedValue + " and we got " + valueWeGot;
  const message = part1 + isWorking + " value we expected " + part2;

  console.log(message);
}

function testAll() {

  testIsSubstring('hello world', 'ld', true);
  testIsSubstring('hello world', 'wor', true);
  testIsSubstring('hello world', 'ho', false);

  testIsSubstring('1', '1', true);
  testIsSubstring('12', '1', true);
  testIsSubstring('12', '12', true);
  testIsSubstring('2111', '111', true);

  testIsSubstring('hello is bad', 'is ead', false);
  testIsSubstring('red is blue', 'lue', true);
  testIsSubstring('red is blue', '', false);
  testIsSubstring("helllolo", "lo ", false);
}

testAll();