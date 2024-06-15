// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = ["3", "2 16", "4 6", "6 10"];
const N = Number(input[0]);
const arr = input.slice(1).map((e) => e.split(" ").map(Number));

// 구간 시작과 끝을 기록하는 배열 생성
let intervals = [];

for (let i = 0; i < N; i++) {
  const [start, end] = arr[i];
  intervals.push({ time: start, isStart: true }); // 시작 구간
  intervals.push({ time: end, isStart: false }); // 끝 구간
}

// 시작 시간을 기준으로 오름차순 정렬
intervals.sort((a, b) => a.time - b.time || a.isStart - b.isStart);

let maxOverlap = 0; // 최대 겹침 횟수
let maxOverlapStart = 0; // 최대 겹침 시작 시간
let maxOverlapEnd = 0; // 최대 겹침 종료 시간
let overlap = 0; // 현재 겹침 횟수

for (const interval of intervals) {
  if (interval.isStart) {
    // 시작 구간이면 겹침 횟수 증가
    overlap++;
    if (overlap > maxOverlap) {
      // 최대 겹침 횟수 갱신
      maxOverlap = overlap;
      maxOverlapStart = interval.time; // 최대 겹침 시작 시간 갱신
    }
  } else {
    // 끝 구간이면 겹침 횟수 감소
    overlap--;
    if (overlap > 0) {
      // 현재 겹침 횟수가 0이 되기전 최대 겹침 종료 시간 갱신
      maxOverlapEnd = interval.time;
    }
  }
}

console.log(maxOverlap);
console.log(maxOverlapStart, maxOverlapEnd);
