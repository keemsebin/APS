const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const status = input.slice(1).map((v) => v.split(" ").map(Number));

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let shark = []; // 아기 상어의 위치
let size = 2; // 아기상어 크기
let eatCount = 0; // 아기상어가 먹은 물고기의 수
let time = 0;

// 아기 상어의 초기 위치 찾기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (status[i][j] === 9) {
      shark = [i, j]; // 초기 위치와 이동 거리 0
      status[i][j] = 0; // 아기 상어의 위치를 0으로 변경
      break;
    }
  }
}

function fish() {
  // 먹을 수 있는 물고기를 찾는 방법 bfs
  let eat = []; // 먹을 수 있는 물고기의 위치를 담을 배열
  const queue = [[...shark, 0]]; // 시작 위치
  const isVisit = Array.from({ length: N }, () => Array(N).fill(false));
  // 방문 여부 각 탐색 시마다 초기화해야함. 한 번의 탐색이 끝난 후에는 isVisit 배열을 초기화한뒤 다음 탐색에서 올바르게 방문여부 판단!
  isVisit[shark[0]][shark[1]] = true;
  while (queue.length) {
    const [x, y, k] = queue.shift();
    for ([dx, dy] of dir) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < N &&
        ny < N &&
        !isVisit[nx][ny] &&
        status[nx][ny] <= size
      ) {
        isVisit[nx][ny] = true;
        queue.push([nx, ny, k + 1]);
        if (status[nx][ny] > 0 && status[nx][ny] < size) {
          eat.push([nx, ny, k + 1]);
        }
        queue.push([nx, ny, k + 1]);
      }
    }
  }
  return eat;
}

function moveShark(eat) {
  if (eat.length === 0) return false; // 먹을 수 있는 물고기가 없으면 종료
  eat.sort((a, b) => a[2] - b[2] || a[0] - b[0] || a[1] - b[1]);
  const [nx, ny, k] = eat[0]; // 가장 가까운 물고기의 위치와 거리
  shark = [nx, ny]; // 아기 상어 위치 업데이트
  status[nx][ny] = 0; // 물고기를 먹음
  time += k; // 시간 더하기
  eatCount += 1; // 먹은 물고기 수 증가
  if (eatCount === size) {
    // 아기 상어의 크기만큼 물고기를 먹었을 때
    size += 1; // 아기 상어 크기 증가
    eatCount = 0; // 먹은 물고기 수 초기화
  }
  return true; // 먹을 수 있는 물고기가 있음을 반환
}

while (true) {
  const eat = fish(); // 먹을 수 있는 물고기 위치 찾기
  if (!moveShark(eat)) break; // 먹을 수 있는 물고기가 없으면 종료
}
console.log(time);
