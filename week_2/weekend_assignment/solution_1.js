const isVowel = letter => 'aeiou'.includes(letter);
const isAlternate = (current, last) => isVowel(current) !== isVowel(last);

function splitByVowel(string) {
  let remaining = string;

  const splitted = [];

  while (remaining !== '') {
    const unused = [];

    const altering = [remaining[0]];
    const len = remaining.length;

    for (let index = 1; index < len; index++) {
      const current = remaining[index];
      const last = altering[altering.length - 1];

      isAlternate(current, last) ? altering.push(current) : unused.push(current);
    }

    splitted.push(altering.join(''));
    remaining = unused.join('');
  }

  return splitted.join(',');
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
  testSplitByVowel("aaabbb", "ab,ab,ab");
  testSplitByVowel('tools', 'tol,os');
  testSplitByVowel('poetry', 'pot,er,y');

  testSplitByVowel('aaaeee', 'a,a,a,e,e,e');
  testSplitByVowel("hello", "helo,l");
  testSplitByVowel("abyss", "ab,y,s,s");
  testSplitByVowel("this", "tis,h");

  testSplitByVowel("cat", "cat");
  testSplitByVowel("boat", "bot,a");
  testSplitByVowel("applee", "ape,pe,l");
  testSplitByVowel("rhythm", "r,h,y,t,h,m");
}

testAll();