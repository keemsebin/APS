const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

// 알파벳을 key값으로 한 dictionary로
let left = {
  q: [0, 0],
  w: [0, 1],
  e: [0, 2],
  r: [0, 3],
  t: [0, 4],
  a: [1, 0],
  s: [1, 1],
  d: [1, 2],
  f: [1, 3],
  g: [1, 4],
  z: [2, 0],
  x: [2, 1],
  c: [2, 2],
  v: [2, 3],
};

let right = {
  y: [0, 5],
  u: [0, 6],
  i: [0, 7],
  o: [0, 8],
  p: [0, 9],
  h: [1, 5],
  j: [1, 6],
  k: [1, 7],
  l: [1, 8],
  b: [2, 4],
  n: [2, 5],
  m: [2, 6],
};

const [sl, sr] = input[0].split(" ");
const str = input[1].split("");

let answer = 0;
let left_hand = left[sl];
let right_hand = right[sr];

for (let hand of str) {
  if (left[hand]) {
    const [x, y] = left[hand];
    answer = answer + Math.abs(left_hand[0] - x) + Math.abs(left_hand[1] - y);
    left_hand = [x, y];
  } else if (right[hand]) {
    const [x, y] = right[hand];
    answer = answer + Math.abs(right_hand[0] - x) + Math.abs(right_hand[1] - y);
    right_hand = [x, y];
  }
  answer += 1; // 키를 누르는데 1초
}

console.log(answer);
