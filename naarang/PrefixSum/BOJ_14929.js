const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let nums = input[1].split(" ").map(Number);
// x1 * 0 + x2 * (0 + x1) + x3 * (0 + x1 + x2) ...

let prefix = 0;
let answer = 0;

for (let i = 0; i < nums.length; i++) {
  answer += prefix * nums[i];
  prefix += nums[i];
}

console.log(answer);
