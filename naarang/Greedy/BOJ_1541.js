const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let results = [];
// -가 나오면 ( 추가, 다시 -가 나오면 앞에 ) 추가 -> -를 기준으로 끊어주기!
let expression = input[0].split("-");
for (let str of expression) {
  let sum = 0;

  // () 안의 식을 계산
  let numbers = str.split("+");
  for (let n of numbers) {
    sum += parseInt(n);
  }
  results.push(sum);
}

// 첫번째 원소를 제외한 건 모두 -
let answer = results.shift();
for (let r of results) {
  answer -= r;
}

console.log(answer);
