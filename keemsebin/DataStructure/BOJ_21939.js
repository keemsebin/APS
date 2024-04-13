const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const len = input.shift();

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  solved(value) {
    const index = this.heap.findIndex((v) => v[0] == Number(value));
    if (index > -1) {
      this.heap.splice(index, 1);
      this.bubbleDown();
    }
  }
  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      if (parentIndex < 0) break;
      if (
        this.heap[currentIndex][1] < this.heap[parentIndex][1] ||
        (this.heap[currentIndex][1] === this.heap[parentIndex][1] &&
          this.heap[currentIndex][0] < this.heap[parentIndex][0])
      )
        break;
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

      let max = leftIndex;
      if (
        rightIndex < this.heap.length &&
        (this.heap[max][1] < this.heap[rightIndex][1] ||
          (this.heap[max][1] == this.heap[rightIndex][1] &&
            this.heap[max][0] < this.heap[rightIndex][0]))
      ) {
        max = rightIndex;
      }

      if (
        this.heap[index][1] > this.heap[max][1] ||
        (this.heap[index][1] === this.heap[max][1] &&
          this.heap[index][0] > this.heap[max][0])
      )
        break;

      this.swap(index, max);
      index = max;
    }
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }
  empty() {
    return this.heap.length === 0;
  }
  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  solved(value) {
    const index = this.heap.findIndex((v) => v[0] == Number(value));
    if (index > -1) {
      this.heap.splice(index, 1);
      this.bubbleDown();
    }
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      if (
        this.heap[currentIndex][1] > this.heap[parentIndex][1] ||
        (this.heap[currentIndex][1] === this.heap[parentIndex][1] &&
          this.heap[currentIndex][0] > this.heap[parentIndex][0])
      )
        break;
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

      let min = leftIndex;
      if (
        rightIndex < this.heap.length &&
        (this.heap[min][1] > this.heap[rightIndex][1] ||
          (this.heap[min][1] == this.heap[rightIndex][1] &&
            this.heap[min][0] > this.heap[rightIndex][0]))
      ) {
        min = rightIndex;
      }

      if (
        this.heap[index][1] < this.heap[min][1] ||
        (this.heap[index][1] === this.heap[min][1] &&
          this.heap[index][0] < this.heap[min][0])
      )
        break;

      this.swap(index, min);
      index = min;
    }
  }
}

const max = new MaxHeap();
const min = new MinHeap();
const solved = new Map();
const result = [];

for (let i = 0; i < len; i++) {
  let [question, difficulty] = input.shift().split(" ");
  min.push([Number(question), Number(difficulty)]);
  max.push([Number(question), Number(difficulty)]);
}

const orderNum = input.shift();

for (let j = 0; j < orderNum; j++) {
  let [order, num, difficulty] = input[j].split(" ");
  if (order == "add") {
    max.push([Number(num), Number(difficulty)]);
    min.push([Number(num), Number(difficulty)]);
  } else if (order == "recommend") {
    while (solved.get(max.heap[0][0])) {
      max.pop();
    }
    while (solved.get(min.heap[0][0])) {
      min.pop();
    }
    num == 1 ? result.push(max.heap[0][0]) : result.push(min.heap[0][0]);
  } else if (order == "solved") {
    solved.set(num, true);
    max.solved(num);
    min.solved(num);
  }
}
console.log(result.join("\n"));
