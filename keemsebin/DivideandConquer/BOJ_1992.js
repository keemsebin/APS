const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

const quad = [];
let result = "";
for (let i = 0; i < N; i++) {
  quad[i] = input[i + 1].split("").map(Number);
}

function QuadTree(x, y, n) {
  let mark = quad[x][y];
  let flag = true;
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (mark !== quad[i][j]) {
        flag = false;
      }
    }
  }
  if (flag) {
    result += mark.toString();
  } else {
    result += "(";
    QuadTree(x, y, n / 2); // 0 0 4, 0 0 2
    QuadTree(x, y + n / 2, n / 2); // 0 4 4 , 0 2 2
    QuadTree(x + n / 2, y, n / 2); // 4 0 4, 2 0 2
    QuadTree(x + n / 2, y + n / 2, n / 2); // 4 4 4,
    result += ")";
  }
}

QuadTree(0, 0, N);
console.log(result);
