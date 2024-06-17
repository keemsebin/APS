const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let T = parseInt(input[0]);
  let arr = input.slice(1);
  let english = "abcdefghijklmnopqrstuvwxyz";
  let ans = "";

  for (let i = 0; i < T; i++) {
    let W = arr[i * 2];
    let K = Number(arr[i * 2 + 1]);
    let min = Infinity;
    let max = -1;

    for (let j = 0; j < 26; j++) {
      let char = english[j]; // 알파벳
      let positions = [];

      // W 문자열에서 해당 문자의 위치를 모두 찾기
      for (let k = 0; k < W.length; k++) {
        if (W[k] === char) {
          // 알파벳이 같다면
          positions.push(k); // 위치 배열에 추가, a : [5, 8, 13]
        }
      }

      // 위치 배열에서 K 길이의 부분 문자열 찾기
      if (positions.length >= K) {
        for (let start = 0; start <= positions.length - K; start++) {
          let end = start + K - 1; // 마지막 인덱스
          let length = positions[end] - positions[start] + 1;
          min = Math.min(min, length);
          max = Math.max(max, length);
        }
      }
    }

    if (min === Infinity) {
      ans += -1;
    } else {
      ans += `${min} ${max}`;
    }
    ans += "\n";
  }
  console.log(ans);
});
