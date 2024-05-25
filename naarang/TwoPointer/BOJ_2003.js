const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number);
let A = input[1].split(" ").map(Number);
let answer = 0;
let start = 0;
let end = 0;

let sum = A[end];

while (start < N && end < N) {
  if (sum === M) {
    answer++;
    sum += A[++end];
  } else if (sum <= M) {
    sum += A[++end];
  } else if (sum > M) {
    sum -= A[start++];
  }
}

console.log(answer);
