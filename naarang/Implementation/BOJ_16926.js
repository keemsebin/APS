const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M, R] = input[0].split(" ").map(Number);
let array = Array.from({ length: N }, (v, i) =>
  input[i + 1].split(" ").map(Number)
);

for (let r = 0; r < R; r++) {
  rotate();
}

for (let n = 0; n < array.length; n++) {
  console.log(array[n].join(" "));
}

function rotate() {
  let n = array.length;
  let m = array[0].length;
  for (let i = 0; i < Math.floor(Math.min(n, m) / 2); i++) {
    // 가장 왼쪽 위의 값을 저장
    let start = array[i][i];

    // 상단 <-
    for (let j = i; j < m - i - 1; j++) {
      array[i][j] = array[i][j + 1];
    }
    // 우측
    for (let j = i; j < n - i - 1; j++) {
      array[j][m - i - 1] = array[j + 1][m - i - 1];
    }
    // 하단 ->
    for (let j = m - i - 1; j > i; j--) {
      array[n - i - 1][j] = array[n - i - 1][j - 1];
    }

    // 좌측
    for (let j = n - i - 1; j > i; j--) {
      array[j][i] = array[j - 1][i];
    }

    array[i + 1][i] = start;
  }
}
