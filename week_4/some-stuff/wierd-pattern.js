function isApprox(eqn, delta) {
  const lhs = eqn[0];
  const rhs = eqn[1];

  return Math.abs(lhs - rhs) < delta;
}

function sineWave(x, index, threshold = 5) {
  const f = Math.floor(Math.sin(x) * threshold);
  const y = Math.floor(Math.sin(index)) * threshold;
  return isApprox([f, y], 5);

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

function plot(length, SPL_CHAR) {
  const graphSize = 37;
  const offSet = Math.floor(graphSize / 2);

  const plottedGraph = generateGraph(graphSize);

  for (let index = 0; index < plottedGraph.length ** 2; index++) {
    const x = index % graphSize;
    const y = (index - x) / graphSize;

    const dX = x - offSet;
    const dY = y - offSet;
    const isSW = !sineWave(dY, dX, length);
    plottedGraph[y][x] = isSW ? SPL_CHAR || '*' : ' ';
    // plottedGraph[y][x] = isSW ? SPL_CHAR || '*' : ' '; 
  }

  return formatGraph(plottedGraph);
}
console.log(plot(10,));