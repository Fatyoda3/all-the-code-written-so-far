function diamond(givenSize) {
  let pattern = '';
  let size = givenSize - (!(givenSize % 2));

  for (let index = 0; index < Math.floor(size / 2); index++) {
    pattern += makeSubPattern('-', (size - index - index % size));
    pattern += makeSubPattern('*', index) + (makeSubPattern('*', index + 1)) + '\n';
  }
  pattern += (makeSubPattern('*', size)) + '\n';

  for (let index = Math.floor(size / 2) - 1; index >= 0; index--) {
    console.log(index);
    pattern += makeSubPattern('-', (size - index - index % size));
    pattern += makeSubPattern('*', index) + (makeSubPattern('*', index + 1)) + '\n';
  }
  console.log(pattern);

  return pattern;
}