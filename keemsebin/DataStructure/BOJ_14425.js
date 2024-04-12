const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const set = input.slice(0, N);
const question = input.slice(N);
const str = new Set(set);
let result = 0;

question.forEach((item) => {
  if (str.has(item)) result++;
});
console.log(result);

// include를 사용하면 시간초과가 나기 때문에 Set 사용 (has()를 이용)
