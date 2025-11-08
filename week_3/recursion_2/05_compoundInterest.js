function compoundInterest(p, r, t) {
  return simpleInterest(p, r, t) - p;
}

function simpleInterest(p, r, t) {
  if (t === 0) {
    return p;
  }
  return simpleInterest(p + (p * r / 100), r, t - 1);
}
console.log(compoundInterest(50, 10, 9));