const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [S, E, Q] = input[0].split(" ");

  // 시간 기록
  let enterSet = new Set();
  let exitSet = new Set();

  for (let i = 1; i < input.length; i++) {
    let [t, name] = input[i].split(" ");
    if (t <= S) {
      enterSet.add(name);
    }
    if (t >= E && t <= Q) {
      exitSet.add(name);
    }
  }

  let result = new Set();
  for (let name of enterSet) {
    if (exitSet.has(name)) {
      result.add(name);
    }
  }

  console.log(result.size);
});
