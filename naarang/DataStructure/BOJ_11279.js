const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[index] <= this.heap[parentIndex]) break;

      this.swap(index, parentIndex);

      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let biggest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] > this.heap[biggest]
      ) {
        biggest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] > this.heap[biggest]
      ) {
        biggest = rightChildIndex;
      }

      if (biggest === index) break;

      this.swap(index, biggest);

      index = biggest;
    }
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) return 0; // 배열이 비어있는 경우라면 0을 출력

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  getSize() {
    return this.heap.length;
  }
}

let maxHeap = new MaxHeap();
let N = -1;
let answer = [];
rl.on("line", (line) => {
  if (N === -1) {
    N = parseInt(line);
    return;
  }
  let value = parseInt(line);
  if (value === 0) {
    answer.push(maxHeap.pop());
  } else {
    maxHeap.push(value);
  }
  N--;

  if (N === 0) rl.close();
}).on("close", () => {
  console.log(answer.join("\n"));
  process.exit();
});
