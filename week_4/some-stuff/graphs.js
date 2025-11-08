//--------------------------------------------setup CODE----------------------------------//
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
  // return `\x1B[38;5;${color % 231}m${text}\x1B[0m`;
  return text
}
function delay(delayFactor = 1) {
  for (let _ = 0; _ < MAX * delayFactor; _++);
}
function animateThis(sequence) {
  console.log(colorize(sequence));
  delay(FAST_DELAY);
  console.clear();
}
//--------------------------------------------END of setup CODE---------------------------//
//equations brilliance is here

function circleEqn(x, y, r) {
  return isApprox([(x ** 2) + (y ** 2), r ** 2], 5);
}
function filledCircleEqn(x, y, r) {
  return /* isApprox */((x ** 2) + (y ** 2) <= r ** 2);
}
function OOBCircleEqn(x, y, r) {
  return /* isApprox */((x ** 2) + (y ** 2) >= r ** 2);
}
function parabolaShaded(x, y) {
  return x ** 2 <= y;
}
function parabola(x, y) {
  return x ** 2 === y;
}

function isApprox(eqn, delta) {
  const lhs = eqn[0];
  const rhs = eqn[1];

  return Math.abs(lhs - rhs) < delta;
}

function sineWave(x, y, threshold = 5) {
  const f = isApprox([(Math.sin(x + threshold)), y], 0.5);
  console.log(f);
  return f;
}

function formatGraph(graph) {
  const formattedGraph = [];

  for (let index = 0; index < graph.length; index++) {
    formattedGraph.push(graph[index].join(' '));
  }

  return formattedGraph.join('\n');
}

function generateGraph(length) {
  const xLine = ' '.repeat(length);
  const plane = [];
  for (let index = 0; index < length; index++) {
    plane.push(xLine.split(''));
  }
  return plane;
}

function plot(length, eqnToPlot, SPL_CHAR) {
  const graphSize = 37;
  const offSet = Math.floor(graphSize / 2);

  const plottedGraph = generateGraph(graphSize);

  for (let index = 0; index < plottedGraph.length ** 2; index++) {
    const x = index % graphSize;
    const y = (index - x) / graphSize;

    const dX = x - offSet;
    const dY = y - offSet;
    plottedGraph[y][x] = eqnToPlot(dX, dY, length % graphSize) ? SPL_CHAR || '*' : ' ';
  }

  return plottedGraph;
}


function plotSine() {
  const graphSize = 37;
  const offSet = Math.floor(graphSize / 2);

  const plottedGraph = generateGraph(graphSize);

  for (let index = 0; index < plottedGraph.length ** 2; index++) {
    const x = index % graphSize;
    const y = (index - x) / graphSize;

    const dX = x - offSet;
    const dY = y - offSet;

    // plottedGraph[y][x] = !sineWave(dY, dX) ? SPL_CHAR || '*' : ' ';
    plottedGraph[y][x] = sineWave(dX, dY, 10) ? '*' : ' ';
  }

  return plottedGraph;
}

function animateCircle(end) {

  for (let index = 1; index < end; index++) {
    animateThis(formatGraph(plot(index + 2, circleEqn, '^')));
    if (index % 3 === 0)
      animateThis(formatGraph(plot(index + 2, filledCircleEqn)));
  }
  init++;
  return colorize(formatGraph(plot(end + 1, filledCircleEqn)));
}
function animateCircleOOB(end) {

  for (let index = 1; index < end; index++) {
    animateThis(formatGraph(plot((index + 2) % 10, OOBCircleEqn, '^')));
    // if (index % 3 === 0)
    animateThis(formatGraph(plot((index + 2) % 10, filledCircleEqn)));
  }
  init++;
  return colorize(formatGraph(plot(end + 1, filledCircleEqn)));
}
function animateCurve(end) {

  for (let index = 1; index < end; index++) {
    animateThis(formatGraph(plot(index + 2, parabolaShaded, '^')));

  }
  init++;
  return colorize(formatGraph(plot(end, parabola)));
}
function animateSineWave(length, threshold) {

  for (let index = 1; index < threshold; index++) {
    const wave = formatGraph(plot((index + 2) % 10, sineWave, '.'));
    animateThis(wave);
  }
  init++;
  return colorize(formatGraph(plotSine(length, threshold + 1)));
}
// console.log(plot(10, circleEqn, '>'));

// console.log(animateCircle(10));
// console.log(animateCurve(10));
// console.log(animateCircleOOB(100));

console.log(animateSineWave(100, 100));       