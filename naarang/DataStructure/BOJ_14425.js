const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);
let S = new Set();
let answer = 0;

for (let i = 1; i <= n; i++) {
  S.add(input[i]);
}

for (let j = n + 1; j < input.length; j++) {
  if (S.has(input[j])) {
    answer++;
  }
}

console.log(answer);

// list로 indexOf, includes 메서드를 사용해서 제출하면 시간초과가 발생(2중 for문)한다. map, set자료구조를 항상 생각하자!
/**
Set 자료 구조
: 세트(set)는 한마디로 순서가 없는 중복되지 않은 데이터의 집합, (배열과 달리 인덱스 사용 X)
Set 생성 및 초기화
const set = new Set();
const numSet = new Set([1, 2, 3]); // Set(3) {1, 2, 3}
추가
set.add(값);
삭제
set.delete(값);
조회
set.has(값);
값의 개수
set.size;
모든 값 제거
set.clear();
 */
