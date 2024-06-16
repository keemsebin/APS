const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

let file = {};
for (let i = 0; i < N; i++) {
  const extension = input[i].split(".")[1];
  if (file[extension]) {
    file[extension] = file[extension] + 1;
  } else {
    file[extension] = 1;
  }
}

let file_sort = Object.keys(file).sort();
let answer = [];
for (let key of file_sort) {
  answer.push(`${key} ${file[key]}`);
}

console.log(answer.join("\n"));
