function printEvenSeries(start, end) {
  let actualStart = start % 2 ? start + 1 : start;
  let actualEnd = end;// bug is if end is like 1 then the code will fail all together

  if (start > end) {
    actualStart = end;
    actualEnd = start;
  }

  const evenNumbers = [];

  for (let term = actualStart; term <= actualEnd; term += 2) {
    evenNumbers.push(term);
  }
  return evenNumbers.join(' ');
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
  // tester(fn, [1, 10], '2 4 6 8 10 ');
  // tester(fn, [1, 10], '2 4 6 8 10 ');
  // tester(fn, [3, 10], '4 6 8 10 ');
  // tester(fn, [-4, -12], '-12 -10 -8 -6 -4 ');
  // tester(fn, [-4, -2], '-4 -2 ');
  tester(fn, [10, 3], '4 6 8 10');//failed 

}

testAll(printEvenSeries);

