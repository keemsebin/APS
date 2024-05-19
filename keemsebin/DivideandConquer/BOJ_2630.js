const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

let paper = [];
let blue = 0;
let white = 0;

for (let i = 0; i < N; i++) {
  paper[i] = input[i + 1].split(" ").map(Number);
}

function checkPaper(x, y, n) {
  let color = paper[x][y];
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (color !== paper[i][j]) {
        checkPaper(x, y, n / 2);
        checkPaper(x, y + n / 2, n / 2);
        checkPaper(x + n / 2, y, n / 2);
        checkPaper(x + n / 2, y + n / 2, n / 2);
        return;
      }
    }
  }
  if (color === 0) white++;
  else blue++;
}
checkPaper(0, 0, N);
console.log(white);
console.log(blue);
