//const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = [7, "9 9 4 1 4 9 9"];
const N = Number(input[0]);
const honey = input[1].split(" ").map(Number); // 각 도시 사이의 거리
let ans = 0;

//각 위치까지의 꿀의 누적합을 계산해주지 않아서 문제 접근이 어려웠음.
let sectionSum = new Array(N).fill(0);
sectionSum[0] = honey[0];
for (let i = 1; i < N; i++) {
  sectionSum[i] = sectionSum[i - 1] + honey[i];
}

let sum = sectionSum[N - 1];

// honey[0] 고정
for (let i = 1; i < N - 1; i++) {
  let localMax = sum - honey[0] - honey[i];
  ans = Math.max(ans, localMax);
  console.log("ans", ans);
}

// honey[N - 1] 고정
for (let i = 1; i < N - 1; i++) {
  let localMax = sum - honey[N - 1] - honey[i];
  ans = Math.max(ans, localMax);
}

// sectionSum[N - 1] honey[0] 고정, 벌 - 꿀 - 벌
for (let i = 1; i < N - 1; i++) {
  let localMax =
    sectionSum[i] - honey[0] + sum - sectionSum[i - 1] - honey[N - 1];
  ans = Math.max(ans, localMax);
}
console.log(ans);
// 2 4 5
