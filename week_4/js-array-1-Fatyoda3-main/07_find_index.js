function findIndex(array, element) {

  for (let index = 0; index < array.length; index++) {

    if (array[index] === element) {
      return index;
    }
  }

  return - 1;
}

function formatText(inputs, actualOutput, expectedOutput) {
  return `
   Inputs  : ${inputs}
   Actual  : ${actualOutput}
   Expected: ${expectedOutput}
   ----`;
}

function testCode(description, array, element, expectedOutput) {
  const actualOutput = findIndex(array, element);
  const isEqual = expectedOutput === actualOutput;
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
  testCode("element present ", [6, 2, 3, 1, 4, 7], 3, 2);
  testCode("element not present ", [1, 2, 3, 5], -1, -1);
  testCode("duplicate elements", [2, 4, 2, 6, 8], 2, 0);
  testCode("empty input", [], 0, -1);

  console.log();
}

main();