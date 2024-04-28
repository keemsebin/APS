const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let tag = false;
let answer = [];
let word = "";

for (let i of input[0]) {
  if (i === "<" && !tag) {
    tag = true;
    if (word.length > 0) {
      answer.push(word.split("").reverse().join(""));
    }
    word = i;
  } else if (i === ">" && tag) {
    tag = false;
    word += i;
    answer.push(word);
    word = "";
  } else if (tag) {
    word += i;
  } else if (i === " ") {
    if (word.length > 0) {
      answer.push(word.split("").reverse().join(""));
      word = "";
      answer.push(" ");
    }
  } else {
    word += i;
  }
}

if (word.length > 0) {
  answer.push(word.split("").reverse().join(""));
}

console.log(answer.join(""));
