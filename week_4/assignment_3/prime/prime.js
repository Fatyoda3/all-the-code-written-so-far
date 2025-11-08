const largeRange = [false, false];
const MAX = 10e6;
const primes = [];

function populateArray(array) {
  for (let _ = 0; _ < MAX; _++) {
    array.push(true);
  }
}

populateArray(largeRange);

for (let prime = 2; prime < MAX; prime++) {
  const currentPrime = largeRange[prime];

  if (currentPrime) {
    primes.push(prime);

    for (let multiple = prime ** 2;
      multiple < MAX; multiple += prime) {
      largeRange[multiple] = false;
    }

  }
}

console.log(primes.join('\n'));