const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const num = input.map((v) => Number(v));
const result = [];

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  empty() {
    return this.heap.length == 0 ? true : false;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  // 0 1 2 3 4
  // 5,6의 부모 = 2
  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[currentIndex]) break;
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
    // 부모가 자신보다 작을 경우 swap
  }
  pop() {
    let max = this.heap[0];

    if (this.heap.length === 1) {
      this.heap.pop();
    } else {
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
    }
    return max;
  }
  bubbleDown() {
    let index = 0;
    while (true) {
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;

      // 현재 노드가 leaf노드 인지 검사
      if (leftIndex >= this.heap.length && rightIndex >= this.heap.length)
        break;

      // if(rightIndex>= this.heap.length){ // 오른쪽 자식은 없지만 왼쪽 자식은 있는 경우
      //     if(this.heap[index] < this.heap[leftIndex]){ // 왼쪽 노드가 현재보다 큰 경우 swap
      //         this.swap(index, leftIndex);
      //     }
      //     break;
      // }

      // if(leftIndex >= this.heap.length) break;
      // 이럴 경우 틀림.
      // 왜?? 마지막 index(rightIndex)부터 확인을 해야 하는데 left부터 체크를 진행했기 때문에.
      let maxIndex = leftIndex;

      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex] > this.heap[maxIndex]
      ) {
        maxIndex = rightIndex;
      }

      if (this.heap[index] > this.heap[maxIndex]) break;
      this.swap(index, maxIndex);
      index = maxIndex;
    }
  }
}

const max = new MaxHeap();
num.forEach((v) => {
  if (v === 0) {
    if (max.empty()) {
      result.push(0);
    } else {
      result.push(max.pop());
    }
  } else {
    max.insert(v);
  }
});
console.log(result.join("\n"));
