function reverse(array) {
  const reversed = [];

  for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    reversed.push(element);
  }

  return reversed;
}

function areEqual(array1, array2) {

  for (let index = 0; index < array1.length; index++) {
    const elementA = array1[index];
    const elementB = array2[index];

    if (elementA !== elementB) {
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

function testCode(description, array, expectedOutput) {
  const actualOutput = reverse(array);
  const isEqual = areEqual(expectedOutput, actualOutput);
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

  testCode("singleton", [1], [1]);
  testCode("array with even number of elements", [1, 2, 3, 4], [4, 3, 2, 1]);
  testCode("empty", [], []);

  console.log();
}

main();