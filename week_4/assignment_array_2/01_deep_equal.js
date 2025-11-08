function areBothArray(comparand, comparator) {
  return (typeof comparand) === 'object' && (typeof comparator) === 'object';
}
function areDeepEqual(array1, array2) {

  if (!areBothArray(array1, array2) || array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    const comparand = array1[index];
    const comparator = array2[index];

    if (comparand !== comparator && !areDeepEqual(comparand, comparator)) {
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
function testCode(description, array1, contrastingArray, expectedOutput) {
  const actualOutput = areDeepEqual(array1, contrastingArray);
  const isEqual = actualOutput === expectedOutput;
  const symbol = isEqual ? "✅" : "❌";

  const headline = `${symbol} ${description}`;
  console.log(headline);

  if (!isEqual) {
    const input = `[${array1} ${contrastingArray}]`;
    const details = formatText(input, actualOutput, expectedOutput);
    console.log(details);
  }
}
function main() {
  console.log('\narray checking\n');
  testCode("array with different length", [1, 2, 3], [1], false);
  testCode("empty arrays", [], [], true);
  testCode("input is a string ", 'abc', ['a', 'b', 'c'], false);

  console.log();
}

main();