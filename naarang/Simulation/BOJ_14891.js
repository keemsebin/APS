const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const wheel = Array.from({ length: 4 }, () =>
  input.shift().split("").map(Number)
);
const wheel_pointer = Array.from({ length: 4 }, () => [2, 6]); // [3시방향, 9시방향]
const K = Number(input.shift());
// 회전
const rotate = (num, direction) => {
  if (direction === -1) {
    // 시계 바퀴
    wheel_pointer[num][0] = (wheel_pointer[num][0] + 1) % 8;
    wheel_pointer[num][1] = (wheel_pointer[num][1] + 1) % 8;
  } else {
    wheel_pointer[num][0] = (wheel_pointer[num][0] + 7) % 8;
    wheel_pointer[num][1] = (wheel_pointer[num][1] + 7) % 8;
  }
};

for (let i = 0; i < K; i++) {
  const [wheel_num, direction] = input.shift().split(" ").map(Number);
  let wheel_direction = [0, 0, 0, 0]; // 주변 바퀴로 어떻게 접근해야 하지?ㅠㅠ

  wheel_direction[wheel_num - 1] = direction;
  // 왼쪽 체크
  let left = wheel_num - 2;
  while (left >= 0) {
    if (
      wheel[left][wheel_pointer[left][0]] !==
      wheel[left + 1][wheel_pointer[left + 1][1]]
    ) {
      wheel_direction[left] = wheel_direction[left + 1] * -1;
    }
    left--;
  }

  // 오른쪽 체크
  let right = wheel_num;
  while (right < 4) {
    if (
      wheel[right][wheel_pointer[right][1]] !==
      wheel[right - 1][wheel_pointer[right - 1][0]]
    ) {
      wheel_direction[right] = wheel_direction[right - 1] * -1;
    }
    right++;
  }

  // 다 체크하고 현재 바퀴 회전
  for (let j = 0; j < 4; j++) {
    if (Math.abs(wheel_direction[j]) !== 0) {
      rotate(j, wheel_direction[j]);
    }
  }
}

// 1번 톱니바퀴의 12시방향이 N극이면 0점, S극이면 1점
// 2번 톱니바퀴의 12시방향이 N극이면 0점, S극이면 2점
// 3번 톱니바퀴의 12시방향이 N극이면 0점, S극이면 4점
// 4번 톱니바퀴의 12시방향이 N극이면 0점, S극이면 8점
let answer = 0;
for (let i = 0; i < 4; i++) {
  if (wheel[i][(wheel_pointer[i][1] + 2) % 8]) {
    answer += Math.pow(2, i);
  }
}
console.log(answer);
