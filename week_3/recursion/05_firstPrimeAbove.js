function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }
  if (checkDivisible(2, primeCandidate) === 0) {
    return false;
  }
  return true;
}

function checkDivisible(divisor, primeCandidate) {
  if (primeCandidate % divisor === 0 && divisor < primeCandidate) {
    return 0;
  }
  if (divisor < primeCandidate) {
    return checkDivisible(divisor + 1, primeCandidate);
  }
}

function firstPrimeAbove(number) {
  if (isPrime(number + 1)) {
    return number + 1;

  }

  return firstPrimeAbove(number + 1);
}