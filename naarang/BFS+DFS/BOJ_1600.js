const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let k = Number(input[0]);
let [w, h] = input[1].split(" ").map(Number);
// 0 평지, 1 장애물
let board = Array.from({ length: h }, (v, i) =>
  input[i + 2].split(" ").map(Number)
);
let check = Array.from({ length: h }, () =>
  Array.from({ length: w }, () => Array(k + 1).fill(false))
);

// 인접한 곳 이동
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
// k번 말 점프 이동
let dkx = [1, 2, 2, 1, -1, -2, -2, -1];
let dky = [2, 1, -1, -2, -2, -1, 1, 2];

let queue = [];
function BFS() {
  queue.push([0, 0, 0, 0]);
  check[0][0][0] = true;
  while (queue.length > 0) {
    let [x, y, kq, mq] = queue.shift();

    if (x === h - 1 && y === w - 1) {
      console.log(mq);
      return;
    }

    // 말처럼 이동
    if (kq < k) {
      for (let i = 0; i < 8; i++) {
        let nx = x + dkx[i];
        let ny = y + dky[i];
        // 시간 초과 발생한 코드...
        // if (
        //   nx >= 0 &&
        //   nx < h &&
        //   ny >= 0 &&
        //   ny < w &&
        //   !check[nx][ny][kq] &&
        //   board[nx][ny] === 0
        // ) {
        //   check[nx][ny][kq + 1] = true;
        //   queue.push([nx, ny, kq + 1, mq + 1]);
        // }
        // 조건문을 나누어서 시간 초과 해결...
        if (nx < 0 || ny < 0 || nx >= h || ny >= w) continue;
        if (check[nx][ny][kq + 1] || board[nx][ny] === 1) continue;
        check[nx][ny][kq + 1] = true;
        queue.push([nx, ny, kq + 1, mq + 1]);
      }
    }

    // 그냥 이동
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      // 시간 초과 발생한 코드...
      // if (
      //   nx >= 0 &&
      //   nx < h &&
      //   ny >= 0 &&
      //   ny < w &&
      //   !check[nx][ny][kq] &&
      //   board[nx][ny] === 0
      // ) {
      //   check[nx][ny][kq] = true;
      //   queue.push([nx, ny, kq, mq + 1]);
      // }
      // 조건문을 나누어서 시간 초과 해결...
      if (nx < 0 || ny < 0 || nx >= h || ny >= w) continue;
      if (check[nx][ny][kq] || board[nx][ny] === 1) continue;
      check[nx][ny][kq] = true;
      queue.push([nx, ny, kq, mq + 1]);
    }
  }

  console.log(-1); // 불가능한 경우
}

BFS();

// 같은 위치라고 해도 해당 위치까지 도달하는 과정에서 사용된 말의 이동 능력 횟수에 따라 원숭이의 동작수의 최솟값이 달라진다
// -> 이것 때문에 계속 틀렸던 것 같음..
// queue[x, y, k(사용 횟수), 이동 횟수]
// check[x][y][k + 1] : 방문 여부 체크(boolean) 배열
// -> 같은 위치여도 말의 이동 능력 사용 횟수가 다르면 새로운 방문이라고 판단해야 함ㅠ
