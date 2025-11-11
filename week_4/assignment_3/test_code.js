import { generatePattern } from "./patterns.js";

const tester = (testCase) => {

  const { inputs } = testCase;

  const actual = generatePattern(...inputs);

  const isWorking = actual === testCase.expected;
  const symbol = isWorking ? "✅" : "❌";
  const message = [`\t${symbol} ${testCase.type}\n`];
  if (!isWorking) {
    message.push(
      `\t   |INP : ${JSON.stringify(testCase)}\n`,
      `\t   |OUT : ${testCase.actual}\n`,
      `\t   |EXP : ${testCase.expected}\n`
    );
  }
  console.log(message.join(''));
};

const underLine = (text) => {
  const underScores = "\n\t" + "_".repeat(text.length) + "\n";
  return "\t" + text + underScores + "\n";
};

const testFilledCases = () => {
  console.log(underLine("filled-rectangle"));

  const testCases = [
    { type: "0,0 nothing", inputs: ["filled-rectangle", [0, 0]], expected: "" },
    { type: "0,1 nothing", inputs: ["filled-rectangle", [0, 4]], expected: "" },
    { type: "1,0 nothing", inputs: ["filled-rectangle", [5, 0]], expected: "" },
    { type: "1,1 single star", inputs: ["filled-rectangle", [1, 1]], expected: "*" },
    { type: "2,1 single Row", inputs: ["filled-rectangle", [2, 1]], expected: "**" },
    { type: "2,2 double rows/col", inputs: ["filled-rectangle", [2, 2]], expected: "**\n**" },
  ];

  testCases.forEach(tester);
};

const testAllTestCasesHollow = () => {
  console.log(underLine("hollow-rectangle"));
  const style = "hollow-rectangle";

  const testCases = [
    { type: "0,0 nothing", inputs: [style, [0, 0]], expected: "" },
    { type: "0,1 nothing", inputs: [style, [0, 1]], expected: "" },
    { type: "1,0 nothing", inputs: [style, [1, 0]], expected: "" },
    { type: "1,1 Single Star", inputs: [style, [1, 1]], expected: "*" },
    { type: "2,2 (2,2) stars", inputs: [style, [2, 2]], expected: "**\n**" },
    { type: "2,3 (3,2) stars in col row", inputs: [style, [2, 3]], expected: "**\n**\n**" },
    { type: "3,3 3x3 without center star", inputs: [style, [3, 3]], expected: "***\n* *\n***" },
    { type: "5,4 without center", inputs: [style, [5, 4]], expected: "*****\n*   *\n*   *\n*****" },
  ];

  testCases.forEach(tester);
};
const testAllTestCasesAlternateRect = () => {
  const ALTERNATING_RECTANGLE = "alternating-rectangle";
  console.log(underLine("✹ Alternating Rectangle Pattern"));

  const testCases = [
    { type: "0,0 nothing", inputs: [ALTERNATING_RECTANGLE, [0, 0]], expected: "" },
    { type: "0,1 nothing", inputs: [ALTERNATING_RECTANGLE, [0, 1]], expected: "" },
    { type: "1,0 nothing", inputs: [ALTERNATING_RECTANGLE, [1, 0]], expected: "" },
    { type: "1,1 Single Star", inputs: [ALTERNATING_RECTANGLE, [1, 1]], expected: "*" },
    { type: "2,1 (2,1) stars, dash Line", inputs: [ALTERNATING_RECTANGLE, [2, 1]], expected: "**" },
    { type: "1,2 1 start, 1 dash", inputs: [ALTERNATING_RECTANGLE, [1, 2]], expected: "*\n-" },
    { type: "2,2 2start, 2dash", inputs: [ALTERNATING_RECTANGLE, [2, 2]], expected: "**\n--" },
    { type: "1,5 * - * - *", inputs: [ALTERNATING_RECTANGLE, [1, 5]], expected: "*\n-\n*\n-\n*" },
    { type: "2,3 2 starts then 2 - then 2 *", inputs: [ALTERNATING_RECTANGLE, [2, 3]], expected: "**\n--\n**" },
    { type: "3,3 3 starts, then 3 -, then 3 *", inputs: [ALTERNATING_RECTANGLE, [3, 3]], expected: "***\n---\n***" },
    { type: "3,4 3 starts, then 3 -, repeat", inputs: [ALTERNATING_RECTANGLE, [3, 4]], expected: "***\n---\n***\n---" },
  ];

  testCases.forEach(tester);
};


const testAllTestCasesSpaceAlternateRect = () => {
  const SPACED_ALTERNATING_RECTANGLE = "spaced-alternating-rectangle";
  console.log(underLine("✹ Spaced Alternating Rectangle Pattern"));

  const testCases = [
    { type: "0,0 nothing", inputs: [SPACED_ALTERNATING_RECTANGLE, [0, 0]], expected: "" },
    { type: "0,1 nothing", inputs: [SPACED_ALTERNATING_RECTANGLE, [0, 1]], expected: "" },
    { type: "1,0 nothing", inputs: [SPACED_ALTERNATING_RECTANGLE, [1, 0]], expected: "" },
    { type: "1,1 Single Star", inputs: [SPACED_ALTERNATING_RECTANGLE, [1, 1]], expected: "*" },
    { type: "2,1 (2,1) stars", inputs: [SPACED_ALTERNATING_RECTANGLE, [2, 1]], expected: "**" },
    { type: "1,2 * then -", inputs: [SPACED_ALTERNATING_RECTANGLE, [1, 2]], expected: "*\n-" },
    { type: "2,2 ** then --", inputs: [SPACED_ALTERNATING_RECTANGLE, [2, 2]], expected: "**\n--" },
    { type: "2,3 ** then -- then spaces", inputs: [SPACED_ALTERNATING_RECTANGLE, [2, 3]], expected: "**\n--\n  " },
    { type: "1,5 * -   *", inputs: [SPACED_ALTERNATING_RECTANGLE, [1, 5]], expected: "*\n-\n \n*\n-" },
  ];

  testCases.forEach(tester);
};


const testAllTestCasesTriangle = () => {
  const TRIANGLE = "triangle";
  console.log(underLine("✹ Triangle"));

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
  const RIGHT_ALIGNED_TRIANGLE = "right-aligned-triangle";
  console.log(underLine("✹ Right-Aligned Triangle"));

  const testCases = [
    { type: "0 nothing", inputs: [RIGHT_ALIGNED_TRIANGLE, [0]], expected: "" },
    { type: "1", inputs: [RIGHT_ALIGNED_TRIANGLE, [1]], expected: "*" },
    { type: "2", inputs: [RIGHT_ALIGNED_TRIANGLE, [2]], expected: " *\n**" },
    { type: "3", inputs: [RIGHT_ALIGNED_TRIANGLE, [3]], expected: "  *\n **\n***" },
    { type: "4", inputs: [RIGHT_ALIGNED_TRIANGLE, [4]], expected: "   *\n  **\n ***\n****" },
    { type: "5", inputs: [RIGHT_ALIGNED_TRIANGLE, [5]], expected: "    *\n   **\n  ***\n ****\n*****" },
  ];

  testCases.forEach(tester);
};


const testAllTestCasesDiamond = () => {
  const DIAMOND = "diamond";
  console.log(underLine("✹ Diamond"));

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
  const HOLLOW_DIAMOND = "hollow-diamond";
  console.log(underLine("✹ Hollow Diamond"));

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