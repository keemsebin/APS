const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
// const input = [];
// const input = ["2 3", "1 2 4", "8 16 32", 3, "1 1 2 3", "1 2 1 2", "1 3 2 3"];
const [N, M] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= N; i++) {
  arr[i - 1] = input[i].split(" ").map(Number);
}

const K = Number(input[N + 1]);
for (let z = 0; z < K; z++) {
  const [i, j, x, y] = input[N + 2 + z].split(" ").map(Number);
  let sum = 0;
  // index가 0 부터 시작하므로 -1
  for (let a = i - 1; a <= x - 1; a++) {
    for (let b = j - 1; b <= y - 1; b++) {
      sum += arr[a][b];
    }
  }
  console.log(sum);
}
