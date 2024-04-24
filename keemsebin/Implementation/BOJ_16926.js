const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M, R] = input[0].split(" ").map(Number);
const arr = Array.from({ length: N }, () => Array(M));

// 배열 외각의 길이중 가장 작은 값을 택해서
let min = Math.min(N, M) / 2;
// 2차원 배열
for (let i = 0; i < N; i++) {
  const loop = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < M; j++) {
    arr[i][j] = loop[j];
  }
}

for (let rotate = 0; rotate < R; rotate++) {
  for (let z = 0; z < min; z++) {
    // 왼쪽 상단 모서리 값을 임시 변수에 저장회전을 수행할 때 임시로 값을 저장하기 위한 변수
    let temp = arr[z][z];
    // 왼쪽으로 이동
    // M - z - 1 = 가로길이 - 외곽 부분 제외길이
    for (let c = z; c < M - z - 1; c++) {
      arr[z][c] = arr[z][c + 1];
    }
    // 아래쪽으로 이동
    for (let r = z; r < N - z - 1; r++) {
      arr[r][M - z - 1] = arr[r + 1][M - z - 1];
    }
    // 오른쪽으로 이동
    for (let c = M - z - 1; c > z; c--) {
      arr[N - z - 1][c] = arr[N - z - 1][c - 1];
    }
    // 위쪽으로 이동
    for (let r = N - z - 1; r > z + 1; r--) {
      arr[r][z] = arr[r - 1][z];
    }
    arr[z + 1][z] = temp; // 저장해 둔 왼쪽 상단 모서리 값을 오른쪽으로 한 칸 이동된 곳에 저장
  }
}

console.log(arr.map((row) => row.join(" ")).join("\n"));
