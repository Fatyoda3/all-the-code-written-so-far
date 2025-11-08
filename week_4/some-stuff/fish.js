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
  return `\x1B[38;5;${/* color+ */75 % 231}m${text}\x1B[0m`;
  // return text
}

function delay(delayFactor = 1) {
  for (let _ = 0; _ < MAX * delayFactor; _++);
}

function animateThis(sequence) {
  console.log(colorize(sequence));
  delay(FAST_DELAY);
  console.clear();
}

function swimFish() {

  const fish = '>-->==>--)>';
  let oceanView = '';
  for (let windex = 0; windex < 100; windex++) {
    const t = ' '.repeat(Math.abs(windex - fish.length)) + fish;

    oceanView = ' '.repeat(Math.floor(Math.random() * 10)) + t +
      '\n' + ' '.repeat(Math.floor(Math.random() * 10)) + t
      + '\n' + ' '.repeat(Math.floor(Math.random() * 10)) + t;

    animateThis(oceanView);

  }

  return oceanView;
}
// bet which fish wins 
// console.log(swimFish());


function swimFish2(count = 3) {

  const fish = '>-->==>--)>';
  let oceanView = '';
  for (let index = 0; index < 100; index++) {
    const t = ' '.repeat(Math.abs(index - fish.length)) + fish;

    const locSt = [];

    let max = 0;
    for (let index = 0; index < count; index++) {
      const p = Math.floor(Math.random() * 10)
      oceanView += ' '.repeat(p) + t + "\n"
      locSt.push(p)
      max = p > max ? index : max;
    }

    for (index = 0; index < locSt; index++) {
      oceanView += ` fish no - ${index + 1} : ${locSt[0]} --> ${index === max ? "Wining" : ""}\n`
    }

    animateThis(oceanView);

  }

  return oceanView;
}


function swimFish3(count = 10) {

  const fish = '>-->==>--)>';
  let oceanView = '';
  for (let outer = 0; outer < 100; outer++) {
    const t = ' '.repeat(Math.abs(outer - fish.length)) + fish;

    const fishes = []
    let max = -1;
    let maxIndex = -1;
    for (let index = 0; index < count; index++) {
      const length = Math.floor(Math.random() * 10);
      fishes.push(length)

      max = max > length ? max : length;
      maxIndex = max > length ? maxIndex : index;

    }
    oceanView = "\n\n\n\n\n\n\n\n\n\n\n";
    for (let index = 0; index < count; index++) {
      oceanView += "\n\n" + ' '.repeat(fishes[index]) + t;
    }
    oceanView += '\n\n\n\n\n\n\n\n';

    for (let index = 0; index < count; index++) {
      oceanView += ` fish no - ${index + 1} :${fishes[index]} --> ${index === maxIndex ? "Winning" : ""}\n`
    }


    animateThis(oceanView);

  }

  return oceanView;
}

console.log(swimFish3());