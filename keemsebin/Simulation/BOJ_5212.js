const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [R, C] = input[0].split(" ").map(Number);
  let arr = [];
  let result = Array.from(Array(R), () => Array(C).fill("."));

  for (let i = 1; i <= R; i++) {
    arr.push(input[i]);
  }
  const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let see = ".";

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      // X인 경우 주변에 바다가 3개 미만이면
      if (arr[i][j] === "X") {
        let count = 0;
        for (let k = 0; k < 4; k++) {
          let nx = i + dir[k][0];
          let ny = j + dir[k][1];
          // nx, ny가 범위 안에 있고, 바다인 경우
          if (0 <= nx && nx < R && 0 <= ny && ny < C) {
            if (arr[nx][ny] === see) {
              count++;
            }
          } else {
            // 가장 자리에 있는 경우 바다로 간주
            count++;
          }
        }
        if (count < 3) {
          result[i][j] = "X";
        }
      }
    }
  }

  let minX = R;
  let maxX = 0;
  let minY = C;
  let maxY = 0;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (result[i][j] === "X") {
        minX = Math.min(minX, i);
        maxX = Math.max(maxX, i);
        minY = Math.min(minY, j);
        maxY = Math.max(maxY, j);
      }
    }
  }

  for (let i = minX; i <= maxX; i++) {
    let line = "";
    for (let j = minY; j <= maxY; j++) {
      line += result[i][j];
    }
    console.log(line);
  }
});
