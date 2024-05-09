const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let dp = new Array(10).fill(1); // 0 ~ 9로 끝나는 숫자의 개수
dp[0] = 0; // 첫째자리 0 금지

for (let i = 1; i < input; i++) {
  let next_dp = new Array(10).fill(0); // 새로운 값 담아서
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      next_dp[0] = dp[1];
      continue;
    }
    if (j === 9) {
      next_dp[9] += dp[8];
      continue;
    }
    next_dp[j] += dp[j - 1] + dp[j + 1];
  }

  for (let j = 0; j <= 9; j++) {
    // 넣어주기
    dp[j] = next_dp[j] % 1000000000;
  }
}

let answer = dp.reduce((a, b) => (a + b) % 1000000000, 0);
// 계속 시간초과 떠서 이상하다고 생각했는데.. 틈틈히 모듈러 연산이 필요했던 듯ㅠ
console.log(answer % 1000000000);

/* 배열의 합 -> reduce()
배열을 순차적으로 순회하면서 배열의 값을 누적하는데 유용
arr.reduce(callback[, initialValue])

initialValue가 없으면 처음 원소값이 initialValue가 되고 두번째 원소부터 순환함
이때 callback 함수는 
const callback = (accumulator, currentValue) => accumulator + currentValue;
(accumulator에 currentValue값이 누적되는 것)
*/
