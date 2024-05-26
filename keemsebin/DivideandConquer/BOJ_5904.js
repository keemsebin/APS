let input = require("fs").readFileSync("/dev/stdin").toString().trim();
const N = Number(input);

function findMoo(n, k, length) {
  const prevLength = (length - k - 3) / 2; // 이전 S(k-1)의 길이

  if (n <= prevLength) {
    return findMoo(n, k - 1, prevLength); // 왼쪽 S(k-1) 탐색
  } else if (n > prevLength + k + 3) {
    return findMoo(n - prevLength - k - 3, k - 1, prevLength); // 오른쪽 S(k-1) 탐색
  } else {
    // 중앙 'moo' 부분
    return n === prevLength + 1 ? "m" : "o";
  }
}

function solve(n) {
  let length = 3; // S(0) = "moo"
  let k = 0; // 초기 k 값

  // S(k)의 전체 길이가 n보다 커질 때까지 반복
  while (n > length) {
    k += 1;
    length = length * 2 + k + 3; // S(k)의 길이 업데이트
  }

  return findMoo(n, k, length);
}

console.log(solve(N));
