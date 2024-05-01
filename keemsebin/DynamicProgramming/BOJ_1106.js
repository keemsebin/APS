const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [C, N] = input[0].split(" ").map(Number);
let arr = [];
for (let c = 0; c < N; c++) {
  arr.push(input[c + 1].split(" ").map(Number));
}

const dp = new Array(C + 100).fill(Infinity);
dp[0] = 0;

for (let i = 0; i < N; i++) {
  const [cost, customer] = arr[i];
  for (let j = customer; j < C + 100; j++) {
    dp[j] = Math.min(dp[j], dp[j - customer] + cost);
  }
}

console.log(Math.min(...dp.slice(C)));
