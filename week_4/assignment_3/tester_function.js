import { generatePattern } from "./patterns.js";

export const tester = (testCase) => {
  const { inputs } = testCase;
  const actual = generatePattern(...inputs);
  const isWorking = actual === testCase.expected;
  const symbol = isWorking ? "✅" : "❌";
  const message = [`\t${symbol} ${testCase.type}\n`];
  if (!isWorking) {
    message.push(
      `\t   |INP : ${(testCase)}\n`,
      `\t   |OUT : ${testCase.actual}\n`,
      `\t   |EXP : ${testCase.expected}\n`
    );
  }
  console.log(message.join(''));
};