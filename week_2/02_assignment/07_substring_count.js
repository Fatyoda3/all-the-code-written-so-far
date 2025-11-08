function occurrences(string, substring) {
  if (!string || !substring) return 0;

  let occurrence = 0;
  let current = 0;

  while (current < string.length - substring.length + 1) {

    if (isSubString(string, current, substring))
      occurrence = occurrence + 1;

    current += 1;
  }
  return occurrence;
}

function isSubString(text, index, substring) {
  for (let iterIndex = 0; iterIndex < substring.length; iterIndex++) {
    if (text[iterIndex + index] !== substring[iterIndex])
      return false;
  }
  return true;
}

function testOccurrencesCount(string, substring, expectedValue) {

  const valueWeGot = occurrences(string, substring);
  const isWorking = valueWeGot === expectedValue ? '✅' : '❌';

  const part1 = isWorking + " value we expected ";
  const part2 = expectedValue + " and we got " + valueWeGot;

  const message = part1 + part2;
  console.log(message);
}

function testAll() {

  testOccurrencesCount('hello world', 'ld', 1);
  testOccurrencesCount('hello world', 'wor', 1);
  testOccurrencesCount('hello world', 'hello', 1);
  testOccurrencesCount('hello world', 'hello ', 1);
  testOccurrencesCount('1', '1', 1);
  testOccurrencesCount('1', '12', 0);
  testOccurrencesCount('12', '1 2', 0);
  testOccurrencesCount('2111', '11', 2);

}

testAll();