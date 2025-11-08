function decimalToBinary(decimalNum) {
  if (decimalNum <= 0)
    return decimalNum.toString('');

  const reverse = [];

  while (decimalNum > 0) {
    const remainder = decimalNum % 2;
    decimalNum = (decimalNum - remainder) / 2;
    reverse.push(remainder);
  }
  return reverse.join('');

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
  tester(fn, [12], '0011', 'basic tests');
  tester(fn, [8], '0001', 'basic tests');
  tester(fn, [4], '001', 'basic tests');
  tester(fn, [65], '1000001', 'basic tests');
  tester(fn, [21], '10101', 'basic tests');
}

testAll(decimalToBinary);