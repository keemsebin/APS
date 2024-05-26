const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, d, k, c] = input.shift().split(" ").map(Number);
let sushi = Array.from({ length: N }, (v, i) => Number(input[i]));
let check = Array(d + 1).fill(0); // 윈도우에 있는 값 (가짓수를 새야 하므로!)
let count = 0; // 가짓수

// 고정된 크기 -> 슬라이딩 윈도우 사용
// 처음 윈도우값
for (let i = 0; i < k; i++) {
  if (check[sushi[i]] === 0) {
    count++;
  }
  check[sushi[i]]++;
}

let answer = count; // 최대 가짓수
let end = 0;
for (let start = 0; start < N; start++) {
  end = (start + k) % N; // 원형이므로 % SIZE 해서 index 검사

  if (count >= answer) {
    // 최대값일 경우 갱신
    if (check[c] === 0) {
      answer = count + 1;
    } else {
      answer = count;
    }
  }

  check[sushi[start]]--;
  if (check[sushi[start]] === 0) count--;
  if (check[sushi[end]] === 0) count++;

  check[sushi[end]]++;
}

console.log(answer);
