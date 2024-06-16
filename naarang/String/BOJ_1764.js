const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

// 듣도 못한 사람
let no_listen = {}; // 시간초과로 Dictionary 사용
for (let i = 0; i < N; i++) {
  no_listen[input.shift()] = true;
}

let answer = [];
// 듣도 못한 사람 중에 보지도 못한 사람
for (let i = 0; i < M; i++) {
  if (no_listen[input[i]]) {
    answer.push(input[i]);
  }
}

console.log(answer.length);
// 사전순 정렬
console.log(answer.sort().join("\n"));

// 이 문제를 set으로도 많이 풀었는데 dictionary와의 차이점을 정리하기
