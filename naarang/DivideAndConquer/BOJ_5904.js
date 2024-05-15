const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

function divide(length, mid_length, idx) {
  const prev = Math.floor((length - mid_length) / 2); // S(n-1) 계산

  // 3개의 구간 중에서 찾는 인덱스가 어디에 있는지! 있는 곳만 탐색해서 메모리 초과 해결
  // S(n - 1) + m + o.. + S(n - 1)
  if (idx <= prev) {
    // 왼쪽
    return divide(prev, mid_length - 1, idx);
  } else if (idx > prev + mid_length) {
    // 오른쪽
    return divide(prev, mid_length - 1, idx - prev - mid_length);
  } else {
    // 가운데
    if (idx - prev - 1) {
      return "o";
    } else {
      return "m";
    }
  }
}

// 메모리 초과 발생 -> N 이상의 길이가 될 때의 S(n)값을 찾기 -> 그래도 메모리 초과?!
// -> 문자열 최대의 크기가 10^9가 되버려서.. 문자열을 모두 계산하면 안됨
let len = 3;
let n = 0;
while (len < N) {
  len = len + 1 + ++n + 2 + len;
}
console.log(divide(len, n + 3, N));

// 문자열 곱셈
// '문자'.repeat("길이");
