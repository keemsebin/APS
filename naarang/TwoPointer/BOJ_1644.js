const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);

let nums = Array.from({ length: N + 1 }, (v, i) => i);
// N보다 작은 소수 구하기 - 에라토스테네스의 체

// 소수가 아니면 0으로 초기화
nums[0] = 0;
nums[1] = 0;

for (let i = 2; i * i <= N; i++) {
  // num의 제곱근까지 반복하면서 해당 수의 배수를 지우고 남는 수를 구하기
  if (nums[i]) {
    for (let j = i * i; j <= N; j += i) {
      nums[j] = 0;
    }
  }
}

let prime = nums.filter((value) => value);

// 찾기
let start = 0;
let end = 0;
let sum = prime[end];
let answer = 0;
let length = prime.length;

while (start <= end && end < length) {
  if (sum < N) {
    sum += prime[++end];
  } else {
    if (sum === N) {
      answer++;
    }
    sum -= prime[start++];
  }
}

console.log(answer);
