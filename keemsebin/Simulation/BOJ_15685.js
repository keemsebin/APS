const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let N = Number(input[0]);
  let arr = Array.from(Array(101), () => Array(101).fill(0));
  const dir = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1],
  ];

  for (let i = 1; i <= N; i++) {
    let [x, y, d, g] = input[i].split(" ").map(Number);
    let dragon = [
      [x, y],
      [x + dir[d][0], y + dir[d][1]],
    ];
    arr[x][y] = 1; // 시작 커브
    arr[x + dir[d][0]][y + dir[d][1]] = 1; // 끝 커브

    // 0세대부터 g세대까지
    for (let j = 0; j < g; j++) {
      let len = dragon.length;
      let [nx, ny] = dragon[len - 1]; // 마지막 점
      for (let k = len - 2; k >= 0; k--) {
        let [x, y] = dragon[k];
        // 90도 회전
        let dx = nx - x;
        let dy = ny - y;
        let [rx, ry] = [nx + dy, ny - dx];
        dragon.push([rx, ry]);
        arr[rx][ry] = 1;
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (arr[i][j] && arr[i + 1][j] && arr[i][j + 1] && arr[i + 1][j + 1]) {
        ans++; // 정사각형이면 ++
      }
    }
  }
  console.log(ans);
});
