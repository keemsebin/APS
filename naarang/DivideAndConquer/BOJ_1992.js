const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());
let video = input.map((item) => item.split("").map(Number));
let answer = [];

// (시작 x 좌표, 시작 y 좌표, 사이즈)
function divide(x, y, size) {
  if (checkVideo(x, y, size)) {
    return;
  }

  answer.push("(");
  const next_size = size / 2;
  divide(x, y, next_size);
  divide(x, y + next_size, next_size);
  divide(x + next_size, y, next_size);
  divide(x + next_size, y + next_size, next_size);
  answer.push(")");
}

function checkVideo(x, y, size) {
  const prev = video[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (prev !== video[i][j]) return false;
    }
  }
  answer.push(prev);
  return true;
}

divide(0, 0, N);
console.log(answer.join(""));
