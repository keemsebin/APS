const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const stack = [];
const op = ["+", "-", "/", "*"];
const len = parseInt(input.shift());
const postfix = input.shift().split(""); // ABC*+DE/-

const cal = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "/": (a, b) => a / b,
  "*": (a, b) => a * b,
};

let operand = {};

// 아스키 코드 65번(A)부터 키-값 생성
for (i = 0; i < len; i++) {
  operand[String.fromCharCode(i + 65)] = parseInt(input[i]);
}
// op = {A:1, B:2, C:3, D:4, E:5}

// 연산자가 아닌 경우 숫자로 변환
const postfixNum = postfix.map((item) =>
  op.includes(item) ? item : operand[item]
);
// [1,2,3,*,+,4,5,/,-]

for (i = 0; i < postfix.length; i++) {
  let pos = postfixNum[i];

  if (op.includes(pos)) {
    let front = stack.pop();
    let back = stack.pop();

    let result = cal[pos];
    pos = result(back, front);
  }
  stack.push(pos);
}
console.log(stack[0].toFixed(2));
