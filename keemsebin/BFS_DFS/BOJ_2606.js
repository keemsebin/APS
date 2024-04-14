const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const edge = Number(input[1]);
const graph = Array.from({ length: N + 1 }, () => []);
const isVisit = Array(N + 1).fill(false);
isVisit[1] = true;
let count = 0;

for (let i = 2; i < edge + 2; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

function network(virus) {
  for (let i of graph[virus]) {
    if (isVisit[i] == false) {
      isVisit[i] = true;
      count++;
      network(i);
    }
  }
}

network(1);

console.log(count);
