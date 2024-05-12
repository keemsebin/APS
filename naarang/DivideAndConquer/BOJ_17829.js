const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift(" "));
let matrix = input.map((item) => item.split(" ").map(Number));
let answer = [];

// (시작 x 좌표, 시작 y 좌표, 사이즈)
function divide(x, y, size) {
  // 계속 분할 중에 2 x 2이면
  if (size === 2) {
    return merge(x, y);
  }

  // 아니면 계속 분할
  // 이때 lt, rt, lb, rb로 최종 2 x 2일 때를 계산하는 것이 포인트! -> 이 부분이 어렵다..ㅠㅠ
  const next_size = size / 2;
  const lt = divide(x, y, next_size);
  const rt = divide(x, y + next_size, next_size);
  const lb = divide(x + next_size, y, next_size);
  const rb = divide(x + next_size, y + next_size, next_size);

  // 최종 2 x 2 행렬 계산
  answer = [lt, rt, lb, rb];
  answer.sort((a, b) => b - a);
  return answer[1];
}

function merge(x, y) {
  // 2번째로 큰 값 반환하기
  let arr = [
    matrix[x][y],
    matrix[x + 1][y],
    matrix[x][y + 1],
    matrix[x + 1][y + 1],
  ];
  arr.sort((a, b) => b - a);
  return arr[1];
}

console.log(divide(0, 0, N));
