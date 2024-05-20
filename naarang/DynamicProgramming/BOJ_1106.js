const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let [C, N] = input.shift().split(" ").map(Number);

// 비용 순으로 정렬
let cost = input.map((item) =>
  item
    .split(" ")
    .map(Number)
    .sort((a, b) => a[0] - b[0])
);

let dp = Array(C + 1).fill(Infinity);

for (let c of cost) {
  if (dp[c[1]] > c[0]) dp[c[1]] = c[0]; // 최소값 갱신
  for (let i = 1; i <= C; i++) {
    if (i < c[1]) {
      // 1배수
      dp[i] = Math.min(dp[i], c[0]);
    } else {
      // N배수
      dp[i] = Math.min(dp[i], dp[c[1]] + dp[i - c[1]]); // 앞에서 구한 최소비용을 바탕으로 계산..!
    }
  }
}
console.log(dp[C]);

// 약간 배낭 문제와 유사한 느낌... 최소값 구하는 문제 더 공부가 필요할 듯ㅠ
