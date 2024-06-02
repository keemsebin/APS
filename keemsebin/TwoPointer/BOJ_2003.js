const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [N, M] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  let ans = 0;
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = i; j < N; j++) {
      sum += arr[j];
      if (sum === M) {
        ans++;
        break;
      } else if (sum > M) {
        break;
      }
    }
  }
  console.log(ans);
});
