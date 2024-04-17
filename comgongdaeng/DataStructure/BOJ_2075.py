# N(1 ≤ N ≤ 1,500)
# N^2 로 풀면 시간 초과..
# 메모리 제한......?
import sys
from heapq import heapify, heappop, heappush
# 길이가 N 인 minheap
# 최솟값을 pop 해가면서 모든 수를 push했을 때
# heap[0] 값이 N번째로 큰 수이다.

n = int(sys.stdin.readline())
# line의 첫 줄로 minheap 초기화
h = list(map(int, sys.stdin.readline().split()))
heapify(h)
for i in range(0, n-1):
    line = list(map(int, sys.stdin.readline().split()))
    for num in line:
        if h[0] < num:
            heappop(h)
            heappush(h, num)
print(h[0])
