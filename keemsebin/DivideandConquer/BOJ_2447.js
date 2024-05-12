//const input = require("fs").readFileSync("/dev/stdin").toString;
const input = ["27"];
const N = Number(input[0]);
let arr = [];

function star(x, y, n) {
  if (x % 3 == 1 && y % 3 == 1) {
    arr.push(" ");
  } else {
    if (n == 1) {
      arr.push("*");
    } else {
      // parseInt를 사용하여 실수가 아닌 정수로 변환
      // parseInt를 사용하지 않으면 3으로 나누었을 때 소수점이 발생할 수 있음
      // 따라서 정수로 변환하여 소수점을 제거
      // 배열에서는 소수점을 사용할 수 없기 때문에 정수로 변환
      star(parseInt(x / 3), parseInt(y / 3), parseInt(n / 3));
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    star(i, j, N);
  }
  arr.push("\n");
}
console.log(arr.join(""));
// (1,1) (4,1) (7,1) 에서 공백
// (1,4) (4,4) (7,4) 에서 공백
// (1,7) (4,7) (7,7) 에서 공백

// 9 9 를 크게 봤을 떄 (1,1)에 해당하는 곳이
// (3,3) (3,4) (3,5)
// (4,3) (4,4) (4,6)
// (5,3) (5,4) (5,5)
