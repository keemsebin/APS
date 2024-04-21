const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim();

// <div>태그 분리
const divTags = input.match(/<div(.*?)>(.*?)<\/div>/g);
for (let div of divTags) {
  const pTags = div.split(/<p(.*?)>(.*?)<\/p>/g);
  // title
  const title = pTags[0].split(/title="(.*?)"/g);
  console.log(`title : ${title[1]}`);
  // p
  for (let p of pTags) {
    let tag = false;
    let sentence = "";
    let prev = "";
    p = p.trim(); // 양쪽 공백 제거
    if (p.length === 0) {
      continue;
    }

    for (let i = 0; i < p.length; i++) {
      if (p[i] === "<" && !tag) {
        tag = true;
        continue;
      } else if (p[i] === ">" && tag) {
        tag = false;
        continue;
      } else if (!tag) {
        // 연속 공백인 경우 고려
        if (prev === " " && p[i] === " ") continue;
        sentence += p[i];
        prev = p[i];
      }
    }

    if (sentence.trim() !== "") {
      console.log(sentence);
    }
  }
}

/*
input.shift(); // <main> 태그 제거
console.log(input);

for (let line of input) {
  let paragraph = line.split("<p>");
  // 제목 출력
  let title = paragraph.shift().split('"');
  console.log("title : " + title[1]);

  for (let p of paragraph) {
    let tag = false;
    let sentence = "";
    for (let i = 0; i < p.length; i++) {
      // 태그이면?
      if (p[i] === "<" && !tag) {
        if (p[i + 1] === "/" && p[i + 2] === "p" && p[i + 3] === ">") {
          // 문장 시작과 끝 공백 제거 + 연속 공백 제거
          sentence = sentence.replace(/ +(?= )/g, "").trim();
          console.log("+", sentence, "+");
          break;
        } else {
          tag = true;
          continue;
        }
      } else if (tag && p[i] === ">") {
        tag = false;
      } else if (!tag) {
        sentence += p[i];
      }
    }
  }
}

*/
// 이 문제를 정규식을 통해 해결하는 것으로..? -> 공부 필요할듯...
// 정규식 정리하기
