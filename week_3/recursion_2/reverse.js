function reverse(text, revText, index) {
  if (index >= text.length) {
    return revText;
  }

  return reverse(text, text[index] + revText, index + 1);
}
