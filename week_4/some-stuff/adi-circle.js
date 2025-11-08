function circleEqn(x, y, r) {
  return isApprox([(x ** 2) + (y ** 2), r ** 2], 5);
}
function sineCurve(x, y, r) {
  return isApprox([(Math.sin(x + r)), (y)], .5);
}
// Asin(Bx−C)+D
function filledCircleEqn(x, y, r) {
  return (x ** 2) + (y ** 2) <= r ** 2;
}

function isApprox(eqn, delta) {
  const lhs = eqn[0];
  const rhs = eqn[1];

  return Math.abs(lhs - rhs) < delta;
}

function convertToString(xyPlane) {
  const graph = [];
  for (let index = 0; index < xyPlane.length; index++) {
    graph.push(xyPlane[index].join(' '));
  }

  return (graph.join('\n'));
}

function generateXYPlane(n) {
  const xLine = ' '.repeat(n);
  const xyPlane = [];
  for (let index = 0; index < n; index++) {
    xyPlane.push(xLine.split(''));
  }
  return xyPlane;
}

function plot(size, eqn) {
  const n = 37;
  const offSet = Math.floor(n / 2);

  const xyPlane = generateXYPlane(n);
  // console.log(xyPlane.length);

  for (let index = 0; index < xyPlane.length ** 2; index++) {
    const x = index % n;
    const y = (index - x) / n;

    const offSettedX = x - offSet;
    const offSettedY = y - offSet;
    console.log(offSettedX, offSettedY);
    xyPlane[y][x] = eqn(offSettedX, offSettedY, size) ? '*' : ' ';
  }

  return xyPlane;
}

function main() {
  console.log(convertToString(plot(10, sineCurve)))
}

main();