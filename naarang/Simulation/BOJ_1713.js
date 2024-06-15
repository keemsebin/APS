const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const picture_num = Number(input[0]);
const like_num = Number(input[1]);

let picture = []; // 걸려있는 학생 번호
let likes = new Array(100 + 1).fill(0); // 추천 횟수 저장

for (let x of input[2].split(" ").map(Number)) {
  const idx = picture.indexOf(x);
  if (idx === -1) {
    if (picture.length >= picture_num) {
      // 오래된 것이 앞에 있음
      let min = like_num;
      let min_idx = 0;
      for (let i = 0; i < picture.length; i++) {
        if (likes[picture[i]] < min) {
          min = likes[picture[i]];
          min_idx = i;
        }
      }

      // 해당 원소만 잘라내기
      likes[picture[min_idx]] = 0; // 삭제돼면 추천 횟수 0
      picture.splice(min_idx, 1);
    }
    picture.push(x);
  } else {
    likes[x]++;
  }
}

console.log(picture.sort((a, b) => a - b).join(" "));
