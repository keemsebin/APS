const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let nums = Array.from({ length: N }, () =>
  input.shift().split(" ").map(Number)
);
let K = Number(input.shift());

let prefix = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(0));

// 0,0 ~ N, M 누적합
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    prefix[i + 1][j + 1] =
      nums[i][j] + prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j];
  }
}

// x1, y1 ~ x2 ~ y2 누적합
for (let i = 0; i < K; i++) {
  let [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  console.log(
    prefix[x2][y2] -
      prefix[x2][y1 - 1] -
      prefix[x1 - 1][y2] +
      prefix[x1 - 1][y1 - 1]
  );
}

// 그림으로 정리해보기!
