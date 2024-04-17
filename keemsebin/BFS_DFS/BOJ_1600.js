const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const K = Number(input[0]);
const [W, H] = input[1].split(" ").map(Number);
const map = input.slice(2).map((v) => v.split(" ").map(Number));
const isVisit = Array.from({ length: H }, () =>
  Array.from({ length: W }, () => Array(K + 1).fill(false))
); // [x][y][k+1]의 배열
const dir = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
  [1, 2],
  [1, -2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
];

function bfs() {
  const queue = [[0, 0, 0]]; // x, y, k
  isVisit[0][0][0] = true; // x,y,k
  let move = 0;
  while (queue.length) {
    const length = queue.length;
    for (let l = 0; l < length; l++) {
      const [x, y, horseMoves] = queue.shift();
      if (x === W - 1 && y === H - 1) {
        return move;
      }
      for (let i = 0; i < dir.length; i++) {
        const nx = x + dir[i][0];
        const ny = y + dir[i][1];
        const nk = i < 4 ? horseMoves : horseMoves + 1; // 말의 움직임인지?

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < W &&
          ny < H &&
          !isVisit[ny][nx][nk] &&
          map[ny][nx] == 0
        ) {
          if (nk <= K) {
            isVisit[ny][nx][nk] = true;
            queue.push([nx, ny, nk]);
          }
        }
      }
    }
    move++;
  }

  return -1;
}

console.log(bfs());
