function checkDivisible(divisor, primeCandidate) {

  if (primeCandidate % divisor === 0 && divisor < primeCandidate) {

    return true;
  }

  if (divisor < primeCandidate) {

    return checkDivisible(divisor + 1, primeCandidate);
  }
}

function isPrime(primeCandidate) {

  if (checkDivisible(2, primeCandidate) || primeCandidate < 2) {

    return false;
  }

  return true;
}

console.log(isPrime(11));