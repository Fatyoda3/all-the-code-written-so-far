function findIndex(string, char) {
  return compare(string, char, 0);
}

function compare(string, char, start) {

  if (start >= string.length) {
    return -1;
  }

  if (string[start] === char) {
    return start;
  }

  return compare(string, char, start + 1);
}

console.log(compare('hello', 'h', 0));
console.log(compare('himanshu', 'm', 0));
console.log(compare('', '', 0));