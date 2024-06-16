const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

// ::인 경우 사이에 "skip"이라고 넣어주기
let findSkip = "";
for (let i = 0; i < input[0].length; i++) {
  findSkip += input[0][i];
  if (
    i + 1 < input[0].length &&
    input[0][i] === ":" &&
    input[0][i + 1] === ":"
  ) {
    findSkip += "skip";
  }
}

let groups = findSkip.split(":");

let answer = [];
for (let g of groups) {
  const len = g.length;
  if (len === 4) {
    answer.push(g);
  } else {
    let group = "";
    for (let i = 0; i < 4 - len; i++) {
      group += "0";
    }
    group += g;
    answer.push(group);
  }
}

// skip이 있는 경우
if (answer.indexOf("skip") !== -1) {
  const idx = answer.indexOf("skip");
  answer.splice(idx, 1);
  const len = answer.length;
  // 부족한 만큼 "0000" 추가하기
  for (let i = 0; i < 8 - len; i++) {
    answer.splice(idx, 0, "0000");
  }
}

console.log(answer.join(":"));

// 배열에서 중간에 원소 추가하는 것 정리하기
