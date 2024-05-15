const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let star = Array.from({ length: N }, () => new Array(N).fill(" "));

function divide(x, y, size) {
  if (size === 3) {
    printStar(x, y);
    return;
  }

  const next_size = size / 3;

  divide(x, y, next_size);
  divide(x, y + next_size, next_size);
  divide(x, y + next_size * 2, next_size);
  divide(x + next_size, y, next_size);
  divide(x + next_size, y + next_size * 2, next_size);
  divide(x + next_size * 2, y, next_size);
  divide(x + next_size * 2, y + next_size, next_size);
  divide(x + next_size * 2, y + next_size * 2, next_size);
}

function printStar(x, y) {
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      if (i === x + 1 && j === y + 1) {
        continue;
      }
      star[i][j] = "*";
    }
  }
}

divide(0, 0, N);
const answer = star.map((item) => item.join(""));

console.log(answer.join("\n"));

/**
이렇게 풀고 2448 - 별 찍기-2를 봤는데 감이 안와서 다시 이 문제의 다른 풀이드를 참고하니
내가 분할 정복을 별로 확용하지 못했다는...것을 알았다.

다른 풀이의 방법 
2중 for문으로 모든 칸을 순회하면서 divide 함수 호출
1. 출력할 때 3 x 3 크기에서 가운데 부분은 출력하면 안 됨 -> i, j의 1 % 3(1 나머지 3)의 값이 1인 곳은 공백으로 처리
2. 그렇지 않고 크기가 1이면 *을 출력, 그 이상의 크기라면 divide(parseInt(i/3), parseInt(j/3), parseInt(num/3))를 재귀적으로 호출한다.

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = parseInt(input[0])
 
const lines = []
 
printStars(num);
console.log(lines.join(""))
 
function printStars(num) {
  for(let i = 0; i < num; i++) {
    for(let j = 0; j < num; j++) {
      star(i, j, num)
    }
    lines.push("\n")
  }
}
 
function star(i, j, num) {
  if(i % 3 == 1 && j % 3 == 1) {
    // (1,1), (1,4), (1,7)...
    lines.push(" ")
  } else {
    if(num == 1) {
      lines.push("*")
    } else {
      // (3,3) = (1,1)이 되고,
      // (3,4) = (1,1)이 된다.
      // (9,9), (27,27)도 동일한 방식으로 재귀 호출된다.
      star(parseInt(i/3), parseInt(j/3), parseInt(num/3))
    }
  }
}

 */
