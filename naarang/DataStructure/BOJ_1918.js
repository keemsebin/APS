const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("");

let stack = [];
let answer = "";

for (let x of input) {
  // 연산자 우선순위가 같거나 높은 것이 stack의 top에 있으면 pop
  if (x === "+" || x === "-") {
    while (stack.length > 0 && stack[stack.length - 1] !== "(") {
      answer += stack.pop();
    }
    stack.push(x);
  } else if ((x === "*") | (x === "/")) {
    while (
      stack.length > 0 &&
      (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")
    ) {
      answer += stack.pop();
    }
    stack.push(x);
  } else if (x === "(") {
    stack.push(x);
  } else if (x === ")") {
    while (stack.length > 0 && stack[stack.length - 1] !== "(") {
      answer += stack.pop();
    }
    // ( 연산자 제거하기
    stack.pop();
  } else {
    answer += x;
  }
}

// 마지막 스택에 남아있는 모든 연잔자 pop
while (stack.length > 0) {
  answer += stack.pop();
}

console.log(answer);
