const apSum = (firstTerm, difference, totalTerms) => {
  let sum = 0;
  let sumOfD = 0;

  for (let term = 0; term < totalTerms; term++) {
    sum += firstTerm + sumOfD;
    sumOfD += difference;
  }

  return sum;
}

const color = (text, code) => `\x1B[38;5;${code}m${text}\x1B[0m`;
const bold = text => `\x1B[1m${text}\x1B[0m`;
const fmtMsg = (input, output, expected, purpose = '') => {
  const PrintError = output !== expected;
  const symbol = PrintError ? "❌ " : "✅ ";
  const message = [symbol, bold(purpose.toUpperCase())];

  if (PrintError) {
    const inpFrag = `INP -> ${color(input, 222)}`;
    const expFrag = `EXP -> ${color(expected, 45)}`;
    const outFrag = `OUT -> ${color(output, 196)}`;
    message.push(`\n${inpFrag} \n${expFrag} \n${outFrag}\n`);
  }

  return color(message.join(""), 155);
}
const tester = (fnToTest, input, expected, intent) => {
  const result = fnToTest(...input);
  const message = fmtMsg(input, result, expected, intent);
  console.log(message);
}
const testAll = (fn) => {
  tester(fn, [1, 1, 10], 55, 'first 10 natural sum');
  tester(fn, [1, 1, 100], 5050, '100 natural sum');
  tester(fn, [4, 1, 10], 85, 'a=4, n=10');
}

testAll(apSum);