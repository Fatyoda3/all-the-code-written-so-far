function isPalindrome(palindromeCandidate) {
  return isSame(palindromeCandidate, 0, palindromeCandidate.length - 1);
}

function isSame(palindromeCandidate, start, end) {
  if (start >= end) {
    return true;
  }

  if (palindromeCandidate[start] !== palindromeCandidate[end]) {
    return false;
  }

  return isSame(palindromeCandidate, start + 1, end - 1);
}
