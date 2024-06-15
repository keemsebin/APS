const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let sum = [];
let totalSum = 0;

for (let i = 0; i < N; i++) {
  totalSum += arr[i];
  sum.push(totalSum);
}

let target = totalSum / 4;
if (totalSum % 4 !== 0) {
  console.log(0);
  return;
}

let dp = new Array(N).fill(0).map(() => new Array(4).fill(0));

dp[0][0] = arr[0] === target ? 1 : 0;

// dp[i][j] = i번째까지의 합이 j일 때의 경우의 수
for (let i = 1; i < N; i++) {
  dp[i][0] = dp[i - 1][0] + (sum[i] === target ? 1 : 0);

  for (let j = 1; j < 4; j++) {
    dp[i][j] = dp[i - 1][j];
    if (sum[i] === target * (j + 1)) {
      dp[i][j] += dp[i - 1][j - 1];
    }
  }
}
console.log(dp[N - 1][3]);
