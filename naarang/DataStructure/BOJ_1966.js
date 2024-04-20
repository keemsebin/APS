const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let n = parseInt(input[0]);
let line = 1;

for (let i = 0; i < n; i++) {
  let num = input[line++].split(" ").map(Number);
  let doc = input[line++].split(" ").map(Number); // queue

  let target = num[1];
  let count = 0;
  // 현재 가장 큰 수가 아니면 맨 뒤로 보내기
  while (true) {
    if (doc[0] === Math.max(...doc)) {
      count++;
      doc.shift();
      if (target === 0) {
        console.log(count);
        break;
      }
    } else {
      doc.push(doc.shift());
    }

    if (target === 0) {
      target = doc.length - 1;
    } else {
      target--;
    }
  }
}
// queue
// queue.pop() / queue.shift()
// 배열.unshift() : 배열의 맨 앞에 값을 추가함
// 배열.shift() : 배열의 맨 앞에 값을 제거함
