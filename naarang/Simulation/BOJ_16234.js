const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, L, R] = input.shift().split(" ").map(Number);
let country = Array.from({ length: N }, (v, i) =>
  input[i].split(" ").map(Number)
);
let visit = [];
let open_country = []; // 국경선 공유하는 나라들

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

// 연합을 이루고 있는 칸의 개수를 구하려면 BFS가 필요할 듯!
const BFS = (x, y) => {
  let queue = [];
  let isOpen = [];

  // 첫번째 노드 탐색
  queue.push([x, y]);
  visit[x][y] = true;
  isOpen.push([x, y]);

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const [x2, y2] = queue.shift();
      for (let j = 0; j < 4; j++) {
        const nx = x2 + dx[j];
        const ny = y2 + dy[j];

        if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visit[nx][ny]) {
          // 인원수 차지가 L <= ?? <= R 인지!
          const gap = Math.abs(country[x2][y2] - country[nx][ny]);
          if (gap >= L && gap <= R) {
            visit[nx][ny] = true;
            queue.push([nx, ny]);
            isOpen.push([nx, ny]);
          }
        }
      }
    }
  }

  if (isOpen.length > 1) {
    // 인구이동한 나라가 있으면!
    open_country.push(isOpen);
  }
};

let answer = 0;
while (true) {
  open_country = []; // 초기화
  visit = Array.from({ length: N }, () => new Array(N).fill(false)); // 초기화

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visit[i][j]) {
        BFS(i, j);
      }
    }
  }

  if (open_country.length > 0) {
    answer++;

    // 인구 다시 계산
    for (let o of open_country) {
      let sum = 0;
      for (let people of o) {
        sum += country[people[0]][people[1]];
      }
      const new_people = Math.floor(sum / o.length);
      for (let people of o) {
        country[people[0]][people[1]] = new_people;
      }
    }
  } else {
    break; // 인구 이동 없으면!
  }
}

console.log(answer);
