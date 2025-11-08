const toBinary = (number) => {
  let convert = number;
  let binaryRep = 0;
  let unitShift = 1;

  while (convert > 0) {
    const remainder = convert % 2;
    binaryRep += remainder * unitShift;
    convert = (convert - remainder) / 2;
    unitShift *= 10;
  }

  return binaryRep;
}
const digitCounter = (number) => {
  if (number === 0) {
    return 1;
  }

  let count = 0;
  let digits = number;

  while (digits > 0) {
    digits = Math.floor(digits / 10);
    count += 1;
  }

  return count;
}
const countSubOccurrences = (number, sub) => {
  let binary = toBinary(number);
  const compareWindow = Math.pow(10, digitCounter(sub));
  let occurred = 0;

  while (binary > 0) {
    const compare = binary % compareWindow;
    if (compare === sub) {
      occurred += 1;
    }
    binary = Math.floor(binary / 10);

  }
  return occurred;
}

const color = (text, code) => `\x1B[38;5;${code}m${text}\x1B[0m`;
const bold = (text) => `\x1B[1m${text}\x1B[0m`;
const fmtMsg = (input, output, expected, purpose) => {
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
const test = (fn, input, expected, intent = "") => {
  const result = fn(...input);
  const message = fmtMsg(input, result, expected, intent);
  console.log(message);
}
const toBinaryTest = (fn) => {
  test(fn, [2], 10, 'single digit');
  test(fn, [0], 0, '0 test');
  test(fn, [10], 1010, '10 test');
}
const digitCountTest = (fn) => {
  test(fn, [2], 1, 'single digit');
  test(fn, [0], 1, '0 test');
  test(fn, [10], 2, '2 digits');
  test(fn, [4 * 1e5], 6, '6 digits');
}
const substringCounterTest = (fn) => {
  test(fn, [65, 10], 1, 'occ(1)');
  test(fn, [21, 101], 2, 'occ(2)+overlap');
  test(fn, [31, 11], 4, 'occ(4)+overlap');
  test(fn, [21, 101], 2, 'occ(2)+overlap');

}
const endLine = () => console.log('--------------END-------------');
const testAll = () => {
  toBinaryTest(toBinary);
  endLine();
  digitCountTest(digitCounter);
  endLine();
  substringCounterTest(countSubOccurrences);
  endLine();
}

testAll();