const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class MinHeap {
  constructor() {
    // [p, l]
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
      let parentIndex = Math.floor((index - 1) / 2);

      if (
        this.heap[index][1] > this.heap[parentIndex][1] ||
        (this.heap[index][1] === this.heap[parentIndex][1] &&
          this.heap[index][0] > this.heap[parentIndex][0])
      ) {
        break;
      }

      this.swap(index, parentIndex);

      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    let length = this.heap.length;

    while (true) {
      let smallest = index;
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex][1] < this.heap[smallest][1]
      ) {
        smallest = leftChildIndex;
      } else if (
        leftChildIndex < length &&
        this.heap[leftChildIndex][1] === this.heap[smallest][1] &&
        this.heap[leftChildIndex][0] < this.heap[smallest][0]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex][1] < this.heap[smallest][1]
      ) {
        smallest = rightChildIndex;
      } else if (
        rightChildIndex < length &&
        this.heap[rightChildIndex][1] === this.heap[smallest][1] &&
        this.heap[rightChildIndex][0] < this.heap[smallest][0]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      this.swap(index, smallest);

      index = smallest;
    }
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) return null;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  // 힙이 비어있는지 여부 반환
  isEmpty() {
    return this.heap.length === 0;
  }

  // heap size 반환
  getSize() {
    return this.heap.length;
  }
}

class MaxHeap {
  constructor() {
    // [p, l]
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
      let parentIndex = Math.floor((index - 1) / 2);

      if (
        this.heap[index][1] < this.heap[parentIndex][1] ||
        (this.heap[index][1] === this.heap[parentIndex][1] &&
          this.heap[index][0] < this.heap[parentIndex][0])
      ) {
        break;
      }

      this.swap(index, parentIndex);

      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    let length = this.heap.length;

    while (true) {
      let smallest = index;
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex][1] > this.heap[smallest][1]
      ) {
        smallest = leftChildIndex;
      } else if (
        leftChildIndex < length &&
        this.heap[leftChildIndex][1] === this.heap[smallest][1] &&
        this.heap[leftChildIndex][0] > this.heap[smallest][0]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex][1] > this.heap[smallest][1]
      ) {
        smallest = rightChildIndex;
      } else if (
        rightChildIndex < length &&
        this.heap[rightChildIndex][1] === this.heap[smallest][1] &&
        this.heap[rightChildIndex][0] > this.heap[smallest][0]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      this.swap(index, smallest);

      index = smallest;
    }
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) return null;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  // 힙이 비어있는지 여부 반환
  isEmpty() {
    return this.heap.length === 0;
  }

  // heap size 반환
  getSize() {
    return this.heap.length;
  }
}

const minHeap = new MinHeap();
const maxHeap = new MaxHeap();

let N = -1;
let M = -1;
let answer = [];
let dict = {}; // 삭제된 문제들 {p, l} -> 이거는 dict로!
rl.on("line", (line) => {
  if (N === -1) {
    N = parseInt(line);
    return;
  } else if (N > 0) {
    let [p, l] = line.split(" ").map(Number);
    minHeap.push([p, l]);
    maxHeap.push([p, l]);
    N--;
  } else if (N === 0) {
    M = parseInt(line);
    N = -2;
  } else if (M > 0) {
    let command = line.split(" ");
    if (command[0] === "add") {
      minHeap.push([parseInt(command[1]), parseInt(command[2])]);
      maxHeap.push([parseInt(command[1]), parseInt(command[2])]);
    } else if (command[0] === "recommend") {
      if (command[1] === "-1") {
        while (true) {
          let min = minHeap.pop();
          if (dict[min[0].toString()] !== min[1]) {
            answer.push(min[0]);
            break;
          }
        }
      } else if (command[1] === "1") {
        while (true) {
          let max = maxHeap.pop();
          if (dict[max[0].toString()] !== max[1]) {
            answer.push(max[0]);
            break;
          }
        }
      }
    } else if (command[0] === "solved") {
      // ..? 삭제 어케해..?
      dict[command[1]] = parseInt(command[2]);
    }

    M--;
  }

  if (M === 0) rl.close();
  console.log(line, M, N, minHeap, maxHeap);
}).on("close", () => {
  console.log(answer.join("\n"));
  process.exit();
});

// dictionary - key, value를 pair로 저장
// 선언 및 초기화
// let dict = {}
// let dict = {banana: "바나나", hong: "홍"}
/*
추가
  dict['key'] = 'value';
제거
  delete dict['key'];
길이
  Object.keys(dict).length
모든 key값 구하기
  Object.keys(dict)
모든 value값 구하기
  Object.values(dict)

*/
