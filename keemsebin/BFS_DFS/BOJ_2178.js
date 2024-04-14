const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number); // 도달해야 하는 좌표
const map = input.map((v) => v.split("").map(Number)); // input으로 받은 경로
const isVisit = Array.from({ length: N }, () => Array(M).fill(0)); //
const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
function bfs(x, y) {
  const queue = [];
  queue.push([x, y]);
  isVisit[x][y] = 1;
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < ds.length; i++) {
      const [nx, ny] = [x + ds[i][0], y + ds[i][1]];
      if (
        0 <= nx &&
        nx < N &&
        0 <= ny &&
        ny < M &&
        map[nx][ny] &&
        !isVisit[nx][ny]
      ) {
        isVisit[nx][ny] = isVisit[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

bfs(0, 0);
console.log(isVisit[N - 1][M - 1]);
