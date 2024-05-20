const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
let board = [];
for (let i = 0; i < N; i++) {
  board.push(input[i + 1].split(" ").map(Number));
}
let dp = Array(N + 1).fill(0);

function retire(arr) {
  for (let i = 0; i < N; i++) {
    if (i > 0) {
      dp[i] = Math.max(dp[i], dp[i - 1]); // 현재까지의 최대 이익 업데이트
    }
    const [time, pay] = arr[i];
    if (i + time <= N) {
      dp[i + time] = Math.max(dp[i + time], dp[i] + pay);
    }
  }
  return Math.max(...dp);
}
console.log(retire(board));
