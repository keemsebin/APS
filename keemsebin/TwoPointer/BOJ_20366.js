const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let ans = 0;
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [N, K] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  arr.sort((a, b) => a - b);

  let minDifference = Infinity;

  // 2 3 5 5 9
  // 두 눈사람의 키 차이가 최소가 되기
  for (let i = 0; i < N - 3; i++) {
    for (let j = i + 3; j < N; j++) {
      let left = i + 1;
      let right = j - 1;

      while (left < right) {
        const snowman1 = arr[i] + arr[j];
        const snowman2 = arr[left] + arr[right];
        const difference = Math.abs(snowman1 - snowman2);

        if (difference < minDifference) {
          minDifference = difference;
        }

        if (snowman1 > snowman2) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  console.log(minDifference);
});
