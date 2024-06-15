const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let gear = input.slice(0, 4).map((v) => v.split("").map(Number));
  let K = Number(input[4]);
  let arr = [];

  for (let i = 0; i < K; i++) {
    arr.push(input[5 + i].split(" ").map(Number));
  }

  // 배열, 방향을 받아서 회전 시켜주는 함수
  const rotate = (gear, idx, rotateDir) => {
    if (rotateDir == 1) {
      gear[idx].unshift(gear[idx].pop());
    } else {
      gear[idx].push(gear[idx].shift());
    }
  };

  // 점수의 합을 반환하는 함수
  const score = (gear) => {
    return gear[0][0] + gear[1][0] * 2 + gear[2][0] * 4 + gear[3][0] * 8;
  };

  // 회전 명령을 처리하는 함수
  // 3 -1
  const processRotation = (gear, num, dir) => {
    // 회전 여부와 방향을 저장할 배열
    let rotateStatus = Array(4).fill(0);
    // [0,0,-1,0]
    rotateStatus[num] = dir;

    // 현재 톱니바퀴에서 오른쪽으로 전파
    for (let i = num; i < 3; i++) {
      // 현재 톱니바퀴의 2번째와 다음 톱니바퀴의 6번째는 맞물려있음
      // 극이 다른 경우 현재 방향과는 다른 방향으로 저장해줌

      if (gear[i][2] !== gear[i + 1][6]) {
        rotateStatus[i + 1] = -rotateStatus[i];
      } else {
        break;
      }
    }

    // 현재 톱니바퀴에서 왼쪽으로 전파
    for (let i = num; i > 0; i--) {
      if (gear[i][6] !== gear[i - 1][2]) {
        // i = 1 rotateStatus[0] = -rotateStatus[1]
        rotateStatus[i - 1] = -rotateStatus[i];
      } else {
        break;
      }
    }
    // 실제 회전
    for (let i = 0; i < 4; i++) {
      if (rotateStatus[i] !== 0) {
        rotate(gear, i, rotateStatus[i]);
      }
    }
  };

  // 입력된 회전 명령 처리
  for (let i = 0; i < K; i++) {
    let [num, dir] = arr[i]; // num: 회전시킬 톱니바퀴 번호, dir: 방향
    processRotation(gear, num - 1, dir);
  }

  console.log(score(gear));
});
