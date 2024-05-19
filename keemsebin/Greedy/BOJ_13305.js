const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
const distance = input[1].split(" ").map(Number); // 각 도시 사이의 거리
const price = input[2].split(" ").map(Number); // 각 도시의 기름 가격
let minPrice = price[0]; // 최소 가격을 저장할 변수
let total = 0; // 총 가격을 저장할 변수

for (let i = 0; i < N - 1; i++) {
  // 첫번째 도시부터 마지막 도시까지 순회하면서 최소 가격을 갱신
  if (price[i] < minPrice) minPrice = price[i];
  // 최소 가격을 갱신한 후, 해당 도시까지의 거리와 최소 가격을 곱하여 총 가격에 더함
  total += minPrice * distance[i];
}

console.log(total);
