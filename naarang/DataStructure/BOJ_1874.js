const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 더 나은 방법 : const [n, ...nums] = input;
let answer = [];
let n = input[0];
let stack = [];
let index = 1;
// 1 ~ n까지 초기화
for (let i = 1; i <= n; i++) {
  stack.push(i);
  answer.push("+");

  while (stack[stack.length - 1] <= input[index]) {
    if (stack[stack.length - 1] === input[index]) {
      stack.pop();
      answer.push("-");
      index++;
    } else {
      break;
    }
  }
}

if (stack.length === 0) {
  console.log(answer.join("\n"));
} else {
  console.log("NO");
}

// if (stack.length > 0) {
//   console.log("NO");
// }
