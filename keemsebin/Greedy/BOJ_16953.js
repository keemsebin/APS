let [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let ans = 1;
while (A < B) {
  if (B % 10 === 1) {
    B = Math.floor(B / 10);
  } else if (B % 2 === 0) {
    B /= 2;
  } else {
    break;
  }
  ans++;
}
console.log(A === B ? ans : -1);
