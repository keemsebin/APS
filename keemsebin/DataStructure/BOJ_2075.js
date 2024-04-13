const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

class MinHeap {
  constructor() {
    this.heap = [];
  }
  empty() {
    return this.heap.length === 0;
  }
  size() {
    return this.heap.length;
  }
  swap(a, b) {
    let tmp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  }
  top() {
    return this.heap[0];
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }
  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[parentIndex] < this.heap[currentIndex]) break;
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }
  bubbleDown() {
    let index = 0;
    while (true) {
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;

      if (rightIndex >= this.heap.length && leftIndex >= this.heap.length)
        break;

      let minIndex = leftIndex;
      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex] < this.heap[minIndex]
      ) {
        minIndex = rightIndex;
      }

      if (this.heap[index] < this.heap[minIndex]) break;
      this.swap(index, minIndex);
      index = minIndex;
    }
  }
}

const min = new MinHeap();

rl.on("line", (line) => {
  if (N === undefined) {
    N = Number(line);
  } else {
    const num = line.split(" ").map(Number);
    num.forEach((v) => {
      min.insert(v);
      if (min.size() > N) min.pop();
    });
  }
}).on("close", () => {
  console.log(min.pop());
  process.exit();
});
// require('fs').readFileSync('/dev/stdin').toString().split('\n'); 사용하면 메모리 초과가 뜬다.
// readline 사용하니까 됨. 입력을 한줄씩 받아서 처리하기 때문에 큰 배열을 생성하지 않는다고 한다.
