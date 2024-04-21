const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim();
let answer = [];

// <div>태그 분리
const divTags = input.match(/<div(.*?)>(.*?)<\/div>/g);
for (let div of divTags) {
  const pTags = div.split(/<p(.*?)>(.*?)<\/p>/g);
  // title
  const title = pTags[0].split(/title="(.*?)"/g);
  //console.log(`title : ${title[1]}`);

  pTags.pop(); // 마지막에 </div> 있으므로 제거
  let result = []; // 한 문단 담기
  // p
  for (let p of pTags) {
    p = p.trim(); // 양쪽 공백 제거
    if (p.length === 0) {
      continue;
    }

    let tag = false;
    let sentence = "";
    let prev = "";
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
      result.push(sentence);
      // console.log(sentence);
    }
  }
  answer.push([`title : ${title[1]}`, result.join("\n")]);
}

console.log(answer.map((v) => v.join("\n")).join("\n"));

// 이 문제를 정규식을 통해 해결하는 것으로..? -> 공부 필요할듯...
// 출력이 틀렸다..? 어디서?ㅠㅠㅠ 그냥 바로바로 출력하는 것에서 배열에 담아서 출력하는 것으로 바꾸었는데 어디서 오류가?ㅠㅠ
// 정규식 정리하기
