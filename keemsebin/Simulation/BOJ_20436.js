const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [L, R] = input[0].split(" ");
const str = input[1];
const keyboard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

const left = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "a",
  "s",
  "d",
  "f",
  "g",
  "z",
  "x",
  "c",
  "v",
];
let Rx,
  Ry = 0;
let Rx2,
  Ry2 = 0;
let Lx,
  Ly = 0;
let Lx2,
  Ly2 = 0;
let distance = 0;

keyboard.map((item, index) => {
  // 배열안에 L 이 존재한다면 값 저장
  if (item.includes(L)) {
    Lx = item.indexOf(L);
    Ly = index;
  }
  if (item.includes(R)) {
    Rx = item.indexOf(R);
    Ry = index;
  }
});

// 누르는 순간 1 증가
// 거리 저장 후 위치 변경
for (let i = 0; i < str.length; i++) {
  if (left.includes(str[i])) {
    keyboard.map((item, index) => {
      if (item.includes(str[i])) {
        Lx2 = item.indexOf(str[i]);
        Ly2 = index;
      }
    });
    distance += Math.abs(Lx - Lx2) + Math.abs(Ly - Ly2);
    Lx = Lx2;
    Ly = Ly2;
  } else {
    keyboard.map((item, index) => {
      if (item.includes(str[i])) {
        Rx2 = item.indexOf(str[i]);
        Ry2 = index;
      }
    });
    distance += Math.abs(Rx - Rx2) + Math.abs(Ry - Ry2);
    Rx = Rx2;
    Ry = Ry2;
  }
}

console.log(distance + str.length);
