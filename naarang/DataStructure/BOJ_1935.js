const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = 0;
let formula = input[1].split("");
let stack = [];

for (let f of formula) {
  if (f === "+") {
    let b = stack.pop();
    let a = stack.pop();
    stack.push(a + b);
  } else if (f === "-") {
    let b = stack.pop();
    let a = stack.pop();
    stack.push(a - b);
  } else if (f === "*") {
    let b = stack.pop();
    let a = stack.pop();
    stack.push(a * b);
  } else if (f === "/") {
    let b = stack.pop();
    let a = stack.pop();
    stack.push(a / b);
  } else {
    stack.push(parseInt(input[f.charCodeAt() - "A".charCodeAt() + 2]));
  }
}

answer = stack.pop();

console.log(answer.toFixed(2));

// 아스키코드 관련 자바스크립트 코드
/*
1. 문자 -> 아스키코드
문자.charCodeAt()
2. 아스키코드 -> 문자
String.fromCharCode(아스키코드)
*/

// 소수점 자리수 결정
/*
숫자.Fixed(원하는 소수점 자리수)
반올림 된 값을 반환!
 */
