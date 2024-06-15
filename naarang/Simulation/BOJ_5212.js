const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const [R, C] = input.shift().split(" ").map(Number);
let grid = Array.from({ length: R }, (v, i) => input[i].split(""));

const dx = [1, 0, -1, 0]; // 상하좌우
const dy = [0, 1, 0, -1];

let start = [R - 1, C - 1];
let end = [0, 0];

// . 바다, X 땅, * 잠김
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (grid[i][j] === "X") {
      let count = 0;
      for (let k = 0; k < 4; k++) {
        const x = i + dx[k];
        const y = j + dy[k];
        if (x >= 0 && x < R && y >= 0 && y < C) {
          if (grid[x][y] === ".") {
            count++;
          }
        } else {
          count++; // 지도를 벗어나는 칸은 모두 바다
        }
      }
      if (count >= 3) {
        grid[i][j] = "*";
      } else {
        start[0] = Math.min(start[0], i);
        end[0] = Math.max(end[0], i);
        start[1] = Math.min(start[1], j);
        end[1] = Math.max(end[1], j);
      }
    }
  }
}

let answer = [];
for (let i = start[0]; i <= end[0]; i++) {
  let line = "";
  for (let j = start[1]; j <= end[1]; j++) {
    if (grid[i][j] === "*") {
      line += ".";
    } else {
      line += grid[i][j];
    }
  }
  answer.push(line);
}
console.log(answer.join("\n"));
