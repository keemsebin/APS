const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let A = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [N, L, R] = input[0].split(" ").map(Number);
  let result = Array.from({ length: N }, () => Array(N).fill(0));
  let cnt = 0;
  let dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  for (let i = 0; i < N; i++) {
    A.push(input[1 + i].split(" ").map(Number));
  }

  // L명 이상, R명 이하인지 검사하는 함수
  const openLine = (first, second) => {
    let dif = Math.abs(first - second);
    return dif >= L && dif <= R;
  };

  const bfs = (i, j, check) => {
    let queue = [[i, j]]; // queue에 좌표를 저장
    let visited = [[i, j]]; //  방문한 좌표를 저장하는 배열 visited
    let sum = A[i][j];
    let count = 1;

    while (queue.length) {
      let [qi, qj] = queue.shift();
      check[qi][qj] = true;
      for (let k = 0; k < 4; k++) {
        let x = qi + dir[k][0];
        let y = qj + dir[k][1];
        if (
          0 <= x &&
          N > x &&
          0 <= y &&
          N > y &&
          !check[x][y] &&
          openLine(A[qi][qj], A[x][y])
        ) {
          check[x][y] = true;
          sum += A[x][y]; // 50 + 30
          queue.push([x, y]); // 0 1
          visited.push([x, y]); // 0 1
          count++;
        }
      }
    }
    let average = Math.floor(sum / count);
    for (let [x, y] of visited) {
      result[x][y] = average;
    }

    return visited;
  };

  while (true) {
    let flag = false;
    let check = Array.from({ length: N }, () => Array(N).fill(false));
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        // 방문하지 않은 경우에만 탐색이 진행되어야 함
        if (!check[i][j]) {
          const bfsResult = bfs(i, j, check);
          if (bfsResult.length > 1) flag = true; // 인구 이동이 발생한 경우 flag를 true로 변경
        }
      }
    }
    if (!flag) break;
    cnt++;
    // A 배열 업데이트
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        A[i][j] = result[i][j];
      }
    }
  }

  console.log(cnt);
});
