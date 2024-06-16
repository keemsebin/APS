const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const [S, E, Q] = input.shift().split(" ");
// 분 단위로 판단하는 것이 더 빠를 것이라고 판단
const [S_h, S_m] = S.split(":").map(Number);
const [E_h, E_m] = E.split(":").map(Number);
const [Q_h, Q_m] = Q.split(":").map(Number);
let S_time = S_h * 60 + S_m;
let E_time = E_h * 60 + E_m;
let Q_time = Q_h * 60 + Q_m;

// dict -> 2가 넘어야 출석 인정
let attendace = {}; // 1이면 입장, 2이면 입장 + 퇴장
let answer = 0;

for (let student of input) {
  const [time, name] = student.split(" ");
  const [h, m] = time.split(":").map(Number);
  let minutes = h * 60 + m;

  if (minutes <= S_time) {
    // 입장 처리
    attendace[name] = 1;
  } else if (minutes >= E_time && minutes <= Q_time) {
    // 퇴장 처리
    if (attendace[name] === 1) {
      // 입장했던 경우면 출석 처리
      attendace[name] = 2;
    }
  }
}

for (let key in attendace) {
  if (attendace[key] === 2) {
    answer++;
  }
}

console.log(answer);
