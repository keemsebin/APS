const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let [A, B] = input[0].split(" ").map(Number);

// 일일히 다해봐..? 재귀함수..? -> 메모리 초과날 줄 알았는데 괜찮넹?ㅎㅎ
let t = 1;
function hmm(num, time) {
  if (num > B) {
    return -1;
  } else if (num === B) {
    return time;
  }
  let n1 = hmm(num * 2, time + 1);
  let n2 = hmm(num * 10 + 1, time + 1);

  if (n1 === -1 && n2 === -1) {
    return -1;
  } else if (Math.min(n1, n2) === -1) {
    return Math.max(n1, n2);
  } else {
    return Math.min(n1, n2);
  }
}

console.log(hmm(A, t));

// -> 더 좋은 풀이 찾아서 정리하기 : 반복문에서 2로 나눈 나머지값에 따라 연산 종류를 판단!
/*
while (true) {
    if (initialValue === target) {
        break;
    } else if (Number(target) < Number(initialValue)) { // 목표값이 더 크면
        return console.log(-1);
    }

    if (target % 2 === 0) { // 2로 나눈 나머지가 0이면 
        target = String(target / 2);
    } else if (target % 2 === 1) { // 2로 나눈 나머지가 1이면
        if (target[target.length - 1] === "1") { // 마지막 자리가 1이면
            target = target.slice(0, target.length - 1);
        } else { // 마지막 자리가 1이 아니면
            return console.log(-1);
        }
    }

    result++;
}
*/
