const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
let glass = [];
let Max;
for (let i = 1; i <= N; i++) {
  glass.push(Number(input[i]));
}
function wine(glass) {
  let dp = [];
  let wine = glass;
  dp[0] = wine[0]; //6
  dp[1] = wine[0] + wine[1]; // 6+10
  dp[2] = Math.max(wine[0] + wine[1], wine[0] + wine[2], wine[1] + wine[2]);
  for (let j = 3; j < N; j++) {
    dp[j] = Math.max(
      dp[j - 1], // 직전
      dp[j - 2] + wine[j], //
      dp[j - 3] + wine[j] + wine[j - 1]
    );
  }
  return dp[N - 1];
}
console.log(wine(glass));
