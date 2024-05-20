const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input.shift());
let wine = Array.from({ length: n }, (v, i) => Number(input[i]));

let dp = new Array(n + 1).fill(0);

dp[1] = wine[0];
dp[2] = wine[0] + wine[1];
// 앞에 선택한 dp값이 이미 연속 2개일수도 있다는 것을 고려하면 3가지 경우 존재
for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 3] + wine[i - 2] + wine[i - 1],
    dp[i - 2] + wine[i - 1],
    dp[i - 1]
  );
}

console.log(dp[n]);
