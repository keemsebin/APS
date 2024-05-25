const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, C] = input[0].split(" ").map(Number);
const M = Number(input[1]);
let truck = Array(N).fill(C); // 모든 구간의 초기 용량
let arr = [];
for (let i = 0; i < M; i++) {
  let [from, to, box] = input[i + 2].split(" ").map(Number);
  arr.push([from, to, box]);
}
arr.sort((a, b) => a[1] - b[1]);

let ans = 0;
for (let i = 0; i < M; i++) {
  let [from, to, box] = arr[i];
  let max = C;
  for (let j = from; j < to; j++) {
    max = Math.min(max, truck[j]); //40
  }
  let remain = Math.min(max, box); // 실제로 실을 수 있는 박스 수
  ans += remain; // 10 + 20 + 30 + 10
  for (let j = from; j < to; j++) {
    truck[j] -= remain; // 각 구간의 남은 용량 계산
  }
}

console.log(ans);
