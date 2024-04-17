const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = input[0].split(" ").map(Number);
const isVisit = Array(100001).fill(0); // 크기를 충분히 크게 설정
function hideAndSeek(start, end) {
  const queue = [[start, 0]];
  isVisit[start] = 1;
  while (queue.length) {
    const [cur, time] = queue.shift();
    if (cur === end) {
      return time;
    }
    for (move of [cur + 1, cur - 1, cur * 2]) {
      if (move >= 0 && move <= 100000 && !isVisit[move]) {
        isVisit[move] = 1;
        queue.push([move, time + 1]);
      }
    }
  }
}
console.log(hideAndSeek(N, K));
