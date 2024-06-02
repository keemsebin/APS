const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, K, Q, M] = input.shift().split(" ").map(Number);
let sleep = input.shift().split(" ").map(Number);
let code = input
  .shift()
  .split(" ")
  .map((v) => !sleep.includes(Number(v)) && Number(v)); // 처음에 틀렸던 이유 : 출석 코드를 받은 학생이 수면 중인지 확인하는 부분이 빠짐!!!
let check = new Array(N + 3).fill(0);

for (let i = 3; i <= N + 2; i++) {
  check[i] = check[i - 1];

  if (sleep.includes(i)) {
    // 자는가?
    continue;
  }

  for (let c of code) {
    // 코드 받았는가?
    if (i % c === 0) {
      check[i] += 1;
      break;
    }
  }
}

let answer = [];
for (let i = 0; i < M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  const attendance = check[end] - check[start - 1]; // 출석한 사람
  answer.push(end - start + 1 - attendance);
}

console.log(answer.join("\n")); // 시간 초과 해결 -> 출력을 반복문 안에서 하지 않고 밖으로 뺌!
