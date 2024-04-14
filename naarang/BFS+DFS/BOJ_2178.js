const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);
let miro = Array.from({ length: n }, (v, i) =>
  input[i + 1].split("").map(Number)
);
let check = Array.from({ length: n }, () => Array.from({ length: m }, () => 0)); // 방문 여부를 체크

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
let queue = [];

function BFS(x, y) {
  queue.push([x, y]);
  check[x][y] = 1;
  while (queue.length > 0) {
    const [x1, y1] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let x2 = x1 + dx[i];
      let y2 = y1 + dy[i];
      if (
        x2 >= 0 &&
        x2 < n &&
        y2 >= 0 &&
        y2 < m &&
        miro[x2][y2] === 1 &&
        !check[x2][y2]
      ) {
        check[x2][y2] = check[x1][y1] + 1; // 지나온 최소 칸 수
        queue.push([x2, y2]); // 다음에 갈 좌표들을 넣기
      }
    }
  }
}

BFS(0, 0);
console.log(check[n - 1][m - 1]);

// DFS 시간 초과 발생 -> BFS는 너비 우선 탐색으로, 최단 경로를 구하기에 적절
