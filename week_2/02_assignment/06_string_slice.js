function slice(text, start, end) {

}

function testSlice(string, start, end, expectedValue) {

  const valueWeGot = slice(string, start, end);
  const isWorking = valueWeGot === expectedValue ? '✅' : '❌';
  const part2 = expectedValue + " and we got " + valueWeGot;
  const message = isWorking + " value we expected " + part2;
  
  console.log(message);
}

function testAll() {

  testSlice('hello world', 9, 10, 'ld');
  

}

testAll();