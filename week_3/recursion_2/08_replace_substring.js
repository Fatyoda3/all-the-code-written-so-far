function replace(text, target, replacement) {
  return match(text, target, replacement, 0, '');
}

function match(text, target, replaceWith, index, edit) {

  if (index > text.length - 1) {
    return edit;
  }

  const firstMatch = isSame(text, target, index);

  if (index === firstMatch) {
    edit += replaceWith;
  } else {
    edit += text[index];
  }

  return match(text, target, replaceWith, index + 1, edit);
}

function isSame(text, letter, index) {
  if (index > text.length) {
    return -1;
  }
  if (text[index] === letter) {
    return index;
  }

  return isSame(text, letter, index + 1);
}

console.log(replace('hello', 'l', 'z'));