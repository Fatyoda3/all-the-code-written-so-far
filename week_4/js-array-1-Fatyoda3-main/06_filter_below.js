function filterBelow(array, threshold) {
  const filteredElements = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element < threshold) {
      filteredElements.push(element)
    }
  }

  return filteredElements;
}

function areEqual(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

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

function testCode(description, array, threshold, expectedOutput) {
  const actualOutput = filterBelow(array, threshold);
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
  testCode("below 3 -", [6, 2, 3, 1, 4, 7], 3, [2, 1]);
  testCode("below -1", [1, -2, 3, 5], -1, [-2]);
  testCode("empty output", [2, 4, 6, 8], 0, []);
  testCode("empty input", [], 0, []);


  console.log();
}
main();