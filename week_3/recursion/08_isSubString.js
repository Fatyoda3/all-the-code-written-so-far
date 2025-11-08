function isSubString(string, otherString) {
  if (!string || !otherString) {
    return false;
  }
  return matchAll(string, otherString, 0);
}

function matchAll(text, subText, index) {

  if (index >= text.length - subText.length + 1) {
    return false;
  }
  const firstMatch = isPresent(text, subText[0], index);

  if (firstMatch !== -1) {
    const isMatch = compareStrings(text, subText, 0, firstMatch);

    return isMatch ? isMatch : matchAll(text, subText, index + 1);
  }
  return false;
}

function compareStrings(firstStr, SecondStr, index, offset) {
  if (index >= SecondStr.length) {
    return true;
  }
  if (firstStr[index + offset] === SecondStr[index]) {
    return compareStrings(firstStr, SecondStr, index + 1, offset);
  }
  return false;
}

function isPresent(string, char, index) {
  if (index > string.length) {
    return -1;
  }

  if (string[index] === char) {
    return index;
  }
  return isPresent(string, char, index + 1);
}
