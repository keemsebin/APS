const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());

let time = {};
// 각 인덱스에 모기 입장 시간이면 +1, 나가는 시간이면 -1 한 후 누적합
for (let i = 0; i < N; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  if (time[x]) {
    time[x] += 1;
  } else {
    time[x] = 1;
  }
  if (time[y]) {
    time[y] -= 1;
  } else {
    time[y] = -1;
  }
}

// 오름차순 정렬
Object.keys(time).sort((a, b) => a - b);

let sum = 0;
let max = 0;
let Tem = 0;
let Txm = 0;

let flag = false; // max인 구간

let time_arr = Object.keys(time);

for (let t of time_arr) {
  sum += time[t];
  if (max < sum) {
    max = sum;
    Tem = t;
    flag = true;
  }

  if (flag && max > sum) {
    flag = false;
    Txm = t;
  }
}

console.log(max);
console.log(Tem, Txm);

// 수가 너무 커서 배열의 index로 활용하니 계속 시간 초과 나옴.. -> dict 사용
// dictionary 정렬 방법
// key를 이용 : Object.keys(object).sort()
// key값의 배열을 반환 : Object.keys(obj)
