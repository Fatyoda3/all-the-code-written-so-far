function fibonacci(n) {
  const fibsUptoN = [];

  let current = 0;
  let next = 1;
  let futureTerm = 0;

  for (let index = 0; index < n; index++) {
    fibsUptoN.push(current);
    futureTerm = current + next;
    current = next;
    next = futureTerm;

  }
  return fibsUptoN;
}

function areEqual(array1, array2) {
  if ((array1.length !== array2.length)) {
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

function testCode(description, array, expectedOutput) {
  const actualOutput = fibonacci(array);
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
  testCode("first", 1, [0]);
  testCode("first 2 ", 2, [0, 1]);
  testCode("empty ", -1, []);
  testCode("first 5 ", 5, [0, 1, 1, 2, 3]);
  testCode("first 10", 10, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  console.log();
}
main();