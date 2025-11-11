const generateLine = (string, count) => {
  const pattern = [];

  for (let term = 0; term < count; term++) {
    pattern.push(string);
  }
  return pattern.join('');
};
const hollowRectangle = (rows, columns) => {

  if (rows === 1) {
    return generateLine('*', columns);
  } else if (columns === 1) {
    return generateLine('*\n', rows);
  }

  let pattern = '';

  const temp = generateLine('*', columns - 1);
  const trailPart = '*\n*';
  pattern += temp + trailPart;
  const hollowPart = generateLine(' ', columns - 2) + trailPart;
  pattern += generateLine(hollowPart, rows - 2) + temp;

  return pattern;
};
const filledRectangle = (rows, columns) => {
  return generateLine(generateLine('*', columns) + '\n', rows);
};
const alternatingRectangle = (rows, columns) => {
  let pattern = '';
  let bool = true;
  for (let index = 1; index <= rows; index++) {
    if (bool) {
      pattern += generateLine('*', columns);
      bool = false;
    }
    else {
      pattern += generateLine('-', columns);
      bool = true;
    }
    pattern += '\n';
  }
  return pattern;
};
const triangle = (row) => {
  let pattern = '';
  for (let index = 0; index < row; index++) {
    pattern += (generateLine('*', index + 1) + '\n');
  }
  return pattern;
};
const rightAlign = (row) => {
  let pattern = '';

  for (let index = 1; index <= row; index++) {
    pattern += generateLine(' ', row - index);
    pattern += generateLine('*', index) + "\n";
  }
  return pattern;
};
const spacedAlternatingRectangle = (rows, columns) => {
  let pattern = '';

  const starRows = generateLine('*', columns);
  const hyphenRows = generateLine('-', columns);
  const spaceRows = generateLine(' ', columns);

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

};
const diamond = (givenSize) => {
  let pattern = '';
  const size = givenSize - (!(givenSize % 2));

  const middleRow = size / 2;
  const uptoOrFrom = Math.floor(middleRow);

  for (let index = 0; index < uptoOrFrom; index++) {
    pattern += generateLine(' ', (middleRow - index - 1));
    pattern += generateLine('*', 2 * index + 1) + '\n';
  }
  pattern += (generateLine('*', size)) + '\n';

  for (let index = uptoOrFrom - 1; index >= 0; index--) {
    pattern += generateLine(' ', (middleRow - index - 1));
    pattern += generateLine('*', 2 * index + 1) + '\n';
  }

  return pattern;
};
const hollowDiamond = (givenSize) => {
  let pattern = '';
  const size = givenSize - (!(givenSize % 2));

  const middleRow = size / 2;
  const uptoOrFrom = Math.floor(middleRow);

  if (size < 2) {
    return '*';
  }

  let special = '';
  for (let index = 0; index < uptoOrFrom; index++) {
    pattern += generateLine(' ', (middleRow - index - 1));
    pattern += '*' + generateLine(' ', 2 * index - 1) + special + '\n';
    special = '*';
  }
  pattern += '*' + (generateLine(' ', size - 2)) + '*\n';
  for (let index = uptoOrFrom - 1; index >= 1; index--) {
    pattern += generateLine(' ', (middleRow - index - 1));
    pattern += '*' + generateLine(' ', 2 * index - 1) + '*\n';
  }
  pattern += (generateLine(' ', size / 2 - 1)) + '*\n';

  return pattern;
};

export const generatePattern = (style, dimensions) => {

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
};
