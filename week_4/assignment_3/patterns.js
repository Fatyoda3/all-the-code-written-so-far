const makeSubPattern = (string, count) => {
  const pattern = [];
  for (let term = 0; term < count; term++) {
    pattern.push(string);
  }
  return pattern.join('');
};

function hollowRectangle(rows, columns) {

  if (rows === 1) {
    return makeSubPattern('*', columns);
  } else if (columns === 1) {
    return makeSubPattern('*\n', rows);
  }

  let pattern = '';

  const temp = makeSubPattern('*', columns - 1);
  const trailPart = '*\n*';
  pattern += temp + trailPart;
  const hollowPart = makeSubPattern(' ', columns - 2) + trailPart;
  pattern += makeSubPattern(hollowPart, rows - 2) + temp;

  return pattern;
}
function filledRectangle(rows, columns) {
  return makeSubPattern(makeSubPattern('*', columns) + '\n', rows);
}
function alternatingRectangle(rows, columns) {
  let pattern = '';
  let bool = true;
  for (let index = 1; index <= rows; index++) {
    if (bool) {
      pattern += makeSubPattern('*', columns);
      bool = false;
    }
    else {
      pattern += makeSubPattern('-', columns);
      bool = true;
    }
    pattern += '\n';
  }
  return pattern;
}
function triangle(row) {
  let pattern = '';
  for (let index = 0; index < row; index++) {
    pattern += (makeSubPattern('*', index + 1) + '\n');
  }
  return pattern;
}
function rightAlign(row) {
  let pattern = '';

  for (let index = 1; index <= row; index++) {
    pattern += makeSubPattern(' ', row - index);
    pattern += makeSubPattern('*', index) + "\n";
  }
  return pattern;
}
function spacedAlternatingRectangle(rows, columns) {
  let pattern = '';

  const starRows = makeSubPattern('*', columns);
  const hyphenRows = makeSubPattern('-', columns);
  const spaceRows = makeSubPattern(' ', columns);

  const patterns = [starRows, hyphenRows, spaceRows];
  let counter = 0;

  for (let index = 0; index < rows; index += 1) {
    pattern += patterns[counter] + '\n';

    if (counter === 2) {
      counter = 0;
    }
    else {
      counter++;
    }

  }
  return pattern;

}
function diamond(givenSize) {
  let pattern = '';
  const size = givenSize - (!(givenSize % 2));

  const middleRow = size / 2;
  const uptoOrFrom = Math.floor(middleRow);

  for (let index = 0; index < uptoOrFrom; index++) {
    pattern += makeSubPattern(' ', (middleRow - index - 1));
    pattern += makeSubPattern('*', 2 * index + 1) + '\n';
  }
  pattern += (makeSubPattern('*', size)) + '\n';

  for (let index = uptoOrFrom - 1; index >= 0; index--) {
    pattern += makeSubPattern(' ', (middleRow - index - 1));
    pattern += makeSubPattern('*', 2 * index + 1) + '\n';
  }

  return pattern;
}
function hollowDiamond(givenSize) {
  let pattern = '';
  const size = givenSize - (!(givenSize % 2));

  const middleRow = size / 2;
  const uptoOrFrom = Math.floor(middleRow);

  if (size < 2) {
    return '*';
  }

  let special = '';
  for (let index = 0; index < uptoOrFrom; index++) {
    pattern += makeSubPattern(' ', (middleRow - index - 1));
    pattern += '*' + makeSubPattern(' ', 2 * index - 1) + special + '\n';
    special = '*';
  }
  pattern += '*' + (makeSubPattern(' ', size - 2)) + '*\n';
  for (let index = uptoOrFrom - 1; index >= 1; index--) {
    pattern += makeSubPattern(' ', (middleRow - index - 1));
    pattern += '*' + makeSubPattern(' ', 2 * index - 1) + '*\n';
  }
  pattern += (makeSubPattern(' ', size / 2 - 1)) + '*\n';

  return pattern;
}
function generatePattern(style, dimensions) {

  const columns = dimensions[0];
  const rows = dimensions[1];

  if (rows === 0 || columns === 0) {
    return '';
  }

  let pattern = '';

  if (style === "triangle") {
    pattern = triangle(columns);
  } else if (style === "hollow-diamond") {
    pattern = hollowDiamond(columns);
  } else if (style === "diamond") {
    pattern = diamond(columns);
  } else if (style === 'right-aligned-triangle') {
    pattern = rightAlign(columns);
  } else if (style === "hollow-rectangle") {
    pattern = hollowRectangle(rows, columns);
  } else if (style === "filled-rectangle") {
    pattern = filledRectangle(rows, columns);
  } else if (style === "alternating-rectangle") {
    pattern = alternatingRectangle(rows, columns);
  } else if (style === "spaced-alternating-rectangle") {
    pattern = spacedAlternatingRectangle(rows, columns);
  }
  const len = pattern.length;
  const isLastNewLine = pattern[len - 1] === '\n';

  return pattern.slice(0, isLastNewLine ? len - 1 : len);
}
