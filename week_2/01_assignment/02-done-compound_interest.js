const PRINCIPAL = 100;
const TIME = 2;
const RATE = 10;

const percentOf = (amount, rate) => amount * (rate / 100);

const compoundFor = (principal, time, rate) => {
  let total = principal;

  for (let term = 0; term < time; term++) {
    total += percentOf(total, rate);
  }//reducer pattern detected;

  return (total - principal);
}

const color = (text, code) => `\x1B[38;5;${code}m${text}\x1B[0m`;
const bold = text => `\x1B[1m${text}\x1B[0m`;
const isApprox = delta => - 0.1 < delta && delta < 0.1;

const fmtMsg = (input, output, expected, purpose = '') => {
  const PrintError = !isApprox(output - expected);
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
  tester(fn, [PRINCIPAL, TIME, RATE], 21, 'basic');
  tester(fn, [100, 3, 10], 33.0, 'precision err');
  tester(fn, [PRINCIPAL, 4, 10], 46.41, 'no precision err');
}
testAll(compoundFor);