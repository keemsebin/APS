const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, S] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);

let start = 0;
let end = 0;
let sum = nums[end];
let min = Infinity;

while (start <= end && end < N) {
  if (sum < S) {
    sum += nums[++end];
  } else {
    if (min > end - start + 1) {
      min = end - start + 1;
    }
    sum -= nums[start++];
  }
}

console.log(min === Infinity ? 0 : min);
