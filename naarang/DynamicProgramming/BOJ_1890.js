const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());
let board = Array.from({ length: N }, () =>
  input.shift().split(" ").map(Number)
);

let dp = Array.from({ length: N }, () => new Array(N).fill(BigInt(0))); // 경우의 수
dp[0][0] = BigInt(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    let jump = board[i][j];
    if (jump === 0) continue;
    if (i + jump < N) {
      dp[i + jump][j] += dp[i][j];
    }
    if (j + jump < N) {
      dp[i][j + jump] += dp[i][j];
    }
  }
}
console.log(dp[N - 1][N - 1].toString());

// 큐를 사용해서 다음 장소를 탐색하니깐 시간 초과 났네..? 그냥 2중 for문으로 모두 탐색하면서 가능한 경우 더해주는게 훨씬 빨랐다...
// 경로의 개수는 263-1보다 작거나 같다 라는 조건이 있기 때문에 Number형 변수를 쓰면 안되므로 BigInt자료형을 사용해야 한다

/**
BigInt vs Number 정리하기!
 */
