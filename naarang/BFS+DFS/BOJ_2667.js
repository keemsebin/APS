const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
// 1은 집이 있는 곳을, 0은 집이 없는 곳
let board = Array.from({ length: n }, (v, i) =>
  input[i + 1].split("").map(Number)
);

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

let answer = [];
let count = 0;
function DFS(x, y) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
      board[nx][ny] = 0; // 방문 체크
      count++;
      DFS(nx, ny);
    }
  }
  // //주변의 모든 곳이 1일 때 -> count를 이렇게 계산하니 이상해졌었음ㅠ
  // if (flag === 0) {
  //   console.log("bb: ", count);
  //   return count;
  // }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1) {
      board[i][j] = 0;
      DFS(i, j);
      answer.push(count + 1); // count -> 현재 나의 노드도 포함
      count = 0;
    }
  }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join("\n"));

// 단지 내의 개수를 어떻게 새야하나 고민했는데..
// 아예 전역변수로 놓고 매번 DFS 탐색이 끝날 때마다 초기화시키는 방법을 사용(DFS 안에 넣으면 중복값이 발생함..)
