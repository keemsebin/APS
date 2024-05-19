const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());
let money = [];
let answer = 0;

for (let i = 0; i < N; i++) {
  money.push(input[i].split(" ").map(Number));
}
money.sort((a, b) => b[0] - a[0]);

while (money.length > 0) {
  let select = 0; // 그날 가기로 한 index
  for (let i = 0; i < money.length; i++) {
    if (select + 1 >= money[i][1]) {
      // 해당 부분 강연가기
      break;
    }
    select++;
  }

  if (select >= money.length) {
    select = 0; // 만약에 급한게 없으면 첫번째 강의 선택
  }

  answer += money[select][0];
  money.splice(select, 1); // 간 곳 삭제

  // 다음날되면 감소
  for (let i = 0; i < money.length; i++) {
    money[i][1] -= 1;
    if (money[i][1] <= 0) {
      // 이제 못가는 곳 삭제
      money.splice(i, 1);
      continue;
    }
  }
}

console.log(answer);

// 배열.splice(시작 인덱스, 삭제할 원소 개수) 함수 : 배열의 특정 인덱스 제거 -> 우선 순위 큐 이용해보기
