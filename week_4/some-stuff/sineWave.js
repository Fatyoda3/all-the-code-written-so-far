const MAX = 10e7; // 10**8 ->times to almost 16ms
const SAFE_DELAY = 5;//delays by 16ms
const FAST_DELAY = 4;//delays by 14ms 
const SLOW_DELAY = 10;//delays by 33ms
const ULT_FAST_DELAY = 2;//delays by 8ms

let init = 0;

function delay(multiplier = 2) {
  for (let _ = 0; _ < MAX * multiplier; _++);
}
function colorize(text) {
  // const color = Math.floor(Math.random() * (231 - 1 + 1)) + 1;
  // const color = init;
  // init++;
  return `\x1B[38;5;${color % 231 + 75}m${text}\x1B[0m`;
}
function animateThis(sequence, delayValue) {
  console.log(colorize(sequence));
  delay(delayValue || ULT_FAST_DELAY);
  console.clear();
}
function isApprox(eqn, delta) {
  const lhs = eqn[0];
  const rhs = eqn[1];

  return Math.abs(lhs - rhs) < delta;
}
function sineWave(x, y, threshold = 5) {

  return isApprox([Math.sin(x) * threshold, y], 0.5);

}
function generateGraph(length) {
  const xLine = ' '.repeat(length);
  const plane = [];

  for (let index = 0; index < length; index++) {
    plane.push(xLine.split(''));
  }

  return plane;
}
function formatGraph(graph) {
  const formattedGraph = [];

  for (let index = 0; index < graph.length; index++) {
    formattedGraph.push(graph[index].join(' '));
  }

  return formattedGraph.join('\n');
}

function plot(length, eqn, char) {
  const graphSize = 37;
  const offSet = Math.floor(graphSize / 2);

  const plottedGraph = generateGraph(graphSize);

  for (let index = 0; index < plottedGraph.length ** 2; index++) {
    const x = index % graphSize;
    const y = (index - x) / graphSize;

    const dX = x - offSet;
    const dY = y - offSet;

    const plotPossible = eqn(dY, dX, length);
    plottedGraph[x][y] = plotPossible ? char || '*' : ' ';
  }

  return formatGraph(plottedGraph);
}

function animateSine(threshold) {
  // const buffer = [];
  for (let index = 0; index < 100; index++) {
    const sine = plot(index % threshold, sineWave, '.');
    // sine = sine.repeat(5);
    // buffer.push(sine);
    // animateThis(buffer.join('\n'), SAFE_DELAY);
    animateThis(sine, SAFE_DELAY);
  }

  return plot(threshold, sineWave, '*');
}

animateSine(10)