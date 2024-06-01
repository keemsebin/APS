const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let sum = 0;

// 전체합
const total = arr.reduce((acc, cur) => acc + cur, 0);

// 부분쌍의 곱의 합
// 나 자신 * 나 자신을 제외한 나머지
for (let i = 0; i < N; i++) {
  sum += arr[i] * (total - arr[i]); // 1 * 2-1 + -2 * 2+1 + 3 * 2-2
}
// 2번씩 계산돼서 나눠줘야됨
sum = sum / 2;
console.log(sum);
