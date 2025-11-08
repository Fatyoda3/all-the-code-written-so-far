const rows = [];
const cols = [];

for (let multiple = 1; multiple < 11; multiple++) {
  for (let index = 1; index < 11; index++) {
    rows.push(`${index * multiple}`.padStart(2, '0'));
  }
  cols.push((rows.join(' | ')).padStart(20, ' ') + '|');

  while (rows.length !== 0) {
    rows.pop();
  }
}

console.log(cols.join('\n'));
