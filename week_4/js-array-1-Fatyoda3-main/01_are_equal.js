function areDeepEqual(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    let isSameSubArray = true;
    const elementA = array1[index];
    const elementB = array2[index];

    if ((typeof elementA) === 'object' && (typeof elementB) === 'object') {
      isSameSubArray = areDeepEqual(elementA, elementB);
    } else if (elementA !== elementB) {
      return false;
    }
    if (!isSameSubArray) {
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
function testCode(description, array1, array2, expectedOutput) {
  const actualOutput = areDeepEqual(array1, array2);
  const isEqual = actualOutput === expectedOutput;
  const symbol = isEqual ? "✅" : "❌";

  const headline = `${symbol} ${description}`;
  console.log(headline);

  if (!isEqual) {
    const input = `[${array1} ${array2}]`;
    const details = formatText(input, actualOutput, expectedOutput);
    console.log(details);
  }
}

function main() {
  console.log('\narray checking\n');
  testCode("Checking the array", [1, 3, 2], [1, 3, 2], true);
  testCode("Checking the array", [1, 2, 3], [1, 3, 2], false);
  testCode("Checking the array", [1, [22], 3], [1, [22], 3], true);
  testCode("Checking the nested array", [1, [22], 3], [1, [[22]], 3], false);

  testCode("Checking the nested array", [1, [[]], 3], [1, [[]], 3], true);
  testCode("Checking the nested array", [[], [[]]], [[], [[]]], true);
  testCode("Checking the nested array", [], [], true);


  console.log();
}
main();