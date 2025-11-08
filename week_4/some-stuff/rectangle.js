const MAX = 10e7; // 10**8 ->times to almost 16ms
const SAFE_DELAY = 5;//delays by 16ms
const FAST_DELAY = 4;//delays by 14ms
const SLOW_DELAY = 10;//delays by 30ms
const ULT_FAST_DELAY = 2;//delays by 10ms
let init = 0;

function colorize(text) {
  // const color = Math.floor(Math.random() * (231 - 1 + 1)) + 1;
  const color = init;
  init++;
  return `\x1B[38;5;${color % 231}"m"${text}\x1B[0m`;
}

function delay(multiplier = 2) {
  for (let _ = 0; _ < MAX * multiplier; _++);
}

function animateThis(sequence) {
  console.log(colorize(sequence));
  delay(ULT_FAST_DELAY);
  console.clear();
}

function genLine(row, cols) {
  // return ' '.repeat(Math.abs(row - cols)) +
  //   '*'.repeat(Math.abs(row / 2 - cols * 2));
  return ' '.repeat(Math.abs(row - cols) % 100 + 2) +
    '*'.repeat(Math.abs(row / 2 - cols * 2) % 100 + 1);
}
function colCount(columns) {
  return Math.floor(Math.random() * columns % 2 + 2);
}
function rectangleAnimated(rows, columns) {
  const cols = colCount(columns ** 2 - rows);
  console.clear();

  const pattern = [];

  for (let row = 0; row < rows; row++) {

    const line = genLine(row, cols);
    pattern.push(line + line + line);

    animateThis(pattern.join('\n'));
    if (pattern.length > 80) {
      while (pattern.length) {
        pattern.pop();
      }
    }
  }
  return (pattern.join('\n'));
}

console.log(colorize(rectangleAnimated(500, 5)));
