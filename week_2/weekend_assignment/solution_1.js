function isVowel(letter) {
  switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
  }
  return false;
}

function isAlternate(current, last) {
  return isVowel(current) !== isVowel(last);
}

function unusedLettersGen() {

}
function splitByVowel(string) {

  let remaining = string;
  let alteredText = '';

  while (remaining !== '') {

    let unusedLetters = '';
    let alteringWord = remaining[0];

    for (let current = 1; current < remaining.length; current++) {
      const currentLetter = remaining[current];
      const alteringLetter = alteringWord[alteringWord.length - 1];
      if (isAlternate(currentLetter, alteringLetter)) {
        alteringWord += currentLetter;
      } else {
        unusedLetters += currentLetter;
      }
    }

    alteredText += alteringWord + ',';
    remaining = unusedLetters;
  }

  return alteredText;

}

function composeMessage(string, expectedValue, valueWeGot) {
  const input = " input- " + string;
  const expected = " expected- " + expectedValue;
  const output = " output- " + valueWeGot;

  return input + expected + '|' + output;
}

function testSplitByVowel(string, expectedValue) {

  const valueWeGot = splitByVowel(string, 0);
  const checkIfWorks = valueWeGot === expectedValue ? '✅' : '❌';
  const message = composeMessage(string, expectedValue, valueWeGot);

  console.log(checkIfWorks, message);

}

function testAll() {

  console.log('working test cases !');
  testSplitByVowel("aaabbb", "ab,ab,ab,");
  testSplitByVowel('tools', 'tol,os,');
  testSplitByVowel('poetry', 'pot,er,y,');

  testSplitByVowel('aaaeee', 'a,a,a,e,e,e,');
  testSplitByVowel("hello", "helo,l,");
  testSplitByVowel("abyss", "ab,y,s,s,");
  testSplitByVowel("this", "tis,h,");

  testSplitByVowel("cat", "cat,");
  testSplitByVowel("boat", "bot,a,");
  testSplitByVowel("applee", "ape,pe,l,");
  testSplitByVowel("rhythm", "r,h,y,t,h,m,");
}

testAll();