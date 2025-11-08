function mapLengths(words) {
  const lengthsOfWords = [];

  for (let index = 0; index < words.length; index++) {
    const element = words[index];
    lengthsOfWords.push(element.length);
  }x

  return lengthsOfWords;
}

function areEqual(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {

    if (array1[index] !== array2[index]) {
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
  const actualOutput = mapLengths(array);
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
  testCode("", ['a', 'a', 'a'], [1, 1, 1]);
  testCode("something", ['something'], [9]);
  testCode("empty", [''], [0]);
  testCode("mixed lengths ", ['mix', 'maximum'], [3, 7]);


  console.log();
}
main();