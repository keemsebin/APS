const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const [R, C, T] = input.shift().split(" ").map(Number);
let room = Array.from({ length: R }, (v, i) => input[i].split(" ").map(Number));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

for (let i = 0; i < T; i++) {
  let next_room = Array.from({ length: R }, () => new Array(C).fill(0));
  let machine = []; // [위쪽, 아래쪽]

  // 확산
  for (let x = 0; x < R; x++) {
    for (let y = 0; y < C; y++) {
      if (room[x][y] === -1) {
        // 공기청정기이면
        next_room[x][y] = -1;
        machine.push([x, y]);
        continue;
      }
      let count = 0;
      for (let d = 0; d < 4; d++) {
        const nx = x + dx[d];
        const ny = y + dy[d];
        if (nx >= 0 && nx < R && ny >= 0 && ny < C && room[nx][ny] !== -1) {
          count++;
          next_room[nx][ny] += Math.floor(room[x][y] / 5);
        }
      }
      next_room[x][y] += room[x][y] - Math.floor(room[x][y] / 5) * count;
    }
  }

  /**
   * 배열 회전 찾아보기!
   */

  // 위쪽 기계 - 반시계
  const top_machine = machine[0][0];
  // 아래쪽
  for (let j = top_machine - 1; j > 0; j--) {
    next_room[j][0] = next_room[j - 1][0];
  }
  // 왼쪽
  for (let j = 0; j < C - 1; j++) {
    next_room[0][j] = next_room[0][j + 1];
  }
  // 위쪽
  for (let j = 0; j < top_machine; j++) {
    next_room[j][C - 1] = next_room[j + 1][C - 1];
  }
  // 오른쪽
  for (let j = C - 1; j > 1; j--) {
    next_room[top_machine][j] = next_room[top_machine][j - 1];
  }
  next_room[top_machine][1] = 0;

  // 아래쪽 기계 - 시계
  const down_machine = machine[1][0];
  // 위쪽
  for (let j = down_machine + 1; j < R - 1; j++) {
    next_room[j][0] = next_room[j + 1][0];
  }
  // 왼쪽
  for (let j = 0; j < C - 1; j++) {
    next_room[R - 1][j] = next_room[R - 1][j + 1];
  }
  // 아래쪽
  for (let j = R - 1; j > down_machine; j--) {
    next_room[j][C - 1] = next_room[j - 1][C - 1];
  }
  // 오른쪽
  for (let j = C - 1; j > 1; j--) {
    next_room[down_machine][j] = next_room[down_machine][j - 1];
  }
  next_room[down_machine][1] = 0;

  room = next_room;
}

let answer = 0;
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    answer += room[i][j];
  }
}

console.log(answer + 2); // 공기청정기 -2 제외
