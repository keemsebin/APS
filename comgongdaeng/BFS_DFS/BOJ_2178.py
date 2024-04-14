# 최소 거리 -> BFS : 큐 사용
import sys
from collections import deque
n, m = map(int, sys.stdin.readline().split())
arr = []
for _ in range(n):
    arr.append(list(map(int, sys.stdin.readline().rstrip())))

q = deque()
q.append((0,0))
dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]
while q:
    x, y = q.popleft()    
    for i in range(4):
        next_x, next_y = x + dx[i] , y + dy[i]
        if next_x>=0 and next_x < n and next_y >=0 and next_y < m:
            # 벽이 아니면
            if arr[next_x][next_y] == 1:
                q.append((next_x, next_y))
                arr[next_x][next_y] = arr[x][y] + 1
print(arr[n-1][m-1])