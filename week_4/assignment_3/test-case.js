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

testAllCases()