function reverse(string) {
  return rev(string, string.length - 1);
}

function rev(string, end) {
  if (end < 0) {
    return '';
  }

  return string[end] + rev(string, end - 1);
}