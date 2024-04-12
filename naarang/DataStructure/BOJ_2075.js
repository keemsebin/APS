// 아니 이거 왜 메모리 초과나냐--
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  // 새로 들어온 노드를 정렬
  heapifyUp() {
    // 제일 끝에 추가한 후 정렬 시작
    let index = this.heap.length - 1;
    // 부모 노드(index = 0)가 될 때까지 정렬
    while (index > 0) {
      // 새 노드의 부모 노드와 비교를 반복
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) {
        // 이미 부모 노드가 새 노드보다 값이 작거나 같으면 정렬 종료
        break;
      }
      // 그렇지 않다면 swap
      // [this.heap[parentIndex], this.heap[index]] = [
      //   this.heap[index],
      //   this.heap[parentIndex],
      // ];
      this.swap(parentIndex, index);
      // swap 후에 index를 parentIdx로 업데이트
      index = parentIndex;
    }
  }

  // 루트 노드를 제거한 후 최소 힙의 조건에 맞도록 힙을 재정비
  heapifyDown() {
    // 루트 노드를 제거했으므로 탐색을 0번 인덱스부터 시작
    let index = 0;
    const length = this.heap.length;

    while (true) {
      // 왼쪽 자식 노드와 오른쪽 자식 노드의 인덱스를 찾고 부모 노드와 두 자식 노드 간의 비교를 수행
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break; // 이미 부모 노드가 제일 작아서 더 이상 정렬 필요 X

      // swap
      // [this.heap[index], this.heap[smallest]] = [
      //   this.heap[smallest],
      //   this.heap[index],
      // ];
      this.swap(index, smallest);

      // index 업데이트 -> 더 이상 자신보다 큰 값이 부모 노드에 있지 않을 때까지 반복
      index = smallest;
    }
  }

  push(value) {
    // 배열의 맨 끝에 값 추가
    this.heap.push(value);
    this.heapifyUp(); // 정렬
  }

  pop() {
    // 이미 힙이 비어있음
    if (this.isEmpty()) return null;

    const root = this.heap[0]; // 루트 노드 저장
    const lastNode = this.heap.pop();

    // 힙이 비어있지 않다면 정렬
    if (!this.isEmpty()) {
      // 끝에 있는 노드를 최상위 부모로 만든 후에 정렬
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

let N = -1;
let n;
rl.on("line", (line) => {
  // 입력 받은 값을 처리하는 코드 //
  if (N === -1) {
    N = parseInt(line);
    n = N;
    return;
  }
  line.split(" ").forEach((value) => {
    minHeap.push(parseInt(value));
    if (minHeap.getSize() > n) minHeap.pop();
  });
  N--;

  if (N === 0) rl.close();
}).on("close", () => {
  // 입력이 끝나고 실행하는 코드 //
  console.log(minHeap.pop());
  process.exit();
});

// 이것두 최소 힙 문제... + readline(메모리 초과 해결)...
//
// 힙 : https://haruisshort.tistory.com/293
// min heap을 통해 가장 작은 값을 O(1)의 시간으로 가장 빠르게 찾을 수 있다는 장점

// 부모 노드 인덱스 = Math.floor((자식 노드 인덱스 - 1) / 2)
// 왼쪽 자식 노드 인덱스 = 부모 노드 인덱스 * 2 + 1
// 오른쪽 자식 노드 인덱스 = 부모 노드 인덱스 * 2 + 2

// 엥? 왜 구조분해 할당하면 메모리 초과나지??
/*
// 방법1) 메모리 초과 ?!!!
[this.list[idx1], this.list[idx2]] = [this.list[idx2], this.list[idx1]];

// 방법2)
let tmp = this.list[idx1];
this.list[idx1] = this.list[idx2];
this.list[idx2] = tmp;
*/
