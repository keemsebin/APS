const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
//const input = [7, "20 1", "2 1", "10 3", "100 2", "8 2", "5 20", "50 10"];
const N = Number(input[0]);
let arr = [];
for (let i = 1; i <= N; i++) {
  let [p, d] = input[i].split(" ").map(Number);
  arr.push([d, p]);
}
// d는 마감일, p는 보상
arr.sort((a, b) => b[1] - a[1]);
let isVisited = Array(1001).fill(false);
let ans = 0;
for (let i = 0; i < N; i++) {
  for (let j = arr[i][0]; j > 0; j--) {
    if (!isVisited[j]) {
      isVisited[j] = true;
      ans += arr[i][1];
      break;
    }
  }
}
console.log(ans);
