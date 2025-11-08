let index = 0;
function push(arr, value) {
  arr = arr + index + '=' + value + ',';
  index = index + 1;
  return arr;
}

function getValueAt(index, arr) {
  if (index < 0) return undefined;

  let charIndex = 0;
  let value = '';
  let isIncrementing = true;

  while (isIncrementing) {
    charIndex = charIndex + 1;
    if (arr[charIndex] == index && arr[charIndex + 1] === '=') {
      isIncrementing = false;
    }
  }
  while (arr[charIndex] !== ',') {
    const currentChar = arr[charIndex];
    value = value + currentChar;
    charIndex = charIndex + 1;
  }
  let valueC = '';

  for (let index = 2; index < value.length; index++) {
    valueC = valueC + value[index];
  }
  value = valueC;
  if (value === 'true') return true;
  if (value === 'false') return false;
  let temp = value;
  if (temp++) return value - 0;
  return value;
}
let arr = '';
arr = push(arr, 'hi===\'=,,,,1q');
arr = push(arr, '2');
arr = push(arr, 'hi22');
arr = push(arr, true);
arr = push(arr, "true");
console.log(true === getValueAt(4, arr) );
