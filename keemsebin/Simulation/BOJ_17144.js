const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [R, C, T] = input[0].split(" ").map(Number);
  let arr = input.slice(1, R + 1).map((e) => e.split(" ").map(Number));

  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // 공기청정기 찾기
  let airCleaner = [];
  for (let i = 0; i < R; i++) {
    if (arr[i][0] === -1) {
      airCleaner.push(i);
    }
  }
  const topAirCleaner = (air) => {
    // 아래로
    for (let i = air - 1; i > 0; i--) {
      arr[i][0] = arr[i - 1][0];
    }
    // 왼쪽에서 오른쪽으로
    for (let i = 0; i < C - 1; i++) {
      arr[0][i] = arr[0][i + 1];
    }
    // 위로
    for (let i = 0; i < air; i++) {
      arr[i][C - 1] = arr[i + 1][C - 1];
    }
    // 오른쪽에서 왼쪽으로
    for (let i = C - 1; i > 1; i--) {
      arr[air][i] = arr[air][i - 1];
    }
    arr[air][1] = 0;
  };

  const downAirCleaner = (air) => {
    // 위로
    for (let i = air + 1; i < R - 1; i++) {
      arr[i][0] = arr[i + 1][0];
    }
    // 왼쪽에서 오른쪽으로
    for (let i = 0; i < C - 1; i++) {
      arr[R - 1][i] = arr[R - 1][i + 1];
    }
    // 아래로
    for (let i = R - 1; i > air; i--) {
      arr[i][C - 1] = arr[i - 1][C - 1];
    }
    // 오른쪽에서 왼쪽으로
    for (let i = C - 1; i > 1; i--) {
      arr[air][i] = arr[air][i - 1];
    }
    arr[air][1] = 0;
  };

  // 미세먼지 확산
  for (let t = 0; t < T; t++) {
    let temp = Array.from({ length: R }, () => Array(C).fill(0));
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (arr[i][j] > 0) {
          let num = arr[i][j];
          let spread = Math.floor(num / 5);
          let count = 0;
          for (let k = 0; k < 4; k++) {
            let nx = i + dir[k][0];
            let ny = j + dir[k][1];
            if (0 <= nx && nx < R && 0 <= ny && ny < C && arr[nx][ny] !== -1) {
              temp[nx][ny] += spread;
              count++;
            }
          }
          arr[i][j] -= spread * count;
        }
      }
    }
    // 임시 배열에 확산된 먼지를 원래 배열에 추가
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        arr[i][j] += temp[i][j];
      }
    }

    topAirCleaner(airCleaner[0]);
    downAirCleaner(airCleaner[1]);
  }

  // 미세먼저 양 출력
  const dust = (arr) => {
    let sum = 0;
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (arr[i][j] > 0) {
          sum += arr[i][j];
        }
      }
    }
    return sum;
  };

  console.log(dust(arr));
});
