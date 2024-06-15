const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [N, d, k, c] = input[0].split(" ").map(Number);
  let sushi = [];
  for (let i = 0; i < N; i++) {
    sushi.push(input[i + 1]);
  }
  let ans = 0;
  let cnt = 0;
  let kind = new Array(d + 1).fill(0);

  // 처음 연속해서 k개를 먹었을 떄의 종류
  for (let i = 0; i < k; i++) {
    if (kind[sushi[i]] === 0) cnt++;
    kind[sushi[i]]++;
  }
  // cnt는 처음의 예시의 경우 3이 나옴
  ans = cnt;
  for (let i = 0; i < N; i++) {
    // 초반에 k개를 먹었을 때의 경우를 제외해준다.
    if (kind[sushi[i]] === 1) cnt--;
    kind[sushi[i]]--;

    if (kind[sushi[(i + k) % N]] === 0) cnt++;
    kind[sushi[(i + k) % N]]++; // 여기로 이동

    // 최대값을 구해준다.
    ans = Math.max(ans, cnt + (kind[c] === 0 ? 1 : 0));
  }
  console.log(ans);
});
