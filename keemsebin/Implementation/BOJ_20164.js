const input = require("fs").readFileSync("/dev/stdin").toString();

const num = input.split("").map(Number);
let min = Infinity;
let max = -Infinity;
function odd(num) {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 1) result++;
  }
  return result;
}

function calculate(num, oddCount) {
  oddCount += odd(num);
  // 한자리 수일때는 종료
  if (num.length === 1) {
    min = Math.min(min, oddCount);
    max = Math.max(max, oddCount);
    return;
  } else if (num.length === 2) {
    let temp = Number(num[0]) + Number(num[1]);
    calculate(temp.toString().split("").map(Number), oddCount);
  } else if (num.length >= 3) {
    for (let j = 1; j < num.length; j++) {
      for (let z = j + 1; z < num.length; z++) {
        let temp =
          Number(num.slice(0, j).join("")) +
          Number(num.slice(j, z).join("")) +
          Number(num.slice(z).join(""));
        calculate(temp.toString().split("").map(Number), oddCount);
      }
    }
  }
}
calculate(num, 0);
console.log(min, max);
