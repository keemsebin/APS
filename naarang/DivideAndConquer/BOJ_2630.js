const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());
let paper = input.map((item) => item.split(" ").map(Number));
let white_paper = 0;
let blue_paper = 0;

// (시작 x, 시작 y, 정사각형 크기)
// 분할하기
function divide(x, y, size) {
  // 같은 색
  if (checkPaper(x, y, size)) {
    return;
  }

  // 다른 색이면 다시 분할
  const next_size = size / 2;
  divide(x, y, next_size);
  divide(x + next_size, y, next_size);
  divide(x, y + next_size, next_size);
  divide(x + next_size, y + next_size, next_size);
}

// 모두 white인지 blue인지 탐색하는 함수
function checkPaper(x, y, size) {
  let prev = paper[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (prev !== paper[i][j]) {
        return false;
      }
    }
  }
  if (prev === 0) {
    white_paper++;
  } else {
    blue_paper++;
  }
  return true;
}

divide(0, 0, N);
console.log(white_paper);
console.log(blue_paper);
