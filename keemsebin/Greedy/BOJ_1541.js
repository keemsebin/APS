const input = require("fs").readFileSync("/dev/stdin").toString().split("-");

let ans = input.map((num) => {
  let sum = 0;
  // +를 기준으로 나누어서 각 요소를 더해준다.
  num.split("+").forEach((item) => {
    sum += parseInt(item);
  });
  return sum;
});
// 첫번째 요소를 제외한 나머지 요소를 빼준다.

console.log(ans.reduce((acc, cur) => acc - cur));
