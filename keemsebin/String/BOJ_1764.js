const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let arr1 = new Set();
let arr2 = new Set();
let ans = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [N, M] = input[0].split(" ").map(Number);
  for (let i = 1; i <= N + M; i++) {
    if (i < N + 1) {
      arr1.add(input[i]);
    } else {
      arr2.add(input[i]);
    }
  }

  arr1.forEach((item) => {
    if (arr2.has(item)) ans.push(item);
  });
  ans.sort();
  console.log(ans.length + "\n" + ans.join("\n"));
});
