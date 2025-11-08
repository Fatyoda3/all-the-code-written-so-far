const MAX = 10e7; // 10**8 ->times to almost 16ms
const SAFE_DELAY = 5;//delays by 16ms
const FAST_DELAY = 4;//delays by 14ms 
const SLOW_DELAY = 10;//delays by 33ms
const ULT_FAST_DELAY = 2;//delays by 8ms

function delay(multiplier = 2) {
  for (let _ = 0; _ < MAX * multiplier; _++);
}

function colorize(text) {
  // const color = Math.floor(Math.random() * (231 - 1 + 1)) + 1;
  const color = 122;
  return `\x1B[38;5;${color % 231 + 75}m${text}\x1B[0m`;
}

function animateThis(sequence, delayValue) {
  console.log(colorize(sequence));
  delay(delayValue || ULT_FAST_DELAY);
  console.clear();
}
function animateText(message, totalDelay) {
  const buffer = [];
  console.clear();

  delay(1);

  for (let index = 0; index < message.length; index++) {
    buffer.push(' '.repeat(Math.abs(index)) + colorize(message[index]));
    animateThis(buffer.join('(;\\\n'), totalDelay);
    animateThis(buffer.join('(:/\n'), totalDelay);
  }
  return buffer.join('\n');
}
const message = Deno.args[0] || "Enter something will ya ";

console.log(animateText(message, FAST_DELAY));

