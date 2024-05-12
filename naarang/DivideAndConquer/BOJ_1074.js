const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, r, c] = input[0].split(" ").map(Number);

let count = 0;
function divide(x, y, size) {
  if (size < 2) {
    if (x === r && y === c) {
      console.log(count);
      return;
    }
    count++;
    return;
  }

  // 시간 초과 해결 -> 해당 index 이외인 부분은 분할 탐색 안함
  // 사분면으로 구분하려고 했으나 잘 안됨ㅠ
  const next_size = size / 2;
  if (r >= x && x + size >= r && y + size >= c && y <= c) {
    divide(x, y, next_size);
    divide(x, y + next_size, next_size);
    divide(x + next_size, y, next_size);
    divide(x + next_size, y + next_size, next_size);
  } else {
    count += size * size;
  }
}

divide(0, 0, 2 ** N);
