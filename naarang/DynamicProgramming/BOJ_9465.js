const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let test_case = Number(input.shift());
for (let i = 0; i < test_case; i++) {
  let num = Number(input.shift());
  let point_array = Array.from({ length: 2 }, () =>
    input.shift().split(" ").map(Number)
  );

  let dp = Array.from({ length: num }, () => [0, 0, 0]); // [윗줄 선택, 아랫줄 선택, 패스]

  dp[0][0] = point_array[0][0]; // 1번째 1줄 선택
  dp[0][1] = point_array[1][0]; // 1번째 2줄 선택

  for (let j = 1; j < num; j++) {
    dp[j][0] = Math.max(dp[j - 1][2], dp[j - 1][1]) + point_array[0][j];
    dp[j][1] = Math.max(dp[j - 1][2], dp[j - 1][0]) + point_array[1][j];
    dp[j][2] = Math.max(dp[j - 1][0], dp[j - 1][1], dp[j - 1][2]); // Math.max(...dp[j - 1])로 쓰면 더 간편
  }

  console.log(Math.max(...dp[num - 1]));
}
