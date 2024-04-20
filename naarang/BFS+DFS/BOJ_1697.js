const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [n, k] = input;
let queue = [];
let check = Array.from({ length: 100001 }, () => 0);

function BFS(d) {
  queue.push(d);
  while (queue.length > 0) {
    let x = queue.shift();
    let dx = [x + 1, x - 1, x * 2];
    for (let nx of dx) {
      if (nx >= 0 && nx <= 100000 && !check[nx]) {
        check[nx] = check[x] + 1;
        queue.push(nx);
      }
    }
  }
}

check[n] = 1;
BFS(n);
// 몇 초 후이므로 -1 해주기!
console.log(check[k] - 1);
