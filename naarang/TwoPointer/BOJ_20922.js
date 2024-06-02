const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);
let check = new Array(100001).fill(0); // 문제 잘 못보고 길이를 N+1로 잡아서 오류났었음ㅠ

let answer = 0;
let count = 0;
let start = 0;
let end = 0;

check[nums[end]]++;
count++;
while (start < N && end < N) {
  if (count > answer) {
    answer = count;
  }
  end++;
  count++;
  check[nums[end]]++;
  if (check[nums[end]] > K) {
    // 해당 값 start가 만날 때까지 증가!
    while (nums[start] !== nums[end]) {
      check[nums[start]]--;
      start++;
      count--;
    }
    check[nums[start++]]--;
    count--;
  }
}
console.log(answer);
