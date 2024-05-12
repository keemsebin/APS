const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let star = Array.from({ length: N }, () => new Array(N).fill(" "));

function divide(x, y, size) {
  if (size === 3) {
    printStar(x, y);
    return;
  }

  const next_size = size / 3;

  divide(x, y, next_size);
  divide(x, y + next_size, next_size);
  divide(x, y + next_size * 2, next_size);
  divide(x + next_size, y, next_size);
  divide(x + next_size, y + next_size * 2, next_size);
  divide(x + next_size * 2, y, next_size);
  divide(x + next_size * 2, y + next_size, next_size);
  divide(x + next_size * 2, y + next_size * 2, next_size);
}

function printStar(x, y) {
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      if (i === x + 1 && j === y + 1) {
        continue;
      }
      star[i][j] = "*";
    }
  }
}

divide(0, 0, N);
const answer = star.map((item) => item.join(""));

console.log(answer.join("\n"));
