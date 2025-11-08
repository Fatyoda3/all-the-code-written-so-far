function makeSubPattern(string, count) {
  let pattern = '';
  for (let term = 0; term < count; term++) {
    pattern += string;
  }
  return pattern;
}
function diamond(givenSize) {
  let pattern = '';
  let size = givenSize - (!(givenSize % 2));

  for (let index = 0; index < Math.floor(size / 2); index++) {
    pattern += makeSubPattern('-', (size / 2 - index - 1));
    pattern += makeSubPattern('*', index) + (makeSubPattern('*', index + 1)) + '\n';
  }
  pattern += (makeSubPattern('*', size)) + '\n';

  for (let index = Math.floor(size / 2) - 1; index >= 0; index--) {
    console.log(index);
    pattern += makeSubPattern('-', (size / 2 - index - 1));
    pattern += makeSubPattern('*', index) + (makeSubPattern('*', index + 1)) + '\n';
  }

}

diamond(3, '-*\n***\n-*');
// diamond(4, '-*\n***\n-*');
// diamond(1, '*');
diamond(5, '--*\n-***\n*****\n-***\n--*');
diamond(7, '---*\n--***\n-*****\n*******\n-*****\n--***\n---*');
console.log();