const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());
let grade = input.shift().split(" ").map(Number);
let Q = Number(input.shift());
let miss = new Array(N + 1).fill(0);

for (let i = 1; i < N; i++) {
  miss[i] = miss[i - 1];
  if (grade[i - 1] > grade[i]) {
    miss[i] += 1;
  }
}

// 마지막 것도 갱신
miss[miss.length - 1] = miss[miss.length - 2];

let answer = [];
for (let i = 0; i < Q; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  //마지막으로 연주하는 y번 악보에선 절대 실수하지 않는다.
  if (miss[end] > miss[end - 1]) {
    answer.push(miss[end] - miss[start - 1] - 1);
  } else {
    answer.push(miss[end] - miss[start - 1]);
  }
}

console.log(answer.join("\n"));
