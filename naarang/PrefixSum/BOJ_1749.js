const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let nums = Array.from({ length: N }, (v, i) => input[i].split(" ").map(Number));

// 2차원 배열 누적합 구하기
let prefix = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(0));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    prefix[i + 1][j + 1] =
      nums[i][j] + prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j];
  }
}

// 최대값 구하기 -> 4중 for문을 사용해도 돼나..라는 생각이 들었음ㅠ
let max = -Infinity;
for (let x1 = 1; x1 <= N; x1++) {
  for (let y1 = 1; y1 <= M; y1++) {
    for (let x2 = x1; x2 <= N; x2++) {
      for (let y2 = y1; y2 <= M; y2++) {
        const result =
          prefix[x2][y2] -
          prefix[x1 - 1][y2] -
          prefix[x2][y1 - 1] +
          prefix[x1 - 1][y1 - 1];
        if (result > max) {
          max = result;
        }
      }
    }
  }
}

console.log(max);
