const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [N, S] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLength = Infinity;
  while (true) {
    if (sum >= S) {
      minLength = Math.min(minLength, right - left);
      sum -= arr[left++];
    } else if (right === N) {
      break;
    } else {
      sum += arr[right++];
    }
  }

  if (minLength === Infinity) {
    console.log(0);
  } else {
    console.log(minLength);
  }
});
