import sys
from collections import deque

n = int(sys.stdin.readline())

for i in range(n):
    ans = 0
    doc , target = map(int, sys.stdin.readline().split())
    q = deque(list(sys.stdin.readline().split()))
    while q:
        # 최솟값이 아닌 경우 맨 뒤로
        if q[0] < max(q):
            q.append(q.popleft())
        else:
            if target ==0: break
            q.popleft()
            ans += 1
        if target > 0 :
            target -=1
        # 맨 뒤로 이동한 경우
        else:
            target = len(q) -1
    print(ans+1)
        
