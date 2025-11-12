import { tester } from "./tester_function.js";
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
const underLine = (text) => {
  const underScores = "\n\t" + "_".repeat(text.length) + "\n";
  return "\t" + text + underScores + "\n";
};

const testFilledCases = () => {
  console.log(underLine(FILL_RECT));
  const testCases = [
    {
      type: "0,0 nothing",
      inputs: [FILL_RECT, [0, 0]],
      expected: ""
    },
    {
      type: "0,1 nothing",
      inputs: [FILL_RECT, [0, 4]],
      expected: ""
    },
    {
      type: "1,0 nothing",
      inputs: [FILL_RECT, [5, 0]],
      expected: ""
    },
    {
      type: "1,1 single star",
      inputs: [FILL_RECT, [1, 1]],
      expected: "*"
    },
    {
      type: "2,1 single Row",
      inputs: [FILL_RECT, [2, 1]],
      expected: "**"
    },
    {
      type: "2,2 double rows/col",
      inputs: [FILL_RECT, [2, 2]],
      expected: "**\n**"
    },
  ];

  testCases.forEach(tester);
};
const testAllTestCasesHollow = () => {
  console.log(underLine(HOLLOW_RECT));

  const testCases = [
    {
      type: "0,0 nothing",
      inputs: [HOLLOW_RECT, [0, 0]],
      expected: ""
    },
    {
      type: "0,1 nothing",
      inputs: [HOLLOW_RECT, [0, 1]],
      expected: ""
    },
    {
      type: "1,0 nothing",
      inputs: [HOLLOW_RECT, [1, 0]],
      expected: ""
    },
    {
      type: "1,1 Single Star",
      inputs: [HOLLOW_RECT, [1, 1]],
      expected: "*"
    },
    {
      type: "2,2 (2,2) stars",
      inputs: [HOLLOW_RECT, [2, 2]],
      expected: "**\n**"
    },
    {
      type: "2,3 (3,2) stars in col row",
      inputs: [HOLLOW_RECT, [2, 3]],
      expected: "**\n**\n**"
    },
    {
      type: "3,3 3x3 without center star",
      inputs: [HOLLOW_RECT, [3, 3]],
      expected: "***\n* *\n***"
    },
    {
      type: "5,4 without center",
      inputs: [HOLLOW_RECT, [5, 4]],
      expected: "*****\n*   *\n*   *\n*****"
    },
  ];

  testCases.forEach(tester);
};
const testAllTestCasesAlternateRect = () => {
  console.log(underLine(ALT_RECT));

  const testCases = [
    {
      type: "0,0 nothing",
      inputs: [ALT_RECT, [0, 0]],
      expected: ""
    },
    {
      type: "0,1 nothing",
      inputs: [ALT_RECT, [0, 1]],
      expected: ""
    },
    {
      type: "1,0 nothing",
      inputs: [ALT_RECT, [1, 0]],
      expected: ""
    },
    {
      type: "1,1 Single Star",
      inputs: [ALT_RECT, [1, 1]],
      expected: "*"
    },
    {
      type: "2,1 (2,1) stars, dash Line",
      inputs: [ALT_RECT, [2, 1]],
      expected: "**"
    },
    {
      type: "1,2 1 start, 1 dash",
      inputs: [ALT_RECT, [1, 2]],
      expected: "*\n-"
    },
    {
      type: "2,2 2start, 2dash",
      inputs: [ALT_RECT, [2, 2]],
      expected: "**\n--"
    },
    {
      type: "1,5 * - * - *",
      inputs: [ALT_RECT, [1, 5]],
      expected: "*\n-\n*\n-\n*"
    },
    {
      type: "2,3 2 starts then 2 - then 2 *",
      inputs: [ALT_RECT, [2, 3]],
      expected: "**\n--\n**"
    },
    {
      type: "3,3 3 starts, then 3 -, then 3 *",
      inputs: [ALT_RECT, [3, 3]],
      expected: "***\n---\n***"
    },
    {
      type: "3,4 3 starts, then 3 -, repeat",
      inputs: [ALT_RECT, [3, 4]],
      expected: "***\n---\n***\n---"
    },
  ];

  testCases.forEach(tester);
};
const testAllTestCasesSpaceAlternateRect = () => {
  console.log(underLine(SPACE_ALTER_RECT));

  const testCases = [
    { type: "0,0 nothing", inputs: [SPACE_ALTER_RECT, [0, 0]], expected: "" },
    { type: "0,1 nothing", inputs: [SPACE_ALTER_RECT, [0, 1]], expected: "" },
    { type: "1,0 nothing", inputs: [SPACE_ALTER_RECT, [1, 0]], expected: "" },
    { type: "1,1 Single Star", inputs: [SPACE_ALTER_RECT, [1, 1]], expected: "*" },
    { type: "2,1 (2,1) stars", inputs: [SPACE_ALTER_RECT, [2, 1]], expected: "**" },
    { type: "1,2 * then -", inputs: [SPACE_ALTER_RECT, [1, 2]], expected: "*\n-" },
    { type: "2,2 ** then --", inputs: [SPACE_ALTER_RECT, [2, 2]], expected: "**\n--" },
    { type: "2,3 ** then -- then spaces", inputs: [SPACE_ALTER_RECT, [2, 3]], expected: "**\n--\n  " },
    { type: "1,5 * -   *", inputs: [SPACE_ALTER_RECT, [1, 5]], expected: "*\n-\n \n*\n-" },
  ];

  testCases.forEach(tester);
};
const testAllTestCasesTriangle = () => {
  console.log(underLine(TRIANGLE));

  const testCases = [
    { type: "0 nothing", inputs: [TRIANGLE, [0]], expected: "" },
    { type: "1 single *", inputs: [TRIANGLE, [1]], expected: "*" },
    { type: "2 small triangle", inputs: [TRIANGLE, [2]], expected: "*\n**" },
    { type: "3", inputs: [TRIANGLE, [3]], expected: "*\n**\n***" },
    { type: "4", inputs: [TRIANGLE, [4]], expected: "*\n**\n***\n****" },
    { type: "5", inputs: [TRIANGLE, [5]], expected: "*\n**\n***\n****\n*****" },
  ];

  testCases.forEach(tester);
};
const testAllTestCasesRightAlignTriangle = () => {
  console.log(underLine(RT_TRIANGLE));

  const testCases = [
    { type: "0 nothing", inputs: [RT_TRIANGLE, [0]], expected: "" },
    { type: "1", inputs: [RT_TRIANGLE, [1]], expected: "*" },
    { type: "2", inputs: [RT_TRIANGLE, [2]], expected: " *\n**" },
    { type: "3", inputs: [RT_TRIANGLE, [3]], expected: "  *\n **\n***" },
    { type: "4", inputs: [RT_TRIANGLE, [4]], expected: "   *\n  **\n ***\n****" },
    { type: "5", inputs: [RT_TRIANGLE, [5]], expected: "    *\n   **\n  ***\n ****\n*****" },
  ];

  testCases.forEach(tester);
};
const testAllTestCasesDiamond = () => {
  console.log(underLine(DIAMOND));

  const testCases = [
    { type: "0 nothing", inputs: [DIAMOND, [0]], expected: "" },
    { type: "1", inputs: [DIAMOND, [1]], expected: "*" },
    { type: "2", inputs: [DIAMOND, [2]], expected: "*" },
    { type: "3", inputs: [DIAMOND, [3]], expected: " *\n***\n *" },
    { type: "4", inputs: [DIAMOND, [4]], expected: " *\n***\n *" },
    { type: "5", inputs: [DIAMOND, [5]], expected: "  *\n ***\n*****\n ***\n  *" },
    { type: "6", inputs: [DIAMOND, [6]], expected: "  *\n ***\n*****\n ***\n  *" },
  ];

  testCases.forEach(tester);
};
const testAllTestCasesHollowDiamond = () => {
  console.log(underLine(HOLLOW_DIAMOND));

  const testCases = [
    { type: "0 nothing", inputs: [HOLLOW_DIAMOND, [0]], expected: "" },
    { type: "1", inputs: [HOLLOW_DIAMOND, [1]], expected: "*" },
    { type: "2", inputs: [HOLLOW_DIAMOND, [2]], expected: "*" },
    { type: "3", inputs: [HOLLOW_DIAMOND, [3]], expected: " *\n* *\n *" },
    { type: "4", inputs: [HOLLOW_DIAMOND, [4]], expected: " *\n* *\n *" },
    { type: "5", inputs: [HOLLOW_DIAMOND, [5]], expected: "  *\n * *\n*   *\n * *\n  *" },
    { type: "6", inputs: [HOLLOW_DIAMOND, [6]], expected: "  *\n * *\n*   *\n * *\n  *" },
  ];

  testCases.forEach(tester);
};

const testAllCases = () => {
  testFilledCases();
  testAllTestCasesHollow();
  testAllTestCasesAlternateRect();
  testAllTestCasesSpaceAlternateRect();
  testAllTestCasesTriangle();
  testAllTestCasesRightAlignTriangle();
  testAllTestCasesDiamond();
  testAllTestCasesHollowDiamond();
};

testAllCases();