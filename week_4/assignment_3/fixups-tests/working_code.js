function makeSubPattern(string, count) {
  let pattern = '';
  for (let term = 0; term < count; term++) {
    pattern += string;
  }

  return pattern;
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

  for (let index = 1; index <= rows; index++) {
    pattern += index % 2 === 0 ? makeSubPattern('-', columns) :
      makeSubPattern('*', columns);
    pattern += '\n';
  }
  return pattern;
}

function spacedAlternatingRectangle(rows, columns) {
  let pattern = '';

  const starRows = makeSubPattern('*', columns);
  const hyphenRows = makeSubPattern('-', columns);
  const spaceRows = makeSubPattern(' ', columns);

  const t = [starRows, hyphenRows, spaceRows];
  let counter = 0;

  for (let index = 0; index < rows; index += 1) {
    if (counter === 2) {
      counter = 0;
    }
    pattern += t[counter] + '\n';
    counter++;

  }
  return pattern;

}

function generatePattern(style, dimensions) {
  const columns = dimensions[0];
  const rows = dimensions[1];

  if (rows === 0 || columns === 0) {
    return '';
  }

  let pattern = '';

  if (style === "hollow-rectangle") {
    pattern = hollowRectangle(rows, columns);
  }

  else if (style === "filled-rectangle") {
    pattern = filledRectangle(rows, columns);
  }
  else if (style === "alternating-rectangle") {
    pattern = alternatingRectangle(rows, columns);
  }
  else if (style === "spaced-alternating-rectangle") {
    pattern = spacedAlternatingRectangle(rows, columns);
  }

  const isLastNewLine = pattern[pattern.length - 1] === '\n';

  return pattern.slice(0, isLastNewLine ? pattern.length - 1 : pattern.length);
}

function formatText(inputs, actualOutput, expectedOutput) {
  return `
   Inputs  : ${inputs}
   Actual  : \n${actualOutput}
   Expected: \n${expectedOutput}
   ----`;
}
function testCode(description, style, dimensions, expectedOutput) {
  const actualOutput = generatePattern(style, dimensions);
  const isEqual = actualOutput === expectedOutput;
  const symbol = isEqual ? "✅" : "❌";

  const headline = `${symbol} ${description}`;
  console.log(headline);

  if (!isEqual) {
    const input = `[${style} ${dimensions}]`;
    const details = formatText(input, actualOutput, expectedOutput);
    console.log(details);
  }
};
function main() {
  console.log('\n filled-rectangle\n');
  testCode("row = 3 col=5", "filled-rectangle", [5, 3], '*****\n*****\n*****');
  testCode("row = 2 col=4", "filled-rectangle", [2, 4], '**\n**\n**\n**');
  testCode("row = 0 col=7", "filled-rectangle", [7, 0], '');
  testCode("row = 5 col=0", "filled-rectangle", [0, 5], '');
  console.log('\nhollow-rectangle\n');
  testCode("row = 3 col=4", "hollow-rectangle", [4, 3], `****\n*  *\n****`);
  testCode("row = 3 col=5", "hollow-rectangle", [5, 3], `*****\n*   *\n*****`);
  testCode("row = 1 col=4", "hollow-rectangle", [4, 1], `****`);
  testCode("row = 5 col=1", "hollow-rectangle", [1, 5], `*\n*\n*\n*\n*`);
  const sar = "spaced-alternating-rectangle";
  const ar = 'alternating-rectangle';
  console.log('\nalternating-rectangle\n');
  testCode("row = 3col=3", ar, [3, 3], '***\n---\n***');

  console.log();
}

main();

function k() {
  function makeSubPattern(string, count) {
    let pattern = '';
    for (let term = 0; term < count; term++) {
      pattern += string;
    }

    return pattern;
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

  function generatePattern(style, dimensions) {

    const columns = dimensions[0];
    const rows = dimensions[1];

    if (rows === 0 || columns === 0) {
      return '';
    }

    let pattern = '';

    if (style === "triangle") {
      pattern = triangle(columns);
    }

    else if (style === "hollow-rectangle") {
      pattern = hollowRectangle(rows, columns);
    }

    else if (style === "filled-rectangle") {
      pattern = filledRectangle(rows, columns);
    }
    else if (style === "alternating-rectangle") {
      pattern = alternatingRectangle(rows, columns);
    }
    else if (style === "spaced-alternating-rectangle") {
      pattern = spacedAlternatingRectangle(rows, columns);
    }

    const isLastNewLine = pattern[pattern.length - 1] === '\n';

    return pattern.slice(0, isLastNewLine ? pattern.length - 1 : pattern.length);
  }

  function formatText(inputs, actualOutput, expectedOutput) {
    return `
   Inputs  : ${inputs}
   Actual  : \n${actualOutput}
   Expected: \n${expectedOutput}
   ----`;
  }
  function testCode(description, style, dimensions, expectedOutput) {
    const actualOutput = generatePattern(style, dimensions);
    const isEqual = actualOutput === expectedOutput;
    const symbol = isEqual ? "✅" : "❌";

    const headline = `${symbol} ${description}`;
    console.log(headline);

    if (!isEqual) {
      const input = `[${style} ${dimensions}]`;
      const details = formatText(input, actualOutput, expectedOutput);
      console.log(details);
    }
  }
  function main() {
    const SAR = "spaced-alternating-rectangle";

    testCode("6X5", SAR, [5, 6], '*****\n-----\n     \n*****\n-----\n     ');
    testCode("2X2", 'alternating-rectangle', [3, 3], '***\n---\n***');

    console.log();
  }

  main();
}