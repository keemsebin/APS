from heapq import heappop, heappush
import sys

n = int(sys.stdin.readline())
h = []
for _ in range(n):
    i = int(sys.stdin.readline())
    if i == 0:
        if len(h)!=0:
            print(-1 * heappop(h))
        else:
            print(0)
    else:
        heappush(h, -i)
    # heapq 모듈은 최소힙을 지원하고, 배열에 추가되는 수는 모두 자연수이므로
    # -1을 곱해 최대힙처럼 구현
