from collections import deque
import sys
input = sys.stdin.readline
dx_K = [0, 1, 0, -1]
dy_K = [1, 0, -1, 0]
dx_H = [-2, -1, 1, 2, 2, 1, -1, -2]
dy_H = [1, 2, 2, 1, -1, -2, -2, -1]

K = int(input())
H, W = map(int, input().split())
arr = []
for _ in range(W):
    arr.append(list(map(int, input().split())))

q = deque()
q.append((0, 0, K))
count = [[[0] * (K + 1) for _ in range(H)] for _ in range(W)]
while q:
    x, y, K = q.popleft()
    if x == W-1 and y == H-1:
        print(count[x][y][K])
        exit(0)
    if K > 0:
        for k in range(8):
            nx = x + dx_H[k]
            ny = y + dy_H[k]
            if 0 <= nx < W and 0 <= ny < H:
                if arr[nx][ny] != 1 and count[nx][ny][K-1] == 0:
                    count[nx][ny][K-1] = count[x][y][K] + 1
                    q.append((nx, ny, K-1))                    
    for k in range(4):
        nx = x + dx_K[k]
        ny = y + dy_K[k]
        if 0 <= nx < W and 0 <= ny < H:
            if arr[nx][ny] != 1 and count[nx][ny][K] == 0:
                count[nx][ny][K] = count[x][y][K] + 1
                q.append((nx, ny, K))
print(-1)