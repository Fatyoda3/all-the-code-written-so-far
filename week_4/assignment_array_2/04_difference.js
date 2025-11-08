function bothAreArray(comparand, comparator) {
  return (typeof comparand) === 'object' && (typeof comparator) === 'object';
}

function includes(array, target) {

  for (let index = 0; index < array.length; index++) {

    if (areBothEqual(array[index], target) || array[index] === target) {
      return true;
    }
  }

  return false;
}

function difference(array1, array2) {

  if (!bothAreArray(array1, array2)) {
    return false;
  }

  const matches = [];
  for (let index = 0; index < array1.length; index++) {
    const target = array1[index];

    if (!includes(array2, target)) {
      matches.push(target);
    }
  }

  return matches;
}

function areBothEqual(array1, array2) {
  if (!bothAreArray(array1, array2) || array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    const comparand = array1[index];
    const comparator = array2[index];

    if (!areBothEqual(comparand, comparator)) {
      return false;
    } else if (comparand !== comparator) {
      return false;
    }
  }

  return true;
}

function formatText(inputs, actualOutput, expectedOutput) {
  return `
   Inputs  : ${inputs}
   Actual  : ${actualOutput}
   Expected: ${expectedOutput}
   ----`;
}
function testCode(description, array, target, expectedOutput) {
  const actualOutput = difference(array, target) + "";
  const isEqual = actualOutput === expectedOutput;
  const symbol = isEqual ? "✅" : "❌";

  const headline = `${symbol} ${description}`;
  console.log(headline);

  if (!isEqual) {
    const input = `[${array}]`;
    const details = formatText(input, actualOutput, expectedOutput);
    console.log(details);
  }
}

function main() {
  console.log('\narray checking\n');
  testCode('simple  ', [1, 2], [1], [2] + '');
  testCode('simple check ', [1, 2, 3], [2, 3, 4], [1] + "");
  testCode('simple check ', [1, 3], [3, 4], [1] + '');

  console.log();
}

main();