const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let T = Number(input.shift());

// 중간의 중간을 찾으면서 양쪽이 대칭인지 확인해야 함
// (시작 index, 끝 index, 전체 배열)
function divide(start, end, paper) {
  // 길이가 1이면 반환
  if (start === end) return true;

  const mid = Math.floor((start + end) / 2);

  // 양쪽이 0 <-> 1이어야 함
  for (let i = start; i < mid; i++) {
    if (paper[i] === paper[end - i]) return false;
  }

  // 모두 true여야 YES
  return divide(start, mid - 1, paper) && divide(mid + 1, end, paper);
}

for (let t of input) {
  let paper = t.split("").map(Number);
  const result = divide(0, t.length - 1, paper);
  if (result) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
