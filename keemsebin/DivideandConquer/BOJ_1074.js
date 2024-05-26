const input = require("fs").readFileSync("/dev/stdin").toString();

const [N, r, c] = input.split(" ").map(Number);
let arrN = 2 ** N; // 4

let num = 0;

function Z(x, y, n) {
  if (n === 2) {
    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (i == r && j == c) {
          console.log(num);
          return;
        }
        num++;
      }
    }
    return;
  }
  let half = n / 2;
  if (r < x + half && c < y + half) {
    Z(x, y, half);
  } else if (r < x + half && c >= y + half) {
    num += half * half;
    Z(x, y + half, half);
  } else if (r >= x + half && c < y + half) {
    num += half * half * 2;
    Z(x + half, y, half);
  } else {
    num += half * half * 3;
    Z(x + half, y + half, half);
  }
  // 다음과 같이 사용했을 떄 시간초과가 난다. 재귀함수를 4번 호출하기 때문.
  // 조건을 통해 4번 호출하는 것을 1번으로 줄여준다.
  // Z(x, y, half);
  // Z(x, y + half, half); // 0 2 2
  // Z(x + half, y, half); // 2 0 2
  // Z(x + half, y + half, half); // 2 2 2
}

Z(0, 0, arrN);
