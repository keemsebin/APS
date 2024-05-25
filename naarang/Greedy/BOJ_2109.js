const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

// 비용이 큰 순서로 정렬하되, 그 비용에 해당하는 날짜를 역순으로 1일까지 탐색하면서 들어갈 자리가 있는지 확인
let N = Number(input.shift());
let money = [];
let answer = 0;

for (let i = 0; i < N; i++) {
  money.push(input[i].split(" ").map(Number));
}
money.sort((a, b) => b[0] - a[0]);

// 여기서 날짜를 채워가기
let day = new Array(1001).fill(false);

for (let m of money) {
  while (m[1] > 0) {
    if (!day[m[1]]) {
      day[m[1]] = true;
      answer += m[0];
      break;
    }
    m[1] -= 1;
  }
}

console.log(answer);
