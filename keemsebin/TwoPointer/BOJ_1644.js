const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let arr = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let N = Number(input[0]);
  let prime = Array(N + 1).fill(true);
  prime[0] = prime[1] = false;

  for (let i = 2; i <= N; i++) {
    // 소수면 true, 아니면 false
    if (prime[i]) {
      for (let j = i * i; j <= N; j += i) {
        prime[j] = false;
      }
    }
  }
  for (let i = 0; i <= N; i++) {
    if (prime[i]) arr.push(i);
  }

  let left = 0;
  let right = 0;
  let sum = 0;
  let ans = 0;

  while (true) {
    if (sum >= N) {
      if (sum === N) ans++;
      sum -= arr[left++];
    } else if (right < arr.length) {
      sum += arr[right++];
    } else {
      break;
    }
  }
  console.log(ans);
});
