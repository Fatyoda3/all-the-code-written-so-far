function makeSubPattern(string, count) {
  const pattern = [];
  for (let term = 0; term < count; term++) {
    pattern.push(string);
  }
  return pattern.join('');
}
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
function testCase(type, input, input2, expected) {
  const actual = generatePattern(input, input2);
  const isPass = actual === expected;
  const icon = isPass ? "✅" : "❌";
  let message = `\t${icon} ${type}\n`;

  message += isPass ? "" : `\t   | Input    : \"${input}\",\"${input2}\" \n`;
  message += isPass ? "" : `\t   | Actual   : \n${actual}\n`;
  message += isPass ? "" : `\t   | Expected : \n${expected}\n`;

  console.log(message);
}

function underLine(description) {
  const printingDescription = "\n\t" + description;
  const underScores = "\n\t" + "_".repeat(description.length) + "\n";
  return printingDescription + underScores + "\n";
}

function testAllTestCases() {
  console.log(underLine("✹ filled-rectangle"));

  testCase("0,0 nothing", "filled-rectangle", [0, 0], "");
  testCase("0,1 nothing", "filled-rectangle", [0, 4], "");
  testCase("1,0 nothing", "filled-rectangle", [5, 0], "");
  testCase("1,1 single star", "filled-rectangle", [1, 1], "*");
  testCase("2,1 single Row", "filled-rectangle", [2, 1], "**");
  testCase("2,2 double rows/col", "filled-rectangle", [2, 2], "**\n**");
}

function testAllTestCasesHollow() {
  console.log(underLine("✹ hollow-rectangle"));
  const style = "hollow-rectangle";
  testCase("0,0 nothing", style, [0, 0], "");
  testCase("0,0 nothing", style, [0, 1], "");
  testCase("0,0 nothing", style, [1, 0], "");
  testCase("1,1 Single Star", style, [1, 1], "*");
  testCase("2,2 (2,2) stars", style, [2, 2], "**\n**");
  testCase("2,3 (3,2) starts in col row", style, [2, 3], "**\n**\n**");
  testCase("3,3 3X3 without center start", style, [3, 3], "***\n* *\n***");
  testCase("5,4 without center", style, [5, 4], "*****\n*   *\n*   *\n*****");

}
function testAllTestCasesAlternateRect() {
  console.log(underLine("✹ Alternating Rectangle Pattern"));
  const style = "alternating-rectangle";
  testCase("0,0 nothing", style, [0, 0], "");
  testCase("0,0 nothing", style, [0, 1], "");
  testCase("0,0 nothing", style, [1, 0], "");
  testCase("1,1 Single Star", style, [1, 1], "*");
  testCase("2,2 (2,2) stars, dash Line", style, [2, 1], "**");
  testCase("1,2 1 start, 1 dash", style, [1, 2], "*\n-");
  testCase("2,2 2start, 2dash", style, [2, 2], "**\n--");
  testCase("1,5 * - * - *", style, [1, 5], "*\n-\n*\n-\n*");
  testCase("2,3 2 starts then 2 - then 2 *", style, [2, 3], "**\n--\n**");
  testCase("3,3 2 starts then 2 - then 2 *", style, [3, 3], "***\n---\n***");
  testCase("5,4 without center start", style, [3, 4], "***\n---\n***\n---");
}
function testAllTestCasesSpaceAlternateRect() {
  console.log(underLine("✹ Spaced Alternating Rectangle Pattern"));
  const style = "spaced-alternating-rectangle";
  testCase("0,0 nothing", style, [0, 0], "");
  testCase("0,0 nothing", style, [0, 1], "");
  testCase("0,0 nothing", style, [1, 0], "");
  testCase("1,1 Single Star", style, [1, 1], "*");
  testCase("2,2 (2,2) stars, dash Line", style, [2, 1], "**");
  testCase("1,2 1 start, 1 dash", style, [1, 2], "*\n-");
  testCase("2,2 2start, 2dash", style, [2, 2], "**\n--");
  testCase("2,3 2start, 2dash, 2 space", style, [2, 3], "**\n--\n  ");
  testCase("1,5 * -   *", style, [1, 5], "*\n-\n \n*\n-");
}
function testAllTestCasesTriangle() {
  console.log(underLine("✹ Triangle"));
  const style = "triangle";
  testCase("0 nothing", style, [0], "");
  testCase("1 single *", style, [1], "*");
  testCase("2 ", style, [2], "*\n**");
  testCase("3", style, [3], "*\n**\n***");
  testCase("4", style, [4], "*\n**\n***\n****");
  testCase("5", style, [5], "*\n**\n***\n****\n*****");
}
function testAllTestCasesRightAlignTriangle() {
  console.log(underLine("✹ Right-Aligned Triangle"));
  const style = "right-aligned-triangle";
  testCase("0 nothing", style, [0], "");
  testCase("1 ", style, [1], "*");
  testCase("2", style, [2], " *\n**");
  testCase("3", style, [3], "  *\n **\n***");
  testCase("4", style, [4], "   *\n  **\n ***\n****");
  testCase("5", style, [5], "    *\n   **\n  ***\n ****\n*****");
}

function testAllTestCasesDiamond() {
  console.log(underLine("✹ diamond"));
  const style = "diamond";
  testCase("0 nothing", style, [0], "");
  testCase("1 ", style, [1], "*");
  testCase("2", style, [2], "*");
  testCase("3", style, [3], " *\n***\n *");
  testCase("4", style, [4], " *\n***\n *");
  testCase("5", style, [5], "  *\n ***\n*****\n ***\n  *");
  testCase("6", style, [6], "  *\n ***\n*****\n ***\n  *");
}

function testAllTestCasesHollowDiamond() {
  console.log(underLine("✹ Hollow diamond"));
  const style = "hollow-diamond";
  testCase("0 nothing", style, [0], "");
  testCase("1 ", style, [1], "*");
  testCase("2", style, [2], "*");
  testCase("3", style, [3], " *\n* *\n *");
  testCase("4", style, [4], " *\n* *\n *");
  testCase("5", style, [5], "  *\n * *\n*   *\n * *\n  *");
  testCase("6", style, [6], "  *\n * *\n*   *\n * *\n  *");
}

function testAllCases() {
  testAllTestCases();
  testAllTestCasesHollow();
  testAllTestCasesAlternateRect();
  testAllTestCasesSpaceAlternateRect();
  testAllTestCasesTriangle();
  testAllTestCasesRightAlignTriangle();
  testAllTestCasesDiamond();
  testAllTestCasesHollowDiamond();
}

testAllCases();