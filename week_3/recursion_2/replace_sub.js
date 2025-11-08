function isMatch(text, subText, position) {

  for (let index = 0; index < subText.length; index++) {

    if (text[index + position] !== subText[position]) {
      return false;
    }
  }

  return true;
}

function replace(text, subText, replacement) {
  let replaced = '';
  let index = 0;

  while (index < text.length) {
    let delta = 1;

    if (isMatch(text, subText, index)) {
      replaced += replacement;
      delta = subText.length;
    }
    else {
      replaced += text[index];
    }

    index += delta;
  }

  return replaced;
}

console.log(replace('hello', 'h', 'jack h'));
