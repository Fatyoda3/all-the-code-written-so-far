function replace(text, match, replacement) {
  if (!match || !text) return text;
  
  let editedText = '';
  let delta = match.length;
  
  for (let current = 0; current < text.length; current += delta) {
    delta = match.length;
    
    if (!isSubString(text, current, match)) {
      editedText += text[current];
      delta = 1;
    } else {
      editedText += replacement;
    }
  }
  return editedText;
}

function isSubString(text, index, sub) {
  for (let current = 0; current < sub.length; current++)
    if (text[current + index] !== sub[current])
      return false;

  return true;

}

function testReplace(string, match, replacement, expectedValue) {
  const valueWeGot = replace(string, match, replacement);
  const isWorking = valueWeGot === expectedValue ? ' ✅' : ' ❌';
  const part1 = string + " | " + match;
  const part2 = expectedValue + " and we got " + valueWeGot;
  const message = part1 + isWorking + " value we expected " + part2;

  console.log(message);

}

function testAll() {

  testReplace('hello world', 'ld', 'LD', 'hello worLD');
  testReplace('hello world', 'wor', '', "hello ld");
  testReplace('hello world', 'ho', 'false', "hello world");
  testReplace('1', '1', '2', '2');
  testReplace('hello is bad', 'is bad', 'is good', 'hello is good');
  testReplace('red is blue', 'lue', 'lack', 'red is black');
  testReplace('red is blue', 'blue', 'red', 'red is red');
  testReplace('red_is_blue', 'blue', 'red', 'red_is_red');
  testReplace('red_is_blue', '_', ' ', 'red is blue');
  testReplace('red blue', ' ', '_', 'red_blue');
  testReplace('red blue', '', '', 'red blue');

}

testAll();