const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let nums = Array.from({ length: N }, (v, i) => Number(input[i])).sort(
  (a, b) => a - b
);

let min = Infinity;
let start = 0;
let end = 0;

while (start <= end && end < N) {
  const result = Math.abs(nums[start] - nums[end]);
  if (result < M) {
    end++;
  } else {
    if (min > result) {
      min = result;
    }
    start++;
  }
}

console.log(min);

// Infinity의 경우 양의 무한대를 뜻하고 -Infinity는 음의 무한대를 뜻함
