const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input.shift());
const complex = input.map((v) => v.split("").map(Number));
const isVisit = Array.from({ length: N }, () => Array(N).fill(false));

const ans = [];

const dir = [
  [1, 0],
  [0, 1],
  [0, -1],
  [-1, 0],
];

function complexNum(x, y) {
  const queue = [];
  queue.push([x, y]);
  isVisit[x][y] = true;
  let count = 1;
  while (queue.length) {
    const [dx, dy] = queue.shift();
    for (let i = 0; i < dir.length; i++) {
      const [nx, ny] = [dx + dir[i][0], dy + dir[i][1]];
      if (
        0 <= nx &&
        0 <= ny &&
        nx < N &&
        ny < N &&
        !isVisit[nx][ny] &&
        complex[nx][ny] === 1
      ) {
        isVisit[nx][ny] = true;
        count++;
        queue.push([nx, ny]);
      }
    }
  }
  return count;
}
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (complex[i][j] === 1 && !isVisit[i][j]) {
      ans.push(complexNum(i, j));
    }
  }
}
console.log(ans.length);
ans.sort((a, b) => a - b);
ans.forEach((item) => console.log(item));
