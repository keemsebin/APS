const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ").map(Number);
let student = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

// 차이값 계산한 배열
let gap = [];
for (let i = 0; i < N - 1; i++) {
  gap.push(student[i + 1] - student[i]);
}

// 결국 해당 배열에서 K-1개의 원소를 제외 가능
gap.sort((a, b) => a - b);
let answer = 0;
for (let i = 0; i < gap.length - K + 1; i++) {
  answer += gap[i];
}

console.log(answer);
