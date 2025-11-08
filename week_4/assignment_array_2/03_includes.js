function areBothArray(comparand, comparator) {
  return (typeof comparand) === 'object' && (typeof comparator) === 'object';
}

function bothAreEqual(array1, array2) {

  if (!areBothArray(array1, array2) || array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    const comparand = array1[index];
    const comparator = array2[index];

    if (!bothAreEqual(comparand, comparator) && comparand !== comparator) {
      return false;
    }
  }
  return true;
}

function includes(array, target) {

  for (let index = 0; index < array.length; index++) {

    if (bothAreEqual(array[index], target) || array[index] === target) {
      return true;
    }
  }
  return false;
}

function formatText(inputs, actualOutput, expectedOutput) {
  return `
   Inputs  : ${inputs}
   Actual  : ${actualOutput}
   Expected: ${expectedOutput}
   ----`;
}

function testCode(description, array, target, expectedOutput) {
  const actualOutput = includes(array, target);
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
  testCode('simple check ', [1, 2], 1, true);
  testCode('element not present ', [11, 2], 1, false);
  testCode('element present is an array', [11, [1]], [1], true);
  testCode('element present is an array', [11, [[1]]], [1], false);
  console.log();
}

main();