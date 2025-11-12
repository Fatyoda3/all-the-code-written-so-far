import {
  FILL_RECT,
  HOLLOW_RECT,
  ALT_RECT,
  SPACE_ALTER_RECT,
  TRIANGLE,
  RT_TRIANGLE,
  DIAMOND,
  HOLLOW_DIAMOND
} from './constants.js';

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
  }
  if (columns === 1) {
    return generateLine('*\n', rows);
  }

  const pattern = [];

  const temp = generateLine('*', columns - 1);
  const trailPart = '*\n*';
  const hollowPart = generateLine(' ', columns - 2) + trailPart;
  pattern.push(temp + trailPart,
    generateLine(hollowPart, rows - 2) + temp);

  return pattern.join('');
};
const filledRectangle = (rows, columns) => {
  return generateLine(generateLine('*', columns) + '\n', rows);
};
const alternatingRectangle = (rows, columns) => {
  const pattern = [];
  let bool = true;

  for (let index = 1; index <= rows; index++) {
    if (bool) {
      pattern.push(generateLine('*', columns));
      bool = false;
    }
    else {
      pattern.push(generateLine('-', columns));
      bool = true;
    }
    pattern.push('\n');
  }
  return pattern.join('');
};
const triangle = (row) => {
  const pattern = [];
  for (let index = 0; index < row; index++) {
    pattern.push((generateLine('*', index + 1)));
  }
  return pattern.join('\n');
};
const rightAlign = (row) => {
  const pattern = [];

  for (let index = 1; index <= row; index++) {
    pattern.push(generateLine(' ', row - index));
    pattern.push(generateLine('*', index) + '\n');
  }
  return pattern.join('');
};
const spacedAlternatingRectangle = (rows, columns) => {
  const pattern = [];

  const starRows = generateLine('*', columns);
  const hyphenRows = generateLine('-', columns);
  const spaceRows = generateLine(' ', columns);

  const patterns = [starRows, hyphenRows, spaceRows];
  let counter = 0;

  for (let index = 0; index < rows; index += 1) {
    let delta = 1;
    pattern.push(patterns[counter] + '\n');

    if (counter === 2) {
      counter = 0;
      delta = 0;
    }

    counter += delta;

  }
  return pattern.join('');

};
const diamond = (givenSize) => {
  const pattern = [];
  const size = givenSize % 2 === 0 ? givenSize - 1 : givenSize;

  const middleRow = size / 2;
  const uptoOrFrom = Math.floor(middleRow);

  for (let index = 0; index < uptoOrFrom; index++) {
    pattern.push(generateLine(' ', (middleRow - index - 1)));
    pattern.push(generateLine('*', 2 * index + 1) + '\n');
  }
  pattern.push((generateLine('*', size)) + '\n');
  for (let index = uptoOrFrom - 1; index >= 0; index--) {
    pattern.push(generateLine(' ', (middleRow - index - 1)));
    pattern.push(generateLine('*', 2 * index + 1) + '\n');
  }

  return pattern.join('');
};
const hollowDiamond = (givenSize) => {
  const pattern = [];
  const size = givenSize % 2 === 0 ? givenSize - 1 : givenSize;

  const middleRow = size / 2;
  const uptoOrFrom = Math.floor(middleRow);

  if (size < 2) {
    return '*';
  }

  let special = '';

  for (let index = 0; index < uptoOrFrom; index++) {
    pattern.push(generateLine(' ', (middleRow - index - 1)));
    pattern.push('*' + generateLine(' ', 2 * index - 1) + special + '\n');
    special = '*';
  }
  pattern.push('*' + (generateLine(' ', size - 2)) + '*\n');
  for (let index = uptoOrFrom - 1; index >= 1; index--) {
    pattern.push(generateLine(' ', (middleRow - index - 1)));
    pattern.push('*' + generateLine(' ', 2 * index - 1) + '*\n');
  }

  pattern.push((generateLine(' ', size / 2 - 1)) + '*\n');

  return pattern.join('');
};

export const generatePattern = (style, dimensions) => {
  const columns = dimensions[0];
  const rows = dimensions[1];

  if (rows === 0 || columns === 0) {
    return '';
  }

  let pattern = '';

  if (style === TRIANGLE) {
    pattern = triangle(columns);
  } else if (style === HOLLOW_DIAMOND) {
    pattern = hollowDiamond(columns);
  } else if (style === DIAMOND) {
    pattern = diamond(columns);
  } else if (style === RT_TRIANGLE) {
    pattern = rightAlign(columns);
  } else if (style === HOLLOW_RECT) {
    pattern = hollowRectangle(rows, columns);
  } else if (style === FILL_RECT) {
    pattern = filledRectangle(rows, columns);
  } else if (style === ALT_RECT) {
    pattern = alternatingRectangle(rows, columns);
  } else if (style === SPACE_ALTER_RECT) {
    pattern = spacedAlternatingRectangle(rows, columns);
  }
  const len = pattern.length;
  const isLastNewLine = pattern[len - 1] === '\n';

  return pattern.slice(0, isLastNewLine ? len - 1 : len);
};
