const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const arr = [];

for (let i = 0; i < N; i++) {
  arr[i] = input[i + 1].split(" ").map(Number);
}

function findRoute(arr) {
  let dp = Array(N)
    .fill(BigInt(0))
    .map(() => Array(N).fill(BigInt(0)));
  dp[0][0] = BigInt(1);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let start = arr[i][j];
      if (start === 0) continue;

      // 아래로 이동
      if (i + start < N) {
        dp[i + start][j] += dp[i][j];
      }
      // 오른쪽으로 이동
      if (j + start < N) {
        dp[i][j + start] += dp[i][j];
      }
    }
  }
  return dp[N - 1][N - 1].toString();
}
console.log(findRoute(arr));
