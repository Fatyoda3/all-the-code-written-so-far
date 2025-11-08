function findLastIndex(string, char) {

  return compare(string, char, string.length - 1);
}

function compare(text, subText, index) {

  if (index < 0) {
    return -1;
  }

  if (text[index] === subText) {
    return index;
  }

  return compare(text, subText, index - 1);
}
