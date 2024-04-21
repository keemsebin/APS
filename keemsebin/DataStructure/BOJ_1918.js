const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const stack = [];
const opStack = [];
const op = ["+", "-", "/", "*"];
function priority(op){
  if(op === "+" || op === "-") return 1;
  if(op === "*" || op === "/") return 2;
  return 0;
}
// 스택에 문자열을 하나씩 push
// op일 경우 opStack에 push
// 우선순위가 높을 경우 opStack에 push
// 우선순위가 낮을 경우 opStack에서 pop -> stack에 push

for(let i = 0; i< input.length; i++){
  let current = input[i];
  if (current === "("){
    opStack.push(current);
  } else if (current ===")"){
    while (opStack[opStack.length - 1] !== "(") {
      stack.push(opStack.pop());
    }
    opStack.pop();
  } else if (op.includes(current)) {
    // 우선 순위가 높을 경우
    while (opStack.length && priority(opStack[opStack.length - 1]) >=  priority(current)) {
      stack.push(opStack.pop());
    }
    opStack.push(current);
  } else {
    stack.push(current); 
  }
};

while (opStack.length > 0) {
  stack.push(opStack.pop());
}

console.log(stack.join(""));
