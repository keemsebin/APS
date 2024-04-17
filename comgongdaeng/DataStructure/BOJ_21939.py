from heapq import heappop, heappush
import sys
from collections import defaultdict

prob = int(sys.stdin.readline())
minh = []
maxh = []
# solved인 문제 저장을 위해 dict 사용
# (직접 힙에서 값을 수정하고 heapify를 사용하면 시간 초과 남)
solved = defaultdict(int)
for _ in range(prob):
    num, diff = map(int, sys.stdin.readline().split())
    heappush(minh, [diff, num])
    heappush(maxh, [-diff, -num])
n = int(sys.stdin.readline())
for _ in range(n):
    comm = list(sys.stdin.readline().split())
    if comm[0] == 'recommend':
        # 어려운 문제
        if comm[1] == '1':
            while solved[abs(maxh[0][1])] != 0:
                solved[abs(maxh[0][1])] -= 1
                heappop(maxh)
            print(-maxh[0][1])
        # 쉬운 문제
        else:
            while solved[minh[0][1]] != 0:
                solved[minh[0][1]] -= 1
                heappop(minh)
            print(minh[0][1])
    elif comm[0] == 'add':
        num = int(comm[1])
        diff = int(comm[2])
        heappush(minh, [diff, num])
        heappush(maxh, [-diff, -num])
    # solved 인 경우
    else:
        solved[int(comm[1])] += 1
