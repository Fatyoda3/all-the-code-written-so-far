function makeSubPattern(string, count) {
  let pattern = '';
  for (let term = 0; term < count; term++) {
    pattern += string;
  }

  return pattern;
}

function rightAlign(row) {
  let pattern = '';
  row = row + 1
  for (let index = row; index > 0; index--) {
    pattern += '\n' + makeSubPattern(' ', index - 1) + makeSubPattern('*', - index + row);
  }

  return pattern;
}

const t = rightAlign(6);
let charFound = false;
for (let index = 0; index < t.length; index++) {
  if (t[index] === '\n' && !charFound) {
    console.log('\\n found in the ');
    charFound = true;
  }
}
console.log(t.slice(t.indexOf('\n')));