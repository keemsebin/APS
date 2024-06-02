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
  let [N, M] = input[0].split(" ").map(Number);
  for (let i = 1; i <= N; i++) {
    arr.push(Number(input[i]));
  }
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = 0;
  let ans = Infinity;
  while (right < N) {
    let diff = arr[right] - arr[left];

    if (diff >= M) {
      ans = Math.min(ans, diff);

      // 최솟값을 찾기 위해
      left++;
    } else {
      right++;
    }
  }

  console.log(ans);
});
