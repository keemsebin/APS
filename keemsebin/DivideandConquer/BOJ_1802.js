const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

//const input = [3, "0", "000", "1000110"];
const T = Number(input[0]);
let arr = [];

for (let i = 0; i < T; i++) {
  arr[i] = input[i + 1].split("").map(Number);
  console.log(fold(0, arr[i].length - 1, arr[i]) ? "YES" : "NO");
}

function fold(start, end, currentArr) {
  if (start >= end) return true;
  let mid = Math.floor((start + end) / 2);
  for (let i = start; i < mid; i++) {
    if (currentArr[i] !== currentArr[end - (i - start)]) return false;
  }
  return fold(start, mid - 1, currentArr) && fold(mid + 1, end, currentArr);
}
