const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// 차이를 저장할 배열
let diff = [];
for (let i = 0; i < N - 1; i++) {
  diff.push(arr[i + 1] - arr[i]);
}
// 2 2 1 4
diff.sort((a, b) => a - b);
let ans = 0;
// 가장 큰 차이부터 K-1개를 제외한 나머지를 더해준다.
for (let i = 0; i < N - K; i++) {
  ans += diff[i];
}
console.log(ans);
