const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

// C++ 인지 확인
if (input[0].toLowerCase() === input[0]) {
  // C++ -> Java
  let str = input[0].split("_");
  if (str.includes("")) {
    // _가 연속, 첫번째, 마지막인 경우도 고려
    console.log("Error!");
    return;
  }
  let answer = [str[0]]; // 첫번째 단어는 소문자로 시작
  for (let i = 1; i < str.length; i++) {
    let word = str[i].split("");
    let firstWord = word.shift().toUpperCase();
    answer.push(firstWord);
    answer.push(word.join(""));
  }
  console.log(answer.join(""));
} else {
  // Java 인지 확인
  if (input[0].includes("_") || input[0][0] === input[0][0].toUpperCase()) {
    // 첫번째 문자가 소문자인지 확인
    console.log("Error!");
  } else {
    // Java -> C++
    let answer = input[0][0];
    for (let i = 1; i < input[0].length; i++) {
      if (input[0][i] === input[0][i].toUpperCase()) {
        // // 대문자 앞 뒤에는 무조건 소문자가 필요함! -> 내 맘대로 단어는 2글자 이상이라고 생각했음..
        // if (
        //   i === input[0].length - 1 ||
        //   input[0][i + 1] === input[0][i].toUpperCase()
        // ) {
        //   // Java도 아님!
        //   console.log("Error!");
        //   return;
        // }
        answer = answer + "_" + input[0][i].toLowerCase();
      } else {
        answer += input[0][i];
      }
    }
    console.log(answer);
  }
}

// 너무 복잡하게 짠 것 같은데 깔끔하게 짤 수 없을지 고민해보기!
