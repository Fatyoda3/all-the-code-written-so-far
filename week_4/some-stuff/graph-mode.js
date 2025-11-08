let init = 0;
function colorize(text) {
  // const color = Math.floor(Math.random() * (231 - 1 + 1)) + 1;
  const color = init;
  // init++;
  return `\x1B[38;5;${/* color + */ 75 % 231}m${text}\x1B[0m`;
  // return text
}

function sine(x, y, threshold) {
  const approx = Math.abs(y - Math.sin(x + threshold));
  return approx <= 0.5;
}

function delay() {
  for (let _ = 0; _ < 10e7 * 2; _++);
}

function genGraph(value = 0) {
  const maxSize = 37 + value;
  const graph = [];
  const xLine = ' '.repeat(maxSize);
  for (let index = 0; index < maxSize; index++) {
    graph.push(xLine.split(''));
  }
  return graph;
}

function generateLine(index, offset, graph, max) {
  const x = index;
  for (let innerInd = 0; innerInd < max; innerInd++) {
    const y = innerInd;
    const validPoint = sine(y - offset, x - offset, 10);
    const t = graph[x][y] === '.';
    graph[x][y] = validPoint || t ? '.' : ' ';
    graph[y][x] = validPoint || t ? '.' : ' ';

  }
}
function plot(size) {
  const graph = genGraph(size);
  const max = graph.length;
  const offset = Math.floor(max / 2);

  for (let index = 0; index < max; index++) {
    for (let offsetActual = 0; offsetActual < 10; offsetActual += 4) {
      generateLine(index, offset - offsetActual, graph, max);
    }
  }

  return [graph];
}
function displayGraph(graphs) {
  const formatted = [];
  for (let term = 0; term < graphs.length; term++) {
    const graph = graphs[term];
    for (let index = 0; index < graph.length; index++) {
      formatted.push(graph[index].join(' '));
    }
  }
  return colorize(formatted.join('\n'));
}
function animateString(text) {
  console.log(text);
  delay();
  console.clear();
}
function animationLoop(times) {
  while (1) {

    init += 5;

    for (let term = 0; term < times; term++) {
      const text = displayGraph(plot(Math.abs(times - term)));
      animateString(text);
    }

    init += 10;

    for (let term = times - 1; term >= 0; term--) {
      const text = displayGraph(plot(Math.abs(term - times)));
      animateString(text);
    }
  }
}
console.log(displayGraph(plot(10)));

animationLoop(15);

