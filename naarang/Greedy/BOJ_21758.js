const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());
let honey = input[0].split(" ").map(Number);

// 제일 멀리있을수록 많이 꿀 가져가는 것 아닌가?
// 한쪽에 꿀통을 놓으면 꿀통있는 곳부터 2배하면서 더해가는 셈 -> 벌 시작1 지점을 제외하고 벌 시작2 지점까지 1번만 더함

let left = 0; // 왼쪽 꿀통일 때
let right = 0; // 오른쪽 꿀통일 때
for (let h of honey) {
}
