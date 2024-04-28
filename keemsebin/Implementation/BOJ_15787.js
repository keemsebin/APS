const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const galaxy = Array.from({ length: N }, () => Array(20).fill(0));
// num === 3 일때 반복문을 0부터 시작해서 19번까지 돌리려고 하면
// 1이 계속 덮어씌어지는 오류가 생긴다.
// 따라서 18부터 0번까지 i에 있는 번호를 i+1로 가져오는 것이 적절하다.
for (let i = 1; i <= M; i++) {
  let [num, ...command] = input[i].split(" ").map(Number);
  if (num === 1) {
    let [train, seat] = command;
    galaxy[train - 1][seat - 1] = 1;
  } else if (num === 2) {
    let [train, seat] = command;
    galaxy[train - 1][seat - 1] = 0;
  } else if (num === 3) {
    for (let j = 18; j >= 0; j--) {
      galaxy[command[0] - 1][j + 1] = galaxy[command[0] - 1][j];
    }
    galaxy[command[0] - 1][0] = 0;
  } else if (num === 4) {
    for (let t = 0; t < 19; t++) {
      galaxy[command[0] - 1][t] = galaxy[command[0] - 1][t + 1];
    }
    galaxy[command[0] - 1][19] = 0;
  }
}

const pass = new Set();

galaxy.forEach((item) => {
  pass.add(JSON.stringify(item));
});

console.log(pass.size);
