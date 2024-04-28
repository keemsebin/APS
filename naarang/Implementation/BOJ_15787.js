const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number);
// 승차 : 1, 하차 : 0
let train = Array.from({ length: N }, () => Array(20).fill(0));
let order = Array.from({ length: M }, (v, i) =>
  input[i + 1].split(" ").map(Number)
);

for (let x of order) {
  if (x[0] === 1) {
    train[x[1] - 1][x[2] - 1] = 1;
  } else if (x[0] === 2) {
    train[x[1] - 1][x[2] - 1] = 0;
  } else if (x[0] === 3) {
    train[x[1] - 1].pop();
    train[x[1] - 1].unshift(0);
  } else if (x[0] === 4) {
    train[x[1] - 1].shift();
    train[x[1] - 1].push(0);
  }
}

let answer = [];

for (let t of train) {
  let str = t.join("");
  if (answer.indexOf(str) === -1) {
    answer.push(str);
  }
}
console.log(answer.length);

// 같은 배열이 있는지 어떻게 빠르게 비교하지?ㅠ
// 2차원 배열의 중복 검사의 경우 -> indexOf, set 등을 사용할 수 없었다..
// 따라서 배열의 원소를 문자열로 변경함!
