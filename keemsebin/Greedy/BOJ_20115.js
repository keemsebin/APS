const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const energy = input[1].split(" ").map(Number);
let ans = 0;
let sum = 0;
energy.sort((a, b) => b - a);
for (let i = 0; i < N; i++) {
  if (i === 0) {
    sum += energy[i];
  } else {
    sum += energy[i] / 2;
  }
  ans += sum;
  sum = 0;
}
console.log(ans);
