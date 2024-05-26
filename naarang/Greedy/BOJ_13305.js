const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());
let distance = input
  .shift()
  .split(" ")
  .map((v) => BigInt(v));
let price = input
  .shift()
  .split(" ")
  .map((v) => BigInt(v));
let answer = BigInt(0);

// prev로 현재 값 저장 뒤에 더 작은게 나오면 그걸로 바꿈 그니깐 뒤에 있는 값이 크면 미리 사기
let min = price[0];
for (let i = 0; i < price.length - 1; i++) {
  if (min > price[i]) {
    min = price[i];
  }
  answer += min * distance[i];
}

console.log(String(answer));

// 부분 성공 ? 원래의 제약조건 이외에 아무런 제약조건이 없다..? -> 숫자가 커져서 BigInt 사용해야함...
// BigInt 개념 한 번 더 정리하기
