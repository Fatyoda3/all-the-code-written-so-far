const p = 100;
const t = 2;
const r = 10;

let amount = p;
function interestPerYear(amount, r) {
  return amount * (r / 100);
}

function getCompound(x, t, r) {
  let amount = x;

  for (let currentYear = 0; currentYear < t; currentYear++) {
    amount = amount + interestPerYear(amount, r);
  }

  return amount - x;
}


function testApSum(amount, t, r, expectedValue) {
  const valueWeGot = getCompound(amount, t, r);
  let isWorking = '';
  let delta = (expectedValue - valueWeGot);
  if (-0.9 < delta && delta < 0.9)
    isWorking = '✅';
  else if (delta === 0)
    isWorking = '✅';
  else isWorking = '❌';
  const message = "value we expected " + expectedValue + " and we got " + valueWeGot + ' ' + isWorking;
  console.log(message);
}

function testAll() {
  testApSum(p, t, r, 21);
  testApSum(100, 3, 10, 33.0);
  testApSum(p, 4, 10, 46.41);
  testApSum(p, 5, 10, 61.0);
  testApSum(p, 6, 10, 77.1);
}

testAll();