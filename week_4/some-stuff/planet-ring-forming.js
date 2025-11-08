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
  return `\x1B[38;5;${color % 231}m${text}\x1B[0m`;
}

function delay(multiplier = 2) {
  for (let _ = 0; _ < MAX * multiplier; _++);
}

function animateThis(sequence) {
  console.log(colorize(sequence));
  delay(ULT_FAST_DELAY);
  console.clear();
}

function generatePattern() {
  let pattern = [];
  for (let index = 1; index < 100; index++) {

    pattern.unshift(' '.repeat(50) + '' + ' '.repeat(50));
    pattern.push(' '.repeat(50) + '|' + ' '.repeat(50));
    animateThis(pattern.join('\n'));
  }
  pattern = [];

  for (let index = 1; index < 1000; index++) {

    pattern.unshift(' '.repeat(index % 200) + '' + ' '.repeat(50));
    pattern.push(' '.repeat(index % 200) + '-' + ' '.repeat(50));
    animateThis(pattern.join(''));
  }
  return pattern.join('');
}


console.log(generatePattern());