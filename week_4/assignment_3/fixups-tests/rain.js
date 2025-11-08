let str = 'f';
const p = '% -%-';
for (let index = 1; index < 100; index++) {
  str += p[(index) % p.length]
}

console.log(str);