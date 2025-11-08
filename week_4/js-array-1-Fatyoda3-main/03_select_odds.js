function selectOdds(numbers) {
  const odds = [];

  for (let index = 0; index < numbers.length; index++) {
    const current = numbers[index];

    if (current % 2 !== 0) {
      odds.push(current);
    }
  }

  return odds;
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

function testCode(description, array, expectedOutput) {
  const actualOutput = selectOdds(array);
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
  testCode("Checking the mixed array", [1, 3, 2], [1, 3]);
  testCode("no odds in the array", [2], []);
  testCode("no odds in the array", [1, 3, 3], [1, 3, 3]);
  testCode("zero array", [0, 0, 0], []);


  console.log();
}
main();