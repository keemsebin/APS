const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K, Q, M] = input[0].split(" ").map(Number);
const sleepCode = K > 0 ? input[1].split(" ").map(Number) : [];
const attendCode = input[2].split(" ").map(Number);
const queries = input
  .slice(3, 3 + M)
  .map((line) => line.split(" ").map(Number));

let sleep = new Array(N + 3).fill(false);
let attend = new Array(N + 3).fill(0);

for (let i = 0; i < K; i++) {
  sleep[sleepCode[i]] = true;
}

for (let i = 0; i < Q; i++) {
  let code = attendCode[i];
  if (!sleep[code]) {
    for (let j = code; j <= N + 2; j += code) {
      if (!sleep[j]) {
        attend[j] = 1;
      }
    }
  }
}

let prefixSum = new Array(N + 3).fill(0);
for (let i = 3; i < N + 3; i++) {
  prefixSum[i] = prefixSum[i - 1] + (attend[i] === 0 ? 1 : 0);
}
let results = [];
for (let i = 0; i < M; i++) {
  const [S, E] = queries[i];
  const result = prefixSum[E] - prefixSum[S - 1];
  // console.log(result); 안에서 출력하면 시간초과 발생..
  results.push(result);
}
console.log(results.join("\n"));
