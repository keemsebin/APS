const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());
// 시간 초과 해결한 코드
let consulting = input.map((item) => item.split(" ").map(Number));
// 시간 초과 난 코드....
// let consulting = Array.from({ length: N }, () =>
//   input.shift().split(" ").map(Number)
// );

let dp = new Array(N + 1).fill(0); // dp[i]는  i - 1 날짜에서 최대값이어야 하므로 N + 1
for (let i = 0; i < N; i++) {
  let [T, P] = consulting[i];
  if (i + T <= N) {
    dp[i + T] = Math.max(dp[i + T], dp[i] + P);
  }
  // 지금값과 이전 값 중 큰 값을 저장해서 값을 갱신해야 했음!!!
  dp[i + 1] = Math.max(dp[i], dp[i + 1]);
}

console.log(dp[N]);

// 시간 초과앙아아아ㅏ악!!!!
// 해결하긴 했는데 진짜 느리다.. 이게 javascript라서 그런건지 내 코드가 그런건지ㅠㅠ
