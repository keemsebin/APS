const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const checkType1 = (word, start, end) => {
  while (start < end) {
    if (word[start] !== word[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

const check = (word) => {
  let start = 0;
  let end = word.length - 1;
  while (start < end) {
    if (word[start] !== word[end]) {
      if (
        checkType1(word, start + 1, end) || // 함수로 분리해서 두 경우 모두 확인해야 함!
        checkType1(word, start, end - 1)
      ) {
        return 1; // 유사회문
      } else {
        return 2;
      }
      // 이렇게 판단하면 2 경우 중 한 경우만 유사 회문인지 확인하는 문제 발생!
      // if (useChance) {
      //   return 2;
      // } else {
      // if (word[start + 1] === word[end]) {
      //   useChance = true;
      //   start++;
      // } else if (word[start] === word[end - 1]) {
      //   useChance = true;
      //   end--;
      // } else {
      //   return 2;
      // }
      // }
    } else {
      start++;
      end--;
    }
  }

  return 0;
};

let answer = [];
for (let str of input) {
  answer.push(check(str));
}

console.log(answer.join("\n"));

// for문으로 하니까 에러 나서 투포인터로 해결했다..
