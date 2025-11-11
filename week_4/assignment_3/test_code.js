import { generatePattern } from "./patterns.js";

const tester = (testCase) => {

  const { inputs } = testCase;

  const actual = generatePattern(...inputs);

  const isWorking = actual === testCase.expected;
  const symbol = isWorking ? "✅" : "❌";
  const message = [`\t${symbol} ${symbol}\n`];
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
  tester("0,0 nothing", [style, [0, 0]], "");
  tester("0,0 nothing", [style, [0, 1]], "");
  tester("0,0 nothing", [style, [1, 0]], "");
  tester("1,1 Single Star", [style, [1, 1]], "*");
  tester("2,2 (2,2) stars", [style, [2, 2]], "**\n**");
  tester("2,3 (3,2) starts in col row", [style, [2, 3]], "**\n**\n**");
  tester("3,3 3X3 without center start", [style, [3, 3]], "***\n* *\n***");
  tester("5,4 without center", [style, [5, 4]], "*****\n*   *\n*   *\n*****");

};
const testAllTestCasesAlternateRect = () => {
  console.log(underLine("✹ Alternating Rectangle Pattern"));
  const style = "alternating-rectangle";
  tester("0,0 nothing", [style, [0, 0]], "");
  tester("0,0 nothing", [style, [0, 1]], "");
  tester("0,0 nothing", [style, [1, 0]], "");
  tester("1,1 Single Star", [style, [1, 1]], "*");
  tester("2,2 (2,2) stars, dash Line", [style, [2, 1]], "**");
  tester("1,2 1 start, 1 dash", [style, [1, 2]], "*\n-");
  tester("2,2 2start, 2dash", [style, [2, 2]], "**\n--");
  tester("1,5 * - * - *", [style, [1, 5]], "*\n-\n*\n-\n*");
  tester("2,3 2 starts then 2 - then 2 *", [style, [2, 3]], "**\n--\n**");
  tester("3,3 2 starts then 2 - then 2 *", [style, [3, 3]], "***\n---\n***");
  tester("5,4 without center start", [style, [3, 4]], "***\n---\n***\n---");
};

const testAllTestCasesSpaceAlternateRect = () => {
  console.log(underLine("✹ Spaced Alternating Rectangle Pattern"));
  const style = "spaced-alternating-rectangle";
  tester("0,0 nothing", [style, [0, 0]], "");
  tester("0,0 nothing", [style, [0, 1]], "");
  tester("0,0 nothing", [style, [1, 0]], "");
  tester("1,1 Single Star", [style, [1, 1]], "*");
  tester("2,2 (2,2) stars, dash Line", [style, [2, 1]], "**");
  tester("1,2 1 start, 1 dash", [style, [1, 2]], "*\n-");
  tester("2,2 2start, 2dash", [style, [2, 2]], "**\n--");
  tester("2,3 2start, 2dash, 2 space", [style, [2, 3]], "**\n--\n  ");
  tester("1,5 * -   *", [style, [1, 5]], "*\n-\n \n*\n-");
};
const testAllTestCasesTriangle = () => {
  console.log(underLine("✹ Triangle"));
  const style = "triangle";
  tester("0 nothing", [style, [0]], "");
  tester("1 single *", [style, [1]], "*");
  tester("2 ", [style, [2]], "*\n**");
  tester("3", [style, [3]], "*\n**\n***");
  tester("4", [style, [4]], "*\n**\n***\n****");
  tester("5", [style, [5]], "*\n**\n***\n****\n*****");
};
const testAllTestCasesRightAlignTriangle = () => {
  console.log(underLine("✹ Right-Aligned Triangle"));
  const style = "right-aligned-triangle";
  tester("0 nothing", [style, [0]], "");
  tester("1 ", [style, [1]], "*");
  tester("2", [style, [2]], " *\n**");
  tester("3", [style, [3]], "  *\n **\n***");
  tester("4", [style, [4]], "   *\n  **\n ***\n****");
  tester("5", [style, [5]], "    *\n   **\n  ***\n ****\n*****");
};
const testAllTestCasesDiamond = () => {
  console.log(underLine("✹ diamond"));
  const style = "diamond";
  tester("0 nothing", [style, [0]], "");
  tester("1 ", [style, [1]], "*");
  tester("2", [style, [2]], "*");
  tester("3", [style, [3]], " *\n***\n *");
  tester("4", [style, [4]], " *\n***\n *");
  tester("5", [style, [5]], "  *\n ***\n*****\n ***\n  *");
  tester("6", [style, [6]], "  *\n ***\n*****\n ***\n  *");
};
const testAllTestCasesHollowDiamond = () => {
  console.log(underLine("✹ Hollow diamond"));
  const style = "hollow-diamond";
  tester("0 nothing", [style, [0]], "");
  tester("1 ", [style, [1]], "*");
  tester("2", [style, [2]], "*");
  tester("3", [style, [3]], " *\n* *\n *");
  tester("4", [style, [4]], " *\n* *\n *");
  tester("5", [style, [5]], "  *\n * *\n*   *\n * *\n  *");
  tester("6", [style, [6]], "  *\n * *\n*   *\n * *\n  *");
};
const testAllCases = () => {
  testFilledCases();
  // testAllTestCasesHollow();
  // testAllTestCasesAlternateRect();
  // testAllTestCasesSpaceAlternateRect();
  // testAllTestCasesTriangle();
  // testAllTestCasesRightAlignTriangle();
  // testAllTestCasesDiamond();
  // testAllTestCasesHollowDiamond();
};

testAllCases();