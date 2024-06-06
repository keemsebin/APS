const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const difficult = input[1].split(" ").map(Number);
const question = Number(input[2]);

// 다음과 같이 작성하면 O(N^2)이기 때문에 시간초과 발생
// 연주하는 악보가 다음 연주할 악보보다 difficult가 높은 경우 실수함. cnt ++
// for (let i = 0; i < question; i++) {
//   const [a, b] = input[i + 3].split(" ").map(Number);

//   let cnt = 0;
//   for (let j = a - 1; j < b - 1; j++) {
//     if (difficult[j] > difficult[j + 1]) {
//       cnt++;
//     }
//   }

//   console.log(cnt);
// }

// 실수가 발생한 구간을 저장하는 배열
//  0 0 0 0 1 0 1 0 1
const mistake = Array(N).fill(0);
for (let i = 0; i < N - 1; i++) {
  if (difficult[i] > difficult[i + 1]) {
    mistake[i + 1] = 1;
  }
}

// 실수 횟수를 포함하여 누적합 계산
const sum = Array(N).fill(0);
for (let j = 1; j <= N; j++) {
  sum[j] = sum[j - 1] + mistake[j];
}

// 실수 횟수를 출력
let result = [];
for (let i = 0; i < question; i++) {
  const [a, b] = input[i + 3].split(" ").map(Number);
  result.push(sum[b - 1] - sum[a - 1]);
  // console.log(result); 바로 출력하면 시간초과 발생
}
console.log(result.join("\n"));
