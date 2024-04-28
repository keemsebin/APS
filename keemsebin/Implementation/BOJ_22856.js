const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const tree = [];
let count = 0;
let lastVisited = 0;
for (let i = 0; i < N; i++) {
  const [node, left, right] = input[i + 1].split(" ").map(Number);
  tree[node] = [left, right];
}

function similarInOrder(node) {
  if (node === -1) return;

  similarInOrder(tree[node][0]);
  if (lastVisited !== 0) count++;
  lastVisited = node;
  similarInOrder(tree[node][1]);
}

similarInOrder(1);
console.log(count);
// [1, 2, 4, 4, 2, 5, 5, 1, 3, 6, 6, 3, 7, 7]
