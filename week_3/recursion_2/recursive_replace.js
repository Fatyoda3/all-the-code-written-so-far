
function replace(text, match, replacement, holder, index) {
  if (index > text.length) {
    return holder;
  }
  if (isSame()) {
    replace(text, match, replacement, holder, index + 1)
  }
}

console.log(replace('hello', 'h', 'j', '', 0));

