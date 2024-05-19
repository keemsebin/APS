const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());
let drink = input[0].split(" ").map(Number);

drink.sort((a, b) => a - b);
let answer = drink.pop(); // 제일 큰 값 넣기

for (let i = 0; i < drink.length; i++) {
  answer = answer + drink[i] / 2;
}

console.log(answer);
