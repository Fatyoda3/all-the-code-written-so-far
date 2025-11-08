const MAX = 10e7; // 10**8 ->times to almost 16ms
const SAFE_DELAY = 5;//delays by 16ms
const FAST_DELAY = 4;//delays by 14ms
const SLOW_DELAY = 10;//delays by 30ms
const ULT_FAST_DELAY = 2;//delays by 10ms
let init = 0;

function colorize(text) {
  const color = Math.floor(Math.random() * (231 - 1 + 1)) + 1;
  // const color = init;
  // init++;
  return `\x1B[38;5;${color % 231}m${text}\x1B[0m`;
}

function delay(delayFactor = 1) {
  for (let _ = 0; _ < MAX * delayFactor; _++);
}

function animateThis(sequence) {
  console.log(colorize(sequence));
  delay(SLOW_DELAY);
  console.clear();
}
function randomizeDrops(value) {
  const rand = Math.floor(Math.random() * 3 * value + 1);
  return '| \\ '.repeat(rand);
}
// function makeItRain(threshold) {
//   const rains = [];
//   for (let index = 0; index < threshold; index++) {
//     const rainRow = (randomizeDrops(1) + randomizeDrops(3)) +
//       (randomizeDrops(1) + randomizeDrops(3));
//     rains.push(rainRow);
//     animateThis(rains.join('\n'));
//   }
//   return rains.join('');
// }
// console.log(colorize(makeItRain(100)));
// function cursor(val) {

//   for (let index = 0; index < val; index++) {

//     animateThis('\\');
//     animateThis('/');
//   }
//   return '\\';
// }

// console.log(colorize(cursor(100)));
// function fallDown(val) {
//   const rows = [];
//   const ball = 'OO';
//   for (let index = 2; index < val; index++) {
//     rows.unshift(' '.repeat(val - index));
//     rows.push(ball + ' '.repeat(index - 2));
//     animateThis(rows.join('\n'));
//   }
//   while (rows.length > 1) {
//     rows.shift();
//   }
//   for (let index = 2; index < val; index++) {

//     rows.unshift(' '.repeat(val - index));
//     rows.push(`${ball}`.repeat((index - 2) % 5) + ball);
//     animateThis(rows.join('\n'));
//     while (rows[rows.length - 1][0] === ' ') {
//       rows.shift();
//     }
//   }
//   return rows.join('\n');
// }

// console.log(colorize(fallDown(40)));