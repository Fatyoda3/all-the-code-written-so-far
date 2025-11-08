function split(sentence, delimiter) {
  const splittedStrings = [];
  let currentString = '';

  let index = 0;

  while (index < sentence.length) {

    if (sentence[index] === delimiter) {
      splittedStrings.push(currentString);
      currentString = '';
      index += 1;
    }

    currentString += sentence[index];
    index += 1;
  }

  const final = currentString !== 'undefined' ? currentString : '';

  splittedStrings.push(final);

  return splittedStrings;
}

function bothAreEqual(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    const comparand = array1[index];
    const comparator = array2[index];

    if (comparand !== comparator) {
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

function testCode(description, sentence, delimiter, expectedOutput) {
  const actualOutput = split(sentence, delimiter);
  const isEqual = bothAreEqual(actualOutput, expectedOutput);
  const symbol = isEqual ? "✅" : "❌";

  const headline = `${symbol} ${description}`;
  console.log(headline);

  if (!isEqual) {
    const input = `[${sentence} ${delimiter}]`;
    const details = formatText(input, actualOutput, expectedOutput);
    console.log(details);
  }
}

function main() {
  console.log('\narray checking\n');
  testCode('just basic split ', 'hello world', ' ', ['hello', 'world']);
  testCode('just basic split ', '', '', ['']);
  testCode('split for non existing character', 'hello', ',', ['hello']);
  testCode('comma separated values', "a,b,c", ",", ["a", "b", "c"]);
  testCode('comma separated values', "a-b-c", "-", ["a", "b", "c"]);
  testCode('based on colons split', "one:two:", ":", ["one", "two", '']);
  testCode('based on colons split', ":one:two:", ":", ["", "one", "two", '']);
  console.log();
}

main();