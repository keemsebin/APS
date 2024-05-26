const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
let board = [];
const dir = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
let count;
for (let m = 0; m < N; m++) {
  board.push(input[m + 1].split(" ").map(Number));
}

let dp = new Array(N).fill(0).map(() => new Array(M).fill(-1));
function dfs(x, y) {
  if (x === N - 1 && y === M - 1) return 1;
  if (dp[x][y] !== -1) return dp[x][y]; // 이미 계산한 위치라면 그 값을 반환
  dp[x][y] = 0;
  for (let i = 0; i < 4; i++) {
    const curX = x + dir[i][0];
    const curY = y + dir[i][1];
    if (
      curX >= 0 &&
      curY >= 0 &&
      curX < N &&
      curY < M &&
      board[x][y] > board[curX][curY]
    )
      dp[x][y] += dfs(curX, curY);
  }
  return dp[x][y];
}

console.log(dfs(0, 0));
