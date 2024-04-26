const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const T = Number(input[0]);

for (let i = 0; i < T; i++) {
  const case1 = Number(input[i * 3 + 1]);

  const score1 = input[i * 3 + 2].split(" ").map(Number);
  const score2 = input[i * 3 + 3].split(" ").map(Number);

  const dp = [[0], [...score1], [...score2]];

  for (let j = 1; j < case1; j++) {
    dp[0][j] = Math.max(dp[1][j - 1], dp[2][j - 1]); // 아무것도 선택하지 않았을 경우 직전 열 중 최댓값
    dp[1][j] = Math.max(dp[0][j - 1], dp[2][j - 1]) + score1[j];
    dp[2][j] = Math.max(dp[0][j - 1], dp[1][j - 1]) + score2[j];
  }
  console.log(Math.max(dp[0][case1 - 1], dp[1][case1 - 1], dp[2][case1 - 1]));
}
